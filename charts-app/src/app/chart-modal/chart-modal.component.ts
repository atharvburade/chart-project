import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ChartState } from '../state/chart.reducer';
import { Chart } from '../models/chart.model';
import * as ChartActions from '../state/chart.actions';

@Component({
  selector: 'app-chart-modal',
  templateUrl: './chart-modal.component.html'
})
export class ChartModalComponent implements OnInit {
  @Input() chart?: Chart;
  chartForm: FormGroup | undefined;

  constructor(
    public modal: NgbActiveModal,
    private fb: FormBuilder,
    private store: Store<{ charts: ChartState }>
  ) {}

  ngOnInit(): void {
    this.chartForm = this.fb.group({
      id: null,
      name: [this.chart ? this.chart.name : '', Validators.required],
      type: [this.chart ? this.chart.type : 'line', Validators.required],
      color: [this.chart ? this.chart.color : '#000000', Validators.required]
    });
  }

  saveChart() {
    const chart: Chart = {
      ...this.chart,
      ...this.chartForm?.value
    };
    if (this.chart) {
      this.store.dispatch(ChartActions.updateChart({ chart }));
    } else {
      this.store.dispatch(ChartActions.addChart({ chart }));
    }
    this.modal.close();
  }
}
