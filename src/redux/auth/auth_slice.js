import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, logOut, signUp } from './auth_operations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
};

const handleFulfilledSignUp = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.error = null;
};

const handleFulfilledLogOut = (state, { payload }) => {
  state.user = { name: '', email: '' };
  state.token = null;
  state.isLoading = false;
  state.isLoggedIn = false;

  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  //   reducers: {},
  extraReducers: buider => {
    buider
      .addCase(signUp.fulfilled, handleFulfilledSignUp)
      .addCase(logIn.fulfilled, handleFulfilledSignUp)
      .addCase(logOut.fulfilled, handleFulfilledLogOut)

      .addMatcher(
        isAnyOf(signUp.pending, logIn.pending, logOut.pending, handlePending)
      )
      .addMatcher(
        isAnyOf(signUp.rejected, logIn.rejected, logOut.rejected),
        handleError
      );
  },
});

export const authReduser = authSlice.reducer;
