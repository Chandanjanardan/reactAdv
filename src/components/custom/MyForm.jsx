import React from 'react'
import useForm from './useForm'

function MyForm() {
  const {values,handleChange,resetForm}=useForm({name:"",email:""})
  function handleSubmit(e){
    e.preventDefault()
    console.log(values)
    resetForm();
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input name='name' value={values?.name} onChange={handleChange} placeholder='name'/>
        </div>
        <div>
          <label>Email</label>
          <input name="email" value={values?.email} onChange={handleChange} placeholder='email'/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default MyForm