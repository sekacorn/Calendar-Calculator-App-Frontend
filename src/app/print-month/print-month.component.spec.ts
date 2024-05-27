import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMonthComponent } from './print-month.component';

describe('PrintMonthComponent', () => {
  let component: PrintMonthComponent;
  let fixture: ComponentFixture<PrintMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintMonthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
