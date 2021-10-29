import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
    const firstNameField = screen.getByLabelText(/first name:/i);
    userEvent.type(firstNameField, 'Doug');

    const lastNameField = screen.getByLabelText(/last name:/i);
    userEvent.type(lastNameField, 'Kim');

    const addressField = screen.getByLabelText(/address:/i);
    userEvent.type(addressField, '24 Hello Street');

    const cityField = screen.getByLabelText(/city/i);
    userEvent.type(cityField, 'Tinytown');

    const stateField = screen.getByLabelText(/state:/i);
    userEvent.type(stateField, 'Bigville');

    const zipField = screen.getByLabelText(/zip:/i);
    userEvent.type(zipField, '12345');

    const button = screen.getByRole('button');
    userEvent.click(button);

    const success = await screen.queryByTestID('successMessage')
    expect(success).toBeInTheDocument();



});

firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",