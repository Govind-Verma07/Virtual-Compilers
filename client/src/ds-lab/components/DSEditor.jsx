import React from 'react';
import Editor from '@monaco-editor/react';

const DSEditor = ({ code, onChange, theme, fontSize }) => {
    return (
        <div className="flex-1 w-full h-full relative group bg-[#1e1e1e]">
            <Editor
                height="100%"
                defaultLanguage="cpp"
                theme={theme === 'dark' ? "vs-dark" : "light"}
                value={code}
                onChange={(value) => onChange(value)}
                options={{
                    fontSize: fontSize,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    smoothScrolling: true,
                    cursorSmoothCaretAnimation: "on",
                    padding: { top: 20 },
                    fontFamily: 'JetBrains Mono',
                    lineNumbers: 'on',
                    roundedSelection: true,
                    readOnly: false,
                    automaticLayout: true,
                }}
            />
        </div>
    );
};

export default DSEditor;
