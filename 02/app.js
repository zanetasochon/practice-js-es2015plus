const inputList = document.getElementsByClassName("cart__quantity");
console.log(inputList);


//pobieram cene i umieszczm ją w tablicy po które będzie mozna iterować
const getInputPriceValue = [...inputList].forEach((input) => {

    const { value } = input; //destrukturyzacja obiekty i tablice
    console.log(value);
    console.log(input);
})


    const calcButton = document.querySelector(".cart__btn-calculate");


    const sumCalc = () => {
     const arr = []
        //pobieram cene i umieszczm ją w tablicy po które będzie mozna iterować
     const getInputPriceValue = [...inputList].forEach((input) => {
     const { value, dataset } = input; 
        const sum = value * dataset.price 
     arr.push(sum)
})

    const initialValue = 0
    const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
    );
  const totalPrice = document.querySelector(".cart__total-price")
  totalPrice.innerHTML = `${sumWithInitial}`
}

calcButton.addEventListener("click", sumCalc)
