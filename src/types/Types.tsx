// Main Props

export interface ShoppingProps {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity: number;
  rating: {
    rate: number;
  };
}

// Cart Props

export interface CartProps {
  cart: ShoppingProps[];
  setCart: (value: ShoppingProps[]) => void;
  setCounter?: (value: any) => void;
  counter?: number;
}

// Home Page Props

export interface HomePageProps {
  handleCart: (value: ShoppingProps) => void;
  cart: ShoppingProps[];
  isSingleItemView?: boolean;
}

export interface HomeProps {
  setText: (value: string) => void;
  handlePriceChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  setPrice: (value: number) => void;
  price: number;
}

// Quantity Props

export interface QuantityProps {
  handleQuantityChange: (id: number, newQuantity: number) => void;
  item: ShoppingProps;
}

// singleItemProps
export interface ItemCardProps {
  products?: ShoppingProps[];
  handleCart: (item: ShoppingProps) => void;
  cart?: ShoppingProps[];
  loading?: boolean;
  isSingleItemView?: boolean;
  isTrending?: boolean
}

// Main Post Props

export interface ItemProps {
  image: string;
  title: string;
  price: number;
}

export interface MainItemProps {
  item: ItemProps;
}
