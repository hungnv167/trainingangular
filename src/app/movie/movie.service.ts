import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = [
    // tslint:disable-next-line:max-line-length
    { title: 'Zootopia', director: 'Byron Howard, Rich Moore', cast: 'Idris Elba, Ginnifer Goodwin, Jason Bateman', releaseDate: 'March 4, 2016' },
    // tslint:disable-next-line:max-line-length
    { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder', cast: 'Ben Affleck, Henry Cavill, Amy Adams', releaseDate: 'March 25, 2016' },
    // tslint:disable-next-line:max-line-length
    { title: 'Captain America: Civil War', director: 'Anthony Russo, Joe Russo', cast: 'Scarlett Johansson, Elizabeth Olsen, Chris Evans', releaseDate: 'May 6, 2016' },
    // tslint:disable-next-line:max-line-length
    { title: 'X-Men: Apocalypse', director: 'Bryan Singer', cast: 'Jennifer Lawrence, Olivia Munn, Oscar Isaac', releaseDate: 'May 27, 2016' },
    { title: 'Bụi đời chợ lớn', director: 'Charlie Nguyễn', cast: 'Thái Hòa , Johnny Trí Nguyễn', releaseDate: 'May 27, 2013' },
  ];
  constructor() { }

  getMovies() {
    return this.movies;
  }
  addNewMovie(movie) {
    let m = {
      title: movie.title,
      director: movie.director,
      cast: movie.cast,
      releaseDate: `${movie.date.month} ${movie.date.day}, ${movie.date.year}`,
    }
    this.getMovies().push(m);
  }
}
