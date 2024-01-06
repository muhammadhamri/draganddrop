// let lists = document.getElementsByClassName("list");
// let rightBox = document.getElementById("right");
// let leftBox = document.getElementById("left");

// for (list of lists) {
//   list.addEventListener("dragstart", function (e) {
//     let selected = e.target;

//     rightBox.addEventListener("dragover", function (e) {
//       e.preventDefault();
//     });

//     rightBox.addEventListener("drop", function (e) {
//       rightBox.appendChild(selected);
//       selected = null;
//     });

//     leftBox.addEventListener("dragover", function (e) {
//       e.preventDefault();
//     });

//     leftBox.addEventListener("drop", function (e) {
//       leftBox.appendChild(selected);
//       selected = null;
//     });
//   });
// }

// let lists = document.getElementsByClassName("list");
// let rightBox = document.getElementById("right");
// let leftBox = document.getElementById("left");
// let selected = null;

// for (let list of lists) {
//   list.addEventListener("touchstart", function (e) {
//     selected = e.target;
//   });

//   rightBox.addEventListener("touchmove", function (e) {
//     e.preventDefault();
//   });

//   rightBox.addEventListener("touchend", function (e) {
//     if (selected) {
//       rightBox.appendChild(selected);
//       selected = null;
//     }
//   });

//   leftBox.addEventListener("touchmove", function (e) {
//     e.preventDefault();
//   });

//   leftBox.addEventListener("touchend", function (e) {
//     if (selected) {
//       leftBox.appendChild(selected);
//       selected = null;
//     }
//   });
// }

let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let selected = null;

for (let list of lists) {
  list.addEventListener("touchstart", function (e) {
    selected = e.target;
  });

  rightBox.addEventListener("touchmove", function (e) {
    e.preventDefault();
  });

  rightBox.addEventListener("touchend", function (e) {
    if (selected) {
      rightBox.appendChild(selected.cloneNode(true));
      selected = null;
    }
  });

  leftBox.addEventListener("touchmove", function (e) {
    e.preventDefault();
  });

  leftBox.addEventListener("touchend", function (e) {
    if (selected) {
      leftBox.appendChild(selected.cloneNode(true));
      selected = null;
    }
  });
}
