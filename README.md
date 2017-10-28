pkg example
---

This is a stupidly simple example of using [pkg](https://github.com/zeit/pkg) to bundle an interactive CLI.

Usage
---

```
# clone this repo
npm i
npm run pkg

# this will create index-<os> executables in the `out` directory
# to execute, simply ./index-<your-os>
./out/index-linux 

? What is your favorite color? (Use arrow keys)
❯ red
  green
  blue

```

Todo
---

- [x] Make it work
- [ ] Example of automating releases via travis
- [ ] Test windows
