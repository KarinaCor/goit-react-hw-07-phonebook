import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/filter.slice';

// import {
  
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import { contactsSlice } from './contact/contact.reducer';





// const middleware = getDefaultMiddleware => [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   contactsApi.middleware,
// ];

export const store = configureStore({
  reducer: {
   
    [filterSlice.name]: filterSlice.reducer,
    [contactsSlice.name] : contactsSlice.reducer
    
  },
// middleware
});