pkg example
---

This is a simple example demonstrating the use of [pkg](https://github.com/zeit/pkg) to bundle an interactive CLI for macos, linux, and windows.

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

Providing your users a way to download
---

Since Travis handles release process, you can easily link to your packaged executables using github [pages metadata](https://github.com/blog/1996-releases-metadata-for-github-pages) or the [release api](https://developer.github.com/v3/repos/releases/#list-releases-for-a-repository).

E.g. in a github page:

```liquid
<ul>
  {% for asset in site.github.latest_release.assets %}
    <li><a href="{{asset.browser_download_url}}">{{asset.name}}</a></li>
  {% endfor %}
</ul>
```
