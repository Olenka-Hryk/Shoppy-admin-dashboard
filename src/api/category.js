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

  static getCategories({ filters = [] } = {}) {
    const filtersQuery = filters
      .map(({ field, items }) => Category.getFilters(field, items))
      .join("&");
    return fetch(`${API_URL}/categories?${POPULATE}${filtersQuery.length ? filtersQuery : ""}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then(({ data }) => data.map((item) => new Category(item)));
  }

  static getFilters(field, items) {
    let result = "";
    for (let i = 0; i < items.length; i++) {
      result += `&filters[${field}][$eq][${i}]=${items[i]}`;
    }
    return result;
  }
}