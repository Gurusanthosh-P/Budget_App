import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cashTypes, formData, months } from 'src/app/headers/addForm Contents/addForm';
import { messages } from 'src/app/messages/addform/addform';
import { message } from 'src/app/messages/login/loginMsg';
import { HttpApiService } from 'src/app/services/http/httpApi.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{

  labelData = formData
  Type:string[]=[]
  Month:string[]=[]
  selectedPeriod:string=''
  selectedMonth:any=''
  name:string=''
  amount:any


  PostData1 = {
    incomeName :'',
    incomeAmount:0,
    incomeMonth:'',
  }

  PostData2 = {
    expenseName :'',
    expenseAmount:0,
    expenseMonth:'',
  }

  
  constructor(private httpService:HttpApiService,private router:Router,private loaderService:LoaderService){}
  
  ngOnInit(): void {
    this.assignDropDown()
    
  }
  
  assignDropDown(){
    this.Type = cashTypes 
    this.Month = months     
  }

  getData(){
    if(this.name && this.amount && this.selectedMonth && this.selectedPeriod)
    {
      if(this.selectedPeriod == 'Income')
      {
        this.PostData1.incomeName = this.name,
        this.PostData1.incomeAmount = this.amount
        this.PostData1.incomeMonth = this.selectedMonth.month
        this.postValue(this.PostData1,this.selectedPeriod)
      }
      else{
        this.PostData2.expenseName = this.name,
        this.PostData2.expenseAmount = this.amount,
        this.PostData2.expenseMonth = this.selectedMonth.month
        this.postValue(this.PostData2,this.selectedPeriod)
      }
    }
    else{
      Swal.fire(messages.fail,message.Error,'error')
    }

  }


  postValue(userData:any,selectedPeriod:any){
    this.loaderService.loadingShow()
    this.httpService.postUserData(userData,selectedPeriod).subscribe({
      next:(response:any)=>{
        this.loaderService.loadingHide()
        Swal.fire(messages?.success,messages?.thankyou,'success')
        if(Swal)
        {
          setTimeout(()=>{
            window.location.reload()
          },2000)
        }

      },
      error:(error:any)=>{
        Swal.fire(error?.name,messages.try,'error')
      }
    })    
  }




}
