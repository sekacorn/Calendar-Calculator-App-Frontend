import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDatesComponent } from './add-dates/add-dates.component';
import { SubtractDatesComponent } from './subtract-dates/subtract-dates.component';
import { DayOfWeekComponent } from './day-of-week/day-of-week.component';
import { PrintMonthComponent } from './print-month/print-month.component';
import { CountBetweenComponent } from './count-between/count-between.component';

const routes: Routes = [
  { path: 'add-dates', component: AddDatesComponent },
  { path: 'subtract-dates', component: SubtractDatesComponent },
  { path: 'day-of-week', component: DayOfWeekComponent },
  { path: 'print-month', component: PrintMonthComponent },
  { path: 'count-between', component: CountBetweenComponent },
  { path: '', redirectTo: '/add-dates', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
