import React, {
  ReactNode,
  useReducer,
  useEffect,
} from 'react';
import loader from '@assemblyscript/loader';
import {
  wasmReducer,
  initialWasm,
  setSource,
  completeLoading,
  wasmContext,
} from './wasm';

type ProviderProp = {
  children: ReactNode;
};

// [wasm START]
function WasmProvider({ children }: ProviderProp) {
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
// [wasm END]

function Provider({ children }: ProviderProp) {
  return (
    <WasmProvider>
      {children}
    </WasmProvider>
  );
}

export default Provider;
