import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgeDetailsComponent } from './budge-details.component';

describe('BudgeDetailsComponent', () => {
  let component: BudgeDetailsComponent;
  let fixture: ComponentFixture<BudgeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
