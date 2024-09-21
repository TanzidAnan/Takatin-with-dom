const selecdetSeatEl =document.getElementById('selecdet-seat')

function handleSelectSate(event){
    console.log(event.innerText);
    selecdetSeatEl.innerHTML =`<li class="text-base font-normal flex justify-between ">
        <span>${event.innerText}</span>
        <span>Econone</span>
        <span>550</span>
    </li>`
}