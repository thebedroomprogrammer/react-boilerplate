import FavoriteNumber from "../favorite-number";
import React from "react";
import ReactDOM from "react-dom";
test('test favorite number with js dom',()=>{
    const div = document.createElement("div");
    ReactDOM.render(<FavoriteNumber/>,div);
    expect(div.querySelector('input')).toHaveAttribute('type', 'number')
    expect(div.querySelector('label')).toHaveTextContent('Favorite Number')

})