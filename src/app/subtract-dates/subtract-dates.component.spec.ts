import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractDatesComponent } from './subtract-dates.component';

describe('SubtractDatesComponent', () => {
  let component: SubtractDatesComponent;
  let fixture: ComponentFixture<SubtractDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtractDatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubtractDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
