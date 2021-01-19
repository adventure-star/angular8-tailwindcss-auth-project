export const setLocalToken = (userInfo) => {
    return localStorage.setItem("token", userInfo['token']);
};
export const getLocalToken = () => {
    return localStorage.getItem("token") != null
        ? localStorage.getItem("token")
        : null;
};

export const getUser = () => {
    
    let token: string = localStorage.getItem("token");

    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;

    if (token != null && (Math.floor((new Date).getTime() / 1000)) < expiry) {
        return true
    } else {
        return false;
    }

}
