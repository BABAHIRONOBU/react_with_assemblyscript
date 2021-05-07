// provider

import React, { useReducer, useEffect } from 'react';
import loader from '@assemblyscript/loader';
import { ProviderProp } from '../common';
import { wasmContext } from './wasm.context';
import { wasmReducer } from './wasm.reducer';
import { IWasm } from './wasm.type';
import { setSource, completeLoading } from './wasm.action';

function WasmProvider({ children }: ProviderProp) {
  const initialWasm: IWasm = {
    source: null,
    loaded: false,
  };

  const [wasm, dispatchWasm] = useReducer(wasmReducer, initialWasm);

  // TODO: store에서 thunk를 정의하는 방법 => 여기서 fetch하지 않고 store 내에서 하고 싶다...
  // TODO: store에서 computed, getter같은 것을 어떻게 사용하나?
  useEffect(() => {
    const loadWasm = async () => {
      const response = await fetch('/build/optimized.wasm');

      const imports = {/* imported functions */};

      const source = await loader.instantiateStreaming(response, imports);

      dispatchWasm(setSource(source));
      dispatchWasm(completeLoading());
    };

    loadWasm();
  }, []);

  return (
    <wasmContext.Provider value={{ wasm, dispatchWasm }}>
      {children}
    </wasmContext.Provider>
  );
}

export default WasmProvider;
