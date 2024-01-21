import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule} from '@angular/forms'

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { CardModule} from 'primeng/card'



import { HomeComponent } from '../pages/home/home.component';
import { IncomeComponent } from '../components/income/income.component';
import { ExpensesComponent } from '../components/expenses/expenses.component';
import { AddComponent } from '../components/add/add.component';
import { LoginComponent } from '../pages/login/login.component';
import { LoginPageComponent } from '../components/login-page/login-page.component';




@NgModule({
  declarations: [
    HomeComponent,
    IncomeComponent,
    ExpensesComponent,
    AddComponent,
    LoginComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    ProgressSpinnerModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    TableModule,
    ChartModule,
    CardModule
  ]
})
export class SharedModule { }
