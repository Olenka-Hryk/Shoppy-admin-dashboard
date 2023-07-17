import { Component } from "../../../core";
import html from "bundle-text:./note.html";
import "./note.css";

export class NoteComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("note");
  }
}

Component.define("note", NoteComponent);