const PREFIX = "app";

export class Component extends HTMLElement {
  connectedCallback() {
    setTimeout(() => this.render(), 0);
  }

  disconnectedCallback() {
    this.destroy?.();
  }

  render() {
    this.innerHTML = `<span>Default content</span>`;
  }

  static create(name) {
    return document.createElement(name ? `${PREFIX}-${name}` : "div");
  }

  static define(name, type) {
    customElements.define(`${PREFIX}-${name}`, type);
  }
}