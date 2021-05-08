import React, { useContext } from 'react';
import {
  wasmContext,
} from '../store/wasm';

function Btn() {
  const { wasm: { source, loaded } } = useContext(wasmContext);

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
