export const useGetUserInfo = () => {
    const userJson = localStorage.getItem("auth");
    const currentUser = userJson !== null ? JSON.parse(userJson) : {};
      const { name, profilePhoto, userID, isAuth } = currentUser
    
      return { name, profilePhoto, userID, isAuth };
    };