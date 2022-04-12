//generic interface for creating discount rules

interface DiscountRules {
  [fnName: string]: (...params: any) => any;
}

export default DiscountRules;
