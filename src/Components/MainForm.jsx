import React from "react";
import "./Mainform.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "./Form";

function MainForm() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    mobilenumber: "",
    address: "",
    city: "",
    gender: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: "[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "mobilenumber",
      type: "text",
      placeholder: "Enter Mobile Number",
      errorMessage: "Please enter the Correct Mobile Number",
      label: "Mobile Number",
      pattern: "[789][0-9]{9}",
      required: true,
    },
    {
      id: 5,
      name: "address",
      type: "text",
      placeholder: "Enter The Address Here",
      errorMessage: "Please enter the Address ",
      label: "Address",

      required: true,
    },
    {
      id: 9,
      name: "gender",
      type: "text",
      placeholder: "Enter the Gender",
      errorMessage: "It should be Male,Female,Not prefered ",
      label: "Gender",
      pattern: "(?:m|M|male|Male|f|F|female|Female|FEMALE|MALE|Not prefered",
      required: true,
    },

    {
      id: 6,
      name: "city",
      type: "text",
      placeholder: "Enter the City Name",
      errorMessage: "Please enter the City",
      label: "City",

      required: true,
    },
    {
      id: 7,
      name: "state",
      type: "text",
      placeholder: "Enter the State",
      errorMessage: "Please enter the State",
      label: "State",

      required: true,
    },
    {
      id: 8,
      name: "code",
      type: "text",
      placeholder: "Enter the Postal-Code",
      errorMessage: "Please enter Valid Postal Code .it should be 6 Digits",
      label: "Postal code",
      pattern: "[0-9]{6}",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(values));
    navigate("/show");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <h1> Details</h1>
          {inputs.map((input) => (
            <Form
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default MainForm;
