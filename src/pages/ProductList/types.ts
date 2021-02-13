export interface PriceDataResponse {
  originalPrice: number;
  dealPrice?: number;
  percentage?: number;
}

export interface ProductState {
  id: number;
  name: string;
  image: string;
  price: PriceDataResponse;
  ean: number;
}

export interface ProductResponse {
  id: number;
  ean: number;
  name: string;
  // ratingScore?: number;
  description: string;
  images: string[];
  price: PriceDataResponse;
}

export interface ProductListResponse {
  payload: ProductResponse[];
}
