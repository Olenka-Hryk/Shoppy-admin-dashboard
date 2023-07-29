import { API_URL, IMAGE_URL_BASE } from "./config";
import { Brand } from "./brand";
import { Category } from "./category";
const POPULATE = "populate[0]=image&populate[1]=brand.icon&populate[2]=category.icon";

export class Product {
  constructor({ id, attributes }) {
    this.id = id;
    this.name = attributes.name;
    this.description = attributes.description;
    this.image = attributes.image?.data?.attributes;
    this.imageUrl = this.image ? `${IMAGE_URL_BASE}${attributes.image.data.attributes.url}` : null;
    this.regularPrice = attributes.regularPrice;
    this.salePrice = attributes.salePrice ?? 0;
    this.stock = attributes.stock;
    this.brand = new Brand(attributes.brand.data);
    this.category = new Category(attributes.category.data);
    this.barcode = attributes.barcode ?? '';
  }

  static getProducts({ page = 1, pageSize = 5, query = "", categories = [] }) {
    const categoriesQuery = Product.getCategoryFilters("name", categories);

    return fetch(
      `${API_URL}/products?${POPULATE}&filters[name][$contains]=${query}${categoriesQuery.length ? categoriesQuery : ""
      }&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
      {
        method: "GET",
      })
      .then((res) => res.json())
      .then(({ data, meta }) => ({
        meta,
        products: data.map((item) => new Product(item)),
      }));
  }

  static addProduct(data) {
    return fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data })
    }).then((res) => res.json());
  }

  static updateProduct(id, data) {
    return fetch(`${API_URL}/products/${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data })
    }).then((res) => res.json());
  }

  static getProductById(id) {
    return fetch(`${API_URL}/products/${id}?${POPULATE}`, {
      method: 'GET',
    }).then((res) => res.json())
      .then(({ data }) => new Product(data));
  }

  static deleteProduct(id) {
    return fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE',
    }).then((res) => res.json());
  }

  static getCategoryFilters(field, items) {
    let result = "";
    for (let i = 0; i < items.length; i++) {
      result += `&filters[category][${field}][$eq][${i}]=${items[i]}`;
    }
    return result;
  }
}