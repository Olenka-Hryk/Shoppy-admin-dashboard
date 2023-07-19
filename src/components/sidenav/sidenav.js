import { Component } from "../../core";
import html from "bundle-text:./sidenav.html";
import "./sidenav.css";

export class SidenavComponent extends Component {
  render() {
    this.innerHTML = html;
    stylingActiveNavLink($("ul.sidenav-items li.nav-link a.active"));

    $("ul>li.nav-link a").on('click', function () {
      stylingActiveNavLink($(this));
    });

    $("li.nav-group div.nav-group-label").on('click', function () {
      if ($(this).parent().attr("class") === "nav-group nav-group-open") {
        closeAllNavList();
      } else
        openNavList($(this).parent());
    });
  }

  static create() {
    return Component.create("sidenav");
  }
}

Component.define("sidenav", SidenavComponent);


function stylingActiveNavLink($element) {
  cancelAllStylingActiveNavLink()
  $element.addClass("nav-link-active-exact");
  $element.find("app-svg-icon").addClass("svg-icon-active");
}

function cancelAllStylingActiveNavLink() {
  $("ul>li.nav-link a.nav-link-active-exact app-svg-icon.svg-icon-active").removeClass("svg-icon-active");
  $("ul>li.nav-link a.nav-link-active-exact").removeClass("nav-link-active-exact");
}

function openNavList($element) {
  closeAllNavList();
  $element.addClass("nav-group-open");
  $element.find($("ul.nav-group-children")).attr("style", "height: auto;");
}

function closeAllNavList() {
  $("li.nav-group.nav-group-open").removeClass("nav-group-open");
  $("li.nav-group ul.nav-group-children[style='height: auto;']").attr("style", "display: none;");
}