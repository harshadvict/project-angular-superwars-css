import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesScoreComponent } from './heroes-score.component';

describe('HeroesScoreComponent', () => {
  let component: HeroesScoreComponent;
  let fixture: ComponentFixture<HeroesScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
