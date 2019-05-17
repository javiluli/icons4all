const form = document.getElementById("form");
const button = document.getElementById("button");
const searh_list_icon = document.getElementById("searh_list_icon");

const icons = [
  // ############################
  // ------------ A -------------
  // ############################
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
  // ############################
  // ------------ B -------------
  // ############################
  {
    name: "Bar-chart-2",
    link: `<a class="download-item" href="static/content/svg/bar-chart-2.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/bar-chart-2.svg' alt='notFound'/>"
  },
  {
    name: "Bar-chart",
    link: `<a class="download-item" href="static/content/svg/bar-chart.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/bar-chart.svg' alt='notFound'/>"
  },
  {
    name: "Battery-charging",
    link: `<a class="download-item" href="static/content/svg/battery-charging.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/battery-charging.svg' alt='notFound'/>"
  },
  {
    name: "Battery-empty",
    link: `<a class="download-item" href="static/content/svg/battery-empty.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/battery-empty.svg' alt='notFound'/>"
  },
  {
    name: "Battery-full",
    link: `<a class="download-item" href="static/content/svg/battery-full.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/battery-full.svg' alt='notFound'/>"
  },
  {
    name: "Battery-half",
    link: `<a class="download-item" href="static/content/svg/battery-half.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/battery-half.svg' alt='notFound'/>"
  },
  {
    name: "Battery-low",
    link: `<a class="download-item" href="static/content/svg/battery-low.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/battery-low.svg' alt='notFound'/>"
  },
  {
    name: "Bell-off",
    link: `<a class="download-item" href="static/content/svg/bell-off.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/bell-off.svg' alt='notFound'/>"
  },
  {
    name: "Bell",
    link: `<a class="download-item" href="static/content/svg/bell.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/bell.svg' alt='notFound'/>"
  },
  {
    name: "Bluetooth",
    link: `<a class="download-item" href="static/content/svg/bluetooth.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/bluetooth.svg' alt='notFound'/>"
  },
  {
    name: "Bold",
    link: `<a class="download-item" href="static/content/svg/bold.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/bold.svg' alt='notFound'/>"
  },
  {
    name: "Book-open",
    link: `<a class="download-item" href="static/content/svg/book-open.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/book-open.svg' alt='notFound'/>"
  },
  {
    name: "Book",
    link: `<a class="download-item" href="static/content/svg/book.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/book.svg' alt='notFound'/>"
  },
  {
    name: "Bookmark",
    link: `<a class="download-item" href="static/content/svg/bookmark.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/bookmark.svg' alt='notFound'/>"
  },
  {
    name: "Box",
    link: `<a class="download-item" href="static/content/svg/box.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/box.svg' alt='notFound'/>"
  },
  {
    name: "Briefcase",
    link: `<a class="download-item" href="static/content/svg/briefcase.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/briefcase.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ C -------------
  // ############################
  {
    name: "CodePen",
    link: `<a class="download-item" href="static/content/svg/codepen.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/codepen.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ D -------------
  // ############################
  // ############################
  // ------------ E -------------
  // ############################
  // ############################
  // ------------ F -------------
  // ############################
  // ############################
  // ------------ G -------------
  // ############################

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
  // ############################
  // ------------ H -------------
  // ############################

  // ############################
  // ------------ I -------------
  // ############################

  // ############################
  // ------------ J -------------
  // ############################

  // ############################
  // ------------ K -------------
  // ############################

  // ############################
  // ------------ L-------------
  // ############################

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
