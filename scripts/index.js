// All Seat function

const allSeat = document.getElementsByClassName('seat-color');
let countAdd = 0;
let countSub = 40;

for(const seat of allSeat){
    seat.addEventListener("click", function(e){
        countAdd = countAdd +1;
        countSub = countSub - 1;
        document.getElementById('seat-count').innerText = countAdd;
        document.getElementById('seat-left').innerText = countSub;
    })
}
