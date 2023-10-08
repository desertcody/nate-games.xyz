function getTabData() {
  try {
    return JSON.parse(localStorage.getItem("tab")) || {};
  } catch {
    return {};
  }
}

function updateTabData(tabData) {
  localStorage.setItem("tab", JSON.stringify(tabData));
}

const settingsDefaultTab = {
  title: document.title,
  icon: "/favicon.ico",
};

function setTitle(title = "") {
  document.title = title || settingsDefaultTab.title;
  const tabData = getTabData();
  tabData.title = title || undefined;
  updateTabData(tabData);
}

function setFavicon(icon) {
  document.querySelector("link[rel='icon']").href =
    icon || settingsDefaultTab.icon;
  const tabData = getTabData();
  tabData.icon = icon || undefined;
  updateTabData(tabData);
}

function resetTab() {
  document.title = settingsDefaultTab.title;
  document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  updateTabData({});
}

document.addEventListener("DOMContentLoaded", function () {
  const urlButtons = document.querySelectorAll(".url-button");

  urlButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      urlButtons.forEach(function (btn) {
        btn.classList.remove("selected-url");
      });

      this.classList.add("selected-url");
      localStorage.setItem("selectedUrl", this.getAttribute("data-url"));
    });
  });
});

const tabData = getTabData();
if (tabData.title) {
  setTitle(tabData.title);
}
if (tabData.icon) {
  setFavicon(tabData.icon);
}
