// namespace возможен здесь благодаря отсутствию erasableSyntaxOnly.
// В with-lib (erasableSyntaxOnly: true) объявление namespace было бы ошибкой.
export namespace Category {
  export const Electronics = "electronics";
  export const Clothing = "clothing";
  export const Books = "books";
  export const Food = "food";

  export type Value = typeof Electronics | typeof Clothing | typeof Books | typeof Food;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category.Value;
  inStock: boolean;
  tags: string[];
}

export type ProductPreview = Pick<Product, "id" | "name" | "price" | "inStock">;

export type ProductInput = Omit<Product, "id">;
