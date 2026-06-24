import { createContext, useContext, useState } from "react";
import type { User } from "../types/userType";

type UserContextType = {
  user: User;
  updateUser: (updates: Partial<User>) => void;
};

const STORAGE_KEY = "app-aluno:user";

const defaultUser: User = {
  name: "Maria Joana Apolinario Ceron",
  username: "MariaJoana",
  email: "mariajoana@email.com",
  document: "120.120.120-12",
  phoneNumber: "(48) 99898-9898",
  githubUsername: "MajoApol",
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as User) : defaultUser;
    } catch {
      return defaultUser;
    }
  });

  const updateUser = (updates: Partial<User>) => {
    setUser((prev) => {
      const next = { ...prev, ...updates };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used inside UserProvider");
  return ctx;
}
