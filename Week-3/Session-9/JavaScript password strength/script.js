// Your solution goes here 
function isStrongPassword(password) {
    if (password.length < 8)
        return false    
    if (password.search("password") == 0)
        return false
    var regex = new RegExp("(?=.*[A-Z])")
    if (!regex.test(password))
        return false
    
    return true;
}

isStrongPassword("Qwerty")          // false - Too short 
isStrongPassword("passwordQwerty")  // false - Contains "password" 
isStrongPassword("qwerty123")       // false - No uppercase characters 
isStrongPassword("Qwerty123")       // true