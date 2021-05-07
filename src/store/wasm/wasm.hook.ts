// custom hook

import { useContext } from 'react';
import { wasmContext } from './wasm.context';

export const useWasmStore = () => {
  const { wasm, dispatchWasm } = useContext(wasmContext);

  return {
    wasm,
    dispatchWasm,
  };
};
