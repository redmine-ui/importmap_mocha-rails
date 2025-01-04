export function changeFavicon(failures) {
  const links = document.getElementsByTagName('link')

  for (let i=0; i<links.length; i++) {
    let link = links[i];
    if (link.rel == 'icon') {
      const icon = failures > 0 ? favicon('red')
                                : favicon('green')
      link.remove()
      const newlink = document.createElement("link");
      newlink.rel = 'icon';
      newlink.href = icon;
      newlink.type = 'image/svg+xml';
      const head = document.getElementsByTagName("head")[0];
      head.appendChild(newlink);

      return;
    }
  }
}

function favicon(color, count) {
  const icon = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <style>circle {
      fill: ${color};
      stroke: ${color};
      stroke-width: 3px;
    }
  </style>
  <circle cx="50" cy="50" r="47"/>
</svg>`
  const base64Svg = btoa(unescape(encodeURIComponent(icon)));

  return `data:image/svg+xml;base64,${base64Svg}`;
}
