import { Component, OnInit } from '@angular/core';
import { expenseDataKeys, expensesHeaderData } from 'src/app/headers/expenses_data/expenses';
import { yearWiseDropDown } from 'src/app/headers/income_data\'s/incomeData';
import { HttpApiService } from 'src/app/services/http/httpApi.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit{

    selectedPeriod:any = 'Annualy'
    piechartCheck:boolean = false
    yearWiseDropDownData = yearWiseDropDown
    expensesHeaderData = expensesHeaderData
    datakeys = expenseDataKeys
    expense:any 
    data: any;
    options: any;
    MonthLabels:string[]=[]

    constructor(private httpService:HttpApiService,private loaderService:LoaderService){}

    ngOnInit() {
      this.getUserExpenses(this.selectedPeriod)
    }


    onDropdownChange(selectedValue: any){
        this.getUserExpenses(selectedValue)
        const check = selectedValue.period                
        if(check)
        {            
            this.piechartCheck = true
        }
    }

    getUserExpenses(selectedValue:any){
      this.loaderService?.loadingShow()
      const userId = localStorage.getItem('userid')      
      this.httpService.getExpenses(userId,selectedValue).subscribe({
        next:(response:any)=>{
          this.loaderService?.loadingHide()
          this.expense = response
          this.pichartData(response)
        },
        error:(error:any)=>{
        this.loaderService?.loadingHide()
          Swal.fire(error?.name,error?.name,'error')
        }
      })
    }

    pichartData(response:any){
      
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = 'white';

      const months = response.map((item: any) => item.month);
      const totalExpenses = response.map((item: any) => item.totalExpense);

      const numDataPoints = response.length;

      const backgroundColors = Array.from({ length: numDataPoints }, (_, index) => {
        const colors = [
          '--pink-300', '--yellow-500', '--green-300', '--blue-400', '--purple-300',
          '--orange-400', '--teal-300', '--red-400', '--indigo-300', '--cyan-400',
          '--amber-300', '--lime-400'
        ];
      
        return documentStyle.getPropertyValue(colors[index % colors.length]).trim();
      });


      this.data = {
          labels: months,
          datasets: [
              {
                  data: totalExpenses,
                  backgroundColor: backgroundColors,
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--pink-300'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-300')]
              }
          ]
      };


      this.options = {
          cutout: '60%',
          plugins: {
              legend: {
                  labels: {
                      color: textColor,
                  }
              }
          }
      };
  }

}
