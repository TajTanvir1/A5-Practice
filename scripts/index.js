// All Seat function

const allSeat = document.getElementsByClassName('seat-color');
let countAdd = 0;
let countSub = 40;

for (const seat of allSeat) {

    seat.addEventListener("click", function (e) {
        if (countAdd > 3) {
            // alert('Invalid - You can purchase only 4 tickets');
            seat.removeEventListener("click");
            seat.classList.add('bg-[#F7F8F8]', 'text-[#03071280]');
            seat.classList.remove('seat-color');
        }
        countAdd = countAdd + 1;
        countSub = countSub - 1;
        document.getElementById('seat-count').innerText = countAdd;
        document.getElementById('seat-left').innerText = countSub;


        seat.classList.add('bg-[#1DD100]', 'text-white', 'pointer-events-none', 'btn');


        const seatNo = e.target.innerText;
        const selectedContainer = document.getElementById('selected-container');

        // ---------------------------------- Seat info update on click
        const economy = "Economy";
        const price = 550;

        const div = document.createElement("div");
        const p = document.createElement("p");
        p.innerText = seatNo;
        const p2 = document.createElement("p");
        p2.innerText = economy;
        const p3 = document.createElement("p");
        p3.innerText = price;

        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div)
        div.classList.add('flex', 'justify-between', 'my-2');

        // ----------------------------------- Total Price update
        const totalPrice = document.getElementById('total-price');
        totalPriceCount = price * countAdd;

        totalPrice.innerText = totalPriceCount;


        // ----------------------------------- Grand Total Price
        const grandTotalPrice = document.getElementById('grand-total');
        grandTotalPriceCount = totalPriceCount;
        grandTotalPrice.innerText = grandTotalPriceCount;

        // ----------------------------------- Coupon conditions
        if (totalPriceCount >= 2200) {
            const inputBtn = document.getElementById('input-btn');
            inputBtn.addEventListener('click', function () {
                // input value
                const couponInput = document.getElementById('coupon-input').value;
                
                if (couponInput === 'NEW15') {
                    grandTotalPriceCount = totalPriceCount * .85;
                    grandTotalPrice.innerText = grandTotalPriceCount;
                    const couponInputContainer = document.getElementById('coupon-container');
                    couponInputContainer.classList.add('hidden');
                }
                else if (couponInput === 'Couple 20') {
                    grandTotalPriceCount = totalPriceCount * .80;
                    grandTotalPrice.innerText = grandTotalPriceCount;
                    const couponInputContainer = document.getElementById('coupon-container');
                    couponInputContainer.classList.add('hidden');
                }
                else if(couponInput !== 'NEW15' || couponInput !== 'Couple 20') {
                    couponInput = "";
                }
            })
        }



    })
}


const passengerName = document.getElementById('passenger-name').value;
const passengerNumber = document.getElementById('passenger-number').value;
const modalBtn = document.getElementById('modal-btn');

if (passengerName !== '') {
    modalBtn.classList.add('hidden')
}