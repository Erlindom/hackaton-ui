import React, { useState, createContext, useContext, ReactNode } from 'react';

// Define the shape of the UserContext
type UserContextType = {
  role: string;
  setRole: (role: string) => void;
}

// Create the UserContext
const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook to use the UserContext
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

// UserProvider component to wrap the Login component
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<string>('Student'); // Default role is 'Student'

  return (
    <UserContext.Provider value={{ role, setRole }}>
      {children}
    </UserContext.Provider>
  );
};