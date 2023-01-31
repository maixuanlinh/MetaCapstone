import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Textarea, Button, Alert, AlertIcon } from "@chakra-ui/react";

const TableReservationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage(null);

    const emailRegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegExp.test(email)) {
      setEmailErrorMessage("Invalid email address");
      return;
    }

    if (!firstName || !lastName || !email || !guests || !time) {
      setErrorMessage("All fields are required.");
      return;
    }

    setErrorMessage("Form submitted successfully!");
  };

  return (
    <>
      {errorMessage ? (
        <Alert status="success" mt={5}>
          <AlertIcon color="#495e57" paddingRight="15px" width={60} />
          {errorMessage}
        </Alert>
      ) : (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel fontWeight="bold" paddingBottom="5" htmlFor="firstName">
              First Name
            </FormLabel>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl mt={5}>
            <FormLabel paddingBottom="5" fontWeight="bold" htmlFor="lastName">
              Last Name
            </FormLabel>
            <Input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
          <FormControl mt={5}>
            <FormLabel paddingBottom="5" fontWeight="bold" htmlFor="email">
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailErrorMessage && (
              <Alert status="error" mt={5}>
                <AlertIcon w="30px" paddingRight="10px" color="orange" />
                {emailErrorMessage}
              </Alert>
            )}
          </FormControl>
          <FormControl mt={5}>
            <FormLabel paddingBottom="5" fontWeight="bold" htmlFor="guests">
              Number of guests
            </FormLabel>
            <Input
              id="guests"
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </FormControl>
          <FormControl mt={5}>
            <FormLabel paddingBottom="5" fontWeight="bold" htmlFor="time">
              Time
            </FormLabel>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </FormControl>
          <FormControl mt={5}>
            <FormLabel paddingBottom="5" fontWeight="bold" htmlFor="note">
              Note
            </FormLabel>
            <Textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </FormControl>
          <Button
            mt={15}
            width="150px"
            background="#495e57"
            color="white"
            type="submit"
          >
            Submit
          </Button>
        </form>
      )}
    </>
  );
};

export default TableReservationForm;

    
