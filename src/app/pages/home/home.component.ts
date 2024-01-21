import { Component, OnInit } from '@angular/core';
import { navbarAssets } from 'src/app/headers/navbar_contents/navbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  navbar = navbarAssets
  access : any
  titleAccess:string=''

  ngOnInit(): void {
    this.giveAccessForTitle()
  }

  giveAccessForTitle(){
    this.titleAccess = ''
  }

  show(getAccess:any){  
    switch(getAccess){
      case 'Add':
        this.access = 'form'
        this.titleAccess = 'denied'
        break
      case 'Income':
        this.access = 'income'
        this.titleAccess = 'denied'
        break
      case 'Expenses':
        this.access = 'expenses'
        this.titleAccess = 'denied'
        break
      default:
        break
    }
  }

}
