import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import * as esbuild from "esbuild-wasm";

const App = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const ref = useRef<any>();

  const startService = async () => {
    // we can refer to ref.current anywhere in the component, and we can use that to do our transpiling and bundling
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
  };

  // runs the service one single time ([] notation) when component is first rendered
  useEffect(() => {
    startService();
  }, []);

  const onClick = () => {
    if (!ref.current) {
      return;
    }
    ref.current
      .transform(input, {
        loader: "jsx",
        target: "es2015",
      })
      .then((result: any) => {
        setCode(result.code);
      });
  };

  return (
    <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)}>
        {input}
      </textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
//
