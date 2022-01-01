import {Component, OnInit, TemplateRef} from '@angular/core';
import {RootToastService} from '../../services/root-toast.service';

@Component({
  selector: 'app-toast-component',
  templateUrl: './toast-component.component.html',
  styleUrls: ['./toast-component.component.css']
})
export class ToastComponentComponent implements OnInit {

  constructor(public toastService: RootToastService) {}

  isTemplate(toast: any) { return toast.textOrTpl instanceof TemplateRef; }

  ngOnInit(): void {
  }

}
