// splice <awal, akhir, insert> (menghapus elemen lalu bisa ditambah elemen baru)
const arr = ['Alief', 'Prihantoro', 'MuryP', 'halo']
arr.splice(1,2, 'Dodo','Dika')
console.log(arr.join(' - '))

// slice <awal, akhir> (menampilkan elemen awal - akhir)
const arr2 = arr.slice(0,1)
console.log(arr2.join(' - '))