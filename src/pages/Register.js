import React, { useEffect, useState } from "react";
import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values

    if(!email || !password || (!isMember && !name)) {
      
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember})
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
       { !values.isMember && <FormRow
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />}

        {/* Email Field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />

        {/* Password Field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>

        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>

      </form>
    </Wrapper>
  );
}

export default Register;
