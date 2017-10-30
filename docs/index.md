This is a simple example demonstrating the use of [pkg](https://github.com/zeit/pkg) to bundle an interactive CLI for macos, linux, and windows. See the [repository](https://github.com/NickTomlin/pkg-example/) for more explanation and a view into the build process.

## Providing your users a way to download

Since Travis handles release process, you can easily link to your packaged executables using github [pages metadata](https://github.com/blog/1996-releases-metadata-for-github-pages) or the [release api](https://developer.github.com/v3/repos/releases/#list-releases-for-a-repository).

E.g.

```liquid
{% raw %}
<ul>
  {% for asset in site.github.latest_release.assets %}
    <li><a href="{{asset.browser_download_url}}">{{asset.name}}</a></li>
  {% endfor %}
</ul>
{% endraw %}
```

Produces:

<article>
  <h3><code>{{ site.github.latest_release.tag_name}}</code></h3>
  <p>Downloads</p>
  <ul>
    {% for asset in site.github.latest_release.assets %}
      <li><a href="{{asset.browser_download_url}}">{{asset.name}}</a></li>
    {% endfor %}
  </ul>
</article>
