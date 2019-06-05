import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuoteComponent } from './quote/quote.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
 declarations: [
   AppComponent,
   FormComponent,
   QuoteComponent,
   DetailsComponent
 ],

 imports: [
   BrowserModule,
   FormsModule
 ],

 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
