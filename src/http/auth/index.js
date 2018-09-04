import app from '../../utils/firebase';

export const loginRequest = async ({ login, password }) => {
  return await app
    .auth()
    .signInWithEmailAndPassword(login, password)
    .then(data=> console.log(data))

};

export const signupRequest = async ({ login, password }) => {
  return await app
    .auth()
    .createUserWithEmailAndPassword(login, password);

};
