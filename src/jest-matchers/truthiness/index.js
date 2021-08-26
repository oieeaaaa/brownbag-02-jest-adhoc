export const validateLogin = (creds) => {
  // missing creds
  if (!creds?.email || !creds?.password) return false;

  // RFC2822 email validator compliant.
  const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g;

  // Common password validation
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/g;

  // validate email
  if (!emailRegex.test(creds.email)) {
    console.error('Invalid Email');
    return false;
  }

  // validate password
  if (!passwordRegex.test(creds.password)) {
    console.error('Invalid Password');
    return false;
  }

  return true;
}
