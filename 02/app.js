const inputList = document.getElementsByClassName("cart__quantity");
console.log(inputList);


//pobieram cene i umieszczm ją w tablicy po które będzie mozna iterować
const getInputPriceValue = [...inputList].forEach((input) => {

    const { value } = input; //destrukturyzacja obiekty i tablice
    console.log(value);
    console.log(input);
})


    const calcButton = document.querySelector(".cart__btn-calculate");

    const initialValue = 0
    const sumCalc = () => {
        //pobieram cene i umieszczm ją w tablicy po które będzie mozna iterować
        const arr = [...inputList].map((input) => {
          const { value, dataset } = input; 
          const sum = value * dataset.price 
          return  sum
        }).reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          initialValue,
          );

   
  const totalPrice = document.querySelector(".cart__total-price")
  totalPrice.innerHTML = `${arr}`
}


calcButton.addEventListener("click", sumCalc)
