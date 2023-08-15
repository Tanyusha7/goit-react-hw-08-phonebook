import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCurrentUser, logIn, logOut, signUp } from './auth_operations';

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
  state.error = payload;
};

const handleFulfilledSignUp = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.error = null;
};

const handleFulfilledLogIn = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.error = null;
};

const handleFulfilledLogOut = state => {
  state.user = { name: '', email: '' };
  state.token = null;
  state.isLoading = false;
  state.isLoggedIn = false;

  state.error = null;
};

const handleFulfilledGetUser = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.error = null;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  //   reducers: {},
  extraReducers: buider => {
    buider
      .addCase(signUp.fulfilled, handleFulfilledSignUp)
      .addCase(logIn.fulfilled, handleFulfilledLogIn)
      .addCase(logOut.fulfilled, handleFulfilledLogOut)
      .addCase(getCurrentUser.fulfilled, handleFulfilledGetUser)

      .addMatcher(
        isAnyOf(
          signUp.pending,
          logIn.pending,
          logOut.pending,
          getCurrentUser.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          signUp.rejected,
          logIn.rejected,
          logOut.rejected,
          getCurrentUser.rejected
        ),
        handleError
      );
  },
});

export const authReduser = authSlice.reducer;
