import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Chart } from '../models/chart.model';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private charts: Chart[] = [
    { id: 1, name: 'Sales', type: 'line', color: '#FF5733', options: { title: { text: 'Sales Data' }, series: [{ data: this.generateDummyData() }] } },
    { id: 2, name: 'Revenue', type: 'area', color: '#33FF57', options: { title: { text: 'Revenue Data' }, series: [{ data: this.generateDummyData() }] } },
    { id: 3, name: 'Expenses', type: 'spline', color: '#3357FF', options: { title: { text: 'Expenses Data' }, series: [{ data: this.generateDummyData() }] } }
  ];

  constructor() {}

  getCharts(): Observable<Chart[]> {
    return of(this.charts);
  }

  addChart(chart: Chart): Observable<Chart> {
    let newChart = chart;
    newChart['id'] = Number(this.charts.length + 1);
    this.charts.push(newChart);
    return of(newChart);
  }

  updateChart(chart: Chart): Observable<Chart> {
    const index = this.charts.findIndex(c => c.id === chart.id);
    this.charts[index] = chart;
    return of(chart);
  }

  deleteChart(chart: Chart, id: number): Observable<Chart> {
    this.charts = this.charts.filter(c => c.id !== id);
    return of(chart);
  }
  private generateDummyData(): [number, number][] {
    const start = new Date();
    return Array.from({ length: 10 }, (_, i) => [start.setDate(start.getDate() + 1), Math.floor(Math.random() * 100)]);
  }
}
