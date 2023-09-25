import { ReactElement } from "react";

// API Props

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

// Blog Data

export interface BlogNavProps {
  setSortOrder: any;
  data: BlogDefaultDataProps[];
  sortOrder: string;
}

export interface BlogDefaultDataProps {
  date: string;
  category: string;
  title: string;
  paragraph: string;
  personalName: string;
  img: string;
}

// Auth Props

export interface AuthButtonProps {
  handleUserToggle: (value: boolean) => void;
  value: boolean;
  title: string;
}

export interface AuthFormProps {
  value: string;
  title: string;
  setFunction: (value: string) => void;
  type: string;
}

// Cart Props

export interface PriceTotalProps {
  subTotal: string;
  tax: string;
}

export interface CartProps {
  cart: ShoppingProps[];
  setCart: (value: ShoppingProps[]) => void;
  setCounter?: (value: any) => void;
  counter?: number;
}

export interface QuantityProps {
  handleQuantityChange: (id: number, newQuantity: number) => void;
  item: ShoppingProps;
}

// Contact Props

export interface ContactProps {
  directions: boolean;
  address?: string;
  title: string;
  adddressTrue?: boolean;
  paragraph: boolean;
  h1Title?: string;
  p1Paragraph?: string;
  h2Title?: string;
  p2Paragraph?: string;
}

export interface ContactInputData {
  title: string;
  placeholder: string;
  type: string;
  setName?: (value: string) => void;
}

// Home Props

export interface HomeSideBarParaProps {
  setText: (value: string) => void;
  value: string;
  title: string;
}

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

// Single item Props

export interface SingleDescriptionProps {
  title?: string;
  paragraph?: string;
  image: string;
  width?: boolean;
}

export interface ItemCardProps {
  products?: ShoppingProps[];
  handleCart: (item: ShoppingProps) => void;
  cart?: ShoppingProps[];
  loading?: boolean;
  isSingleItemView?: boolean;
  isTrending?: boolean;
}

// Main Props

export interface ItemProps {
  image: string;
  title: string;
  price: number;
  id: number;
}

export interface MainItemProps {
  item: ItemProps;
}

export interface MainListProps {
  list?: string;
  list2?: string;
  list3?: string;
  list4?: string;
  list5?: string;
  list6?: string;
  list7?: string;
  title?: string;
  showroom: boolean;
}

export interface MainBlogProps {
  title: string;
  paragraph: string;
  img: string;
}

export interface MainIdeasImagesProps {
  src: string;
}

export interface MainPostsProps {
  item: ItemProps;
  loading: boolean;
  isDecor?: boolean;
}

export interface MainServicesProps {
  title: string;
  paragraph: string;
  icon: ReactElement;
}

// Nav Props

export interface BurgerMenuProps {
  handleBurgerMenu: () => void;
  title: string;
  linkto: string;
}

export interface NavProps {
  counter: number;
  cart: ShoppingProps[]
}

export interface AuthProps {
  email: string;
}
