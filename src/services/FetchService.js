


async function request(url, params, method = 'GET', useJwt) {
  debugger;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    }
  };

  if (params) {
    if (method === 'GET') {
      url += '?' + objectToQueryString(params);
    } else {
      options.body = JSON.stringify(params);
    }
  }

  const response = await fetch(url, options);
  if (response.status !== 200) return errorHandler(response);

  const result = await response.json();
  return result;
}

async function logingAndGetJwt(url, params, method = 'POST') {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    }
  };
  options.body = JSON.stringify(params);
  const response = await fetch(url, options);
  if (response.status !== 200) return errorHandler(response);
  const result = await response.text();
  debugger;
  return result;
}

function errorHandler(response) {
  const expectedError =
    response.status &&
    response.status >= 400 &&
    response.status < 500;
  if(expectedError) return generateErrorResponse(response);

  return Promise.reject('Ocurrio un Error inexperado', response.status);
}

function objectToQueryString(obj) {
  debugger;
  return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
}

async function generateErrorResponse(response) {
  const errorMessage = await response.text();
  throw {
    errorMessage
  }
}

const get = (url, params) => request(url, params);
const post = (url, params) => request(url, params, 'POST');
const put = (url, params) => request(url, params, 'PUT');
const remove = (url, params) => request(url, params, 'DELETE');

export default {
  get,
  post,
  put,
  remove,
  logingAndGetJwt
};
