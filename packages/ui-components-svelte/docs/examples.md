# @twin.org/ui-components-svelte - Examples

Install the package:

```shell
npm install @twin.org/ui-components-svelte
```

## Configuring

To you Tailwind config add the following settings:

```js
import { execSync } from "node:child_process";
import { TailwindConfig } from "@twin.org/ui-components-svelte/config/tailwindConfig.mjs";
// or if you setup supports modules directly
import { TailwindConfig } from "@twin.org/ui-components-svelte";

// This will locate the npm root in the current repo, including mono-repos
const npmRoot = execSync("npm root").toString().trim().replace(/\\/g, "/");
// You could also just use
// const npmRoot = "./node_modules";

export default {
   content: [
   ...your content paths,
   ...TailwindConfig.getContentPaths(npmRoot)
   ],
   plugins: TailwindConfig.getPlugins(),
   darkMode: "class",
   theme: {
      extend: TailwindConfig.getTheme()
   }
};
```
