import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { urls } from 'src/app/urls/url';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  customHeaders:any = new HttpHeaders().set('ngrok-skip-browser-warning','true');
  userId : number = 0
  apiUrl : any
  addType : any

  constructor(private http:HttpClient) { }


  getUserLoginData():Observable<any> {
      return this.http.get(urls.userLoginUrl,{headers:this.customHeaders});
  }

  getIncome(usrId:any,value:any):Observable<any>{    
    switch(value.period){
      case 'Monthly':
        console.log('Monthly');
        this.apiUrl = urls.monthlyIncome
        break;
      case 'Quarterly':
        this.apiUrl = urls.quarterlyIncome
        break
      case 'Half-yearly':
        this.apiUrl = urls.halfyearlyIncome
        break
      case 'Annually':
        this.apiUrl = urls.yearlyIncome
        break
      default:
        this.apiUrl = urls.yearlyIncome
        break
    }

    return this.http.get(`${this.apiUrl}?userId=${usrId}`,{headers:this.customHeaders})
  }

  getExpenses(usrId:any,value:any):Observable<any>{
    switch(value.period){
      case 'Monthly':
        console.log('Monthly');
        this.apiUrl = urls.monthlyExpense
        break;
      case 'Quarterly':
        this.apiUrl = urls.quarterlyExpense
        break
      case 'Half-yearly':
        this.apiUrl = urls.halfyearlyExpense
        break
      case 'Annually':
        this.apiUrl = urls.yearlyExpense
        break
      default:
        this.apiUrl = urls.yearlyExpense
        break
    }

    return this.http.get(`${this.apiUrl}?userId=${usrId}`,{headers:this.customHeaders})
  }

  postUserData(value:any,dataType:any){
    console.log(value);
    const userId = localStorage.getItem('userid');

    
    if(dataType.type == 'Income')
    {
      console.log('income');
      
      this.apiUrl = urls.addIncome
    }
    else{
      console.log('expense');
      
      this.apiUrl  = urls.addExpense
    }

    return this.http.post(`${this.apiUrl}?userId=${userId}`,value,{headers:this.customHeaders})

  }

  

}
