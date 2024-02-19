let seat_cont = document.getElementById('seat-container');
let seat_count = document.getElementById('seat-count');
let total_selected = document.getElementById('total-selected');
let ticket_data = document.getElementById('ticket-data');
let apply_btn = document.getElementById('apply-btn');
let discount_info = document.getElementById('discount-info');
let coupon_input = document.getElementById('coupon-input');
let coupon_section = document.getElementById('coupon-section');
let submit_btn = document.getElementById('submit-btn');

let checker = {
    'A1': false,
    'A2': false,
    'A3': false,
    'A4': false,
    'B1': false,
    'B2': false,
    'B3': false,
    'B4': false,
    'C1': false,
    'C2': false,
    'C3': false,
    'C4': false,
    'D1': false,
    'D2': false,
    'D3': false,
    'D4': false,
    'E1': false,
    'E2': false,
    'E3': false,
    'E4': false,
    'F1': false,
    'F2': false,
    'F3': false,
    'F4': false,
    'G1': false,
    'G2': false,
    'G3': false,
    'G4': false,
    'H1': false,
    'H2': false,
    'H3': false,
    'H4': false,
    'I1': false,
    'I2': false,
    'I3': false,
    'I4': false,
    'J1': false,
    'J2': false,
    'J3': false,
    'J4': false,
};
let total= 0;
let grand= 0;

let count = 0;


if (count == 0){
    seat_count.innerText = 40;
    total_selected.innerText = 0;
}

seat_cont.addEventListener('click', function(e){
    const selected_id = e.target.id;
    if(!Object.keys(checker).includes(selected_id)){
        return;
    }
    if(checker[selected_id] == false){
        if(count == 4){
            alert('You can only select upto 4 seats');
            return;
        }
        e.target.style.backgroundColor = "#1DD100";
        checker[selected_id] = true;
        count++;
        seat_count.innerText = parseInt(seat_count.innerText) - 1;
        total_selected.innerText = parseInt(total_selected.innerText) + 1;
        ticket_data.innerHTML += `<div id="data-${selected_id}"class="flex flex-row justify-between">
        <p class="font-inter text-base text-txt-small3 font-light">${selected_id}</p>
        <p class="font-inter text-base text-txt-small3 font-light">Economy</p>
        <p class="font-inter text-base text-txt-small3 font-light">500</p>
        </div>`;
        total += 500;
        grand = total;
        updatePrice();

        if (count === 4) {
            coupon_input.disabled = false;
            apply_btn.disabled = false;
            apply_btn.classList.remove('bg-slate-600');
            apply_btn.classList.add('bg-primary');
            apply_btn.classList.add('hover:bg-green-600');
        }
        
        if (count>=1){
            submit_btn.disabled = false;
        }
    }
    else{
        e.target.style.backgroundColor = "#F7F8F8";
        checker[selected_id] = false;
        count--;
        seat_count.innerText = parseInt(seat_count.innerText) + 1;
        total_selected.innerText = parseInt(total_selected.innerText) - 1;

        const dataToRemove = document.getElementById(`data-${selected_id}`);
        dataToRemove.remove();

        total -= 500;
        grand = total;
        updatePrice();

        if (count !== 4) {
            coupon_input.disabled = true;
            apply_btn.disabled = true;
            apply_btn.classList.remove('bg-primary');
            apply_btn.classList.remove('hover:bg-green-600');
            apply_btn.classList.add('bg-slate-600');
            coupon_section.classList.remove('hidden')
            cancelDiscount();
        }

        if (count<=1){
            submit_btn.disabled = true;
        }
        
    }
});


apply_btn.addEventListener('click', function(){
    let [res,discount] = checkCoupon(coupon_input.value);
    if(res){
        grand = total - (total * discount);
        updatePrice();
        showDiscountInfo(total * discount);
        coupon_section.classList.add('hidden');
    }
    else{
        alert('Invalid coupon');
    }
    
});

submit_btn.addEventListener('click', function() {
    window.open('modal.html');
});