import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TableReservationForm from "./TableReservationForm";

describe("TableReservationForm", () => {
  it("displays success message after form submission", () => {
    const { getByLabelText, getByText } = render(<TableReservationForm />);

    const firstNameInput = getByLabelText("First Name");
    const lastNameInput = getByLabelText("Last Name");
    const emailInput = getByLabelText("Email");
    const guestsInput = getByLabelText("Number of guests");
    const timeInput = getByLabelText("Time");
    const submitButton = getByText("Submit");

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
    fireEvent.change(guestsInput, { target: { value: "2" } });
    fireEvent.change(timeInput, { target: { value: "19:00" } });
    fireEvent.click(submitButton);

    expect(getByText("Form submitted successfully!")).toBeInTheDocument();
  });
});
