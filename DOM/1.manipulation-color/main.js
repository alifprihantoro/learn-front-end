// get elemen by id
const cl_red = document.getElementById('btn_merah')

// when function onclick
cl_red.onclick = () => {
  // menambah style
  //  document.body.style.backgroundColor = 'red'
  // menambah class
  //  document.body.setAttribute('class', 'red')
  // toggle class (jika belum ada ditambah jika sudah ada dihapus)
  document.body.classList.toggle ('red')
}


// get element by id + add new btn
const cl_random = document.createElement ('button')
const cl_text = document.createTextNode ('random color')
cl_random.appendChild(cl_text) // menambah btn + text
cl_random.setAttribute('type', 'button') // add type
cl_red.after(cl_random) // menaruh setelah random

// ketika di click
cl_random.addEventListener('click', () => {
  // membuat random angka
  const r = Math.round(Math.random() * 255 + 1)
  const g = Math.round(Math.random() * 255 + 1)
  const b = Math.round(Math.random() * 255 + 1)
  // menambah style color
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})


// managemet colors
const red1 = document.querySelector('input[name=red]') // call input
const blue1 = document.querySelector('input[name=blue]') // call input
const green1 = document.querySelector('input[name=green]') // call input

red1.addEventListener('input' , ()=> {
const r = red1.value
const g = green1.value
const b = blue1.value
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})
green1.addEventListener('input' , ()=> {
const r = red1.value
const g = green1.value
const b = blue1.value
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})
blue1.addEventListener('input' , ()=> {
const r = red1.value
const g = green1.value
const b = blue1.value
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})

// berdasarkan cursor
document.body.addEventListener('mousemove' , (event)=> {
  const xPost = Math.round((event.clientX / window.innerWidth) * 255)
  const yPost = Math.round((event.clientY / window.innerWidth) * 255)
  document.body.style.backgroundColor = `rgb(${xPost},${yPost},0)`
  
} )