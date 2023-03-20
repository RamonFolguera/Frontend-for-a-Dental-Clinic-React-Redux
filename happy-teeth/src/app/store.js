
import { configureStore } from '@reduxjs/toolkit';
import detailsSlice from '../layout/detailsSlice';
import userSlice from '../layout/userSlice';


export default configureStore({
    reducer: {
        user: userSlice,
        details: detailsSlice
    }
    
});