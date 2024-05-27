import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountBetweenComponent } from './count-between.component';

describe('CountBetweenComponent', () => {
  let component: CountBetweenComponent;
  let fixture: ComponentFixture<CountBetweenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountBetweenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountBetweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
