# vite-env

This package exists to make it easy to get the right behavior for `import.meta`
when using `vite` and (optionally) vitest.

## Installation

```sh
$ pnpm add -D vite-env
```

Add this to your tsconfig:

```json
{
  "compilerOptions": {
    "types": ["vite-env"]
  }
}
```

## Usage

Once you've done that, you can use `import.meta` features from Vite and Vitest:

```ts
if (import.meta.env.DEV) {
  console.log("DEV");
}

if (import.meta.vitest) {
  const { describe, it } = import.meta.vitest;
}
```

## Included Features

- `import.meta.env.DEV`
- `import.meta.env.PROD`
- `import.meta.env.MODE`
- `import.meta.vitest`

## Implementation

For the most part, this package pulls in types published by vite and vitest. At
the moment, the best practices for doing this correctly have been in flux and
not always easy to figure out.

If this changes and the guidance becomes stable and easy to find, this package
will no longer need to exist.

## License

[MIT](https://opensource.org/license/mit/) © Yehuda Katz and Starbeam
Contributors
