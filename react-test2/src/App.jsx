import React from 'react';

export default function App() {
  
  const [formData, setFormData] = React.useState(
    {
      email: "",
      password: "",
      passwordConfirmation: "",
      okayToEmail: true
    }
  )

  const id = React.useId()

  function handleChange(event) {
    const { name, type, value, checked } = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    }
    )
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (formData.password === formData.passwordConfirmation) {
      console.log('Successfully signed up');
    } else {
      console.log("Passwords don't match")
      return
    }
    if (formData.okayToEmail) {
      console.log("Thanks for signing up for our newsletter!")
    }

    console.log(formData)
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor={id + 'email'}>Email address</label>
        <input
          type="email"
          placeholder="badaroumouwafic@gmail.com"
          className="form--input"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id={id + 'email'}
        />
        <label htmlFor={id + 'password'}>Password</label>
        <input
          type="password"
          placeholder="AzR#fT_@407"
          className="form--input"
          name="password"
          value={formData.password}
          onChange={handleChange}
          id={id + 'password'}
        />
        <label htmlFor={id + 'passwordConfirmation'}>Confirm password</label>
        <input
          type="password"
          placeholder=""
          className="form--input"
          name="passwordConfirmation"
          value={formData.passwordConfirmation}
          onChange={handleChange}
          id={id + 'passwordConfirmation'}
        />

        <div className="form--marketing">
          <input
            id={id + 'okayToEmail'}
            type="checkbox"
            name="okayToEmail"
            checked={formData.okayToEmail}
            onChange={handleChange}
          />
          <label htmlFor={id + 'okayToEmail'}>
            I want to join the newsletter
          </label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
