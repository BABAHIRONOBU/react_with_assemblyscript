// state type & action type

import { ResultObject, ASUtil } from '@assemblyscript/loader';
import { Action } from '../common';

export interface IWasm {
  source: (ResultObject & { exports: ASUtil }) | null;
  loaded: boolean;
}

export const SET_SOURCE = 'SET_SOURCE';

export const COMPLETE_LOADING = 'COMPLETE_LOADING';

export const START_LOADING = 'START_LOADING';

type SetSourceAction = Action<typeof SET_SOURCE> & {
  source: ResultObject & { exports: ASUtil },
};

type CompleteLoadingAction = Action<typeof COMPLETE_LOADING>;

type StartLoadingAction = Action<typeof START_LOADING>;

export type WasmAction = SetSourceAction | CompleteLoadingAction | StartLoadingAction;
