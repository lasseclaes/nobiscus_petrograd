//fetch data
fetch("https://kea-alt-del.dk/t5/api/productlist")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.forEach(showOneCourse);
  });

function showOneCourse(course) {
  const templateContent = document.querySelector("#courseTemplate").content;
  const copy = templateContent.cloneNode(true);
  copy.querySelector(".card_heading").textContent = course.name;
  copy.querySelector(".card_desc").textContent = course.shortDescription;
  copy.querySelector("img").src =
    "https://kea-alt-del.dk/t5/site/imgs/small/" + course.image + "-sm.jpg";
  copy.querySelector(".price").textContent = course.price + ",-";
  document.querySelector("main").appendChild(copy);
}
