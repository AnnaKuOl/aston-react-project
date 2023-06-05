type Props = {
  children: React.ReactNode;
};
export function ErrorMessage({ children }: Props) {
  return <p> {children} </p>;
}
