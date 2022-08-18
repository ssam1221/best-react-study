import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: (email, password) => { },
    onLogout: () => { }
});

const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem(`isLoggedIn`);
        if (storedUserLoggedInInformation === `1`) {
            setIsLoggedIn(true);
        }

    }, []);
    
    const logoutHandler = () => {
        localStorage.removeItem(`isLoggedIn`);
        setIsLoggedIn(false);
    };

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways

        localStorage.setItem(`isLoggedIn`, `1`);

        setIsLoggedIn(true);

    };

    return <AuthContext.Provider>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;