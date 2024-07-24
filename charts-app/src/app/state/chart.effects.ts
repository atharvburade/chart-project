import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ChartService } from '../services/chart.service';
import * as ChartActions from './chart.actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class ChartEffects {
  constructor(
    private actions$: Actions,
    private chartService: ChartService
  ) {}

  loadCharts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChartActions.loadCharts),
      mergeMap(() =>
        this.chartService.getCharts().pipe(
          map(charts => 
            ChartActions.loadChartsSuccess({ charts: [...charts] }) // Create a new array
          ),
          catchError(error => 
            of(ChartActions.loadChartsFailure({ error }))
          )
        )
      )
    )
  );

  addChart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChartActions.addChart),
      mergeMap(action =>
        this.chartService.addChart(action.chart).pipe(
          map(chart =>
            ChartActions.addChartSuccess({ chart: { ...chart } }) // Create a new chart object
          ),
          catchError(error =>
            of(ChartActions.addChartFailure({ error }))
          )
        )
      )
    )
  );

  updateChart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChartActions.updateChart),
      mergeMap(action =>
        this.chartService.updateChart(action.chart).pipe(
          map(chart =>
            ChartActions.updateChartSuccess({ chart: { ...chart } }) // Create a new chart object
          ),
          catchError(error =>
            of(ChartActions.updateChartFailure({ error }))
          )
        )
      )
    )
  );

  // deleteChart$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ChartActions.deleteChart),
  //     mergeMap(action =>
  //       this.chartService.deleteChart(action.id).pipe(
  //         map(() => 
  //           ChartActions.deleteChartSuccess({ id: action.id }) // Use the ID of the deleted chart
  //         ),
  //         catchError(error =>
  //           of(ChartActions.deleteChartFailure({ error }))
  //         )
  //       )
  //     )
  //   )
  // );
}
