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
  const initialForm = {
    author: '',
    gender: 0,
    isRemember: false,
    email: '',
  }
  const [form, setForm] = React.useState(initialForm);
  const [users, setUsers] = React.useState([]);
  const [firstName, setFirstName] = React.useState('');
  const [errors, setErrors] = React.useState({}); // {author: 'Please enter input name', email: 'Please enter input email'}
  const lastNameRef = React.useRef('null');

  function handleSubmit() {
    console.log('Form -> handleSubmit', {
      firstName,
      lastNameRef: lastNameRef.current.value
    })
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    
    // validate form
    if(!form.author) {
      setErrors(prevState => {
        return {
          ...prevState,
          author: true
        }
      })
     }

     if(!form.email) {
      setErrors(prevState => {
        return {
          ...prevState,
          email: true
        }
      })
     }

    if(!form.author || !form.email) return;

    const user = {
      id: new Date().getTime().toString(),
      author: form.author,
      email: form.email,
      gender: form.gender,
      isRemember: form.isRemember
    }
    setUsers(prevState => {
      return [...prevState, user]
    })

    // reset form
    setForm(initialForm)

    // reset validate
    setErrors({})
  }

  console.log('user ----->: ', users)

  function onChangeForm(event) {
    const name = event.target.name;
    const value = event.target.value;
    const type = event.target.type;

    if(name === 'author' && value !== '') {
      setErrors(prevState => {
        return {
          ...prevState,
          author: false
        }
      })
    }

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
        <div>{errors.author && `Please enter input author`}</div>
        
        <br />
        <label>
          Email:
          <input type="text" name="email" value={form.email} onChange={onChangeForm} />
        </label>
        <div>{errors.email && `Please enter input email`}</div>
        <br /> 
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
          <input type="checkbox" name="isRemember" checked={form.isRemember} onChange={onChangeForm}  />
        </label>


        <br /> <br />
        <Button type="submit" textButton='Submit'/>
      </form>
      <br /> <br />
      
      <table width="100%" border="1">
        <tr>
          <th>Author</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Remember</th>
        </tr>
       
       {users.map(user => {
        return (
          <tr key={user.id}>
            <td>{user.author}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.isRemember ? 'Yes' : 'No'}</td>
          </tr>
        )
       })}
      
      </table>
      

    </div>
  )
}

export default Form