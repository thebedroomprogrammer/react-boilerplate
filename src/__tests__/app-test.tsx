import React from "react";
import user from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../app";

test("Test state change in app", () => {    
    const  {debug } = render(<App />);
    expect(screen.getByRole("display")).toHaveTextContent(/not set/i);
    const element = screen.getByRole("clicker");
    user.click(element);
   waitFor(()=>{expect(screen.getByRole("display")).toHaveTextContent("text");}) 

});
