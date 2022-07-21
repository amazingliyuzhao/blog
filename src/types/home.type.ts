export interface CardItem {
  cardTextName: string;
  introduction: string;
  tipName: string;
  time: string;
  authorName: string;
  authorAvator: string;
  commentNum: number;
  watchNum: number;
}

export interface CategoryProps {
  categoryData: {
    className: string;
    cardList: CardItem[];
  };
}
