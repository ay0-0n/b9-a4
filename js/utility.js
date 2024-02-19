function updatePrice(){
    let total_price = document.getElementById('total-price');
    let grand_total = document.getElementById('grand-total');
    total_price.innerHTML = total;
    grand_total.innerHTML = grand;
}

function checkCoupon(val){        
    if(val === 'NEW15'){
        return [true, .15];
    }
    if(val === 'Couple20'){
        return [true, .20];
    }
    return [false, 0];
}

function showDiscountInfo(discount){
    discount_info.innerHTML = `<div class="flex flex-row justify-between pt-2">
    <h3 class="text-base font-normal font-inter">Discount</h3>
    <h3 class="text-base font-normal font-inter">-${discount}</h3>
    </div>`;
}

function cancelDiscount(){
    discount_info.innerHTML = '';
    grand = total;
    updatePrice();
}