import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'marvel-api-consumer',
      storage,
      whitelist: ['auth', 'characters'],
    },
    reducers
  );

  return persistedReducer;
};
