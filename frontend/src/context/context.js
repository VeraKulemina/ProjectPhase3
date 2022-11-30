import React, {useState} from "react";

// create the context
const UserContext = React.createContext();

// create a provider component
function UserProvider({ children }) {
  const [user, setUser] = useState({name: "Greg", id: 1, address: "Hello", img_url: "https://assets.londonist.com/uploads/2018/10/i875/astrology_shop.jpg"});
  return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };