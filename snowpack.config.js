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
  routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
};
