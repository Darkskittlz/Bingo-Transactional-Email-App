import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import "../Styles/subscribe.css";

const FormContainer = styled.div`
    backdrop-filter: blur(10px);
    z-index: 999;


    input {
        justify-content: space-around;
        background-color: white;
    }
    
    button {
        background-color: black;
        color: white;
        margin-left: 10px;
        align-content: center;
    }
`

const Subscribe = ({
  placeholder,
  buttonText,
  configureNotification,
  showNotification,
  changeLogoSpeed
}) => {
  const [state, setState] = useState({
    email: ""
  });

  const handleChange = e => {
    setState({ email: e.target.value.trim() });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (state.email) {
      fetch(`/functions/addMember?email=${state.email}`)
        .then(res => res.json().then(data => ({status: res.status, body: data})))
        .then(obj => {
          configureNotification(obj);
          showNotification();
        })
        .catch(err => console.log(err))

    //   changeLogoSpeed();

      setState({ email: "" });
    }
  };

  return (
    <FormContainer>
        <form className="subscribe" onSubmit={handleSubmit}>
        <input
            className="subscribe-email"
            id="emailInput"
            name="email"
            type="email"
            placeholder={placeholder}
            onChange={handleChange}
            value={state.email}
            aria-label="Email Address"
        />
        <button className="subscribe-button" type="submit">
            {buttonText}
            SUBMIT
        </button>
        </form>
    </FormContainer>
  );
};

Subscribe.propTypes = {
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  configureNotification: PropTypes.func.isRequired,
  showNotification: PropTypes.func.isRequired,
  changeLogoSpeed: PropTypes.func.isRequired
};

export default Subscribe;