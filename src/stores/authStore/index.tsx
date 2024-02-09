import { create } from "zustand";

const authStore = (set) => ({
  authUser: null,
  isLoggedIn: false,
  authDataInfo: {
    email: "",
    code: "",
    transactionPin: "",
  },

  setAuthUser: (user: any) => {
    set((state) => ({
      ...state,
      authUser: user,
    }));
  },

  setIsLoggedIn: (loggedIn: boolean) => {
    set((state) => ({
      ...state,
      isLoggedIn: loggedIn,
    }));
  },
  setAuthDataInfo: (data) => {
    set((state) => ({
      ...state,
      authDataInfo: { ...state.authDataInfo, ...data },
    }));
  },
});

const useAuthStore = create(authStore);
export default useAuthStore;
