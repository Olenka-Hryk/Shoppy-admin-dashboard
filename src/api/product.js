import { API_URL, IMAGE_URL_BASE } from "./config";
import { Brand } from "./brand";
import { Category } from "./category";
const POPULATE = "populate[0]=image&populate[1]=brand.icon&populate[2]=category.icon";

export class Product {
  constructor({ id, attributes }) {
    this.id = id;
    this.name = attributes.name;
    this.description = attributes.description;
    this.image = attributes.image.data.attributes;
    this.imageUrl = `${IMAGE_URL_BASE}${attributes.image.data.attributes.url}`;
    this.regularPrice = attributes.regularPrice;
    this.stock = attributes.stock;
    this.brand = new Brand(attributes.brand.data);
    this.category = new Category(attributes.category.data);
  }

  static getProducts({ page = 1, pageSize = 5, query = "" }) {
    return fetch(
      `${API_URL}/products?${POPULATE}&filters[name][$contains]=${query}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then(({ data, meta }) => ({
        meta,
        products: data.map((item) => new Product(item)),
      }));
  }
}