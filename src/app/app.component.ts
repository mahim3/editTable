import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 tableData: any =[];
 showEditTable:boolean = false;
 editRowID: any = '';

 constructor(){
   this.tableData= [
     {id:1,name: 'Mahi', mobile:'456465' , email:'mahi@gmail.com'},
     {id:2,name: 'Alice', mobile:'458765' , email:'Alice@gmail.com'},
     {id:3,name: 'Bob', mobile:'456448' , email:'Bob@gmail.com'}
   ]
 }

 Edit(val){
   this.editRowID= val;
 }
}
