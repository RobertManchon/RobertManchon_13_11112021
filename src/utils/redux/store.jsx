import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'utils/redux/userSlice';

export default configureStore({
    reducer: {
        user: userReducer,
    },
});
