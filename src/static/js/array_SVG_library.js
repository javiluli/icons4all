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
    name: "Cloud-lightning",
    link: `<a class="download-item" href="static/content/svg/cloud-lightning.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/cloud-lightning.svg' alt='notFound'/>"
  },
  {
    name: "Cloud-off",
    link: `<a class="download-item" href="static/content/svg/cloud-off.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/cloud-off.svg' alt='notFound'/>"
  },
  {
    name: "Cloud-rain",
    link: `<a class="download-item" href="static/content/svg/cloud-rain.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/cloud-rain.svg' alt='notFound'/>"
  },
  {
    name: "Cloud-snow",
    link: `<a class="download-item" href="static/content/svg/cloud-snow.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/cloud-snow.svg' alt='notFound'/>"
  },
  {
    name: "Cloud",
    link: `<a class="download-item" href="static/content/svg/cloud.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/cloud.svg' alt='notFound'/>"
  },
  {
    name: "Code",
    link: `<a class="download-item" href="static/content/svg/code.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/code.svg' alt='notFound'/>"
  },
  {
    name: "CodePen",
    link: `<a class="download-item" href="static/content/svg/codepen.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/codepen.svg' alt='notFound'/>"
  },
  {
    name: "Codesandbox",
    link: `<a class="download-item" href="static/content/svg/codesandbox.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/codesandbox.svg' alt='notFound'/>"
  },

  {
    name: "Coffee",
    link: `<a class="download-item" href="static/content/svg/coffee.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/coffee.svg' alt='notFound'/>"
  },
  {
    name: "Columns",
    link: `<a class="download-item" href="static/content/svg/columns.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/columns.svg' alt='notFound'/>"
  },
  {
    name: "Command",
    link: `<a class="download-item" href="static/content/svg/command.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/command.svg' alt='notFound'/>"
  },
  {
    name: "Compass",
    link: `<a class="download-item" href="static/content/svg/compass.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/compass.svg' alt='notFound'/>"
  },
  {
    name: "Copy",
    link: `<a class="download-item" href="static/content/svg/copy.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/copy.svg' alt='notFound'/>"
  },
  {
    name: "Corner-down-left",
    link: `<a class="download-item" href="static/content/svg/corner-down-left.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/corner-down-left.svg' alt='notFound'/>"
  },
  {
    name: "Corner-down-right",
    link: `<a class="download-item" href="static/content/svg/corner-down-right.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/corner-down-right.svg' alt='notFound'/>"
  },
  {
    name: "Corner-left-down",
    link: `<a class="download-item" href="static/content/svg/corner-left-down.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/corner-left-down.svg' alt='notFound'/>"
  },
  {
    name: "Corner-left-up",
    link: `<a class="download-item" href="static/content/svg/corner-left-up.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/corner-left-up.svg' alt='notFound'/>"
  },
  {
    name: "Corner-right-down",
    link: `<a class="download-item" href="static/content/svg/corner-right-down.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/corner-right-down.svg' alt='notFound'/>"
  },
  {
    name: "Corner-up-left",
    link: `<a class="download-item" href="static/content/svg/corner-up-left.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/corner-up-left.svg' alt='notFound'/>"
  },
  {
    name: "Corner-up-right",
    link: `<a class="download-item" href="static/content/svg/corner-up-right.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/corner-up-right.svg' alt='notFound'/>"
  },
  {
    name: "Cpu",
    link: `<a class="download-item" href="static/content/svg/cpu.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/cpu.svg' alt='notFound'/>"
  },
  {
    name: "Credit-card",
    link: `<a class="download-item" href="static/content/svg/credit-card.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/credit-card.svg' alt='notFound'/>"
  },
  {
    name: "Crop",
    link: `<a class="download-item" href="static/content/svg/crop.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/crop.svg' alt='notFound'/>"
  },

  // ############################
  // ------------ D -------------
  // ############################
  {
    name: "Database",
    link: `<a class="download-item" href="static/content/svg/database.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/database.svg' alt='notFound'/>"
  },
  {
    name: "Delete",
    link: `<a class="download-item" href="static/content/svg/delete.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/delete.svg' alt='notFound'/>"
  },
  {
    name: "Disc",
    link: `<a class="download-item" href="static/content/svg/disc.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/disc.svg' alt='notFound'/>"
  },
  {
    name: "Dollar-sign",
    link: `<a class="download-item" href="static/content/svg/dollar-sign.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/dollar-sign.svg' alt='notFound'/>"
  },
  {
    name: "Download-cloud",
    link: `<a class="download-item" href="static/content/svg/download-cloud.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/download-cloud.svg' alt='notFound'/>"
  },
  {
    name: "Download",
    link: `<a class="download-item" href="static/content/svg/download.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/download.svg' alt='notFound'/>"
  },
  {
    name: "Droplet",
    link: `<a class="download-item" href="static/content/svg/droplet.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/droplet.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ E -------------
  // ############################
  {
    name: "Edit-2",
    link: `<a class="download-item" href="static/content/svg/edit-2.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/edit-2.svg' alt='notFound'/>"
  },
  {
    name: "Edit-3",
    link: `<a class="download-item" href="static/content/svg/edit-3.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/edit-3.svg' alt='notFound'/>"
  },
  {
    name: "Edit",
    link: `<a class="download-item" href="static/content/svg/edit.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/edit.svg' alt='notFound'/>"
  },
  {
    name: "External-link",
    link: `<a class="download-item" href="static/content/svg/external-link.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/external-link.svg' alt='notFound'/>"
  },
  {
    name: "Eye-off",
    link: `<a class="download-item" href="static/content/svg/eye-off.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/eye-off.svg' alt='notFound'/>"
  },
  {
    name: "Eye",
    link: `<a class="download-item" href="static/content/svg/eye.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/eye.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ F -------------
  // ############################
  {
    name: "Facebook",
    link: `<a class="download-item" href="static/content/svg/facebook.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/facebook.svg' alt='notFound'/>"
  },
  {
    name: "Fast-forward",
    link: `<a class="download-item" href="static/content/svg/fast-forward.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/fast-forward.svg' alt='notFound'/>"
  },
  {
    name: "Feather",
    link: `<a class="download-item" href="static/content/svg/feather.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/feather.svg' alt='notFound'/>"
  },
  {
    name: "Figma",
    link: `<a class="download-item" href="static/content/svg/figma.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/figma.svg' alt='notFound'/>"
  },
  {
    name: "File-minus",
    link: `<a class="download-item" href="static/content/svg/file-minus.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/file-minus.svg' alt='notFound'/>"
  },
  {
    name: "File-plus",
    link: `<a class="download-item" href="static/content/svg/file-plus.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/file-plus.svg' alt='notFound'/>"
  },
  {
    name: "FIle-text",
    link: `<a class="download-item" href="static/content/svg/file-text.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/file-text.svg' alt='notFound'/>"
  },
  {
    name: "File",
    link: `<a class="download-item" href="static/content/svg/file.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/file.svg' alt='notFound'/>"
  },
  {
    name: "Film",
    link: `<a class="download-item" href="static/content/svg/film.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/film.svg' alt='notFound'/>"
  },
  {
    name: "Filter",
    link: `<a class="download-item" href="static/content/svg/filter.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/filter.svg' alt='notFound'/>"
  },
  {
    name: "Flag",
    link: `<a class="download-item" href="static/content/svg/flag.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/flag.svg' alt='notFound'/>"
  },
  {
    name: "Folder-minus",
    link: `<a class="download-item" href="static/content/svg/folder-minus.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/folder-minus.svg' alt='notFound'/>"
  },
  {
    name: "Folder-plus",
    link: `<a class="download-item" href="static/content/svg/folder-plus.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/folder-plus.svg' alt='notFound'/>"
  },
  {
    name: "Folder",
    link: `<a class="download-item" href="static/content/svg/folder.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/folder.svg' alt='notFound'/>"
  },
  {
    name: "Frown",
    link: `<a class="download-item" href="static/content/svg/frown.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/frown.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ G -------------
  // ############################
  {
    name: "Gift",
    link: `<a class="download-item" href="static/content/svg/git-branch.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/git-branch.svg' alt='notFound'/>"
  },
  {
    name: "Git-branch",
    link: `<a class="download-item" href="static/content/svg/git-branch.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/git-branch.svg' alt='notFound'/>"
  },
  {
    name: "Git-commit",
    link: `<a class="download-item" href="static/content/svg/git-commit.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/git-commit.svg' alt='notFound'/>"
  },
  {
    name: "Git-merge",
    link: `<a class="download-item" href="static/content/svg/git-merge.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/git-merge.svg' alt='notFound'/>"
  },
  {
    name: "Git-pull-request",
    link: `<a class="download-item" href="static/content/svg/git-pull-request.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/git-pull-request.svg' alt='notFound'/>"
  },
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
  {
    name: "Globe",
    link: `<a class="download-item" href="static/content/svg/globe.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/globe.svg' alt='notFound'/>"
  },
  {
    name: "Grid",
    link: `<a class="download-item" href="static/content/svg/grid.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/grid.svg' alt='notFound'/>"
  },

  // ############################
  // ------------ H -------------
  // ############################
  {
    name: "Hard-drive",
    link: `<a class="download-item" href="static/content/svg/hard-drive.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/hard-drive.svg' alt='notFound'/>"
  },
  {
    name: "Hash",
    link: `<a class="download-item" href="static/content/svg/hash.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/hash.svg' alt='notFound'/>"
  },
  {
    name: "Headphones",
    link: `<a class="download-item" href="static/content/svg/headphones.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/headphones.svg' alt='notFound'/>"
  },
  {
    name: "Heart",
    link: `<a class="download-item" href="static/content/svg/heart.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/heart.svg' alt='notFound'/>"
  },
  {
    name: "Help-circle",
    link: `<a class="download-item" href="static/content/svg/help-circle.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/help-circle.svg' alt='notFound'/>"
  },
  {
    name: "Hexagon",
    link: `<a class="download-item" href="static/content/svg/hexagon.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/hexagon.svg' alt='notFound'/>"
  },
  {
    name: "Home",
    link: `<a class="download-item" href="static/content/svg/home.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/home.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ I -------------
  // ############################
  {
    name: "Image",
    link: `<a class="download-item" href="static/content/svg/image.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/image.svg' alt='notFound'/>"
  },
  {
    name: "Inbox",
    link: `<a class="download-item" href="static/content/svg/inbox.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/inbox.svg' alt='notFound'/>"
  },
  {
    name: "Info",
    link: `<a class="download-item" href="static/content/svg/info.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/info.svg' alt='notFound'/>"
  },
  {
    name: "Instagram",
    link: `<a class="download-item" href="static/content/svg/instagram.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/instagram.svg' alt='notFound'/>"
  },
  {
    name: "Italic",
    link: `<a class="download-item" href="static/content/svg/italic.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/italic.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ K -------------
  // ############################
  {
    name: "key",
    link: `<a class="download-item" href="static/content/svg/key.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/key.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ L -------------
  // ############################

  {
    name: "Layers",
    link: `<a class="download-item" href="static/content/svg/layers.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/layers.svg' alt='notFound'/>"
  },
  {
    name: "Layout",
    link: `<a class="download-item" href="static/content/svg/layout.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/layout.svg' alt='notFound'/>"
  },
  {
    name: "Lens",
    link: `<a class="download-item" href="static/content/svg/lens.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/lens.svg' alt='notFound'/>"
  },
  {
    name: "Life-buoy",
    link: `<a class="download-item" href="static/content/svg/life-buoy.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/life-buoy.svg' alt='notFound'/>"
  },
  {
    name: "Link-2",
    link: `<a class="download-item" href="static/content/svg/link-2.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/link-2.svg' alt='notFound'/>"
  },
  {
    name: "Link",
    link: `<a class="download-item" href="static/content/svg/link.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/link.svg' alt='notFound'/>"
  },
  {
    name: "Linkedin",
    link: `<a class="download-item" href="static/content/svg/linkedin.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/linkedin.svg' alt='notFound'/>"
  },
  {
    name: "List",
    link: `<a class="download-item" href="static/content/svg/list.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/list.svg' alt='notFound'/>"
  },
  {
    name: "Loader",
    link: `<a class="download-item" href="static/content/svg/loader.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/loader.svg' alt='notFound'/>"
  },
  {
    name: "Lock",
    link: `<a class="download-item" href="static/content/svg/lock.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/lock.svg' alt='notFound'/>"
  },
  {
    name: "Log-in",
    link: `<a class="download-item" href="static/content/svg/log-in.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/log-in.svg' alt='notFound'/>"
  },
  {
    name: "Log-out",
    link: `<a class="download-item" href="static/content/svg/log-out.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/log-out.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ M -------------
  // ############################
  {
    name: "Mail",
    link: `<a class="download-item" href="static/content/svg/mail.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/mail.svg' alt='notFound'/>"
  },
  {
    name: "Map-pin",
    link: `<a class="download-item" href="static/content/svg/map-pin.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/map-pin.svg' alt='notFound'/>"
  },
  {
    name: "Map",
    link: `<a class="download-item" href="static/content/svg/map.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/map.svg' alt='notFound'/>"
  },
  {
    name: "Maximize-2",
    link: `<a class="download-item" href="static/content/svg/maximize-2.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/maximize-2.svg' alt='notFound'/>"
  },
  {
    name: "Maximize",
    link: `<a class="download-item" href="static/content/svg/maximize.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/maximize.svg' alt='notFound'/>"
  },
  {
    name: "Meh",
    link: `<a class="download-item" href="static/content/svg/meh.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/meh.svg' alt='notFound'/>"
  },
  {
    name: "Menu",
    link: `<a class="download-item" href="static/content/svg/menu.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/menu.svg' alt='notFound'/>"
  },
  {
    name: "Message-circle",
    link: `<a class="download-item" href="static/content/svg/message-circle.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/message-circle.svg' alt='notFound'/>"
  },
  {
    name: "Message-square",
    link: `<a class="download-item" href="static/content/svg/message-square.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/message-square.svg' alt='notFound'/>"
  },
  {
    name: "Mic-off",
    link: `<a class="download-item" href="static/content/svg/mic-off.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/mic-off.svg' alt='notFound'/>"
  },
  {
    name: "Mic",
    link: `<a class="download-item" href="static/content/svg/mic.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/mic.svg' alt='notFound'/>"
  },
  {
    name: "Minimize-2",
    link: `<a class="download-item" href="static/content/svg/minimize-2.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/minimize-2.svg' alt='notFound'/>"
  },
  {
    name: "Minimize",
    link: `<a class="download-item" href="static/content/svg/minimize.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/minimize.svg' alt='notFound'/>"
  },
  {
    name: "Minus-circle",
    link: `<a class="download-item" href="static/content/svg/minus-circle.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/minus-circle.svg' alt='notFound'/>"
  },
  {
    name: "Minus-square",
    link: `<a class="download-item" href="static/content/svg/minus-square.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/minus-square.svg' alt='notFound'/>"
  },
  {
    name: "Minus",
    link: `<a class="download-item" href="static/content/svg/minus.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/minus.svg' alt='notFound'/>"
  },
  {
    name: "Monitor",
    link: `<a class="download-item" href="static/content/svg/monitor.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/monitor.svg' alt='notFound'/>"
  },
  {
    name: "Moon",
    link: `<a class="download-item" href="static/content/svg/moon.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/moon.svg' alt='notFound'/>"
  },
  {
    name: "More-horizontal",
    link: `<a class="download-item" href="static/content/svg/more-horizontal.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/more-horizontal.svg' alt='notFound'/>"
  },
  {
    name: "More-vertical",
    link: `<a class="download-item" href="static/content/svg/more-vertical.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/more-vertical.svg' alt='notFound'/>"
  },
  {
    name: "Mouse-pointer",
    link: `<a class="download-item" href="static/content/svg/mouse-pointer.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/mouse-pointer.svg' alt='notFound'/>"
  },
  {
    name: "Move",
    link: `<a class="download-item" href="static/content/svg/move.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/move.svg' alt='notFound'/>"
  },
  {
    name: "Music",
    link: `<a class="download-item" href="static/content/svg/music.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/music.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ N -------------
  // ############################
  {
    name: "Navigation-2",
    link: `<a class="download-item" href="static/content/svg/navigation-2.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/navigation-2.svg' alt='notFound'/>"
  },
  {
    name: "Navigation",
    link: `<a class="download-item" href="static/content/svg/navigation.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/navigation.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ O -------------
  // ############################
  {
    name: "Octagon",
    link: `<a class="download-item" href="static/content/svg/octagon.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/octagon.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ P -------------
  // ############################
  {
    name: "Package",
    link: `<a class="download-item" href="static/content/svg/package.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/package.svg' alt='notFound'/>"
  },
  {
    name: "Paperclip",
    link: `<a class="download-item" href="static/content/svg/paperclip.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/paperclip.svg' alt='notFound'/>"
  },
  {
    name: "Pause-circle",
    link: `<a class="download-item" href="static/content/svg/pause-circle.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/pause-circle.svg' alt='notFound'/>"
  },
  {
    name: "Pause",
    link: `<a class="download-item" href="static/content/svg/pause.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/pause.svg' alt='notFound'/>"
  },
  {
    name: "Pen-tool",
    link: `<a class="download-item" href="static/content/svg/pen-tool.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/pen-tool.svg' alt='notFound'/>"
  },
  {
    name: "Percent",
    link: `<a class="download-item" href="static/content/svg/percent.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/percent.svg' alt='notFound'/>"
  },
  {
    name: "Phone-call",
    link: `<a class="download-item" href="static/content/svg/phone-call.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/phone-call.svg' alt='notFound'/>"
  },
  {
    name: "Phone-forwarded",
    link: `<a class="download-item" href="static/content/svg/phone-forwarded.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/phone-forwarded.svg' alt='notFound'/>"
  },
  {
    name: "Phone-incoming",
    link: `<a class="download-item" href="static/content/svg/phone-incoming.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/phone-incoming.svg' alt='notFound'/>"
  },
  {
    name: "Phone-missed",
    link: `<a class="download-item" href="static/content/svg/phone-missed.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/phone-missed.svg' alt='notFound'/>"
  },
  {
    name: "Phone-off",
    link: `<a class="download-item" href="static/content/svg/phone-off.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/phone-off.svg' alt='notFound'/>"
  },
  {
    name: "Phone-outgoing",
    link: `<a class="download-item" href="static/content/svg/phone-outgoing.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/phone-outgoing.svg' alt='notFound'/>"
  },
  {
    name: "Phone",
    link: `<a class="download-item" href="static/content/svg/phone.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/phone.svg' alt='notFound'/>"
  },
  {
    name: "Pie-chart",
    link: `<a class="download-item" href="static/content/svg/pie-chart.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/pie-chart.svg' alt='notFound'/>"
  },
  {
    name: "Play-circle",
    link: `<a class="download-item" href="static/content/svg/play-circle.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/play-circle.svg' alt='notFound'/>"
  },
  {
    name: "Plus-square",
    link: `<a class="download-item" href="static/content/svg/plus-square.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/plus-square.svg' alt='notFound'/>"
  },
  {
    name: "Plus",
    link: `<a class="download-item" href="static/content/svg/plus.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/plus.svg' alt='notFound'/>"
  },
  {
    name: "Pocket",
    link: `<a class="download-item" href="static/content/svg/pocket.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/pocket.svg' alt='notFound'/>"
  },
  {
    name: "Power",
    link: `<a class="download-item" href="static/content/svg/power.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/power.svg' alt='notFound'/>"
  },
  {
    name: "Printer",
    link: `<a class="download-item" href="static/content/svg/printer.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/printer.svg' alt='notFound'/>"
  },

  // ############################
  // ------------ R -------------
  // ############################
  {
    name: "Radio",
    link: `<a class="download-item" href="static/content/svg/radio.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/radio.svg' alt='notFound'/>"
  },
  {
    name: "Refresh-ccw",
    link: `<a class="download-item" href="static/content/svg/refresh-ccw.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/refresh-ccw.svg' alt='notFound'/>"
  },
  {
    name: "Refresh-cw",
    link: `<a class="download-item" href="static/content/svg/refresh-cw.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/refresh-cw.svg' alt='notFound'/>"
  },
  {
    name: "Repeat",
    link: `<a class="download-item" href="static/content/svg/repeat.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/repeat.svg' alt='notFound'/>"
  },
  {
    name: "Rewind",
    link: `<a class="download-item" href="static/content/svg/rewind.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/rewind.svg' alt='notFound'/>"
  },
  {
    name: "Rotate-ccw",
    link: `<a class="download-item" href="static/content/svg/rotate-ccw.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/rotate-ccw.svg' alt='notFound'/>"
  },
  {
    name: "Rotate-cw",
    link: `<a class="download-item" href="static/content/svg/rotate-cw.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/rotate-cw.svg' alt='notFound'/>"
  },
  {
    name: "Rss",
    link: `<a class="download-item" href="static/content/svg/rss.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/rss.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ S -------------
  // ############################
  {
    name: "Save",
    link: `<a class="download-item" href="static/content/svg/save.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/save.svg' alt='notFound'/>"
  },
  {
    name: "Scissors",
    link: `<a class="download-item" href="static/content/svg/scissors.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/scissors.svg' alt='notFound'/>"
  },
  {
    name: "Search",
    link: `<a class="download-item" href="static/content/svg/search.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/search.svg' alt='notFound'/>"
  },
  {
    name: "Send",
    link: `<a class="download-item" href="static/content/svg/send.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/send.svg' alt='notFound'/>"
  },
  {
    name: "Server",
    link: `<a class="download-item" href="static/content/svg/server.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/server.svg' alt='notFound'/>"
  },
  {
    name: "Settings",
    link: `<a class="download-item" href="static/content/svg/settings.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/settings.svg' alt='notFound'/>"
  },
  {
    name: "Share-2",
    link: `<a class="download-item" href="static/content/svg/share-2.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/share-2.svg' alt='notFound'/>"
  },
  {
    name: "Share",
    link: `<a class="download-item" href="static/content/svg/share.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/share.svg' alt='notFound'/>"
  },
  {
    name: "Shield-off",
    link: `<a class="download-item" href="static/content/svg/shield-off.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/shield-off.svg' alt='notFound'/>"
  },
  {
    name: "Shield",
    link: `<a class="download-item" href="static/content/svg/shield.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/shield.svg' alt='notFound'/>"
  },
  {
    name: "Shopping-bag",
    link: `<a class="download-item" href="static/content/svg/shopping-bag.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/shopping-bag.svg' alt='notFound'/>"
  },
  {
    name: "Shopping-cart",
    link: `<a class="download-item" href="static/content/svg/shopping-cart.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/shopping-cart.svg' alt='notFound'/>"
  },
  {
    name: "Shuffle",
    link: `<a class="download-item" href="static/content/svg/shuffle.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/shuffle.svg' alt='notFound'/>"
  },
  {
    name: "Sidebar",
    link: `<a class="download-item" href="static/content/svg/sidebar.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/sidebar.svg' alt='notFound'/>"
  },
  {
    name: "Skip-back",
    link: `<a class="download-item" href="static/content/svg/skip-back.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/skip-back.svg' alt='notFound'/>"
  },
  {
    name: "Skip-forward",
    link: `<a class="download-item" href="static/content/svg/skip-forward.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/skip-forward.svg' alt='notFound'/>"
  },
  {
    name: "Slack",
    link: `<a class="download-item" href="static/content/svg/slack.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/slack.svg' alt='notFound'/>"
  },
  {
    name: "Slash",
    link: `<a class="download-item" href="static/content/svg/slash.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/slash.svg' alt='notFound'/>"
  },
  {
    name: "Sliders",
    link: `<a class="download-item" href="static/content/svg/sliders.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/sliders.svg' alt='notFound'/>"
  },
  {
    name: "Smartphone",
    link: `<a class="download-item" href="static/content/svg/smartphone.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/smartphone.svg' alt='notFound'/>"
  },
  {
    name: "Smile",
    link: `<a class="download-item" href="static/content/svg/smile.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/smile.svg' alt='notFound'/>"
  },
  {
    name: "Speaker",
    link: `<a class="download-item" href="static/content/svg/speaker.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/speaker.svg' alt='notFound'/>"
  },
  {
    name: "Square",
    link: `<a class="download-item" href="static/content/svg/square.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/square.svg' alt='notFound'/>"
  },
  {
    name: "Star",
    link: `<a class="download-item" href="static/content/svg/star.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/star.svg' alt='notFound'/>"
  },
  {
    name: "Stop-circle",
    link: `<a class="download-item" href="static/content/svg/stop-circle.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/stop-circle.svg' alt='notFound'/>"
  },
  {
    name: "Sun",
    link: `<a class="download-item" href="static/content/svg/sun.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/sun.svg' alt='notFound'/>"
  },
  {
    name: "Sunrise",
    link: `<a class="download-item" href="static/content/svg/sunrise.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/sunrise.svg' alt='notFound'/>"
  },
  {
    name: "Sunset",
    link: `<a class="download-item" href="static/content/svg/sunset.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/sunset.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ T -------------
  // ############################
  {
    name: "Tablet",
    link: `<a class="download-item" href="static/content/svg/tablet.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/tablet.svg' alt='notFound'/>"
  },
  {
    name: "Tag",
    link: `<a class="download-item" href="static/content/svg/tag.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/tag.svg' alt='notFound'/>"
  },
  {
    name: "Target",
    link: `<a class="download-item" href="static/content/svg/target.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/target.svg' alt='notFound'/>"
  },
  {
    name: "Terminal",
    link: `<a class="download-item" href="static/content/svg/terminal.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/terminal.svg' alt='notFound'/>"
  },
  {
    name: "Thermometer",
    link: `<a class="download-item" href="static/content/svg/thermometer.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/thermometer.svg' alt='notFound'/>"
  },
  {
    name: "Thumbs-down",
    link: `<a class="download-item" href="static/content/svg/thumbs-down.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/thumbs-down.svg' alt='notFound'/>"
  },
  {
    name: "Thumbs-up",
    link: `<a class="download-item" href="static/content/svg/thumbs-up.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/thumbs-up.svg' alt='notFound'/>"
  },
  {
    name: "Toggle-left",
    link: `<a class="download-item" href="static/content/svg/toggle-left.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/toggle-left.svg' alt='notFound'/>"
  },
  {
    name: "Toggle-right",
    link: `<a class="download-item" href="static/content/svg/toggle-right.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/toggle-right.svg' alt='notFound'/>"
  },
  {
    name: "Trash-2",
    link: `<a class="download-item" href="static/content/svg/trash-2.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/trash-2.svg' alt='notFound'/>"
  },
  {
    name: "Trash",
    link: `<a class="download-item" href="static/content/svg/trash.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/trash.svg' alt='notFound'/>"
  },
  {
    name: "Trello",
    link: `<a class="download-item" href="static/content/svg/trello.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/trello.svg' alt='notFound'/>"
  },
  {
    name: "Trending-down",
    link: `<a class="download-item" href="static/content/svg/trending-down.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/trending-down.svg' alt='notFound'/>"
  },
  {
    name: "Trending-up",
    link: `<a class="download-item" href="static/content/svg/trending-up.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/trending-up.svg' alt='notFound'/>"
  },
  {
    name: "Triangle",
    link: `<a class="download-item" href="static/content/svg/triangle.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/triangle.svg' alt='notFound'/>"
  },
  {
    name: "Truck",
    link: `<a class="download-item" href="static/content/svg/truck.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/truck.svg' alt='notFound'/>"
  },
  {
    name: "Tv",
    link: `<a class="download-item" href="static/content/svg/tv.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/tv.svg' alt='notFound'/>"
  },
  {
    name: "Twitter",
    link: `<a class="download-item" href="static/content/svg/twitter.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/twitter.svg' alt='notFound'/>"
  },
  {
    name: "Type",
    link: `<a class="download-item" href="static/content/svg/type.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/type.svg' alt='notFound'/>"
  },

  // ############################
  // ------------ U -------------
  // ############################
  {
    name: "Umbrella",
    link: `<a class="download-item" href="static/content/svg/umbrella.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/umbrella.svg' alt='notFound'/>"
  },
  {
    name: "Underline",
    link: `<a class="download-item" href="static/content/svg/underline.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/underline.svg' alt='notFound'/>"
  },
  {
    name: "Unlock",
    link: `<a class="download-item" href="static/content/svg/unlock.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/unlock.svg' alt='notFound'/>"
  },
  {
    name: "Upload-cloud",
    link: `<a class="download-item" href="static/content/svg/upload-cloud.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/upload-cloud.svg' alt='notFound'/>"
  },
  {
    name: "Upload",
    link: `<a class="download-item" href="static/content/svg/upload.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/upload.svg' alt='notFound'/>"
  },
  {
    name: "User-check",
    link: `<a class="download-item" href="static/content/svg/user-check.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/user-check.svg' alt='notFound'/>"
  },
  {
    name: "User-minus",
    link: `<a class="download-item" href="static/content/svg/user-minus.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/user-minus.svg' alt='notFound'/>"
  },
  {
    name: "User-plus",
    link: `<a class="download-item" href="static/content/svg/user-plus.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/user-plus.svg' alt='notFound'/>"
  },
  {
    name: "User-x",
    link: `<a class="download-item" href="static/content/svg/user-x.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/user-x.svg' alt='notFound'/>"
  },
  {
    name: "User",
    link: `<a class="download-item" href="static/content/svg/user.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/user.svg' alt='notFound'/>"
  },
  {
    name: "Users",
    link: `<a class="download-item" href="static/content/svg/users.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/users.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ V -------------
  // ############################
  {
    name: "Video-off",
    link: `<a class="download-item" href="static/content/svg/video-off.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/video-off.svg' alt='notFound'/>"
  },
  {
    name: "Video",
    link: `<a class="download-item" href="static/content/svg/video.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/video.svg' alt='notFound'/>"
  },
  {
    name: "VS Code",
    link: `<a class="download-item" href="static/content/svg/visualstudiocode.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/visualstudiocode.svg' alt='notFound'/>"
  },
  {
    name: "Voicemail",
    link: `<a class="download-item" href="static/content/svg/voicemail.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/voicemail.svg' alt='notFound'/>"
  },
  {
    name: "Volume-1",
    link: `<a class="download-item" href="static/content/svg/volume-1.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/volume-1.svg' alt='notFound'/>"
  },
  {
    name: "Volume-2",
    link: `<a class="download-item" href="static/content/svg/volume-2.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/volume-2.svg' alt='notFound'/>"
  },
  {
    name: "Volume-x",
    link: `<a class="download-item" href="static/content/svg/volume-x.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/volume-x.svg' alt='notFound'/>"
  },
  {
    name: "Volume",
    link: `<a class="download-item" href="static/content/svg/volume.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/volume.svg' alt='notFound'/>"
  },

  // ############################
  // ------------ W-------------
  // ############################
  {
    name: "Watch",
    link: `<a class="download-item" href="static/content/svg/watch.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/watch.svg' alt='notFound'/>"
  },
  {
    name: "Wifi-off",
    link: `<a class="download-item" href="static/content/svg/wifi-off.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/wifi-off.svg' alt='notFound'/>"
  },
  {
    name: "Wifi",
    link: `<a class="download-item" href="static/content/svg/wifi.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/wifi.svg' alt='notFound'/>"
  },
  {
    name: "Wind",
    link: `<a class="download-item" href="static/content/svg/wind.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/wind.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ X -------------
  // ############################
  {
    name: "X-circle",
    link: `<a class="download-item" href="static/content/svg/x-circle.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/x-circle.svg' alt='notFound'/>"
  },
  {
    name: "X-octagon",
    link: `<a class="download-item" href="static/content/svg/x-octagon.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/x-octagon.svg' alt='notFound'/>"
  },
  {
    name: "X-square",
    link: `<a class="download-item" href="static/content/svg/x-square.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/x-square.svg' alt='notFound'/>"
  },
  {
    name: "X",
    link: `<a class="download-item" href="static/content/svg/x.svg" download=""></a> `,
    img: "<img class='img-item' src='static/content/svg/x.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ Y -------------
  // ############################
  {
    name: "Youtube",
    link: `<a class="download-item" href="static/content/svg/youtube.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/youtube.svg' alt='notFound'/>"
  },
  // ############################
  // ------------ Z -------------
  // ############################
  {
    name: "Zap-off",
    link: `<a class="download-item" href="static/content/svg/zap-off.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/zap-off.svg' alt='notFound'/>"
  },
  {
    name: "Zap",
    link: `<a class="download-item" href="static/content/svg/zap.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/zap.svg' alt='notFound'/>"
  },
  {
    name: "Zoom-in",
    link: `<a class="download-item" href="static/content/svg/zoom-in.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/zoom-in.svg' alt='notFound'/>"
  },
  {
    name: "Zoom-out",
    link: `<a class="download-item" href="static/content/svg/zoom-out.svg" download=""></a> `,
    img:
      "<img class='img-item' src='static/content/svg/zoom-out.svg' alt='notFound'/>"
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
