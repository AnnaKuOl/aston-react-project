type Props = {
  type: string;
  value: string;
  placeholder?: string;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const SearchInput = ({ onChange, ...inputProps }: Props) => {
  return (
    <div>
      <input {...inputProps} onChange={onChange} autoFocus />
    </div>
  );
};
