import "./styles.css";
import "ol/ol.css";
import olms from "ol-mapbox-style";

document.getElementById("note1").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

document.getElementById("note2").innerHTML = `
<h1>Use case</h1>
<div>
Use of Openlayers and olms. We apply a color change to the icons in PNG format...
<b>Hospitals are in red</b>.
</div>
`;

olms("map", "data/test.json").then(function (map) {});
