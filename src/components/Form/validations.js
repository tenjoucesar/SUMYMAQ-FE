export const required = value => (value ? undefined : 'Requerido para continuar');
export const mustBeNumber = value => (isNaN(value) ? 'Por favor ingresa un numero' : undefined);
export const composeValidators = (...validators) => value => (validators.reduce((error, validator) => error || validator(value), undefined));
export const validPhoneNumber = (value) => {
  const regex = /^\(?([0-9]{8})$/;
  if (value && value.match(regex)) {
    return undefined;
  }
  return 'Ingrese un numero de telefono valido';
};