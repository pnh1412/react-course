import React from 'react';
import Button from './components/Button';

/* Form
1. controlled component (input)
 - dc quản lý value bởi react state
 - component always re-render when user change input
2. uncontrolled
 - ko dc quản lý value bởi react state
 - component ko re-render when user change input
 - use refDom to get value of input
*/

function Form() {
  const [form, setForm] = React.useState({
    author: '',
    gender: 0,
    remember: false,
  });
  const [firstName, setFirstName] = React.useState('');
  const lastNameRef = React.useRef('null');

  function handleSubmit() {
    console.log('Form -> handleSubmit', {
      firstName,
      lastNameRef: lastNameRef.current.value
    })
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log('Form -> handleSubmitForm: ', form)
  }

  function onChangeForm(event) {
    const name = event.target.name;
    const value = event.target.value;
    const type = event.target.type;

    setForm((prevState) => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? event.target.checked : value
      }
    })
  }

  return (
    <div>
      <h2>Form</h2>

      <h3>Controlled Input</h3>
      First Name: <input 
        type="text" 
        placeholder="Enter your first name"
        value={firstName} 
        onChange={(e) => setFirstName(e.target.value)}
      />

      <h3>Uncontrolled Input</h3>
      Last Name: <input 
        ref={lastNameRef} 
        ype="text"
        placeholder="Enter your last name" 
        defaultValue={'hau'}
      />
      
      <br /> <br />
      <Button textButton='Submit' onClick={handleSubmit}/>

      <h3>Multiple input form</h3>

      <form onSubmit={handleSubmitForm}>
        <label>
          Name:
          <input type="text" name="author" value={form.author} onChange={onChangeForm} />
        </label>
        <br /> <br />
        <label>
          Gender:
          <select name="gender" value={form.gender} onChange={onChangeForm} >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br /> <br />
        <label>
          Remember me:
          <input type="checkbox" name="remember" checked={form.remember} onChange={onChangeForm}  />
        </label>


        <br /> <br />
        <Button type="submit" textButton='Submit'/>
      </form>
      

    </div>
  )
}

export default Form