import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarriorHeroesComponent } from './warrior-heroes.component';

describe('WarriorHeroesComponent', () => {
  let component: WarriorHeroesComponent;
  let fixture: ComponentFixture<WarriorHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarriorHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarriorHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
