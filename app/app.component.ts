import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  items=["Angular 4", "React", "Underscore"];
  newItem="";

  //this function is used to push item in the list.
  pushItem=function()
  {   
       //if newItem is empty, then push it to items.
       if(this.newItem!="")
       {
          this.items.push(this.newItem);
          this.newItem="";
       }

  }

  //this function is used to delete item at a particular index in the list.
  deleteItem=function(index)
  {
     /*splice() deletes data at specified index and 1 denotes only single
       value is deleted. If it would be 2 then, 2 values would be deleted
       starting from given value of index.
     */
     this.items.splice(index,1);
      
  }



}
