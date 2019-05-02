import React from 'react'

class FormRegister extends React.Component {
  state = {
    data: {}
  }

  render() {
    return (
      <form>
        <fieldset>
          <label htmlFor="full-name">Full Name:</label>
          <input type="text" name="full-name" />
        </fieldset>

        <fieldset>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" />
        </fieldset>

        <fieldset>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Question:</label>
          <textarea name="question" cols="30" rows="5" />
        </fieldset>

        <input type="submit" value="Register" />
      </form>
    )
  }
}

export default FormRegister