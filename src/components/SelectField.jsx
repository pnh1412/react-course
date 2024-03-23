import React from 'react'

const SelectField = React.forwardRef(({ onChange }, ref) => {
  return (  
    <select ref={ref} onChange={e => onChange(e.target.value)}>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  )
})    

export default SelectField