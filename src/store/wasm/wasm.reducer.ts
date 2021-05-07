// hook

import { Reducer } from 'react';
import {
  IWasm,
  WasmAction,
  SET_SOURCE,
  COMPLETE_LOADING,
  START_LOADING,
} from './wasm.type';

export const wasmReducer: Reducer<IWasm, WasmAction> = (prevWasm, action) => {
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
