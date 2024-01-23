import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { message } from 'src/app/messages/login/loginMsg';
import { HttpApiService } from 'src/app/services/http/httpApi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  loginData:any
  username:string=''
  password:string=''

  constructor(private router:Router,private apiSevice:HttpApiService){}

  ngOnInit(): void {
    this.validateUserData()
  }

  validateUserData(){
    localStorage.removeItem('token')
    localStorage.removeItem('userid')
    this.apiSevice?.getUserLoginData()?.subscribe({
      next:(response:any)=>{
        this.loginData =response
      },
      error:(error:any)=>{
        Swal.fire(error?.name,error?.name,'error')
        this.router.navigate([''])
      }
    })
  }

  login(){
    const userData = this.loginData?.find((u:any)=>u?.name === this.username && u?.password === this.password)
    const token = localStorage?.getItem('token')    
      if(token || userData)
      {
          localStorage?.setItem('token',Math?.random().toString())
          localStorage?.setItem('userid',userData?.id)
          Swal.fire(message?.loginSuccess,message?.welcome,'success')
          this.router?.navigate(['home'])
      }
      else{
        Swal.fire(message?.LoginFailed,message?.Error,'error')
      }  
    }
}
