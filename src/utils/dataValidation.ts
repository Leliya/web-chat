type inputRules = {
  inputName: string,
  regexp: string,
  message: string,
  minSymbol?: number,
  maxSymbol?: number
}

export const rulesValidation:inputRules[] = [
  {
    inputName: "email",
    "regexp": "^([\\w\\-_\\.~\\*\\'()!]+)@([\\w\\-\\.]{2,255})\\.([A-Za-z]{2,6})$",
    "message": "Email некорректен, проверьте введенные данные."
  },
  {
    "inputName": "login",
    "regexp": "^[A-Za-z0-9]*[A-Za-z]+[A-Za-z0-9]*$",
    "message": "Поле может состоять только из латиницы, цифр, \"-\" и \"_\"",
    "minSymbol": 3,
    "maxSymbol": 20
  },
  {
    "inputName": "display_name",
    "regexp": "^[A-Za-z0-9]*[A-Za-z]+[A-Za-z0-9]*$",
    "message": "Поле может состоять только из латиницы, цифр, \"-\" и \"_\"",
    "minSymbol": 3,
    "maxSymbol": 20
  },
  {
    "inputName": "first_name",
    "regexp": "^[A-ZА-Я]{1}[a-zа-я_-]+$",
    "message": "Поле может состоять только из латиницы, кириллицы и \"-\""
  },
  {
    "inputName": "second_name",
    "regexp": "^[A-ZА-Я]{1}[a-zа-я_-]+$",
    "message": "Поле может состоять только из латиницы, кириллицы и \"-\""
  },
  {
    "inputName": "phone",
    "regexp": "^\\+?[\\d\\s]{10,15}$",
    "message": "Телефон некорректен, проверьте введенные данные.",
    "minSymbol": 10,
    "maxSymbol": 15
  },
  {
    "inputName": "password",
    "regexp": "^.*(?=.*[A-Z]).*(?=.*\\d).*$",
    "message": "Пароль должен содержать хотя бы одну заглавную букву и цифру",
    "minSymbol": 8,
    "maxSymbol": 40
  },
  {
    "inputName": "password_repeat",
    "regexp": "^.*(?=.*[A-Z]).*(?=.*\\d).*$",
    "message": "Пароль должен содержать хотя бы одну заглавную букву и цифру",
    "minSymbol": 8,
    "maxSymbol": 40
  },
  {
    "inputName": "message",
    "regexp": ".+",
    "message": "Поле не может быть пустым"
  }
]
