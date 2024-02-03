import  Cookies from 'js-cookie';


const TokenKey:string = 'OAUTH2'; 

export function getToken():string | undefined {
  return Cookies.get(TokenKey);
}

export function setToken(token:string) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
