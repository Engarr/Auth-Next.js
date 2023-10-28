type loginInputsValidation = {
  email: string;
  password: string;
  repeatPassword: string;
  isLoginMode: boolean;
};

const isEmailValid = (email: string) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};
const isPasswordValid = (password: string) => {
  const passwordRegex = /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{6,}$/;
  return passwordRegex.test(password);
};

export const authFormsValidation = ({
  email,
  password,
  repeatPassword,
  isLoginMode,
}: loginInputsValidation) => {
  let errorMessage = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  if (!isEmailValid(email)) {
    errorMessage = {
      ...errorMessage,
      email: 'Please enter a valid email address. ',
    };

    if (!isPasswordValid(password)) {
      errorMessage = {
        ...errorMessage,
        password:
          'Password must be at least 6 characters long and contain at least one special character. ',
      };
    }

    if (
      !isLoginMode &&
      isPasswordValid(password) &&
      password !== repeatPassword
    ) {
      errorMessage = {
        ...errorMessage,
        repeatPassword: 'Passwords must be the same ',
      };
    }
  }
  return errorMessage;
};
