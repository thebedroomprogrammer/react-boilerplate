import FavoriteNumber from "../favorite-number";
import React from "react";
import ReactDOM from "react-dom";
import {getQueriesForElement} from '@testing-library/dom'

test('testing fav number with react dom',()=>{
   const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  const {getByLabelText} = getQueriesForElement(div)
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})

