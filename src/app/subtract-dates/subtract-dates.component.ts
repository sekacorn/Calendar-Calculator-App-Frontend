import { Component } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-subtract-dates',
  templateUrl: './subtract-dates.component.html'
})
export class SubtractDatesComponent {
  date1: string = '';
  date2: string = '';
  result: string | null = null;

  constructor(private calendarService: CalendarService) { }

  subtractDates() {
    this.calendarService.subtractDates(this.date1, this.date2).subscribe((data: string) => {
      this.result = data;
    });
  }
}
