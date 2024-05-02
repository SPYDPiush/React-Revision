import React, { useId } from 'react'

function Select({
  classname = "",
  options,
  ...props

},ref) {

  const id  = useId()
  return (
    <select ref={ref} className={` ${classname} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border
     border-gray-200 w-full`} >
      {
        options?.map( (option) => (
          <option key={option}>
            {option}
          </option>
        ))
      }
      
    </select>
    
  )
}

export default React.forwardRef(Select)
