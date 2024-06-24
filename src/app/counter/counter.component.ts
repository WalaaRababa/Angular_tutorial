import { increment, decrement, reset } from './../states/counter/counter.actions';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { selectCounter } from '../states/counter/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
counter$:Observable<number>
constructor(private store:Store<AppState>){this.counter$=this.store.select(selectCounter)}
increment(){
  this.store.dispatch(increment())
}
decrement(){this.store.dispatch(decrement())}
reset(){this.store.dispatch(reset())}
}
