let nums = [1, 2, 3, 4, 5];

let values = nums.reduce((sum, value) => sum + value, 0)

console.log(values);

// Real life Example 

Cart = [
    {
        product: "shoes",
        price: 2999
    },
    {
        product: "jeans",
        price: 2299
    },
    {
        product: "shirt",
        price: 1999
    },
    {
        product: "Face Wash",
        price: 999
    }
]
const cartprice = Cart.reduce((total,product) => total+product.price,0);

console.log(cartprice);