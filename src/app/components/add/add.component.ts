import { Component, OnInit } from '@angular/core';
import { cashTypes, formData, months } from 'src/app/headers/addForm Contents/addForm';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{

  labelData = formData
  Type:string[]=[]
  Month:string[]=[]
  selectedType:string=''
  selectedMonth:string=''
  name:string=''
  amount:number | undefined

  
  constructor(){}
  
  ngOnInit(): void {
    this.assignDropDown()
  }
  
  assignDropDown(){
    this.Type = cashTypes 
    this.Month = months     
  }

  postValue(){
    console.log(this.selectedType,this.name,this.amount,this.selectedMonth);
    
  }



}
