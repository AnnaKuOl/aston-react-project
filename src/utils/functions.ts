export function LSKey(type:string){
  const user = JSON.parse(localStorage.getItem('isAuth') ?? '[]');
  if (user) {
    return `${user} ${type}`;
  }
  return '';
}

export function getDataFromLS(key: string, emptyArg:string){
  const data = JSON.parse(localStorage.getItem(key) ?? emptyArg);
  return data;
}
// тип any, потому что разные данные могут приходить для записи в LS
export function setDataToLS(key:string, data:any){
  localStorage.setItem(key, JSON.stringify(data));
}
export function removeDataFromLS(key:string){
  localStorage.removeItem(key);
}