const wordSearch = (letters, word) => { 
  //if (letters.length === 0 ) return false;
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        // console.log(l);       
        if (l.includes(word)) {
            return true;
        }
    }      
    return false;
} 

module.exports = wordSearch