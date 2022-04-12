import DiscountRules from "../contracts/DiscountRules";
import Product from "../contracts/Product";

class Checkout {
  _shoppingList: Product[] = [];
  _promotionalRules: DiscountRules;
  _totalPrice: number;

  constructor(promotionalRules: DiscountRules) {
    this._promotionalRules = { ...promotionalRules };
    this._totalPrice = 0.0;
  }

  scan(shoppingList: Product[]): void {
    this._shoppingList = [...shoppingList];
  }

  CalculateTotal(): number {
    try {
      this._shoppingList = this.applyPromotionRuleBeforeCheckout(
        this._shoppingList
      );
      this._shoppingList.forEach((product) => {
        this._totalPrice += product.price;
      });

      let isClientHaveLoyaltyCard = true;
      this._totalPrice = this.applyPromotionRuleAfterCheckout(
        isClientHaveLoyaltyCard,
        this._totalPrice
      );
      return this._totalPrice;
    } catch {
      throw new Error("Shopping List empty");
    }
  }

  applyPromotionRuleBeforeCheckout(shoppingList: Product[]) {
    return this._promotionalRules.pizzaRule(shoppingList);
  }

  applyPromotionRuleAfterCheckout(
    isLoyaltyCardExist: boolean,
    total: number
  ): number {
    return this._promotionalRules.loyalClientRule(isLoyaltyCardExist, total);
  }
}
export default Checkout;
