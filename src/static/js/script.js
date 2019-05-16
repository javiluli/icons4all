const form = document.getElementById("form");
const button = document.getElementById("button");
const searh_list_icon = document.getElementById("searh_list_icon");

const icons = [
  // --- A ----
  {
    name: "Activity",
    link: `<a class="download-item" href="static/content/svg/activity.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/activity.svg' alt='notFound'/>"
  },
  {
    name: "Airplay",
    link: `<a class="download-item" href="static/content/svg/airplay.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/airplay.svg' alt='notFound'/>"
  },
  {
    name: "Alert-circle",
    link: `<a class="download-item" href="static/content/svg/alert-circle.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/alert-circle.svg' alt='notFound'/>"
  },
  {
    name: "Alert-octagon",
    link: `<a class="download-item" href="static/content/svg/alert-octagon.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/alert-octagon.svg' alt='notFound'/>"
  },
  {
    name: "Alert-triangle",
    link: `<a class="download-item" href="static/content/svg/alert-triangle.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/alert-triangle.svg' alt='notFound'/>"
  },
  {
    name: "Align-center",
    link: `<a class="download-item" href="static/content/svg/align-center.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/align-center.svg' alt='notFound'/>"
  },
  {
    name: "Align-justify",
    link: `<a class="download-item" href="static/content/svg/align-justify.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/align-justify.svg' alt='notFound'/>"
  },
  {
    name: "Align-left",
    link: `<a class="download-item" href="static/content/svg/align-left.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/align-left.svg' alt='notFound'/>"
  },
  {
    name: "Align-right",
    link: `<a class="download-item" href="static/content/svg/align-right.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/align-right.svg' alt='notFound'/>"
  },
  {
    name: "Anchor",
    link: `<a class="download-item" href="static/content/svg/anchor.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/anchor.svg' alt='notFound'/>"
  },
  {
    name: "Aperture",
    link: `<a class="download-item" href="static/content/svg/aperture.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/aperture.svg' alt='notFound'/>"
  },
  {
    name: "Archive",
    link: `<a class="download-item" href="static/content/svg/archive.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/archive.svg' alt='notFound'/>"
  },
  {
    name: "Arrow-down-circle",
    link: `<a class="download-item" href="static/content/svg/arrow-down-circle.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/arrow-down-circle.svg' alt='notFound'/>"
  },
  {
    name: "Arrow-down-left",
    link: `<a class="download-item" href="static/content/svg/arrow-down-left.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/arrow-down-left.svg' alt='notFound'/>"
  },
  {
    name: "Arrow-down-right",
    link: `<a class="download-item" href="static/content/svg/arrow-down-right.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/arrow-down-right.svg' alt='notFound'/>"
  },
  {
    name: "Arrow-down",
    link: `<a class="download-item" href="static/content/svg/arrow-down.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/arrow-down.svg' alt='notFound'/>"
  },
  {
    name: "Arrow-left-circle",
    link: `<a class="download-item" href="static/content/svg/arrow-left-circle.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/arrow-left-circle.svg' alt='notFound'/>"
  },
  {
    name: "Arrow-left",
    link: `<a class="download-item" href="static/content/svg/arrow-left.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/arrow-left.svg' alt='notFound'/>"
  },
  {
    name: "Aarrow-right-circle",
    link: `<a class="download-item" href="static/content/svg/arrow-right-circle.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/arrow-right-circle.svg' alt='notFound'/>"
  },
  {
    name: "Arrow-right",
    link: `<a class="download-item" href="static/content/svg/arrow-right.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/arrow-right.svg' alt='notFound'/>"
  },
  {
    name: "Arrow-up-circle",
    link: `<a class="download-item" href="static/content/svg/arrow-up-circle.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/arrow-up-circle.svg' alt='notFound'/>"
  },
  {
    name: "Arrow-up-left",
    link: `<a class="download-item" href="static/content/svg/arrow-up-left.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/arrow-up-left.svg' alt='notFound'/>"
  },
  {
    name: "Arrow-up-right",
    link: `<a class="download-item" href="static/content/svg/arrow-up-right.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/arrow-up-right.svg' alt='notFound'/>"
  },
  {
    name: "Arrow-up",
    link: `<a class="download-item" href="static/content/svg/arrow-up.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/arrow-up.svg' alt='notFound'/>"
  },
  {
    name: "At-sign",
    link: `<a class="download-item" href="static/content/svg/at-sign.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/at-sign.svg' alt='notFound'/>"
  },
  {
    name: "Award",
    link: `<a class="download-item" href="static/content/svg/award.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/award.svg' alt='notFound'/>"
  },
  // --- B ----
  // --- C ----
  {
    name: "CodePen",
    link: `<a class="download-item" href="static/content/svg/codepen.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/codepen.svg' alt='notFound'/>"
  },
  // --- D ----
  // --- E ----
  // --- F ----
  // --- G ----
  {
    name: "Git",
    link: `<a class="download-item" href="static/content/svg/git.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/git.svg' alt='notFound'/>"
  },
  {
    name: "GitHub-Fill",
    link: `<a class="download-item" href="static/content/svg/github-fill.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/github-fill.svg' alt='notFound'/>"
  },
  {
    name: "GitHub-Stroke",
    link: `<a class="download-item" href="static/content/svg/github-stroke.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/github-stroke.svg' alt='notFound'/>"
  },
  {
    name: "GitLab-Fill",
    link: `<a class="download-item" href="static/content/svg/gitlab-fill.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/gitlab-fill.svg' alt='notFound'/>"
  },
  {
    name: "GitLab-Stroke",
    link: `<a class="download-item" href="static/content/svg/gitlab-stroke.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/gitlab-stroke.svg' alt='notFound'/>"
  },
  // --- H ----
  // --- I ----
  // --- J ----
  // --- K ----
  // --- L ----
  {
    name: "Lens",
    link: `<a class="download-item" href="static/content/svg/lens.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/lens.svg' alt='notFound'/>"
  },
  // --- M ----
  // --- N ----
  // --- O ----
  // --- P ----
  // --- Q ----
  // --- R ----
  // --- S ----
  // --- T ----
  // --- U ----
  // --- V ----
  {
    name: "VS Code",
    link: `<a class="download-item" href="static/content/svg/visualstudiocode.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/visualstudiocode.svg' alt='notFound'/>"
  }
  // --- W ----
  // --- X ----
  // --- Y ----
  // --- Z ----
];

const filter = () => {
  searh_list_icon.innerHTML = "";
  const text = form.value.toLowerCase();

  for (let icon of icons) {
    let name = icon.name.toLowerCase();
    if (name.indexOf(text) !== -1) {
      searh_list_icon.innerHTML += `
      <div class="wrap-download"> ${icon.link} 
        <div class="wrap-icon"> ${icon.img} 
        <span class='spam-item'> ${icon.name} </span>
        </div>
      </div>
      `;
    }
  }
  if (searh_list_icon.innerHTML === "") {
    searh_list_icon.innerHTML += `
    <p class="notFound">Icono not found...</p>
    `;
  }
};
form.addEventListener("keyup", filter);
filter();
