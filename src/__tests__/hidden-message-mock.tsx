import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HiddenMessage } from "../hidden-message";

jest.mock("react-transition-group", () => {
    return {
        CSSTransition: (props) => (props.in ? props.children : null),
    };
});

test("shows hidden message when toggle is clicked", () => {
    const myMessage = "hello";

    render(<HiddenMessage>{myMessage}</HiddenMessage>);

    const btn = screen.getByText(/toggle/i);
    expect(screen.queryByText(myMessage)).not.toBeInTheDocument();
    userEvent.click(btn);
    expect(screen.queryByText(myMessage)).toBeInTheDocument();

    userEvent.click(btn);
    expect(screen.queryByText(myMessage)).not.toBeInTheDocument();
});
