import { configureStore } from '@reduxjs/toolkit'
// import userReducer from './redux/userSlice'
import userReducer from './user/userSlice';


export const store = configureStore({
  reducer: {
    user: userReducer
  },
})
