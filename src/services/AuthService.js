import Fetch from './FetchService';
import { AUTH_API } from 'utils/api';

const tokenKey = "token";

export async function login(mail, password) {
  const results = await Fetch.logingAndGetJwt(AUTH_API, { mail, password });
  debugger;
  localStorage.setItem(tokenKey, results);
}

export function loginWithJwt(jwt) {
  debugger;
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    debugger;
    const jwt = localStorage.getItem(tokenKey);
    // return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};