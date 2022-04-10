export interface BeerDetails {
  id: number;
  name: string;
  description: string;
  image_url: string;
  ingredients: {
    malt: [
      {
        name: string;
        amount: {
          value: number;
          unit: string;
        };
      }
    ];
    hops: [
      {
        name: string;
        amount: {
          value: number;
          unit: string;
        };
        add: string;
        attribute: string;
      }
    ];
    yeast: string;
  };
}
