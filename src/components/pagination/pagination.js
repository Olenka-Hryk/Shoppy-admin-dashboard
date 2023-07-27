import { Component } from "../../core";
import html from "bundle-text:./pagination.html";
import "./pagination.css";

const PAGINATION_GRID = 6;
const EXPAND_VALUE = 4;
const LIMIT = 10;

export class PaginationComponent extends Component {
  render() {
    this.innerHTML = html;
    this.pagination = this.querySelector("nav.pagination");
    this.paginationPrevItem = this.querySelector("#paginationPrev");
    this.paginationNextItem = this.querySelector("#paginationNext");

    this.pagination.addEventListener(
      "click",
      (event) => {
        const activeItem = this.querySelector("li.pagination__item.pagination-active");
        const paginationItem = event.target.closest(".pagination__item");
        if (!paginationItem) return;
        if (paginationItem.id === "paginationPrev" || paginationItem.id === "paginationNext") {
        } else {
          activeItem.classList.remove("pagination-active");
          paginationItem.classList.add("pagination-active");
        }

        if (LIMIT > PAGINATION_GRID) {
          if (+paginationItem.innerText === EXPAND_VALUE)
            this.leftExpandPagination();
          if (+paginationItem.innerText === LIMIT - 3)
            this.rightExpandPagination();
          if (+paginationItem.innerText === 1 && paginationItem.nextElementSibling.classList.contains("pagination-expand"))
            this.leftShrinkPagination();
          if (+paginationItem.innerText === LIMIT)
            this.rightShrinkPagination();
          if (paginationItem.id === "paginationPrev") {
            console.log("Page:" + this.paginationPrev(activeItem));
            return;
          } else if (paginationItem.id === "paginationNext") {
            console.log("Page:" + this.paginationNext(activeItem));
            return;
          }
        } else {
          if (paginationItem.id === "paginationPrev") {
            console.log("Page:" + this.paginationPrevSimple(activeItem));
            return;
          } else if (paginationItem.id === "paginationNext") {
            console.log("Page:" + this.paginationNextSimple(activeItem));
            return;
          }
        }
      });
  }

  paginationPrevSimple(active) {
    const $paginationItems = $("li.pagination__item").not("#paginationPrev, #paginationNext");
    const firstNav = $paginationItems.find("span.pagination__content").first();
    const firstNavValue = Number($(firstNav).text());
    if (firstNavValue === 1 && $(firstNav).parent().parent().hasClass("pagination-active")) {
      return firstNavValue;
    } else {
      $(active).prev().addClass("pagination-active");
      $(active).removeClass("pagination-active");
      return Number($(active).prev().text());
    }
  }

  paginationNextSimple(active) {
    const $paginationItems = $("li.pagination__item").not("#paginationPrev, #paginationNext");
    const lastNav = $paginationItems.find("span.pagination__content").last();
    const lastNavValue = Number($(lastNav).text());
    if (lastNavValue === LIMIT && $(lastNav).parent().parent().hasClass("pagination-active")) {
      return lastNavValue;
    } else {
      $(active).next().addClass("pagination-active");
      $(active).removeClass("pagination-active");
      return Number($(active).next().text());
    }
  }


  paginationPrev(active) {
    const $paginationItems = $("li.pagination__item").not("#paginationPrev, #paginationNext");
    const firstNav = $paginationItems.find("span.pagination__content").first();
    const firstNavValue = Number($(firstNav).text());
    const expandNavFirst = $paginationItems.eq(2);
    const expandNavFirstInner = $(expandNavFirst).find("span.pagination__content");
    const expandNavSecond = $paginationItems.eq(3);
    const expandNavSecondInner = $(expandNavSecond).find("span.pagination__content");

    if (firstNavValue === 1 && $(firstNav).parent().parent().hasClass("pagination-active")) {
      return firstNavValue;
    } else if (+active.innerText === LIMIT - 2) {
      this.rightExpandPagination();
      return Number($(active).text());
    }
    else if (Number(expandNavSecondInner.text()) === EXPAND_VALUE + 1 && $paginationItems.eq(1).hasClass("pagination-expand")) {
      this.leftShrinkPagination();
      return Number($(active).text());
    }
    else if (Number($(active).text()) !== EXPAND_VALUE && $paginationItems.eq(4).hasClass("pagination-expand") && $paginationItems.eq(1).hasClass("pagination-expand")) {
      expandNavSecondInner.html(Number(expandNavSecondInner.text()) - 1);
      expandNavFirstInner.html(Number(expandNavSecondInner.text()) - 1);
      return Number($(active).text());
    } else if (Number($(active).text()) === EXPAND_VALUE && $paginationItems.eq(1).hasClass("pagination-expand")) {
      this.leftShrinkPagination();
      return Number($(active).text());
    } else {
      $(active).prev().addClass("pagination-active");
      $(active).removeClass("pagination-active");
      return Number($(active).prev().text());
    }
  }


  paginationNext(active) {
    const $paginationItems = $("li.pagination__item").not("#paginationPrev, #paginationNext, #paginationMoreSecond");
    const lastNav = $paginationItems.find("span.pagination__content").last();
    const lastNavValue = Number($(lastNav).text());
    const expandNavFirst = $paginationItems.eq(2);
    const expandNavFirstInner = $(expandNavFirst).find("span.pagination__content");
    const expandNavSecond = $paginationItems.eq(3);
    const expandNavSecondInner = $(expandNavSecond).find("span.pagination__content");

    if (lastNavValue === LIMIT && $(lastNav).parent().parent().hasClass("pagination-active")) {
      return lastNavValue;
    } else if (+active.innerText === EXPAND_VALUE - 1) {
      this.leftExpandPagination();
      return Number($(active).text());
    }
    else if (Number($(active).text()) !== LIMIT - EXPAND_VALUE + 1 && $paginationItems.eq(1).hasClass("pagination-expand")) {
      if (Number(expandNavFirstInner.text()) === LIMIT - EXPAND_VALUE + 2) {
        expandNavFirstInner.html(Number(expandNavFirstInner.text()) + 1);
        expandNavSecondInner.html(Number(expandNavFirstInner.text()) + 1);
        $(active).next().addClass("pagination-active");
        $(active).removeClass("pagination-active");
        return Number($(active).next().text());
      } else
        if (Number(expandNavSecondInner.text()) === LIMIT - 2) {
          this.rightShrinkPagination();
          $(active).next().addClass("pagination-active");
          $(active).removeClass("pagination-active");
          return Number($(active).next().text());
        } else {
          expandNavFirstInner.html(Number(expandNavFirstInner.text()) + 1);
          expandNavSecondInner.html(Number(expandNavFirstInner.text()) + 1);
          return Number($(active).text());
        }
    } else
      if (Number(expandNavSecondInner.text()) === LIMIT - EXPAND_VALUE + 1 && Number($(active).text()) === LIMIT - EXPAND_VALUE + 1) {
        expandNavFirstInner.html(Number(expandNavSecondInner.text()));
        expandNavSecondInner.html(Number(expandNavSecondInner.text()) + 1);
        this.rightShrinkPagination();
        return Number($(active).text());
      } else {
        $(active).next().addClass("pagination-active");
        $(active).removeClass("pagination-active");
        return Number($(active).next().text());
      }
  }


  leftExpandPagination() {
    const $paginationItems = $("li.pagination__item").not("#paginationPrev, #paginationNext, #paginationMoreSecond");
    const secondNav = $paginationItems.eq(1);
    const secondNavInner = $(secondNav).find("span.pagination__content");
    secondNavInner.html("...");
    secondNav.addClass("pagination-expand");
    secondNav.removeClass("pagination-active");

    const thirdNav = $paginationItems.eq(2);
    const thirdNavInner = $(thirdNav).find("span.pagination__content");
    thirdNavInner.html(EXPAND_VALUE);
    thirdNav.addClass("pagination-active");

    const fourthNav = $paginationItems.eq(3);
    const fourthNavInner = $(fourthNav).find("span.pagination__content");
    fourthNavInner.html(EXPAND_VALUE + 1);
    fourthNav.removeClass("pagination-active");
  }

  leftShrinkPagination() {
    const $paginationItems = $("li.pagination__item").not("#paginationPrev, #paginationNext");
    const secondNav = $paginationItems.eq(1);
    const secondNavInner = $(secondNav).find("span.pagination__content");
    secondNavInner.html("2");
    secondNav.removeClass("pagination-expand");

    const thirdNav = $paginationItems.eq(2);
    const thirdNavInner = $(thirdNav).find("span.pagination__content");
    thirdNavInner.html(EXPAND_VALUE - 1);

    const fourthNav = $paginationItems.eq(3);
    const fourthNavInner = $(fourthNav).find("span.pagination__content");
    fourthNavInner.html(EXPAND_VALUE);

    const fifthNav = $paginationItems.eq(4);
    const fifthNavInner = $(fifthNav).find("span.pagination__content");
    fifthNavInner.html("...");
    fifthNav.addClass("pagination-expand");
  }

  rightExpandPagination() {
    const $paginationItems = $("li.pagination__item").not("#paginationPrev, #paginationNext");
    const secondLastNav = $paginationItems.eq(4);
    const secondLastNavInner = $(secondLastNav).find("span.pagination__content");
    secondLastNavInner.html("...");
    secondLastNav.addClass("pagination-expand");

    const thirdLastNav = $paginationItems.eq(3);
    const thirdLastNavInner = $(thirdLastNav).find("span.pagination__content");
    thirdLastNavInner.html(LIMIT - EXPAND_VALUE + 1);
    thirdLastNav.addClass("pagination-active");

    const fourthLastNav = $paginationItems.eq(2);
    const fourthLastNavInner = $(fourthLastNav).find("span.pagination__content");
    fourthLastNavInner.html(LIMIT - EXPAND_VALUE);
    fourthLastNav.removeClass("pagination-active");
  }

  rightShrinkPagination() {
    const $paginationItems = $("li.pagination__item").not("#paginationPrev, #paginationNext");
    const secondLastNav = $paginationItems.eq(4);
    const secondLastNavInner = $(secondLastNav).find("span.pagination__content");
    secondLastNavInner.html(LIMIT - 1);
    secondLastNav.removeClass("pagination-expand");

    const thirdLastNav = $paginationItems.eq(3);
    const thirdLastNavInner = $(thirdLastNav).find("span.pagination__content");
    thirdLastNavInner.html(LIMIT - 2);

    const fourthLastNav = $paginationItems.eq(2);
    const fourthLastNavInner = $(fourthLastNav).find("span.pagination__content");
    fourthLastNavInner.html(LIMIT - EXPAND_VALUE + 1);

    const fifthLastNav = $paginationItems.eq(1);
    const fifthLastNavInner = $(fifthLastNav).find("span.pagination__content");
    fifthLastNavInner.html("...");
    fifthLastNav.addClass("pagination-expand");
  }

  static create() {
    return Component.create("pagination");
  }
}

Component.define("pagination", PaginationComponent);