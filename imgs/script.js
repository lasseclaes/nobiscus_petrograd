/* const courses = [
  {
    name: "Russian ringbread Lasse waas here",
    shortDescription: "russisk tapas",
    img: "/imgs/small/russisktapas-sm.jpg",
    isVegetarian: false,
    price: "59,-",
    soldOut: false,
    discount: "",
    alcohol: ,


  },
  {
    name: "Soup and everything else vegetarian",
    shortDescription: "Vegetarian dish",
    img: "/imgs/small/kaalsuppe-sm.jpg",
    isVegetarian: true,
    price: "39,-",
  },
  {
    name: "Potatoes and something else",
    shortDescription: " Another vegetarian dish",
    img: "/imgs/small/kartofler-sm.jpg",
    isVegetarian: true,
    price: "69,-",
  },
];
*/

//fetch data
fetch("https://kea-alt-del.dk/t5/api/productlist")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.forEach(showOneCourse);
  });
//loop through products

// finding the template

//clone the template

//

//append

function showOneCourse(course) {
  const templateContent = document.querySelector("#courseTemplate").content;
  const copy = templateContent.cloneNode(true);
  copy.querySelector(".card_heading").textContent = course.name;
  copy.querySelector(".card_desc").textContent = course.shortDescription;
  copy.querySelector("img").src = course.img;
  copy.querySelector(".price").textContent = course.price;
  document.querySelector("main").appendChild(copy);
}
