import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  hero = {
    name: '',
    image: '',
    power: 0,
  };

  add() {
    // this._shared.heros.push(this.hero)
    // this.hero={
    //   name:'',
    //   image:'',
    //   power:0

    // }
    this._shared.createNewHero(this.hero).subscribe(
      (res) => {
        console.log(res);
        this.hero = {
          name: '',
          image: '',
          power: 0,
        };
      },
      (err) => {
        console.log(err);
      }
    );
  }
  constructor(private _shared: SharedService) {}
}
