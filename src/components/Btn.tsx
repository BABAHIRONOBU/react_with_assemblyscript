import React from 'react';
import { useWasmStore } from '../store/wasm/wasm.hook';

function Btn() {
  const { wasm: { source, loaded } } = useWasmStore();

  const runWasm = () => {
    if (source) {
      const { add } = source.exports as any; // TODO: type 정의 하는 방법
      console.log(add(1, 2));
    }
  };

  return (
    <button
      type='button'
      disabled={!loaded}
      onClick={() => runWasm()}
    >
      wasm 실행
    </button>
  );
}

export default Btn;
