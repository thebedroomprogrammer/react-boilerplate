import React from "react";

const App: React.FC = () => {
    const [text, setText] = React.useState<string>("not set");

    return (
        <div>
            <div role="display">{text}</div>
            <button
                role="clicker"
                onClick={() => {
                    setTimeout(()=>{ setText("text");},1000)
                   
                }}
            >
                set text
            </button>
        </div>
    );
};

export default App;
