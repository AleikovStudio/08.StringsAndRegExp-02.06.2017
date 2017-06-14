function restaurantBill(bill) {
    //let items = bill.filter(x=>!Number(x));
    let items = bill.filter((x, i)=>i % 2 == 0);
    //let sum = bill.filter(x=>Number(x))
    let sum = bill.filter((x, i)=>i % 2 != 0)
        .map(Number)
        .reduce((a, b)=>a + b);
    console.log(`You purchased ${items.join(", ")} for a total sum of ${sum}`);
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);