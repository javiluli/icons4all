const form = document.getElementById("form");
const button = document.getElementById("button");
const searh_list_icon = document.getElementById("searh_list_icon");

const icons = [
  // ############################
  // ------------ B -------------
  // ############################
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

  // ############################
  // ------------ C -------------
  // ############################

  {
    name: "Code-slash",
    link: `<a class="download-item" href="static/content/svg/code-slash.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/code-slash.svg' alt='notFound'/>"
  },
  {
    name: "Cube",
    link: `<a class="download-item" href="static/content/svg/cube.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/cube.svg' alt='notFound'/>"
  },

  // ############################
  // ------------ D -------------
  // ############################
  {
    name: "Download-circle",
    link: `<a class="download-item" href="static/content/svg/download-circle.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/download-circle.svg' alt='notFound'/>"
  },
  {
    name: "Download",
    link: `<a class="download-item" href="static/content/svg/download.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/download.svg' alt='notFound'/>"
  },

  // ############################
  // ------------ F -------------
  // ############################
  {
    name: "Fornite",
    link: `<a class="download-item" href="static/content/svg/fornite.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/fornite.svg' alt='notFound'/>"
  },
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
    name: "Github",
    link: `<a class="download-item" href="static/content/svg/github.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/github.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ H -------------
  // ############################
  {
    name: "Half-life-2",
    link: `<a class="download-item" href="static/content/svg/half-life-2.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/half-life-2.svg' alt='notFound'/>"
  },
  {
    name: "Half-life",
    link: `<a class="download-item" href="static/content/svg/half-life.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/half-life.svg' alt='notFound'/>"
  },
  {
    name: "HK-hollowknight",
    link: `<a class="download-item" href="static/content/svg/hk-hollowknight.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/hk-hollowknight.svg' alt='notFound'/>"
  },
  {
    name: "HK-hornet",
    link: `<a class="download-item" href="static/content/svg/hk-hornet.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/hk-hornet.svg' alt='notFound'/>"
  },
  {
    name: "Heart",
    link: `<a class="download-item" href="static/content/svg/heart.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/heart.svg' alt='notFound'/>"
  },

  // ############################
  // ------------ L -------------
  // ############################
  {
    name: "Lens",
    link: `<a class="download-item" href="static/content/svg/lens.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/lens.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ M -------------
  // ############################
  {
    name: "MC-creeper",
    link: `<a class="download-item" href="static/content/svg/mc-creeper.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/mc-creeper.svg' alt='notFound'/>"
  },
  {
    name: "Moon-2",
    link: `<a class="download-item" href="static/content/svg/moon-2.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/moon-2.svg' alt='notFound'/>"
  },
  {
    name: "Moon",
    link: `<a class="download-item" href="static/content/svg/moon.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/moon.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ P -------------
  // ############################
  {
    name: "Portal 2",
    link: `<a class="download-item" href="static/content/svg/portal-2.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/portal-2.svg' alt='notFound'/>"
  },
  {
    name: "Portal",
    link: `<a class="download-item" href="static/content/svg/portal.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/portal.svg' alt='notFound'/>"
  },
  {
    name: "Power",
    link: `<a class="download-item" href="static/content/svg/power.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/power.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ R -------------
  // ############################
  {
    name: "Reddit",
    link: `<a class="download-item" href="static/content/svg/reddit.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/reddit.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ S -------------
  // ############################
  {
    name: "Smartphone",
    link: `<a class="download-item" href="static/content/svg/smartphone.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/smartphone.svg' alt='notFound'/>"
  },
  {
    name: "Star",
    link: `<a class="download-item" href="static/content/svg/star.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/star.svg' alt='notFound'/>"
  },
  {
    name: "Steam-black",
    link: `<a class="download-item" href="static/content/svg/steam-black.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/steam-black.svg' alt='notFound'/>"
  },

  {
    name: "Steam-white",
    link: `<a class="download-item" href="static/content/svg/steam-white.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/steam-white.svg' alt='notFound'/>"
  },
  {
    name: "Sun-2",
    link: `<a class="download-item" href="static/content/svg/sun-2.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/sun-2.svg' alt='notFound'/>"
  },
  {
    name: "Sun-3",
    link: `<a class="download-item" href="static/content/svg/sun-3.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/sun-3.svg' alt='notFound'/>"
  },
  {
    name: "Sun",
    link: `<a class="download-item" href="static/content/svg/sun.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/sun.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ T -------------
  // ############################
  {
    name: "Twitch black",
    link: `<a class="download-item" href="static/content/svg/twitch-black.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/twitch-black.svg' alt='notFound'/>"
  },
  {
    name: "Twitch",
    link: `<a class="download-item" href="static/content/svg/twitch.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/twitch.svg' alt='notFound'/>"
  },

  // ############################
  // ------------ W -------------
  // ############################
  {
    name: "wifi-off",
    link: `<a class="download-item" href="static/content/svg/wifi-off.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/wifi-off.svg' alt='notFound'/>"
  },
  {
    name: "wifi",
    link: `<a class="download-item" href="static/content/svg/wifi.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/wifi.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ Y -------------
  // ############################
  {
    name: "Youtube",
    link: `<a class="download-item" href="static/content/svg/youtube.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/youtube.svg' alt='notFound'/>"
  }
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
