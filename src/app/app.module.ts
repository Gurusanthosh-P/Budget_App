import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './sharedModules/shared.module';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
