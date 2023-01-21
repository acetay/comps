import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    //look at what pathname the user is at
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    // watch for popstate event and call handler
    window.addEventListener("popstate", handler);

    //whenever there is a window Eventlistener, setup a remove
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ navigate, currentPath }}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationContext;
