export default isYes;

function isYes(str) {
    if(str.toLowerCase() === 'yes' || str.toLowerCase() === 'y' || str.toLowerCase() === 'ye' || str.toLowerCase() === 'y') return true;
    else return false;

}