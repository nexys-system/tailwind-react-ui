import * as __SNOWPACK_ENV__ from './_snowpack/env.js';

export const version = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_VERSION || "unset_version";
export const sha = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_GIT_SHA || "unset_sha";
export const basename = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_URL;
export const title = "React Tailwind UI";
export const ghUrl = "https://github.com/nexys-system/tailwind-react-ui";
export const github = {sha: `${ghUrl}/commit/${sha}`, url: ghUrl};
