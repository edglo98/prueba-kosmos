import { ChangeEvent, FormEvent, useState } from 'react'
import {CreateInputForm} from './components/CreateInputForm'
import { INPUTS_TYPES } from './types/common'
import './App.css'
import { Button } from './components/Button'
import { DynamicTextInput } from './components/DynamicTextInput'

function App () {
  const [inputs, setInput] = useState<any[]>([])
  const [inputTypeAdding, setInputTypeAdding] = useState<INPUTS_TYPES | null>(null)
  const [dynamicFormData, setDynamicFormData] = useState({}); 

  // TODO: object of input type
  const addInput = (inputType: any) => {
    setInput([
      ...inputs,
      inputType
    ])
  }

  const removeInput = (name: string) => {
    const newInputs = inputs.filter(input => input.name !== name)
    const newData: any = {...dynamicFormData}
    delete newData[name]

    setDynamicFormData(newData)
    setInput(newInputs)
  }

  const changeFormToAddInput = (inputType: INPUTS_TYPES) => {
    setInputTypeAdding(inputType)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDynamicFormData({
      ...dynamicFormData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const onSubmitDynamicForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(dynamicFormData)
  }

  return (
    <div className='container'>
      <h1 style={{textAlign: 'center'}}>Dynamic form</h1>
      <main className='main-content'>
        <section >
          <h2>
            Content
          </h2>
          <form className='dynamic-form' onSubmit={onSubmitDynamicForm}>
            <div className='form-inputs'>
              {
                inputs.map((input, i) => {
                  return(
                    <DynamicTextInput
                      {...input} 
                      key={i+input.name}
                      onChange={handleChange}
                      onRemove={() => removeInput(input.name)}
                    />
                  )
                })
              }
              {/* <select name="select">
                <option value="value1">Value 1</option>
                <option value="value2" selected>Value 2</option>
                <option value="value3">Value 3</option>
              </select>
              <div>
                <div>
                  <input type="radio" id="huey" name="drone" value="huey" checked />
                  <label htmlFor="huey">opcion 1</label>
                </div>
                <div>
                  <input type="radio" id="huey2" name="drone" value="huey" checked />
                  <label htmlFor="huey2">opcion 1</label>
                </div>
              </div> */}
            </div>

            <button type='submit' >
              View data
            </button>
          </form>
        </section>

        <section>
          <h2>
            Inputs
          </h2>

          <div className='add-pickers'>
            <Button onClick={()=>changeFormToAddInput('text')} title='Add text' />
            <Button onClick={()=>changeFormToAddInput('select')} title='Add select' />
            <Button onClick={()=>changeFormToAddInput('radio')} title='Add radio' />
          </div>

          <CreateInputForm typeInput={inputTypeAdding} onSubmitForm={addInput} />
        </section>
      </main>

      <span>
        {JSON.stringify(dynamicFormData)}
      </span>
    </div>
  )
}

export default App
