// action, action creator

import { ResultObject, ASUtil } from '@assemblyscript/loader';
import { Action } from '../common';

export const SET_SOURCE = 'SET_SOURCE';
export const COMPLETE_LOADING = 'COMPLETE_LOADING';
export const START_LOADING = 'START_LOADING';

type SetSourceAction = Action<typeof SET_SOURCE> & {
  source: ResultObject & { exports: ASUtil },
};
type CompleteLoadingAction = Action<typeof COMPLETE_LOADING>;
type StartLoadingAction = Action<typeof START_LOADING>;
export type WasmAction = SetSourceAction | CompleteLoadingAction | StartLoadingAction;

export const setSource = (source: ResultObject & { exports: ASUtil }): WasmAction => ({ type: SET_SOURCE, source });
export const completeLoading = (): WasmAction => ({ type: COMPLETE_LOADING });
export const startLoading = (): WasmAction => ({ type: START_LOADING });
