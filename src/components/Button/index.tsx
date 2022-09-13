interface Props {
  onClick(): void;
  disable?: boolean;
  title: string;
}

export function Button({onClick, disable = false, title}: Props) {
  return (
    <button onClick={onClick} disabled={disable}>
      {title}
    </button>
  )
}
