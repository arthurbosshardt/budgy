import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgeRecapComponent } from './budge-recap.component';

describe('BudgeRecapComponent', () => {
  let component: BudgeRecapComponent;
  let fixture: ComponentFixture<BudgeRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgeRecapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgeRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
