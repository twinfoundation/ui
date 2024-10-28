# @twin.org/ui-components-react - Examples

Install the package:

```shell
npm install @twin.org/ui-components-react
```

## Configuring

To you Tailwind config add the following settings:

```js
import { execSync } from "node:child_process";
import { TailwindConfig } from "@twin.org/ui-components-react";

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
