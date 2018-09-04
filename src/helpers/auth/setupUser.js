import { sessionService } from 'redux-react-session';

export const setupUser = ( ...user ) => {
  const profile = {
    id: user[0],
    email: user[1],
  };

  return sessionService.saveSession(user[2])
    .then(() => sessionService.saveUser(profile));
};
