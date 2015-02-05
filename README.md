# Browserpad ([live demo](http://waldyrious.github.io/browserpad))

A browser-based plain text editor entirely contained within a
   [data URI](https://en.wikipedia.org/wiki/Data_URI_scheme).
   
Browserpad will always be a
   **[plaintext](http://en.wikipedia.org/wiki/Text_editor#Plain_text_files_vs._word_processor_files)** editor:
   no markdown/html preview, no WYSIWIG, no rich text editing.

It will also remain based on a data URI,
   so that the loading is instantaneous,
   and you can save it as a bookmark
   which will work in the browser even if you're offline.
(This position may be revised
   in the interest of code readability/maintainability.)

Hopefully these principles will prevent feature creep
   and keep the tool focused,
   the [Unix way](https://en.wikipedia.org/wiki/Unix_philosophy#Doug_McIlroy_on_Unix_programming).

### Inspiration:
* The concept was originally conceived by [@jjperezaguinaga](https://github.com/jjperezaguinaga)
  on his post "[One line browser notepad](https://coderwall.com/p/lhsrcq/one-line-browser-notepad)".
* Online plaintext editors (closed-source):
    * [mytextarea.com](http://mytextarea.com)
    * [editpad.org](http://editpad.org)
* Features:
    * [textmechanic.com](http://textmechanic.com)
    * [textop.us](http://wayback.archive.org/web/20130718231049id_/http://textop.us/) (defunct)
    * [wikipedia](http://en.wikipedia.org/wiki/Text_editor#Typical_features)

### Primary features:
- [x] support tab key
- [ ] auto-save (see [here](https://github.com/JakobKallin/Text-Editor/blob/gh-pages/index.html) and [here](https://github.com/samyk/evercookie))
- [x] show statistics (lines/words/characters)
- [ ] indent-deindent (with `Tab` / `Shift+Tab`)
- [ ] keep selection visible (greyed out) when unfocused
- [ ] menu entries (menu icon: [≡](http://www.fileformat.info/info/unicode/char/2261/browsertest.htm))
   - [ ] contrast (normal / night mode). (see icon [here](http://pixelmack.github.io/slight/))
   - [ ] permalink / share (via data url)
   - [ ] [save to a file](http://pastebin.com/U8658H5c) ([custom filename](http://stackoverflow.com/q/283956/266309))
   - [ ] show visual guide at: 0/72/80 [CPL](https://en.wikipedia.org/wiki/Characters_per_line) (radio buttons)
      - [ ] wrap lines at specified CPL
            ([need to wait for FF 36](http://stackoverflow.com/questions/657795/how-remove-word-wrap-from-textarea/13446005#comment43835216_13446005))
   - [ ] highlight current line
   - [ ] text operations (on whole text or selection):
      - [ ] case change (lower/upper/title)
      - [ ] search & replace
         - [ ] match highlight, emphasize current match, and cycling with F3
         - [ ] one-by-one or bulk replace
         - [ ] regex support
      - [ ] wrap-unwrap lines

### Possible advanced features:
- [ ] [smart tabs-to-spaces conversion](http://stackoverflow.com/a/2479925/266309)
- [ ] [elastic tabstops](http://nickgravgaard.com/elastictabstops/)
- [ ] [semantic linebreaks](http://rhodesmill.org/brandon/2012/one-sentence-per-line/)
- [ ] auto-code formatting, a la [jsbeautifier](http://jsbeautifier.org)
- [ ] sync across machines
