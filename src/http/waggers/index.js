import app from '../../utils/firebase';

export const getWagers = async () => {
  const wagers = [];
  await app
    .firestore()
    .collection('wagers')
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((wager) => {
        wagers.push(wager.data());
      });
    });
  return wagers;
};

export const addWagers = async ({ login, password }) => {
  return await app
    .auth()
    .createUserWithEmailAndPassword(login, password);

};
