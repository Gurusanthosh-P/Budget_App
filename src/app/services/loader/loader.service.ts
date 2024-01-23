import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private load:NgxSpinnerService) { }

  loadingShow(){
    this.load.show()
  }
  loadingHide(): void {
    this.load.hide();
  }

}
