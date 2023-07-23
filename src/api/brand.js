import { API_URL, IMAGE_URL_BASE } from "./config";
const POPULATE = "populate[0]=icon";

export class Brand {
  constructor({ id, attributes }) {
    this.id = id;
    this.name = attributes.name;
    this.iconCode = attributes.iconCode;
    this.icon = attributes.icon?.data.attributes;
    this.iconUrl = this.icon ? `${IMAGE_URL_BASE}${this.icon.url}` : null;
  }

  static getBrands() {
    return fetch(`${API_URL}/brands?${POPULATE}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ data }) => data.map((item) => new Brand(item)));
  }
}