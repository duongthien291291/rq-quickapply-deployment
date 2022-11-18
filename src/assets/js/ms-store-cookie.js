const ms_store_get_cookie = function (cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
const ms_get_param_have_prefix = function (
  query_param,
  prefixes_like = ["utm_"],
  compare_withs = ["root"]
) {
  let searchParams = new URLSearchParams(query_param);
  let param_query_have_prefix = "";
  var key_first = true;
  for (var key of searchParams.keys()) {
    let flag = false;
    for (var element_contain of compare_withs) {
      if (key === element_contain) {
        flag = true;
        break;
      }
    }
    if (flag !== true) {
      for (var prefix of prefixes_like) {
        if (key.includes(prefix)) {
          flag = true;
          break;
        }
      }
    }
    if (flag === true) {
      if (key_first === true) {
        param_query_have_prefix += key + "=" + searchParams.get(key);
        key_first = false;
      } else {
        param_query_have_prefix += "&" + key + "=" + searchParams.get(key);
      }
    }
  }
  return param_query_have_prefix;
};
const ms_set_cookie_landing_query = function (
  prefixes_like = ["utm_"],
  compare_withs = ["root"],
  key = "landing_query_param",
  exp_month = 2
) {
  let urlParams = window.location.search;
  let landing_query_param =
    ms_get_param_have_prefix(urlParams, prefixes_like, compare_withs) || "";
  if (landing_query_param != "") {
    let old_landing_cookie = ms_store_get_cookie(key) || "";
    let landing_param_merge = ms_merge_cookie_param(
      old_landing_cookie,
      landing_query_param
    );
    ms_store_cookie(key, landing_param_merge, exp_month);
  }
};
const ms_merge_cookie_param = function (old_cookie = "", new_cookie = "") {
  if (!old_cookie && new_cookie) {
    return new_cookie;
  }
  if (!old_cookie && !new_cookie) {
    return "";
  }
  let searchParamsOld = new URLSearchParams(old_cookie);
  let searchParamsNew = new URLSearchParams(new_cookie);
  let mergeValueParam = "";
  for (var key of searchParamsNew.keys()) {
    let old_value = searchParamsOld.get(key) || "";
    if (old_value) {
      searchParamsOld.delete(key);
    }
    mergeValueParam += "&" + key + "=" + searchParamsNew.get(key);
  }
  for (var key of searchParamsOld.keys()) {
    mergeValueParam += "&" + key + "=" + searchParamsOld.get(key);
  }
  mergeValueParam = mergeValueParam.replace("&", "");
  return mergeValueParam;
};
const ms_store_cookie = function (key, value, exp_month = 2) {
  var current_url = window.location.hostname.split(".");
  var root_domain = current_url.slice(-2).join(".");
  if (root_domain === "localhost") {
    root_domain = "";
  } else {
    root_domain = `;domain=.${root_domain};path=/`;
  }
  var expires_cookie = new Date();
  var milisecond_in_a_day = 86400000;
  expires_cookie.setTime(
    expires_cookie.getTime() + milisecond_in_a_day * 30 * exp_month
  );
  document.cookie =
    key + "=" + value + ";expires=" + expires_cookie + root_domain;
};
