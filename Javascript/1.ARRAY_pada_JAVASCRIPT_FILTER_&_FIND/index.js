const array = [1,4,3,9,5,2,8]
const array2 = array.filter((x)=> {
//  return x > 5 // return 9-8
//  return x == 5 // return 5
  return x == 7 // return null
})
// console.log(array2.join(' - '))
console.log(array2)
