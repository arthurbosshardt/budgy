import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgeInfoComponent } from './budge-info.component';

describe('BudgeInfoComponent', () => {
  let component: BudgeInfoComponent;
  let fixture: ComponentFixture<BudgeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
