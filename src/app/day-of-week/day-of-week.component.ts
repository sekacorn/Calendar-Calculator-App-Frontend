import { Component } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-day-of-week',
  templateUrl: './day-of-week.component.html'
})
export class DayOfWeekComponent {
  date: string = '';
  result: string | null = null;

  constructor(private calendarService: CalendarService) { }

  getDayOfWeek() {
    this.calendarService.getDayOfWeek(this.date).subscribe((data: string) => {
      this.result = data;
    });
  }
}
