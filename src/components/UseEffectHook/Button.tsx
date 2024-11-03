interface ButtonProps {
  cls: string;
  funct: () => void;
}

export default function Button({ cls, funct }: ButtonProps) {
  return (
    <button onClick={funct}>
      <i className={cls}></i>
    </button>
  );
}
