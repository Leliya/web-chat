import * as data from '../data/dataValidation.json';

const inputRegExp: Field[] = data;

interface Field {
  inputName: string;
  regexp: string;
  message: string;
  minSymbol?: number;
  maxSymbol?: number;
}

export function validateInput(value: string, name: string): string {
  let errorMessage = '';
  const field: Field | undefined = inputRegExp.find((input) => {
    if (input.inputName === name) {
      return input;
    }
  });

  if (field === undefined) {
    return errorMessage;
  }
  if (field.minSymbol && field.maxSymbol) {
    value.length < field.minSymbol || value.length > field.maxSymbol
      ? (errorMessage = `Поле должно содержать от ${field.minSymbol} до ${field.maxSymbol} символов`)
      : (errorMessage = '');
  }

  if (errorMessage) {
    return errorMessage;
  } else {
    const regExp: RegExp | undefined = new RegExp(field.regexp);
    regExp.test(value) ? (errorMessage = '') : (errorMessage = field.message);
  }

  return errorMessage;
}
