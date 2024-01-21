import { Component, OnInit } from '@angular/core';
import { datakeys, incomeHeaderData, yearWiseDropDown } from 'src/app/headers/income_data\'s/incomeData';

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
  selectedPeriod:any
  filteredIncome: any;
  
  constructor(){

  }
  
  ngOnInit(): void {
    this.demovalueAssign()
  }


  demovalueAssign(){
    this.income = [
      {
        name:'santhosh',
        income:12342,
        expenses:1234
      },
      {
        name:'abanthosh',
        income:12342,
        expenses:1234
      },
      {
        name:'santhosh',
        income:12342,
        expenses:1234
      },
      {
        name:'santhosh',
        income:12342,
        expenses:1234
      }
    ]
  }

  onDropdownChange(selectedValue: any) {    
    switch(selectedValue.period){
      case 'Monthly':        
        this.income = [
          {
            name:'santhosh',
            income:12342,
            expenses:1234
          },
          {
            name:'abanthosh',
            income:12342,
            expenses:1234
          }
        ]
        break;
        case 'Quarterly':
          this.income = [
            {
              name:'abanthosh',
              income:12342,
              expenses:1234
            }
          ]
          break;
        case 'Half-yearly':
          this.income = [
            {
              name:'santhosh',
              income:12342,
              expenses:1234
            },
            {
              name:'abanthosh',
              income:12342,
              expenses:1234
            },
            {
              name:'santhosh',
              income:12342,
              expenses:1234
            }
          ]
          break;
        case 'Annually':
          this.income = [
            {
              name:'santhosh',
              income:12342,
              expenses:1234
            }
          ]
          break;
        default:
          break

    }

  
  
  }
}
