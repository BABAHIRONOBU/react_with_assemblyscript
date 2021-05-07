// action creator

import { ResultObject, ASUtil } from '@assemblyscript/loader';
import {
  WasmAction,
  SET_SOURCE,
  COMPLETE_LOADING,
  START_LOADING,
} from './wasm.type';

export const setSource = (source: ResultObject & { exports: ASUtil }): WasmAction => ({ type: SET_SOURCE, source });

export const completeLoading = (): WasmAction => ({ type: COMPLETE_LOADING });

export const startLoading = (): WasmAction => ({ type: START_LOADING });
