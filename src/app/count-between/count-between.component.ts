import { Component } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-count-between',
  templateUrl: './count-between.component.html'
})
export class CountBetweenComponent {
  startDate: string = '';
  endDate: string = '';
  unit: string = 'DAYS';
  result: number | null = null;

  constructor(private calendarService: CalendarService) { }

  countBetween() {
    this.calendarService.countBetween(this.startDate, this.endDate, this.unit).subscribe((data: number) => {
      this.result = data;
    });
  }
}
