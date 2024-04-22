import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{
  heros:any;
 constructor(public _shared:SharedService)
 {}
 ngOnInit(): void {
  // This method will be called once after the component is initialized
  // Perform initialization logic here
  this._shared.getAllHero().subscribe(
    res=>{
      console.log(res);
      this.heros=res;
      
    },
    err=>
      {
        console.log(err);
        
      }
  )
}
deleteHero(id:any)
{
this._shared.deleteHero(id).subscribe(
  res=>
    {
      console.log(res);
      // refresh 
    this.ngOnInit()
      
    },err=>
      {
        console.log(err);
        
      }
)
}
 
}
