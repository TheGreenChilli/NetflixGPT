export const checkValidData = (name, email, password, isSignInForm) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(!isEmailValid) return "Email ID is not Valid";
  if(!isPasswordValid) return "Password is not valid";
 
  if (!isSignInForm && name.trim().length < 3) return "Full Name must be at least 3 characters";
  return null;
};

