export const validateEmail = (email) => {
  const regexCheck = new RegExp(`^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$`); // Checks for a name between 1 and 25 chars long, containing only letters
  return regexCheck.test(email);
};

export default validateEmail;