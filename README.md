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

Publishing
---

This uses travis's [github release](https://docs.travis-ci.com/user/deployment/releases/) integration to build and publish executables to the repo's release page. See [.travis.yml](.travis.yml) for setup.

To cut a new release:

- Create a new tag `git tag x.x.x`
- Push that tag `git push orign x.x.x`
- Sit back and watch the travis build complete and finish the release

Todo
---

- [x] Make it work
- [x] Example of automating releases via travis
- [ ] Test windows
