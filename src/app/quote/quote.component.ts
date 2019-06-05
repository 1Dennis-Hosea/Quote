import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
 selector: 'app-quote',
 templateUrl: './quote.component.html',
 styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 quote = [
   // new quote( 0 , ' Husein ', ' three idiots ', ' There is nothing fair in love and war ', new Date(2019, 5 , 1), 0, 0);
 ];
 completeQuote(isComplete,index){
   if(isComplete){
     let toDelete = confirm(`DO YOU KNOW WHAT YOUR DOING? ${this.quote[index].name}`)
     if (toDelete){
       this.quote.splice(index,1);
     }
   }
 }
 formReceive(quote) {
   this.quote.push(quote);

 }
 addVote(index) {
   this.quote[index].upvote ++;
 }

 minusVote(index) {
   this.quote[index].downvote ++;
   // console.log(this.quote.downvote)
 };
 constructor() { }

 ngOnInit() {
 }

}
