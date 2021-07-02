function refreshPosts() {
  fetch("http://192.168.0.102:5000/api/all")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let postsContainer = document.getElementById("allPosts");
      postsContainer.innerHTML = ``;

      console.log(json)

      json.forEach((post) => {
        postsContainer.innerHTML += `
        <div class="post">
          <div class="postHead">${post.title}</div>
          <div class="postBody">${post.description}</div>
        </div>
        `;
      });
    });
}

function addNewPost() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  if (title.length == 0 || description.length == 0)
    return alert("Prencha todos os campos");

  let post = { title, description };

  let request = new XMLHttpRequest();
  request.open("POST", "http://192.168.0.102:5000/api/new", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(post));

  refreshPosts();

  // fetch("http://192.168.0.102:5000/api/new",{
  //   method: "POST",
  //   Headers: new Headers({"Content-Type": "application/json; charset=UTF-8",}),
  //   body: JSON.stringify(post)
  // }).then((res) => {
  //   console.log(res);
  // });
}
