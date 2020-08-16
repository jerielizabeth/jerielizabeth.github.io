Personal website developed using the al-folio theme. If you like the design, [head over to the original project](https://github.com/alshedivat/al-folio)


## Deploying

[Notes for myself on how to publish to the gh-pages branch rather than using the master branch because this theme uses unsupported gems.]
- source files are on the master branch at the project root. Build is housed in the "_site" folder, which is not tracked under master.
- Inside the "_site" directory, I cloned the repo and checked-out an orphan gh-pages branch (following this pattern - https://gist.github.com/seanbuscay/5877413). I then removed all files.
- To build the site, run `bundle exec jekyll build` from the root directory (master branch). Then switch to the `_site` directory and commit the changes to the `gh-pages` branch. Push to publish. [automate this eventually.]


## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

Originally, **al-folio** was based on the [\*folio theme](https://github.com/bogoli/-folio) (published by [Lia Bogoev](http://liabogoev.com) and under the MIT license).
Since then, it got a full re-write of the styles and many additional cool features.
