//generic interface for creating discount rules

interface PromotionalRules {
  [fnName: string]: (params: any) => any;
}

export default PromotionalRules;
