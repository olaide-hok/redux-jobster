import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";
import { loginUser, registerUser } from "../features/user/userSlice";



const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);
  const {user, isLoading } = useSelector(store => store.user)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values

    if(!email || !password || (!isMember && !name)) {
      toast.error('Please Fill Out all Fields')      
    }
    if(isMember) {
      dispatch(loginUser({ email: email, password: password }))
      return;
    }
    dispatch(registerUser({ name, email, password }))
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
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>

        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'          >
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>

      </form>
    </Wrapper>
  );
}

export default Register;
