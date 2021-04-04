import React from "react";
import { screen, render } from "@testing-library/react";

import { ErrorBoundary } from "../error-boundary";
import { reportError } from "../api";
import userEvent from "@testing-library/user-event";
jest.mock("../api");

beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
    const errorFunc = console.error as jest.Mock;
    errorFunc.mockRestore();
});

afterEach(() => {
    jest.clearAllMocks();
});

function Bomb({ shouldThrow }) {
    if (shouldThrow) {
        throw new Error("💣");
    } else {
        return null;
    }
}

test("calls reportError and renders that there was a problem", () => {
    const mockedReportError = reportError as jest.Mock;
    mockedReportError.mockResolvedValueOnce({ success: true });

    const { rerender } = render(
        <Bomb shouldThrow={false} />,

        { wrapper: ErrorBoundary }
    );

    rerender(<Bomb shouldThrow />);

    const error = expect.any(Error);
    const info = { componentStack: expect.stringContaining("Bomb") };

    expect(mockedReportError).toHaveBeenCalledWith(error, info);
    expect(mockedReportError).toHaveBeenCalledTimes(1);

    expect(console.error).toHaveBeenCalledTimes(2);

    expect(screen.getByRole("alert").textContent).toMatchInlineSnapshot(
        `"There was a problem."`
    );

    mockedReportError.mockClear();
    const errorFunc = console.error as jest.Mock;
    errorFunc.mockClear();

    rerender(<Bomb shouldThrow={false} />);

    userEvent.click(screen.getByText(/try again/i));
    expect(mockedReportError).not.toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(screen.queryByText(/try again/i)).not.toBeInTheDocument();
});
