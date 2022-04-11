export interface BeerDetails {
  id: number;
  name: string;
  description: string;
  first_brewed: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
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
