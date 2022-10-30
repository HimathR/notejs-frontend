import MonacoEditor, { EditorDidMount } from "@monaco-editor/react";
import prettier from "prettier";
import parser from "prettier/parser-babel";
import { useRef } from "react";
import Button from "@atlaskit/button";
import StarFilledIcon from "@atlaskit/icon/glyph/star-filled";
import codeShift from "jscodeshift";
import Highlighter from "monaco-jsx-highlighter";
import "./syntax.css";

import "./code-editor.css";
interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
  const editorRef = useRef<any>();
  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue());
    });
    monacoEditor.getModel()?.updateOptions({ tabSize: 2 });

    const highlighter = new Highlighter(
      // @ts-ignore
      window.monaco, // reference to monaco editor
      codeShift,
      monacoEditor
    );
    highlighter.highLightOnDidChangeModelContent(
      () => {},
      () => {},
      undefined,
      () => {}
    ); // when editor content changes, highlight JSX
  };

  const onFormatClick = () => {
    // get current value from editor
    const unformatted = editorRef.current.getModel().getValue();

    // format that value
    const formatted = prettier
      .format(unformatted, {
        parser: "babel",
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, "");

    // set formatted value back in editor
    editorRef.current.setValue(formatted);
  };

  return (
    <div className="editor-wrapper">
      <Button
        className="button-format"
        iconBefore={<StarFilledIcon label="" size="medium" />}
        onClick={onFormatClick}
        appearance="primary"
      >
        Format
      </Button>
      <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        height="500px"
        theme="dark"
        language="javascript"
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          cursorStyle: "block",
          cursorblink: "phase",
          cursorWidth: 10,
        }}
      />
    </div>
  );
};

export default CodeEditor;
