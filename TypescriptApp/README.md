# The parent folder of the typescript version of the practice

Important note for wanting to use express with typescript, you need to install the express types.

```bash
npm i express nodemon
npx tsc -init
npm i --save-dev @types/express
```

Also, for the purposes of this practice, I added this line before the `compilerOptions` in the `tsconfig.json`:

```json
{
  "include": ["./server.ts"],
  "compilerOptions": {}
}
```

Next, in the `tsconfig.json`, you will need to uncomment this line:

```json
    "resolveJsonModule": true, /* Enable importing .json files. */
```

Finally, since I don't know how to run nodemon and `npx tsc -w` at the same time, you will nee two terminals just to run the prior command and the `nodemon` command.
