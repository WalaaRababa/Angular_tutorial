import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from '../hero/hero.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [FormsModule,CommonModule,HeroComponent,ListComponent],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {

}
