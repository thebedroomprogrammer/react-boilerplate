import * as React from "react";
import { render } from "react-dom";
import { arpitFunc } from "./components/App";

arpitFunc(1)

function abcd() {
    return new Promise((res, rej) => {
        const a:string = "asd";
        return res(true);
    });
}

async function testAbcd(){
    const result = await abcd();
    console.log(result)
}

class A extends React.Component {

}

console.log(A)

testAbcd()
render(<div>hello react</div>, document.getElementById("app"));
