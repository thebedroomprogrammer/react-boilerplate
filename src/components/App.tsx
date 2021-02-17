import * as React from "react";
export const arpitFunc = (a) => {
    class A extends React.Component {

    }
    
    console.log(A)
    function abcd() {
        return new Promise((res, rej) => {
            return res(true);
        });
    }
    
    async function testAbcd(){
        const result = await abcd();
        console.log(result)
    }
};


