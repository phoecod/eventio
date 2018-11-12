import React, {Fragment} from 'react';
import FormTitleBlock from './FormTitleBlock';

const SignupContent = (props) => {
    return (
        <Fragment >
            <FormTitleBlock signin={props.signin}/>
            <input
                className="input"
                name="firstName"
                type="text"
                placeholder="First Name"
            />
            <input
                className="input"
                name="lastName"
                type="text"
                placeholder="Last Name"
            />
            <input
                className="input"
                name="email"
                autoComplete="none"
                placeholder="Email"
            />
            <input
                className="input"
                name="password"
                autoComplete="none"
                type="password"
                placeholder="Password"
            />
            <button className="btn">Sign Up</button>
        </Fragment>
    )
}

export default SignupContent;