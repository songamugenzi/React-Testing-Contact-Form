import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';

test('ContactForm returns new "user" object', () => {
    act(() => {
        render(<ContactForm />)
    });

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)

    fireEvent.change(firstNameInput, { target: { value: 'songa' }});
    fireEvent.change(lastNameInput, { target: { value: 'mugenzi' }});
    fireEvent.change(emailInput, { target: { value: 'songa-mugenzi@lambdastudents.com' }});
    fireEvent.change(messageInput, { target: { value: 'All tests are passing Yayyyy!' }});

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    
    const submitButton = screen.getByTestId(/submitButton/i);
    fireEvent.click(submitButton);
    expect(submitButton).toBeInTheDocument();

})