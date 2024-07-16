import React from 'react'

const InputForm = ({type,name,id,text,field,func}) => {
  return (
    <div className="form-outline mb-4">
                        <input
                          type={type}
                          name={name}
                          id={id}
                          className="form-control"
                          placeholder={text}
                          onInput={func}
                          autoComplete=" "
                        />
                        <label className="form-label" htmlFor={id}>
                          {field}
                        </label>
                      </div>
  )
}

export default InputForm
