import FavoriteNumber from "../favorite-number";
import React from "react";

import { render, screen } from "@testing-library/react";

test("testing fav number with react testing lib", () => {
   render(<FavoriteNumber />);
    const input = screen.getByLabelText(/favorite number/i);
    expect(input).toHaveAttribute("type", "number");
});
