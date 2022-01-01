// root-toast.service.ts
import { Injectable, TemplateRef  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootToastService {

  toasts: any[] = [];

  // Push new Toasts to array with content and options
  // tslint:disable-next-line:typedef
  show (textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  // Callback method to remove Toast DOM element from view
  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
