export const checkAuthentication = ({ auth: { userSession } }) => {
  return userSession !== null;
};

export const getUser = ({ auth: { user } }) => {
  return user;
};
