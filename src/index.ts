import DiscountRules from "./contracts/DiscountRules";
import Product from "./contracts/Product";
import { shoppingList } from "./infrastructure/shoppingList";
import Checkout from "./services/Checkout";
import PromotionRules from "./services/PromotionalRules";

//get our mocked shoppingList
let basket: Product[] = shoppingList;
console.log(basket);

//get our promotionalRules
const discountRules: DiscountRules = PromotionRules;

//creating new instance from the checkout class
const checkout: Checkout = new Checkout(discountRules);

//scanning the products from our basket
checkout.scan(basket);

console.log("Checking out products from our basket : \n");
console.table(basket);

console.log(
  `Total Price after applying promotions : ${checkout
    .CalculateTotal()
    .toFixed(2)}`
);
