import { Component } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-add-dates',
  templateUrl: './add-dates.component.html'
})
export class AddDatesComponent {
  date1: string = '';
  date2: string = '';
  result: string | null = null;

  constructor(private calendarService: CalendarService) { }

  addDates() {
    this.calendarService.addDates(this.date1, this.date2).subscribe((data: string) => {
      this.result = data;
    });
  }
}
