import { createAction, props } from '@ngrx/store';
import { Chart } from '../models/chart.model'; // Adjust path as needed

// Load Charts
export const loadCharts = createAction('[Chart] Load Charts');
export const loadChartsSuccess = createAction(
  '[Chart] Load Charts Success',
  props<{ charts: Chart[] }>() // Payload should be an array of charts
);
export const loadChartsFailure = createAction(
  '[Chart] Load Charts Failure',
  props<{ error: any }>() // Payload should be an error object
);

// Add Chart
export const addChart = createAction(
  '[Chart] Add Chart',
  props<{ chart: Chart }>() // Payload should be a single chart object
);
export const addChartSuccess = createAction(
  '[Chart] Add Chart Success',
  props<{ chart: Chart }>() // Payload should be a single chart object
);
export const addChartFailure = createAction(
  '[Chart] Add Chart Failure',
  props<{ error: any }>() // Payload should be an error object
);

// Update Chart
export const updateChart = createAction(
  '[Chart] Update Chart',
  props<{ chart: Chart }>() // Payload should be a single chart object
);
export const updateChartSuccess = createAction(
  '[Chart] Update Chart Success',
  props<{ chart: Chart }>() // Payload should be a single chart object
);
export const updateChartFailure = createAction(
  '[Chart] Update Chart Failure',
  props<{ error: any }>() // Payload should be an error object
);

// Delete Chart
export const deleteChart = createAction(
  '[Chart] Delete Chart',
  props<{ id: number }>() // Payload should be the ID of the chart to delete
);
export const deleteChartSuccess = createAction(
  '[Chart] Delete Chart Success',
  props<{ id: number }>() // Payload should be the ID of the deleted chart
);
export const deleteChartFailure = createAction(
  '[Chart] Delete Chart Failure',
  props<{ error: any }>() // Payload should be an error object
);
