import React, { Children, useId } from 'react'

const Input   =  React.forwardRef( function Input(
  {
    label,
type = "text",
classname = "",
...props

  },ref
){

  const id =  useId()
  return (

    <div className='w-full'>
    {
      label && <label className='inline-block mb-1 pl-1' htmlFor={id}>
         {label}

      </label>
}
      <input id={id} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}` } type={type} {...props} ref={ref}/>
   
    </div>
  )

})

export default Input
