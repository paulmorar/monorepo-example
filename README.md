# monorepo-example

This is an example of structuringa monorepo with nx and using pnpm with workspaces. In this repo package-one is a dependency of package-two and both can be published individually to npm.

## Useful commands

Individual repo commands examples

```js
pnpm nx test:unit package-one
pnpm nx test:unit package-two
```

Monorepo-wide commands

```js
pnpm test:unit:all

pnpm test:unit:affected

pnpm nx graph
```