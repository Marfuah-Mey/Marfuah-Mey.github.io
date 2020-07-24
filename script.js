// Agar layar dapat menampilkan angka yang benar saat mengklik suatu tombol
// Perbarui atribut nilai dari tag <input>. Definisikan function "updateScreen" untuk memperbarui nilai
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
  calculatorScreen.value = number
}


const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    console.log("number is pressed");
    console.log(event.target.value);
// (30) Jalankan function "updateScreen" menggunakan event.target.value sebagai argument saat tombol di klik
    updateScreen(event.target.value);
  })
  console.log(number);
})


// (33) Definisikan 3 variable prevNumber, currentNumber dan calculationOperator
let prevNumber = ''
let calculationOperator =''
let currentNumber = '0'

// (36) Definisikan function "inputNumber"

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number
  } else {
    currentNumber += number
  }
}

// Ubah argument "updateScreen" menjadi currentNumber
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})


// Menambah click event ke operator tombol
// Ambil element <button> menggunakan class operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  })
})

// (39) Definisikan function inputOperator
const inputOperator = (operator) => {
  prevNumber = currentNumber
  calculationOperator = operator
  currentNumber = ''
}
// Mengaktifkan fungsi kalkulasi ke aplikasi calculatornya
// Tambahkan click event, gunakan querySelector
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
  console.log('equal button is pressed');
// jalankan function Calculate saat tombol sama dengan (=) di klik
  calculate();
  updateScreen(currentNumber);
});

// (44) Definisikan function calculate
const calculate = () => {
  let result = ''
  switch(calculationOperator) {
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break
    case '-':
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break
    case '*':
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break
    case '/':
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break
    default:
      return
  }
  currentNumber = result;
  calculationOperator = ''
}

// Definisikan dan jalankan function clearAll
const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
  console.log('AC button is pressed');
// (51) Jalankan function saat tombol AC di klik dan perbarui layar tampilan
  clearAll()
  updateScreen(currentNumber)
});

// Definisikan function "clearAll"
const clearAll = () => {
  prevNumber = ''
  calculationOperator = ''
  currentNumber = '0'
}

// Kalkulasi angka desimal
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
  console.log(event.target.value);
// (55) Jalankan function decimal saat titik desimal di klik dan perbarui layar tampilan
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
})

// Definisikan function "inputDecimal" dan tambahkan titik desimal ke currentNumber
inputDecimal = (dot) => {
  if(currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}

const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', (event) => {
  console.log('% button is pressed');
  calculate(currentNumber /= 100);
  updateScreen(currentNumber);
});
