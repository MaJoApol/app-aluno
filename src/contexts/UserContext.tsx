import { createContext, useContext, useState } from 'react';

const UserContext = createContext(UserProvider);

type User = {
    name: string;
    username: string;
    email: string;
    document: string;
    phoneNumber: string; 
};

export function UserProvider({ children }) {
    const [user, setUser] = useState<User>({
        name: 'PauloJunto TudoCesar',
        username: 'PauloCesar',
        email: 'paulojunto@email.com',
        document: '120.120.120-12',
        phoneNumber: '(48) 99898-9898'
    }); 

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);