function printApps(type) {
  type.forEach((app) => {
    if (!nonGStaticApps.includes(app.friendlyName)) {
      app.iconSrc = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${app.iconSrc}&size=32`;
    }
    document.write(`<div class="app">`);
    document.write(
      `<input type="checkbox" data-url="${app.downloadUrl}" data-file="${app.fileName}">`
    );
    document.write(`<img src="${app.iconSrc}" alt="${app.friendlyName}">`);
    document.write(`<p>${app.friendlyName}</p>`);
    document.write(`</div>`);
  });
}

function download() {
  const checkedboxes = document.querySelectorAll(
    `input[type="checkbox"]:checked`
  );
  if (checkedboxes.length == 1) {
    const url = checkedboxes[0].dataset.url;
    document.location.href = url;
  } else {
    let queue = `mkdir "App Hub"\r\ncd "App Hub"`;
    checkedboxes.forEach((checkedbox) => {
      queue += `\r\ncurl -L "${checkedbox.dataset.url}" -o "${checkedbox.dataset.file}"`;
    });
    const file = new Blob([queue], { type: `text/plain` });
    saveAs(file, `App Hub.bat`);
  }
}
