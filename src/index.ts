import DiscountRules from "./contracts/DiscountRules";
import Product from "./contracts/Product";
import { shoppingList } from "./infrastructure/shoppingList";
import Checkout from "./services/Checkout";
import PromotionRules from "./services/PromotionalRules";

let basket: Product[] = shoppingList;
console.log(basket);

const discountRules: DiscountRules = PromotionRules;

const checkout: Checkout = new Checkout(discountRules);

checkout.scan(basket);

console.log("Checking out products from our basket : \n");
console.table(basket);

console.log(
  `Total Price after applying promotions : ${checkout.CalculateTotal()}`
);
