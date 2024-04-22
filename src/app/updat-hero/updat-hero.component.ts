import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-updat-hero',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './updat-hero.component.html',
  styleUrl: './updat-hero.component.scss',
})
export class UpdatHeroComponent implements OnInit {
  hero: any;
  id: any;
  constructor(private act: ActivatedRoute, private _shared: SharedService,  private router:Router) {}
  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    console.log(this.id);
    this._shared.readHeroById(this.id).subscribe(
      (res) => {
        console.log(res);
        this.hero = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  update() {
    this._shared.updateHeroById(this.hero, this.id).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/list'])
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
