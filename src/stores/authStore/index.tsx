import { create } from "zustand";

const authStore = (set)=>({
    authUser: null,
    isLoggedIn: false,

    setIsLoggedIn:(loggedIn: boolean)=>{
        set((state) => ({
          ...state,
          isLoggedIn: loggedIn,
        }));
    },


})

const useAuthStore = create(authStore);
export default useAuthStore;
