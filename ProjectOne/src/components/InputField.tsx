import React from 'react'

const InputField = () => {
  return (
    <form className='input1'>
        <input type="input"  className='input-field' placeholder='Enter a task'/>
        <button type='submit' className='submit-field'>Go</button>
    </form>
  )
}

export default InputField