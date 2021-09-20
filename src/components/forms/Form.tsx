//import React, { ChangeEvent } from 'react';
import React from 'react';

import { useHistory } from 'react-router';

import { LoanForm } from 'builtformik';
// import './form.css';

export const Form = () => {

  // interface FormFields {
  //   name: string,
  //   email: string,
  //   loanAmount: number,
  //   address: string,
  //   officer: string
  // }

  const history = useHistory()

  // const [values, setValues] = React.useState<FormFields>({
  //   name: '',
  //   email: '',
  //   loanAmount: 0,
  //   address: '',
  //   officer: ''
  // });

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const newValues = { ...values, [e.target.name]: e.target.value}
  //   // newValues[e.target.name] = e.target.value
  //   setValues(newValues);
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   history.push("/success")
  // }

  return (
    <LoanForm redirectToOnSuccess={history} url="/" />
    // <form className="appForm" onSubmit={handleSubmit}>
    //   <h2>Loan Application</h2>
    //   <fieldset>
    //     <div className="form-group">
    //       <label htmlFor="name">Name</label>
    //       <input
    //         type="text"
    //         name="name"
    //         required
    //         autoFocus
    //         className="form-control"
    //         value={values.name}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //   </fieldset>
    //         <fieldset>
    //     <div className="form-group">
    //       <label htmlFor="email">Email</label>
    //       <input
    //         type="email"
    //         name="email"
    //         required
    //         autoFocus
    //         className="form-control"
    //         value={values.email}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //   </fieldset>
    //         <fieldset>
    //     <div className="form-group">
    //       <label htmlFor="loandAmount">Loan Amount</label>
    //       <input
    //         type="number"
    //         name="loanAmount"
    //         required
    //         autoFocus
    //         className="form-control"
    //         value={values.loanAmount}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //   </fieldset>
    //         <fieldset>
    //     <div className="form-group">
    //       <label htmlFor="address">Property Address</label>
    //       <input
    //         type="address"
    //         name="address"
    //         required
    //         autoFocus
    //         className="form-control"
    //         value={values.address}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //   </fieldset>

    //         <fieldset>
    //     <div className="form-group">
    //       <label htmlFor="officer">Loan Officer</label>
    //       <input
    //         type="text"
    //         name="officer"
    //         required
    //         autoFocus
    //         className="form-control"
    //         value={values.officer}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //   </fieldset>
    //   <button className="btn__submit" type="submit">
    //     Submit
    //   </button>
    // </form>
  )
}
