import { Component } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-print-month',
  templateUrl: './print-month.component.html'
})
export class PrintMonthComponent {
  date: string = '';
  result: string | null = null;

  constructor(private calendarService: CalendarService) { }

  printMonth() {
    this.calendarService.printMonth(this.date).subscribe((data: string) => {
      this.result = data;
    });
  }
}
