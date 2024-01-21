import { Component, OnInit } from '@angular/core';
import { expenseDataKeys, expensesHeaderData } from 'src/app/headers/expenses_data/expenses';
import { yearWiseDropDown } from 'src/app/headers/income_data\'s/incomeData';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit{

    piechartCheck:boolean = false
    yearWiseDropDownData = yearWiseDropDown
    expensesHeaderData = expensesHeaderData
    datakeys = expenseDataKeys
    expense:any
    data: any;
    options: any;
    selectedPeriod:any

    constructor(){}

    ngOnInit() {
        this.pichartData()
        this.defalutDataForTable()
    }

    pichartData(){
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = getComputedStyle(document.documentElement).getPropertyValue('--pink-100').trim();

        this.data = {
            labels: ['Food', 'Rent', 'Vehicle'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [documentStyle.getPropertyValue('--pink-300'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-300')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--pink-300'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-300')]
                }
            ]
        };


        this.options = {
            cutout: '60%',
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        };
    }

    defalutDataForTable(){
      this.expense = [
        {
          month:'January',
          amount:1345
        },
        {
          month:'March',
          amount:2345
        }
      ]
    }


    onDropdownChange(selectedValue: any){
        const check = selectedValue.period                
        if(check == 'Monthly')
        {            
            this.piechartCheck = true
        }
        switch(selectedValue.period){
            case 'Monthly':        
              this.expense = [
                {
                  month:'January',
                  amount:1345
                },
                {
                  month:'March',
                  amount:2345
                }
              ]
              break;
              case 'Quarterly':
                this.piechartCheck = false
                this.expense = [
                  {
                    month:'March',
                    amount:12342,
                  }
                ]
                break;
              case 'Half-yearly':
                this.piechartCheck = false
                this.expense = [
                  {
                    month:'January',
                    amount:12342,
                  },
                  {
                    month:'March',
                    amount:12342,
                  },
                  {
                    month:'January',
                    amount:12342,
                  }
                ]
                break;
              case 'Annually':
                this.piechartCheck = false
                this.expense = [
                  {
                    month:'January',
                    amount:12342,
                  }
                ]
                break;
              default:
                break
      
          }
    }

}
