import React from 'react';
import './App.css';
import { FormikForm } from './components/Form';
import RegisterForm from './components/RegisterForm'

function App() {
  return (
    <div className="App">
      <FormikForm />
      <RegisterForm />
    </div>
  );
}

export default App;
