const fs = require("fs");

function getFiles(dir, files_) {
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files) {
    var name = dir + "/" + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
}

const filenameToName = (fn) => {
  const fnWSuffix = fn.slice(0, -4);

  return fnWSuffix
    .replace(/-(\w)/g, (_x, y) => y.toUpperCase())
    .replace(/^./, (x) => x.toUpperCase());
};

const folderpath =
  "/Users/johanboissard/Desktop/srv/front/tailwind-react-ui/src/lib/icons";

const files = getFiles(folderpath);

const ignore = ["svg-wrapper.tsx", "index.tsx", "icon-factory.tsx"];

files
  .filter((x) => {
    const c = ignore
      .map((ignoreFile) => x.includes(ignoreFile))
      .reduce((a, b) => a || b);

    // console.log({ c, x });

    return !c;
  })
  .map((f) => {
    const filename = f.slice(folderpath.length + 1);
    const name = filenameToName(filename);

    const content = fs.readFileSync(f, "utf-8");

    const lines = content.split("\n");

    const pstrokeWidth = lines
      .map((x) => {
        const r = x.match(/^\s+strokeWidth=(.*)/);

        if (r) {
          return r[1];
        }

        return;
      })
      .find((x) => !!x);

    if (!pstrokeWidth) {
      throw Error("could not find strokewirhd");
    }

    const strokeWidth = Number(pstrokeWidth.replace(/[^\d]/g, ""));

    const path = lines
      .map((x) => {
        const r = x.match(/^\s+d=(.*)/);

        if (r) {
          return r[1];
        }

        return;
      })
      .find((x) => !!x);

    const r = { strokeWidth, path, filename, name };

    return r;
  })
  .map((x) => {
    console.log(`export const ${x.name} = IconFactorySVG(
  ${x.path}, ${x.strokeWidth}
);`);
  });
