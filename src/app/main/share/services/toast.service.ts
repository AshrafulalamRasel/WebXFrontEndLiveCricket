import {Injectable} from '@angular/core';
import {RootToastService} from './root-toast.service';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public _rootToastService: RootToastService) {}


  success(message: string) {
    this._rootToastService.show(message, {
      classname: 'bg-success text-light',
      delay: 2000,
      autohide: true
    });
  }

  error(message: string) {
    this._rootToastService.show(message, {
      classname: 'bg-danger text-light',
      delay: 2000,
      autohide: true
    });
  }

  info(message: string) {
    this._rootToastService.show(message, {
      classname: 'bg-info text-light',
      delay: 3000,
      autohide: true
    });
  }
}
