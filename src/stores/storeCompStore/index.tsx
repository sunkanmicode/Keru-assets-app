import { create } from "zustand";

const storeCompStore = (set) => ({
  data: [],
  loading: false,

//   setIsLoggedIn: (loggedIn: boolean) => {
//     set((state) => ({
//       ...state,
//       isLoggedIn: loggedIn,
//     }));
//   },
});

const useStoreCompStore = create(storeCompStore);
export default useStoreCompStore;
