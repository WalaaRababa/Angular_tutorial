import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatHeroComponent } from './updat-hero.component';

describe('UpdatHeroComponent', () => {
  let component: UpdatHeroComponent;
  let fixture: ComponentFixture<UpdatHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
