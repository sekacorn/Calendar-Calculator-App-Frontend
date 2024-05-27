import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  addDates(date1: string, date2: string): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/add?date1=${date1}&date2=${date2}`);
  }

  subtractDates(date1: string, date2: string): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/subtract?date1=${date1}&date2=${date2}`);
  }

  getDayOfWeek(date: string): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/dayOfWeek?date=${date}`);
  }

  printMonth(date: string): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/printMonth?date=${date}`);
  }

  countBetween(startDate: string, endDate: string, unit: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/countBetween?startDate=${startDate}&endDate=${endDate}&unit=${unit}`);
  }
}
