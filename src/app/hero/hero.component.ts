import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  hero={
    name:'',
    urlImg:'',
    power:0
  
  }
  
  ajout()
  {
    this._shared.heros.push(this.hero)
    this.hero={
      name:'',
      urlImg:'',
      power:0
    
    }
  
  }
  constructor(private _shared:SharedService)
  {

  }
}
