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
  constructor(private _shared: SharedService) {}
  hero = {
    name: '',
    // image: '',
    power: 0,
  };
image:any
  add() {
    //!---phase without server
    // this._shared.heros.push(this.hero)
    // this.hero={
    //   name:'',
    //   image:'',
    //   power:0

    // }
    //!---phase using server without upload file
    /*
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
    */
   let formData=new FormData()
   formData.append('name',this.hero.name)
   formData.append('power',this.hero.power.toString())
   formData.append('image',this.image)
   this._shared.createNewHero(formData).subscribe(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    }
  );
  }
   //!----phase upload data----
  selectImg(event:any)
    {
this.image=event.target.files[0]
console.log(this.image);

    }
}
