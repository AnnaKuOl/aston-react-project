interface Props {
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}
export function Button({ children, onClick }: Props) {
  return <button onClick={onClick}> {children} </button>;
}
