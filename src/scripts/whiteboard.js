export default class whiteboard {
  constructor() {
    this.path = undefined;
  }

  static start(event) {
    console.log("Start");
    console.log(event);
  }

  static move(event) {
    //console.log(event);
  }

  static end(event) {
    console.log(event);
  }

  static enter(event) {
    console.log("Enter")
  }

  static leave(event) {
    console.log("Out")
  }
}
