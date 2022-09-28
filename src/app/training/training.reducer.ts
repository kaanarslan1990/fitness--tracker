import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { Exercise } from './exercise.model';
import {
  SET_AVAILABLE_TRAININGS,
  SET_FINISHED_TRAININGS,
  START_TRAINING,
  STOP_TRAINING,
  TrainingsActions,
} from './training.action';
import * as fromRoot from '../app.reducer';
import { FormsModule } from '@angular/forms';

export interface TrainingState {
  availableExercises: Exercise[];
  finishedExercises: Exercise[];
  activeTraining: Exercise;
}

export interface State extends fromRoot.State {
  training: TrainingState;
}

const initialState: TrainingState = {
  availableExercises: [],
  finishedExercises: [],
  activeTraining: null,
};

export function trainingReducer(state = initialState, action: TrainingsActions) {
  switch (action.type) {
    case SET_AVAILABLE_TRAININGS:
      return {
        ...state,
        availableExercises: action.payload,
      };
    case SET_FINISHED_TRAININGS:
      return {
        ...state,
        finishedExercises: action.payload,
      };
    case START_TRAINING:
      return {
        ...state,
        activeTraining: { ...state.availableExercises.find(ex => ex.id === action.payload)},
      };
    case STOP_TRAINING:
      return {
        ...state,
        activeTraining: null,
      };
    default: {
      return state;
    }
  }
}




export const getTrainingState = createFeatureSelector<TrainingState>('training')

export const getAvailableTrainings = createSelector(getTrainingState, (state: TrainingState) => state.availableExercises);
export const getFinishedExercises = createSelector(getTrainingState,(state: TrainingState) => state.finishedExercises);
export const getActiveTrainings = createSelector(getTrainingState, (state: TrainingState) => state.activeTraining);