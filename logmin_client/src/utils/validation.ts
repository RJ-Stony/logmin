export const isValidEmail = (email: string): boolean => {
  return /\S+@\S+\.\S+/.test(email.trim());
};

export const isValidPassword = (password: string): boolean => {
  return password.trim().length >= 6;
};

export const isMatchingPasswords = (pw1: string, pw2: string): boolean => {
  return pw1 === pw2;
};
