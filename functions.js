

let products = [

    {
        id: "15215",
        name: "25' Garden Hose",
        price: 9.50,
        quantity: 1,
        department: "garden"
    },
    {
        id: "15123",
        name: "Bag of Garden Soil",
        price: 5.00,
        quantity: 1,
        department: "garden"
    },
    {
        id: "15312",
        name: "Shovel",
        price: 12.00,
        quantity: 1,
        department: "garden"
    },
    {
        id: "15215",
        name: "Screwdriver",
        price: 4.50,
        quantity: 0,
        department: "tool"
    },
    {
        id: "15215",
        name: "Corded Drill",
        price: 124.50,
        quantity: 1,
        department: "tool"
    },
    {
        id: "15215",
        name: "Pack of 50 Screws",
        price: 8.50,
        quantity: 2,
        department: "hardware"
    },
    {
        id: "15215",
        name: "1/8\" washers",
        price: 4.50,
        quantity: 1,
        department: "hardware"
    }

];


let chosenDepartment = "";

function renderProducts() {
    let html = "";   
    
    html = products.filter(function (product) {
        return product.quantity > 0;
    }).filter(function (product) {
        return (chosenDepartment) ? product.department === chosenDepartment : true
    }).map(function (product) {
        return `
            <li>
                <h3>${product.name}</h3>
                <div>Price: $${product.price}</div>
            </li>
            `
    }).reduce(function (content, item) {
        return content + item;
    });

    let elem = document.getElementById("productList");
    elem.innerHTML = html;
}

window.onload = () => {
    renderProducts(products);
    document.getElementById("showAll").onclick = function () {
        chosenDepartment = "";
        renderProducts();
    }
    document.getElementById("showHardware").onclick = function () {
        chosenDepartment = "hardware";
        renderProducts();
    }
    document.getElementById("showGarden").onclick = function () {
        chosenDepartment = "garden";
        renderProducts();
    }
    document.getElementById("showTools").onclick = function () {
        chosenDepartment = "tool";
        renderProducts();
    }
}

 // 
    /*
    using the product array

    Perform a filter, a map, and a reduce function. (Just like in the reading!)

    The html you create for each item should have:
    an outer <li>
    an <h3> title of the item
    and a price

    There are two filters to be applied!
    First, do not show out of stock items! If the quantity is zero then
    do not display the item.

    Secondly, you ahve to apply the filter.  
    The Buttons are already wired up, so when you click a button it will 
    set chosenDepartment.  If the item's department matches the 
    chosenDepartment, then display it.

    But watch out for the showAll case! If the chosenDepartment is blank,
    then you should show all items!  (That are in stock, of course)

    Hint: You can do this within one filter function, or you can have 
    multiple filter functions!  This can be very cleanly done with two 
    filter functions, one for checking if it's in stock, the other for checking
    the chosenDepartment.
    */