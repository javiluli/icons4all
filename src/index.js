// Import all filder from ./static/content/svg/
const cache = {};
function importAll(r) {
  r.keys().forEach(key => (cache[key] = r(key)));
}
importAll(require.context("./static/content/svg/", true, /\.svg$/));
//---------------------------------//

// Import CSS, Normalize and fonts.css from ./styles
import "./styles/style.scss";
import "./static/css/font-Confortaa.css";
import "./static/css/font-Montserrat.css";
import "./static/css/normalize.css";
//---------------------------------//

// Import fonts.ttf from ./static/fonts
import "./static/fonts/Comfortaa[wght].ttf";
import "./static/fonts/Montserrat-Regular.ttf";
import "./static/fonts/Montserrat-Medium.ttf";
import "./static/fonts/Montserrat-SemiBold.ttf";
//---------------------------------//

// Import script ./static/js
import "./static/js/show_menu";
import "./static/js/array_SVG_library.js";
import "./static/js/btn-back-top";
//---------------------------------//
