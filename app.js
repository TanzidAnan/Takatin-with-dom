const selecdetSeatEl =document.getElementById('selecdet-seat');
const totleBookedEl =document.getElementById('totle-booked');
const availableSeat =document.getElementById('available-seat')
let selectedSeat= []
function handleSelectSate(event){
    const targetElement = event.innerText; 
    //  targetElement.classList.add('bg-red-300');
    selectedSeat.push(event.innerText);
    totleBookedEl.innerText =selectedSeat.length;

    const availableSeatValue =parseInt(availableSeat.innerText);
    const availableSeatNumber =availableSeatValue-1;
    availableSeat.innerText =availableSeatNumber



    selecdetSeatEl.innerHTML =`<li class="text-base font-normal flex justify-between ">
        <span>${targetElement}</span>
        <span>Econone</span>
        <span>550</span>
    </li>`
    console.log(selectedSeat)
}
