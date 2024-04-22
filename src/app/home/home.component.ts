import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  text='';
  user={
    name:"ali",
    age:25,
    image:"https://image.petmd.com/files/styles/978x550/public/2021-11/relaxing-cat.jpg"
  }
myName='';
color='green'

// Array of Student objects
 students=[
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 21 },
  { name: 'Charlie', age: 22 },
  { name: 'David', age: 23 },
  { name: 'Emma', age: 24 },
  { name: 'Frank', age: 25 },
  { name: 'Grace', age: 26 },
  { name: 'Henry', age: 27 },
  { name: 'Ivy', age: 28 },
  { name: 'Jack', age: 29 }
];





OnePiece='https://e7.pngegg.com/pngimages/937/420/png-clipart-angry-birds-space-drawing-others-miscellaneous-cartoon.png';
isDisplay=false;
displyPic(){
  this.isDisplay=!this.isDisplay;
  
}
  constructor()
  {

  }
  changeName()
  {
    this.user.name=this.myName;
  }
  ngOnInit():void
  {

  }
}
