const selecdetSeatEl =document.getElementById('selecdet-seat');
const totleBookedEl =document.getElementById('totle-booked')
let selectedSeat= []
function handleSelectSate(event){
    const targetElement = event.innerText; 
    //  targetElement.classList.add('bg-red-300');
    selectedSeat.push(event.innerText);
    totleBookedEl.innerText =selectedSeat.length;
    selecdetSeatEl.innerHTML =`<li class="text-base font-normal flex justify-between ">
        <span>${targetElement}</span>
        <span>Econone</span>
        <span>550</span>
    </li>`
    console.log(selectedSeat)
}
