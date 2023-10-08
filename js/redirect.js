function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";

  var customMappings = {
    github: "http://github.com",
    crazygames: "http://www.crazygames.com",
  };

  if (customMappings.hasOwnProperty(results[2])) {
    return customMappings[results[2]];
  } else {
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
}

var target = getParameterByName("redirect");

if (target) {
  window.location.href = target;
}
