// Here we will implement 4 rules :
// 1- if the total price exceeded 50 EUR the client will get 10%
// 2- if the client buys two pizza or more the customer have one for free
// 3- if the client buys two t-shirts, the price of each will drop 5 EUR
// 4- if the client has a loyalty card then he will have 3% discount on his purchase

import DiscountRules from "../contracts/DiscountRules";
import Product from "../contracts/Product";

const PromotionRules: DiscountRules = {
  TotalPriceExceededRule: (totalPrice: number): number => {
    if (totalPrice >= 50) totalPrice *= 0.9;

    return totalPrice;
  },

  pizzaRule: (shoppingList: Product[]): Product[] => {
    let pizzaCount = shoppingList.filter((prd: Product) => prd.id === "001");
    if (pizzaCount.length >= 2) {
      let pizzas = 0;
      for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].id == "001" && pizzas == 2) {
          let freePizza: Product = Object.assign({}, shoppingList[i]);
          freePizza.price = 0.0;
          shoppingList[i] = freePizza;
        } else if (shoppingList[i].id == "001") {
          pizzas++;
        }
      }
    }
    return shoppingList;
  },

  tshirtRule: (shoppingList: Product[]): Product[] => {
    if (shoppingList.filter((prd: Product) => prd.id === "002").length >= 2) {
      shoppingList = shoppingList.map((prd: Product) => {
        let discountedTshirt: Product = Object.assign({}, prd);
        discountedTshirt.price =
          discountedTshirt.id === "002" ? 20.0 : discountedTshirt.price;

        return discountedTshirt;
      });
    }
    return shoppingList;
  },

  loyalClientRule: (LoyaltyCardExist: boolean, totalPrice: number): number => {
    if (LoyaltyCardExist) {
      return (totalPrice *= 0.03);
    }
    return totalPrice;
  },
};

export default PromotionRules;
