
export const validateData=(email,password)=>{
    const isValidEmail= /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isValidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isValidEmail) return ("Email ID is not valid");
    if(!isValidPassword) return ("Password is not valid");

    return null;
}