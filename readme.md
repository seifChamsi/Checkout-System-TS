# Checkout System - TS

# Get started

- Start your terminal :

```bash
$ git clone https://github.com/seifChamsi/Checkout-System-TS.git
$ npm install
$ npm run dev
```

# Used Techonlogies

- Typescript / ES6+

# Implementation

For meeting expectations mentionned:

- The solution is completely in pure Typescript/es6+
- clean architecture (inspired from microsoft clean architecture) : under src **/contracts** we define our interfaces then we have **infrastructure/** folder where we put our mocked data (shopping list) further we have **services/** where all our buisness logic is implemented
- For the crud of the shopping list (Products), go to src/infrastructure/shoppingList.ts.

- For the crud of discount rules, go to src/services/promotionRules.ts

The src/index.ts is where the main algorithm is running :
1- scan shopping list 2- applying promotionRules 3-logging the final price after applying promotionRules
