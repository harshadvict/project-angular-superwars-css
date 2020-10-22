import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarriorVillanComponent } from './warrior-villan.component';

describe('WarriorVillanComponent', () => {
  let component: WarriorVillanComponent;
  let fixture: ComponentFixture<WarriorVillanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarriorVillanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarriorVillanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
