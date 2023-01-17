import { rulesValidation } from './dataValidation';

type Error =
  | 'wrong_number_characters'
  | 'empty'
  | 'incorrect_email'
  | 'incorrect_login_characters'
  | 'incorrect_name_characters'
  | 'incorrect_tel'
  | 'incorrect_password'
  | null;

interface Field {
  inputName: string;
  regexp: string;
  message: string;
  minSymbol?: number;
  maxSymbol?: number;
}
export type validateInputType = {
  isValid: boolean;
  errors: Error;
};

export function validateInput(value: string, name: string): validateInputType {
  const field: Field | undefined = rulesValidation.find((input) => {
    if (input.inputName === name) {
      return input;
    }
  });

  if (field === undefined) {
    throw Error('Отсутствуют правила валидации для данного поля');
  }

  if (value.length === 0) {
    return { isValid: false, errors: 'empty' };
  }

  if (field.minSymbol && field.maxSymbol) {
    if (value.length < field.minSymbol || value.length > field.maxSymbol) {
      return { isValid: false, errors: 'wrong_number_characters' };
    }
  }

  const regExp: RegExp | undefined = new RegExp(field.regexp);
  if (regExp.test(value)) {
    return { isValid: true, errors: null };
  } else {
    switch (name) {
      case 'email':
        return { isValid: false, errors: 'incorrect_email' };
      case 'login':
      case 'display_name':
        return { isValid: false, errors: 'incorrect_login_characters' };
      case 'first_name':
      case 'second_name':
        return { isValid: false, errors: 'incorrect_name_characters' };
      case 'phone':
        return { isValid: false, errors: 'incorrect_tel' };
      case 'password':
      case 'password_repeat':
        return { isValid: false, errors: 'incorrect_password' };
      case 'message':
        return { isValid: false, errors: 'empty' };
    }
  }

  return { isValid: true, errors: null };
}

export function errorInterpretator(
  errorVal: Error,
  inputName: string
): { message: string | null } {
  const inputRule = rulesValidation.find((input) => {
    if (input.inputName === inputName) {
      return input;
    }
  });
  if (errorVal) {
    switch (errorVal) {
      case 'empty':
        return { message: 'Поле не может быть пустым' };
      case 'wrong_number_characters':
        return {
          message: `Количество символов должно быть от ${
            inputRule!.minSymbol
          } до ${inputRule!.maxSymbol}`,
        };
      case 'incorrect_email':
        return { message: 'Email некорректен, проверьте введенные данные.' };
      case 'incorrect_login_characters':
        return {
          message: 'Поле может состоять только из латиницы, цифр, "-" и "_"',
        };
      case 'incorrect_name_characters':
        return {
          message: 'Поле может состоять только из латиницы, кириллицы и "-"',
        };
      case 'incorrect_tel':
        return { message: 'Телефон некорректен, проверьте введенные данные' };
      case 'incorrect_password':
        return {
          message:
            'Пароль должен содержать хотя бы одну заглавную букву и цифру',
        };
    }
  }
  return { message: null };
}
