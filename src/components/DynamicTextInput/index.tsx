import { InputHTMLAttributes } from "react"

interface Props {
  onRemove?(): void;
  label: string;
}

export const DynamicTextInput = ({onRemove, label, ...inputProps}: Props & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div>
      <input type='text' placeholder={label} {...inputProps} />
      <button onClick={onRemove}>
        x
      </button>
    </div>
  )
}
