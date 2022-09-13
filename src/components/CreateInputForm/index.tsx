import { ChangeEvent, FormEvent, useState } from "react"
import { INPUTS_TYPES } from "../../types/common"
import styles from './styles.module.css'

interface textFormProps {
  handleChangeState: (e: ChangeEvent<HTMLInputElement>) => void;
  state: {
    name: string;
    label: string;
  }
}



const TextForm = ({handleChangeState, state}: textFormProps) => {
  return(
    <>
      <h3>Text input</h3>
      <input type="text" placeholder='label' value={state['label']} name="label" onChange={handleChangeState}/>
      <input type="text" placeholder='name' value={state['name']} name="name" onChange={handleChangeState}/>
    </>
  )
}

const SelectForm = () => {
  return(
    <>
      <h3>Select input</h3>
      <input type="text" placeholder='label'/>
      <input type="text" placeholder='name'/>
      <input type="text" placeholder='option'/>
    </>
  )
}

const RadioTextForm = () => {
  return (
    <>
      <h3>Radio input</h3>
      <input type="text" placeholder='label'/>
      <input type="text" placeholder='name'/>
      <input type="text" placeholder='option'/>
    </>
  )
}


const initialTextFromState = {
  name: '',
  label: ''
}

interface props {
  typeInput: INPUTS_TYPES | null,
  onSubmitForm: any // object of input type
}

export function CreateInputForm({
  typeInput,
  onSubmitForm
}: props) {
  const [formData, setFormData] = useState(initialTextFromState); 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmitForm(formData)
    setFormData(initialTextFromState)
    console.log(formData);
  };

  return (
    <form className={styles.addInputForm} onSubmit={handleSubmit}>
      {typeInput === null && 'Añade un nuevo input'}
      {typeInput === 'text' && <TextForm handleChangeState={handleChange} state={formData}/>}
      {typeInput === 'select' && <SelectForm />}
      {typeInput === 'radio' && <RadioTextForm />}
      
      <button type="submit">
        Añadir
      </button>
    </form>
)
}
