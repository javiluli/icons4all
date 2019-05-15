const form = document.getElementById("form");
const button = document.getElementById("button");
const searh_list_icon = document.getElementById("searh_list_icon");

const icons = [
  {
    name: "Git",
    logo: `<a class="download-item" href="static/content/svg/git.svg" download="">
            <img class="img-item" src="static/content/svg/git.svg" alt="" download=""/>
            <span class="spam-item">Git</span>
          </a> `
  },
  {
    name: "GitHub",
    logo: `<a class="download-item" href="static/content/svg/github.svg" download="github.svg">
            <img class="img-item" src="static/content/svg/github.svg" alt="" download=""/>
            <span class="spam-item">Github</span>
          </a> `
  },
  {
    name: "GitLab",
    logo: `<a class="download-item" href="static/content/svg/gitlab.svg" download="gitlab.svg">
              <img class="img-item" src="static/content/svg/gitlab.svg" alt="" download=""/>
              <span class="spam-item">Gitlab</span>
          </a> `
  },
  {
    name: "CodePen",
    logo: `<a class="download-item" href="static/content/svg/codepen.svg" download="codepen.svg">
            <img class="img-item" src="static/content/svg/codepen.svg" alt="" download=""/>
            <span class="spam-item">Codepen</span>
          </a> `
  },
  {
    name: "VS Code",
    logo: `<a class="download-item" href="static/content/svg/visualstudiocode.svg" download="visualstudiocode.svg">
            <img class="img-item" src="static/content/svg/visualstudiocode.svg" alt="" download=""/>
            <span class="spam-item">VS code</span>
          </a> `
  }
];

const filter = () => {
  // console.log(form.value);
  searh_list_icon.innerHTML = "";

  const text = form.value.toLowerCase();

  for (let icon of icons) {
    let name = icon.name.toLowerCase();
    if (name.indexOf(text) !== -1) {
      searh_list_icon.innerHTML += `
      <li> ${icon.logo}</li>
      `;
    }
  }
  if (searh_list_icon.innerHTML === "") {
    searh_list_icon.innerHTML += `
    <li class="notFound">Icono no encontrado</li>
    `;
  }
};

// button.addEventListener("click", filter);

form.addEventListener("keyup", filter);

filter();
