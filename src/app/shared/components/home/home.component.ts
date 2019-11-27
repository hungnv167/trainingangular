import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/movie/movie.service';
import { ToastService } from '../../services/toast.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieForm: FormGroup;
  // model: any;
  page = 1;
  pageSize = 2;
  title = 'Top 10 Movies';
  movies: Movie[];

  // Inject the MovieService, ToastService
  constructor(private movieService: MovieService
            , private toastService: ToastService
            , private fb: FormBuilder) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      director: ['',Validators.required],
      cast: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  addNewMovie() {
    this.movieService.addNewMovie(this.movieForm.value);
    this.showCustomToast('Thêm 1 phim mới');
  }
  showStandard() {
    this.toastService.show('I am a standard toast', {
      delay: 2000,
      autohide: true
    });
  }

  showSuccess() {
    this.toastService.show('I am a success toast', {
      classname: 'bg-success text-light',
      delay: 2000,
      autohide: true,
      headertext: 'Toast Header'
    });
  }
  showError() {
    this.toastService.show('I am a success toast', {
      classname: 'bg-danger text-light',
      delay: 2000,
      autohide: true,
      headertext: 'Error!!!'
    });
  }

  showCustomToast(customTpl) {
    this.toastService.show(customTpl, {
      classname: 'bg-info text-light',
      delay: 3000,
      autohide: true
    });
  }
}
