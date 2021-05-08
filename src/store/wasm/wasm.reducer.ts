// reducer

import { Reducer } from 'react';
import { WasmState } from './wasm.state';
import {
  WasmAction,
  SET_SOURCE,
  COMPLETE_LOADING,
  START_LOADING,
} from './wasm.action';

export const wasmReducer: Reducer<WasmState, WasmAction> = (prevWasm, action) => {
  switch (action.type) {
    case SET_SOURCE:
      return {
        ...prevWasm,
        source: action.source,
      };

    case COMPLETE_LOADING:
      return {
        ...prevWasm,
        loaded: true,
      };

    case START_LOADING:
      return {
        ...prevWasm,
        loaded: false,
      };

    default:
      return prevWasm;
  }
};
