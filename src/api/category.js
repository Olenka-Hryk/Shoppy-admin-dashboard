import { API_URL, IMAGE_URL_BASE } from "./config";
const POPULATE = "populate[0]=icon";

export class Category {
  constructor({ id, attributes }) {
    this.id = id;
    this.name = attributes.name;
    this.iconCode = attributes.iconCode;
    this.icon = attributes.icon?.data.attributes;
    this.iconUrl = this.icon ? `${IMAGE_URL_BASE}${this.icon.url}` : null;
    this.categoryColor = attributes.categoryColor;
  }

  static getCategories() {
    return fetch(`${API_URL}/categories?${POPULATE}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ data }) => data.map((item) => new Category(item)));
  }
}