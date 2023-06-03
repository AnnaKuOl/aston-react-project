

export function LSKey(type:string){
  const user = JSON.parse(localStorage.getItem('isAuth') ?? '[]');
  if (user) {
    return `${user} ${type}`;
  }
  return '';
}
