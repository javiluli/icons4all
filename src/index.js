// Import Icons website
import "./static/content/svg/logo.svg";

//---------------------------------//
// Import CSS, Normalize and fonts.css
import "./styles/style.scss";
import "./static/css/font-Confortaa.css";
import "./static/css/font-Montserrat.css";
import "./static/css/normalize.css";
//---------------------------------//

//---------------------------------//
// Import fonts.ttf
import "./static/fonts/Comfortaa[wght].ttf";
import "./static/fonts/Montserrat-Regular.ttf";
import "./static/fonts/Montserrat-Medium.ttf";
import "./static/fonts/Montserrat-SemiBold.ttf";
//---------------------------------//
import "./static/content/svg/battery-charging.svg";

// Import Icons SVG for download

// Import all filder from ./static/content/svg/
const cache = {};
function importAll(r) {
  r.keys().forEach(key => (cache[key] = r(key)));
}
importAll(require.context("./static/content/svg/", true, /\.svg$/));
//---------------------------------//

//---------------------------------//

import "./static/js/show_menu";
import "./static/js/array_SVG_library.js";
import "./static/js/btn-back-top";
//---------------------------------//
