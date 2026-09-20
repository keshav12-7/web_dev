"use strict"

function demo() {
  console.log(this);
}

demo();

// "use strict";

x = 10; // ReferenceError in strict mode
console.log(x);

