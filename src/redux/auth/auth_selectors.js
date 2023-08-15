export const selectAuth = state => state.auth.user.name;
export const selectLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;
