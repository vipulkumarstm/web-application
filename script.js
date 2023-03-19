let box = document.getElementById("cards");
let API = async () => {
  let response = await fetch("https://reqres.in/api/users?page=1");
  let file = await response.json();
  let info = file.data
    .map((element) => {
      return `<div class="card">
            <br>
        <div class="profile-image">
        <br>
            <img src="${element.avatar}" alt="">
            <br>
        </div>
        <br>
        <div class="card-content">
            <h3>Name: ${element.first_name} ${element.last_name}</h3>
            <br>
            <h2>Email: ${element.email}</h2>
            <br>
            <h2>User ID: ${element.id}</h2>
        </div>
    </div>`;
    })
    .join("");
  cards.innerHTML = info;
};
let navBtn = document.getElementById("push");
navBtn.addEventListener("click", () => {
  cards.innerHTML = `<h1 class='load'>GETTING THE USERS...</h1>`;
  setTimeout(() => {
    API();
  }, 2000);
});
