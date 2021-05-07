import React from 'react';
import { ProviderProp } from './common';
import WasmProvider from './wasm/WasmProvider';

function RootProvider({ children }: ProviderProp) {
  return (
    <WasmProvider>
      {children}
    </WasmProvider>
  );
}

export default RootProvider;
