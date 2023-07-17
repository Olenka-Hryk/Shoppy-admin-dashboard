export class Router {
  constructor(slot, routes) {
    this.slot = slot;
    this.routes = routes;

    this.routeMap = new Map(routes.map((route) => [route.path, route]));
  }

  get path() {
    return document.location.pathname;
  }

  navigate(path) {
    const route = this.routeMap.get(path);

    if (!route) {
      throw new Error(`Unknown route ${path}`);
    }

    // Lazy loading
    route.load().then((component) => {
      this.slot.innerHTML = "";
      this.slot.append(component.create());
    });
  }

  start() {
    this.navigate(this.path);

    const onNavigate = () => {
      this.navigate(this.path);
    };

    window.addEventListener("popstate", onNavigate);
    window.addEventListener("pushstate", onNavigate);
  }

  static init({ slot, routes }) {
    if (!slot || !Array.isArray(routes)) {
      throw new Error("Invalid router config");
    }

    return new Router(slot, routes);
  }
}

export class RouterLink extends HTMLAnchorElement {
  constructor() {
    super();

    this.addEventListener("click", (event) => {
      event.preventDefault();

      if (this.pathname === document.location.pathname) return;

      history.pushState({}, "", this.href);
      window.dispatchEvent(new CustomEvent("pushstate"));
    });

    const checkIfActive = () => {
      this.classList.remove("active");

      if (this.pathname === document.location.pathname) {
        this.classList.add("active");
      }
    };

    checkIfActive();

    window.addEventListener("popstate", checkIfActive);
    window.addEventListener("pushstate", checkIfActive);
  }
}

customElements.define("app-link", RouterLink, { extends: "a" });