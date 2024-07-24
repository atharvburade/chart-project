import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ChartState } from '../state/chart.reducer';
import { Chart } from '../models/chart.model';
import * as ChartActions from '../state/chart.actions';
import { ChartModalComponent } from '../chart-modal/chart-modal.component'; // Import the modal component

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
  charts$: Observable<Chart[]>;

  constructor(private store: Store<{ charts: ChartState }>, private modalService: NgbModal) {
    this.charts$ = this.store.select(state => state.charts.charts);
  }

  ngOnInit(): void {
    this.store.dispatch(ChartActions.loadCharts());
  }

  openChartModal(chart?: Chart) {
    const modalRef = this.modalService.open(ChartModalComponent);
    modalRef.componentInstance.chart = chart;
  }

  deleteChart(chart: Chart) {
   // this.store.dispatch(ChartActions.deleteChart({ chart }));
  }
}
