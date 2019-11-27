import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {

  constructor(public toastService: ToastService) { }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
}
