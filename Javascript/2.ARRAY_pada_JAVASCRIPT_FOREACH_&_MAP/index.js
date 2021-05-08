const array = [1,4,3,9,5,2,8]
const name = ['Alief', 'Prihantoro', 'MuryP']

// =============================
// not reccomended
/*
for (var i = 0; i < array.length;i++ )
  console.log(array[i])
*/
  
// =============================
// forEach (for simple code) 
/*
array.forEach( (e) => {
  console.log(e)
})
*/

// =============================
// looping with 2 arrgument
/*
name.forEach( (e,i) => {
  console.log(`orang ke-${i+1} adalah ${e}` )
})
*/

// =============================
// map (untuk mengatasi kekurangan forEach yang tidak bisa mengembalikan angka)
/*
const array2 = array.map( (e) => {
  return e*2
})
console.log (array2.join(' - '))
*/


// =============================
// sortir array (0-9)
/*
array.sort()
console.log(array.join(' - '))
*/

// =============================
// sortir array (all)
/*
array3 = [2,4,3,1,6,9,7,15,19,35,25,10,20]
array3.sort( (a,b) => {
  return a-b
})
console.log(array3.join(' - '))
*/