// context

import {
  Dispatch,
  createContext,
} from 'react';
import { WasmState } from './wasm.state';
import { WasmAction } from './wasm.action';

type WasmContext = {
  wasm: WasmState;
  dispatchWasm: Dispatch<WasmAction>
};

const defaultWasmContext: WasmContext = {
  wasm: {
    source: null,
    loaded: false,
  },
  dispatchWasm: () => {},
};

export const wasmContext = createContext<WasmContext>(defaultWasmContext);
