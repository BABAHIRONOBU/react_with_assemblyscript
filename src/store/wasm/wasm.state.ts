// state type, initial state

import { ResultObject, ASUtil } from '@assemblyscript/loader';

export type WasmState = {
  source: (ResultObject & { exports: ASUtil }) | null;
  loaded: boolean;
};

export const initialWasm: WasmState = {
  source: null,
  loaded: false,
};
