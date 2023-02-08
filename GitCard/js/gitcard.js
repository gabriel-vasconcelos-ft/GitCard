const getGitHubInfo = function () {
  const username = document.querySelector("#usuario-github").value;
  const url = `https://api.github.com/users/${username}`;
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
  document.querySelector("#nameUser").innerHTML = data.name;
  document.querySelector("#seguindo").innerHTML = data.following;
  document.querySelector("#seguidores").innerHTML = data.followers;
  document.querySelector("#repositorios").innerHTML = data.public_repos;

  const imagePerfil = document.querySelector(".image-perfil");
  imagePerfil.setAttribute("src", data.avatar_url + "&amp;s=80");
  document.querySelector(".avatar").appendChild(imagePerfil);

  const repositoriosLink = document.querySelector("#repositorios-link");
  repositoriosLink.setAttribute("href", `https://github.com/${username}?tab=repositories`);
  document.querySelector("#repositorio-url").appendChild(repositoriosLink);

  const seguindoLink = document.querySelector("#seguindo-link");
  seguindoLink.setAttribute("href", `https://github.com/${username}?tab=following`);
  document.querySelector("#seguindo-url").appendChild(seguindoLink);

  const seguidoresLink = document.querySelector("seguidores-link");
  seguidoresLink.setAttribute("href", `https://github.com/${username}?tab=followers`);
  document.querySelector("#seguidores-url").appendChild(seguidoresLink);
});
};