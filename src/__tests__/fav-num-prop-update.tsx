import FavoriteNumber from "../favorite-number";
import React from "react";
import user from "@testing-library/user-event";

import { render, screen } from "@testing-library/react";

test("entering invalid value shows error message", () => {
    const { rerender } = render(<FavoriteNumber />);
    const input = screen.getByLabelText(/favorite number/i);
    user.type(input, "10");
    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent(/The number is invalid/i);
    rerender(<FavoriteNumber max={10} />);
    expect(screen.queryByRole("alert")).toBeNull()
});
