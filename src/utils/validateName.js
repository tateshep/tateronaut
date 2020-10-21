export const validateName = (name) => {
  const regexCheck = new RegExp(`^[a-zA-Z]{1,24}$`); // Checks for a name between 1 and 25 chars long, containing only letters
  return regexCheck.test(name);
};

export default validateName;