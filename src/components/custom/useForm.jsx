import { useState } from "react";



function useForm(intialValue){
  const [values,setValues]=useState(intialValue)
  // console.log(value.name)
  function handleChange(e){
    const {name,value}=e.target
    // console.log(name,"this is name")

    setValues({
      ...values,
      [name]:value
    })
  }
  const resetForm =()=>setValues(intialValue)
  return {values,handleChange,resetForm}
}
export default useForm;