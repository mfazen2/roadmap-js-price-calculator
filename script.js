function calculateDiscount(price, discountPercent){
    return price * discountPercent / 100
}

function calculateTax(priceAfterDiscount, taxPercent){
    return priceAfterDiscount * taxPercent/100
}

function calculateFinalPrice(price, discountPercent, taxPercent){
    const discountPrice = (price - calculateDiscount(price,discountPercent));
    return discountPrice + calculateTax(discountPercent, taxPercent);
}

function createPriceSummary(price, discountPercent, taxPercent){
    const discount = calculateDiscount(price, discountPercent);
    const tax = calculateTax(price-discount, taxPercent);
    return {
        "price": price,
        "discount": discount,
        "tax": tax,
        "finalPrice": price-discount+tax
    }
}



console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));