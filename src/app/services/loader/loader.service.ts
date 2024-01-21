import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loading:boolean=false
  constructor(private messageService:MessageService) { }

  loadingShow(){
    this.loading = true
    this.messageService.add({severity:'info',summary:'Loading',detail:'Please wait....'})
  }
  loadingHide(): void {
    this.loading = false;
    this.messageService.clear();
  }

  isLoading(): boolean {
    return this.loading;
  }
}
