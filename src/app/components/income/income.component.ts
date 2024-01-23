import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { datakeys, incomeHeaderData, yearWiseDropDown } from 'src/app/headers/income_data\'s/incomeData';
import { HttpApiService } from 'src/app/services/http/httpApi.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit{


  incomeHeaderData = incomeHeaderData
  datakeys = datakeys
  yearWiseDropDownData = yearWiseDropDown
  income:any
  selectedPeriod:any = 'Annualy'
  filteredIncome: any;
  
  constructor(private httpService:HttpApiService,private http:HttpClient,private loaderSerivice:LoaderService){

  }
  
  ngOnInit(): void {
    this.getUserIncome(this.selectedPeriod)
  }


  onDropdownChange(selectedValue: any) { 
    this.getUserIncome(selectedValue)     
  }

  getUserIncome(selectedValue:any){
    this.loaderSerivice?.loadingShow()
    const userId = localStorage?.getItem('userid')      
    this.httpService.getIncome(userId,selectedValue).subscribe({
      next:(response:any)=>{
        this.income = response
        this.loaderSerivice?.loadingHide()
      },
      error:(error:any)=>{
        this.loaderSerivice?.loadingHide()
        Swal.fire(error?.name,error?.name,'error')
      }
    })
  }
}
