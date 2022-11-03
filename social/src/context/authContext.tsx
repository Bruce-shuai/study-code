import { createContext, useEffect, useState } from "react";

export interface UserInfo {
  id: number;
  name: string;
  profilePic: string;
}

interface AuthContextConfig {
  currentUser: UserInfo;
  login: () => void;
}

const initialUser = {
  id: -1,
  name: '',
  profilePic: '',
}
export const AuthContext = createContext<AuthContextConfig>({
  currentUser: initialUser,
  login: () => {}
});

export const AuthContextProvider = ({ children }: {children: JSX.Element}) => {
  const [currentUser, setCurrentUser] = useState<UserInfo>(
    JSON.parse(localStorage.getItem("user") as string) || initialUser
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "John Doe",
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};