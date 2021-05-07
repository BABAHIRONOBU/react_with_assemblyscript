// context

import {
  Dispatch,
  createContext,
} from 'react';
import { IWasm, WasmAction } from './wasm.type';

export type WasmContext = {
  wasm: IWasm;
  dispatchWasm: Dispatch<WasmAction>
};

const defaultValue: WasmContext = {
  wasm: {
    source: null,
    loaded: false,
  },
  dispatchWasm: () => {},
};

export const wasmContext = createContext<WasmContext>(defaultValue);
