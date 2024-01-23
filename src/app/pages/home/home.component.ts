import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navbarAssets } from 'src/app/headers/navbar_contents/navbar';
import { message } from 'src/app/messages/login/loginMsg';
import { HttpApiService } from 'src/app/services/http/httpApi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  userMonthlyData:any
  navbar = navbarAssets
  access : any
  titleAccess:string=''

  constructor(private httpService:HttpApiService,private router:Router){}

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

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['login'])
    Swal.fire(message?.ThankYou,message?.logoutSuccess,'success')
  }

}
