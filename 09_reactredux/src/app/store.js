import { configureStore } from '@reduxjs/toolkit';

import todoReducer from '../features/todo/todo'

export const Store = configureStore({
  reducer:todoReducer
})

