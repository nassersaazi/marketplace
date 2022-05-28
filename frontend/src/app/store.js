import { configureStore } from '@reduxjs/toolkit';

import { serviceApi } from '../services/serviceApi';

export default configureStore({
  reducer: {
    [serviceApi.reducerPath]: serviceApi.reducer,
    
  },
});