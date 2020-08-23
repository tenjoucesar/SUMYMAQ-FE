import Fetch from './FetchService';
import jwtDecode from "jwt-decode";
import { AUTH_API } from 'utils/api';

const tokenKey = "token";

export async function login(mail, password) {
  const results = await Fetch.logingAndGetJwt(AUTH_API, { mail, password });
  localStorage.setItem(tokenKey, results);
}

export const loginWithJwt = (jwt) => localStorage.setItem(tokenKey, jwt);

export const logout = () => localStorage.removeItem(tokenKey);

export const getJwt = () => localStorage.getItem(tokenKey);


export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}


export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};