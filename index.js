"use strict";

const site = {
  title: "green site",
  headers: ["header 1", "header 2", "header 3"],
  showHeaders() {
    console.log(this);
    this.headers.forEach((header) => {
      console.log(`${header} | ${this.title}`);
    });
  },
};

site.showHeaders();

/*
1 - arrow function;
2 - save this in variable - self;
3 - argument for callback - this;
4 - function.bind(this);
*/
