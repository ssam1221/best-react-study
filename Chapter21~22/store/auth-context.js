import React, { useCallback, useEffect } from "react";

let logoutTimer;

const AuthContext = React.createContext({
    token: ``,
    isLoggedIn: false,
    login: (token) => {
        this.token = toekn;
    },
    logout: () => {
        this.token = ``;
    }
})

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime;

    return remainingDuration;
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem(`token`);
    const storedexpirationDate = localStorage.getItem(`expirationTime`);

    const remainingTime = calculateRemainingTime(storedexpirationDate)

    if (remainingTime < 3600) {
        localStorage.removeItem(`token`);
        localStorage.removeItem(`expirationTime`);
        return null;
    }

    return {
        token: storedToken,
        duration: storedexpirationDate
    };
}

const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken();

    let initialToken;
    if (tokenData) {
        initialToken = tokenData.token;
    }
    initialToken = localStorage.getItem(`token`);
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;


    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem(`token`);
        clearTimeout(logoutTimer);
    }, []);

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem(`token`, token);
        localStorage.setItem(`expirationTime`, expirationTime);

        const remainingTime = calculateRemainingTime(expirationTime);

        logoutTimer = setTimeout(loginHandler, remainingTime);
    }

    useEffect(() => {
        if (tokenData) {
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData, logoutHandler]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;