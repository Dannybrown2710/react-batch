export const upperCase = (string) => {
    return string.toUpperCase();
}

export const lowerCase = (string) => {
    return string.toLowerCase();
}

const stringReverse = (string) => {
    let revStr = '';
    for(let i = string.length-1; i > 0 ; i--){
        revStr+=string[i];
    }
    return revStr;
}

export default stringReverse;