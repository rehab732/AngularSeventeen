import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  standalone:true,
  selector:'.app-rehab',
  template:`<h3>Rehab Temp</h3>`,
  templateUrl:'./rehab.component.html',
  styleUrl:'./rehab.component.scss',
  imports:[FormsModule]
})
export class RehabComponent{
  allButton:boolean=false;
  constructor(){
    setTimeout(() => {
       this.allButton=true;
    }, 2000);
  }
 name:string="rehab zaki";
 age:number=24 

 getName(){
  return this.name;
 }

 onUpdateStudentName(event:Event){
  this.name=(<HTMLInputElement>event.target).value;
console.log((<HTMLInputElement>event.target).value)
 }
}