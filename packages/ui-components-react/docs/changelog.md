# @twin.org/ui-components-react - Changelog

## [0.0.1-next.51](https://github.com/twinfoundation/ui/compare/ui-components-react-v0.0.1-next.50...ui-components-react-v0.0.1-next.51) (2025-06-11)


### Features

* select color prop type, Table overflow fix and fix Button ghost outline ([#71](https://github.com/twinfoundation/ui/issues/71)) ([b6c7746](https://github.com/twinfoundation/ui/commit/b6c7746c281892ea10f235046362f97dabfa20d5))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/ui-tailwind bumped from 0.0.1-next.50 to 0.0.1-next.51

## [0.0.1-next.50](https://github.com/twinfoundation/ui/compare/ui-components-react-v0.0.1-next.49...ui-components-react-v0.0.1-next.50) (2025-06-05)


### Features

* icons migration svg flat ([#68](https://github.com/twinfoundation/ui/issues/68)) ([1d4b707](https://github.com/twinfoundation/ui/commit/1d4b7073afe736a0d1b203d0fc079d2d3848760c))
* new icons flat hotfix ([#69](https://github.com/twinfoundation/ui/issues/69)) ([6253fac](https://github.com/twinfoundation/ui/commit/6253fac4e327947c4337103e05ad870ec91d5cf4))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/ui-tailwind bumped from 0.0.1-next.49 to 0.0.1-next.50

## [0.0.1-next.49](https://github.com/twinfoundation/ui/compare/ui-components-react-v0.0.1-next.48...ui-components-react-v0.0.1-next.49) (2025-05-29)


### Features

* svg properties in camelCase ([#64](https://github.com/twinfoundation/ui/issues/64)) ([4183cbe](https://github.com/twinfoundation/ui/commit/4183cbebb5c1a09e04571fc6368c8808ee844ef0))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/ui-tailwind bumped from 0.0.1-next.48 to 0.0.1-next.49

## [0.0.1-next.48](https://github.com/twinfoundation/ui/compare/ui-components-react-v0.0.1-next.47...ui-components-react-v0.0.1-next.48) (2025-05-28)


### Features

* migrate icon system and update types ([#62](https://github.com/twinfoundation/ui/issues/62)) ([ab81824](https://github.com/twinfoundation/ui/commit/ab81824e06cf0f03ed1d888f2db9b642574d8b42))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @twin.org/ui-tailwind bumped from 0.0.1-next.47 to 0.0.1-next.48

## [0.0.1-next.47](https://github.com/twinfoundation/ui/compare/ui-components-react-v0.0.1-next.46...ui-components-react-v0.0.1-next.47) (2025-05-22)

### Features

- button - add ghost color/variant to the component ([#58](https://github.com/twinfoundation/ui/issues/58)) ([ed2ad38](https://github.com/twinfoundation/ui/commit/ed2ad38fac00617004be5c7b15dab73cf818ecc5))

### Dependencies

- The following workspace dependencies were updated
  - dependencies
    - @twin.org/ui-tailwind bumped from 0.0.1-next.46 to 0.0.1-next.47

## [0.0.1-next.46](https://github.com/twinfoundation/ui/compare/ui-components-react-v0.0.1-next.45...ui-components-react-v0.0.1-next.46) (2025-05-21)

### Features

- pass all props for Modal footerButtons array to be able to pass `data-testid` to them ([#56](https://github.com/twinfoundation/ui/issues/56)) ([adf96de](https://github.com/twinfoundation/ui/commit/adf96de722bd0a1f6613808296e1bad5d9581e9a))

### Dependencies

- The following workspace dependencies were updated
  - dependencies
    - @twin.org/ui-tailwind bumped from 0.0.1-next.45 to 0.0.1-next.46

## [0.0.1-next.45](https://github.com/twinfoundation/ui/compare/ui-components-react-v0.0.1-next.44...ui-components-react-v0.0.1-next.45) (2025-04-30)

### Miscellaneous Chores

- **ui-components-react:** Synchronize repo versions

### Dependencies

- The following workspace dependencies were updated
  - dependencies
    - @twin.org/ui-tailwind bumped from 0.0.1-next.44 to 0.0.1-next.45

## [0.0.1-next.44](https://github.com/twinfoundation/ui/compare/ui-components-react-v0.0.1-next.43...ui-components-react-v0.0.1-next.44) (2025-04-29)

### ⚠ BREAKING CHANGES

- Card component API has been simplified:
  - Removed specialized card types (profile, eCommerce, list)
  - Changed button interface (removed href, description)
  - Removed Flowbite card props inheritance
  - Changed icon prop to svg in buttons

### Features

- **accordion:** add icons support to Accordion component ([#33](https://github.com/twinfoundation/ui/issues/33)) ([5be554a](https://github.com/twinfoundation/ui/commit/5be554a2712896811d467e5b479795a0c76530f5))
- **avatar:** implement Avatar component ([#8](https://github.com/twinfoundation/ui/issues/8)) ([9448ff5](https://github.com/twinfoundation/ui/commit/9448ff58e110f95f3bae49f4e10f7d83752667c5))
- **components:** add barrel exports for component directories ([#40](https://github.com/twinfoundation/ui/issues/40)) ([8037480](https://github.com/twinfoundation/ui/commit/8037480358ca7d71da7c8fadd70915496cc402ff))
- **drawer:** enhance button customization options ([#34](https://github.com/twinfoundation/ui/issues/34)) ([dc2d8af](https://github.com/twinfoundation/ui/commit/dc2d8af73ce148329d05efa63d44e1bb38a40ad2))
- **Dropdown and Button:** add `color` to Dropdown component and use `iconOnly` props from Button ([#52](https://github.com/twinfoundation/ui/issues/52)) ([3a5e8de](https://github.com/twinfoundation/ui/commit/3a5e8de6622b5df97a2cc19939283562aa3544e1))
- **dropdown:** add checkbox support and improve accessibility ([#13](https://github.com/twinfoundation/ui/issues/13)) ([9c3466c](https://github.com/twinfoundation/ui/commit/9c3466caa98794cec566864cbcba46298e8ca02b))
- improve hot reloading for React components in Storybook and other improvements ([#5](https://github.com/twinfoundation/ui/issues/5)) ([e6df649](https://github.com/twinfoundation/ui/commit/e6df649c2b471f9fe23d015475220f135ef791bb))
- **pagination:** Enhance styles per figma and add icons-only variant ([#21](https://github.com/twinfoundation/ui/issues/21)) ([fa6adb8](https://github.com/twinfoundation/ui/commit/fa6adb833dd720a00d1179c734ad2a00d87f61cd))
- **sidebar:** add footer, header, and full height support ([#45](https://github.com/twinfoundation/ui/issues/45)) ([38f371f](https://github.com/twinfoundation/ui/commit/38f371ffba864cb29108390d9affb08deb6b8acc))
- svelte validated form class override ([0444d4b](https://github.com/twinfoundation/ui/commit/0444d4b767459717f7733dd228e1d8641b9009a3))
- **tabs:** add controlled state and improve accessibility ([#46](https://github.com/twinfoundation/ui/issues/46)) ([3cacadb](https://github.com/twinfoundation/ui/commit/3cacadb4153efbbc9757cbf1284d670146dd4645))
- **tabs:** Add loading states to Tabs component ([#47](https://github.com/twinfoundation/ui/issues/47)) ([6580e27](https://github.com/twinfoundation/ui/commit/6580e27150c8ba291d40c56b1b901611d229aa9d))
- **tabs:** add tabs story with icons and improved performance ([#26](https://github.com/twinfoundation/ui/issues/26)) ([d74813a](https://github.com/twinfoundation/ui/commit/d74813a06699ef2f50328d75cee81207311d98ba))
- **ui:** enhance Progress component with custom colors and centered text ([#22](https://github.com/twinfoundation/ui/issues/22)) ([b96b923](https://github.com/twinfoundation/ui/commit/b96b9234ed99e2ac51dbecc85353ea0d850529c1))

### Bug Fixes

- **card:** Improved colors ([#11](https://github.com/twinfoundation/ui/issues/11)) ([652f4cc](https://github.com/twinfoundation/ui/commit/652f4cc68d1116fd6f62cfd643d8ec288d5e9a30))
- **eslint:** add React hooks linting and fix component issues ([#32](https://github.com/twinfoundation/ui/issues/32)) ([0882a2d](https://github.com/twinfoundation/ui/commit/0882a2df28bbca89f3d7a85bed2655cb1e17e6cf))

### Code Refactoring

- modernize components with TypeScript and React best practices ([#30](https://github.com/twinfoundation/ui/issues/30)) ([fbd9ee5](https://github.com/twinfoundation/ui/commit/fbd9ee53732faa0ca1b4f5df2155e6789097deb6))

### Dependencies

- The following workspace dependencies were updated
  - dependencies
    - @twin.org/ui-tailwind bumped from 0.0.1-next.43 to 0.0.1-next.44

## v0.0.1-next.43

- Initial Release
