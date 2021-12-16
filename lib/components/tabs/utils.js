export const sanitize = (l) => encodeURIComponent(l.toLowerCase().replace(/\s/g, "-"));
export const getPath = ({link, label}) => {
  if (link || link === "") {
    return link;
  }
  return "/" + sanitize(label);
};
export const toHref = (l, urlPrefix) => {
  const path = getPath(l);
  return urlPrefix + path;
};
export const getIsSelected = (pathname, path, navs) => {
  const f = navs.find((x) => pathname === x.path);
  if (f) {
    return pathname === path;
  }
  const isIncludedArray = navs.filter((x) => pathname.includes(x.path)).sort((a, b) => b.path.length - a.path.length);
  if (isIncludedArray.length > 0) {
    return isIncludedArray[0].path === path;
  }
  return false;
};
