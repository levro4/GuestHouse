import {useState, createContext, useEffect} from 'react';

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [token, setToken] = useState(null);
  
      return <UserContext.Provider value = {
          {
            token,
            setToken,
          }
      }>{children}</UserContext.Provider>
  }
  
  export default UserContext;