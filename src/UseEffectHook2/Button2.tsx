interface ButtonProps {
  cls: string;
  fnct: () => void;
}

export default function Button2({ cls, fnct }: ButtonProps) {
  return (
    <button onClick={fnct}>
      <i className={cls}></i>
    </button>
  );
}
