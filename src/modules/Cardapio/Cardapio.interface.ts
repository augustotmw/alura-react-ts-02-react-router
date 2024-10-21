export interface ICardapioCategory {
  id: number;
  label: string;
}

export interface ICardapio {
  title: string;
  description: string;
  photo: string;
  size: number;
  serving: number;
  price: number;
  id: number;
  category: ICardapioCategory;
}
