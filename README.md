# Browserpad ([live demo](http://waldyrious.github.io/browserpad))

A browser-based plain text editor entirely contained within a
   [data URI](https://en.wikipedia.org/wiki/Data_URI_scheme).
   
Browserpad will always be a **plain**text editor:
   no markdown/html preview, no WYSIWIG, no rich text editing.

It will also always be based on a data URI,
   so that the loading is instantaneous,
   and you can save it as a bookmark
   which will work in the browser even if you're offline.

Hopefully these principles will prevent feature creep
   and keep the tool focused,
   the [Unix way](https://en.wikipedia.org/wiki/Unix_philosophy#Doug_McIlroy_on_Unix_programming).

### Inspiration:
* Origin: I've seen this idea floating around in several places,
  so I'm not really sure who first came up with it.
  It might have been [this article](https://coderwall.com/p/lhsrcq/one-line-browser-notepad).
* Online plaintext editors (closed-source):
    * [mytextarea.com](http://mytextarea.com)
    * [editpad.org](http://editpad.org)
* Features:
    * [textmechanic.com](http://textmechanic.com)
    * [textop.us](http://wayback.archive.org/web/20130718231049id_/http://textop.us/) (defunct)

### Primary features:
- [x] support tab key
- [ ] normal / [solarized](https://waldyrious.neocities.org/ted_chiang/the-merchant-and-the-alchemists-gate.html) / night mode (see icon [here](http://pixelmack.github.io/slight/))
- [ ] case change
- [ ] indent-deindent
- [ ] regex search & replace
- [ ] wrap-unwrap lines
- [ ] auto-save (see [here](https://github.com/JakobKallin/Text-Editor/blob/gh-pages/index.html) and [here](https://github.com/samyk/evercookie))
- [ ] permalink / share (via data url)
- [ ] [save to a file](http://pastebin.com/U8658H5c) ([custom filename](http://stackoverflow.com/q/283956/266309))
- [ ] statistics (lines/words/characters)
- [ ] current line/column
- [ ] line numbers
- [ ] CPL (hard limit) and/or visual guide

### Possible advanced features:
- [ ] [smart tabs-to-spaces conversion](http://stackoverflow.com/a/2479925/266309)
- [ ] [elastic tabstops](http://nickgravgaard.com/elastictabstops/)
- [ ] [semantic linebreaks](http://rhodesmill.org/brandon/2012/one-sentence-per-line/)
- [ ] auto-code formatting, a la [jsbeautifier](http://jsbeautifier.org)
- [ ] sync across machines
