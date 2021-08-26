// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration
const proxy = require("http2-proxy");

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  alias: {
    interface: "./src/interface",
    app: "./src/app",
    public: "./src/public",
    common: "./src/common",
    config: "./src/config",
  },
  mount: {
    public: { url: "/", static: true },
    src: "/",
  },
  exclude: ["**/*.test.ts", "**/*.test.tsx", "lib/test/test-utils.tsx"],
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    baseUrl: "/src",
  },
  routes: [
    {
      src: "/api/.*",
      dest: (req, res) => {
        // remove /api prefix (optional)
        req.url = req.url.replace(/^\/api/, "");
        //req.headers = { "content-type": "application/json" };

        return proxy.web(req, res, {
          hostname: "localhost",
          protocol: "http",
          port: 3022,
        });
      },
    },
    { match: "routes", src: ".*", dest: "/index.html" },
  ],
};
