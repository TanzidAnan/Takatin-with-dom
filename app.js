const selecdetSeatEl = document.getElementById('selecdet-seat');
const totleBookedEl = document.getElementById('totle-booked');
const availableSeat = document.getElementById('available-seat');
const totlePriceEl = document.getElementById('totle-price');
const couponInput = document.getElementById('coupon-field')
const couponButton = document.getElementById('coupon-btn')
let selectedSeat = [];
let totlePrice = 0
function handleSelectSate(event) {
    const value = event.innerText;

    if (selectedSeat.includes(value)) {
        alert('Seat already Booking');
        return;
    }
    else if(selectedSeat.length<4) {
        const targetElement = event.innerText;
        //  targetElement.classList.add('bg-red-300');
        selectedSeat.push(event.innerText);
        totleBookedEl.innerText = selectedSeat.length;

        const availableSeatValue = parseInt(availableSeat.innerText);
        const availableSeatNumber = availableSeatValue - 1;
        availableSeat.innerText = availableSeatNumber



        selecdetSeatEl.innerHTML += `<li class="text-base font-normal flex justify-between ">
        <span>${targetElement}</span>
        <span>Econone</span>
        <span>550</span>
    </li>`
        totlePrice += 550;
        totlePriceEl.innerText = totlePrice.toFixed(2);

        if (selectedSeat.length > 3) {
            couponInput.removeAttribute('disabled')
            couponButton.removeAttribute('disabled')
        }
    }
    else{
        alert('maximun seat select');
        return;
    }

}
