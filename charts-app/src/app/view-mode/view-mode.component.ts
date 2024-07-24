import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Highcharts from 'highcharts';
import { ChartState } from '../state/chart.reducer';
import { Chart } from '../models/chart.model';
import * as ChartActions from '../state/chart.actions';

@Component({
  selector: 'app-view-mode',
  templateUrl: './view-mode.component.html'
})

export class ViewModeComponent implements OnInit {
  charts$: Observable<Chart[]>;
  Highcharts: typeof Highcharts = Highcharts;
  dateRange = { start: new Date(), end: new Date() };

  constructor(private store: Store<{ charts: ChartState }>) {
    this.charts$ = this.store.select(state => state.charts.charts);
  }

  ngOnInit(): void {
    this.store.dispatch(ChartActions?.loadCharts());
  }

  filterCharts() {
    // Implement date range filtering logic if needed
  }
}
