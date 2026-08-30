function orderFood(food, price){
    let name = prompt("Enter your name");
    if(name==null||name==""){
        alert("Please enter your name.");
        return;
    }
     let quantity = prompt("Enter quantity:");

    if (quantity == null || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    let total = price * quantity;

    alert(
        "🎉 Order Confirmed!\n\n" +
        "Customer: " + name +
        "\nFood: " + food +
        "\nQuantity: " + quantity +
        "\nTotal: ₹" + total
    );
}