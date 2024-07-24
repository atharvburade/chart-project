import { createReducer, on } from '@ngrx/store';
import { Chart } from '../models/chart.model'; // Adjust path as needed
import * as ChartActions from './chart.actions';

// Define the initial state
export interface ChartState {
  charts: Chart[];
  error: any;
}

const initialState: ChartState = {
  charts: [],
  error: null
};

export const chartReducer = createReducer(
  initialState,
  on(ChartActions.loadChartsSuccess, (state, { charts }) => ({
    ...state,
    charts: [...charts] // Create a new array
  })),
  on(ChartActions.addChartSuccess, (state, { chart }) => ({
    ...state,
    charts: [...state.charts, { ...chart }] // Create a new chart object
  })),
  on(ChartActions.updateChartSuccess, (state, { chart }) => ({
    ...state,
    charts: state.charts.map(c => c.id === chart.id ? { ...chart } : c) // Update the chart immutably
  })),
  on(ChartActions.deleteChartSuccess, (state, { id }) => ({
    ...state,
    charts: state.charts.filter(c => c.id !== id) // Create a new array excluding the deleted chart
  })),
  on(ChartActions.loadChartsFailure, ChartActions.addChartFailure, ChartActions.updateChartFailure, ChartActions.deleteChartFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
