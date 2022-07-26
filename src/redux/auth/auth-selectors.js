const getIsLoggedIn = state => state.auth.isLoggedIn;
const getLoading = state => state.auth.isLoading;
const getUsername = state => state.auth.user.name;
const getError = state => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getLoading,
  getError,
};

export default authSelectors;
