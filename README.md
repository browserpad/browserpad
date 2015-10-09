# Browserpad [![Build Status](https://travis-ci.org/browserpad/browserpad.svg)](https://travis-ci.org/browserpad/browserpad)

A browser-based plain text editor built entirely with HTML, CSS and JavaScript:

> http://browserpad.org
   
Browserpad will always be a
   **[plaintext](http://en.wikipedia.org/wiki/Text_editor#Plain_text_files_vs._word_processor_files)** editor:
   no markdown/html preview, no WYSIWIG, no rich text editing.
Think a browser-based [notepad](http://en.wikipedia.org/wiki/Notepad_%28software%29)
   with a few extra text manipulation features.
The aim of this guiding principle is to prevent feature creep
   and keep the tool focused,
   the [Unix way](https://en.wikipedia.org/wiki/Unix_philosophy#Doug_McIlroy_on_Unix_programming):
   do one thing, and do it well.

### Origins / inspiration:
* Browserpad [started](https://github.com/browserpad/browserpad/commit/d71b37b)
  [up](https://github.com/browserpad/browserpad/commit/324ef38)
  as a very simple browser notepad entirely contained in a data URI:
  `data:text/html,<textarea autofocus style='width:100%;height:100%;border:none;outline:none'/>`
  (try copying and pasting that to your browser address bar and pressing enter).
  This concept was originally decribed by [@jjperezaguinaga](https://github.com/jjperezaguinaga)
  on his 4 Dec 2012 post "[One line browser notepad](https://coderwall.com/p/lhsrcq/one-line-browser-notepad)".
    * Actually, it appears that it had been previously uncovered by [@tabatkins](https://github.com/tabatkins),
      as evidenced by [this 29 Jan 2012 tweet](https://twitter.com/paul_irish/status/163692631128424449)
      by [@paulirish](https://github.com/paulirish).
    * [This 9 December 2011 Hacker News comment](https://news.ycombinator.com/item?id=3333093)
      by [@bytex64](https://github.com/bytex64) mentions a talk about HTML5 where this was presented
    * TODO: contact @tabatkins and @bytex64 to investigate this further and get to the bottom of it
      (although maybe this may be irrelevant if we abandon the Data URI concept,
      not to mention it is definitely not small anymore;
      but it may still be nice to have the origins of Browserpad documented).
* The data URI approach was neat, but impractical,
  and was [eventually abandoned](https://github.com/browserpad/browserpad/issues/2)
  in favor of the regular html file approach.
* Browserpad is heavily inspired by the existing (but proprietary) online plaintext editors:
    * [mytextarea.com](http://mytextarea.com)
    * [editpad.org](http://editpad.org)
* In terms of features, Browserpad aims to match most of the text manipulation operations listed/implemented in:
    * [textmechanic.com](http://textmechanic.com)
    * [textop.us](http://wayback.archive.org/web/20130718231049id_/http://textop.us/) (defunct)
    * [wikipedia](http://en.wikipedia.org/wiki/Text_editor#Typical_features)

### Primary features:
> Note: As a rule of thumb, Browserpad aims to support only editing operations that are generic and content-agnostic.
> This means it won't implement any context-sensitive functions that depend on the semantic meaning of the text,
> such as bracket matching, code linting, etc.

- [x] support tab key
- [x] auto-save using `localStorage` (see [here](https://github.com/JakobKallin/Text-Editor/blob/gh-pages/index.html))
- [x] show statistics (lines/words/characters)
- [ ] indent-deindent (with `Tab` / `Shift+Tab`)
- [ ] keep selection visible (greyed out) when unfocused (see [here](http://stackoverflow.com/q/15523667/266309))
- [ ] use contents of first line (or filename, if defined) as title
      (see [here](http://iamnotagoodartist.com/web/an-auto-updating-data-uri-text-editor/))
- [ ] menu entries (menu icon: [≡](http://www.fileformat.info/info/unicode/char/2261/browsertest.htm))
   - [ ] contrast (normal / night mode). (see icon [here](http://pixelmack.github.io/slight/))
   - [ ] permalink / share ([via data url](http://iamnotagoodartist.com/web/an-auto-updating-data-uri-text-editor/))
   - [x] save to a file
         (using the [download attribute](http://stackoverflow.com/q/283956/266309) of the `a` element; 
         [browser support for the download attribute](http://caniuse.com/#feat=download))
      - [x] save as (custom filename).
   - [x] load from a file on disk (based on [this implementation](https://github.com/itsapi/notepad))
   - [ ] show visual guide at: 0/72/80 [CPL](https://en.wikipedia.org/wiki/Characters_per_line) (radio buttons)
      - [ ] soft-wrap lines at specified CPL
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
- [ ] sync across machines (see [issue #5](https://github.com/browserpad/browserpad/issues/5))
- [ ] split window (different views of the same document (or maybe two separate documents?...)
- More inspiration from:
  [ACE](http://ace.c9.io/),
  [CodeMirror](https://codemirror.net/#features),
  [EditArea](http://www.cdolivet.com/editarea/?page=editArea),
  [more...](https://en.wikipedia.org/wiki/Comparison_of_JavaScript-based_source_code_editors)

## License

Browserpad is open source software released under the
**[ISC License](http://opensource.org/licenses/ISC)**:

> Copyright (C) 2015 Waldir Pimenta
> and [contributors](https://github.com/Browserpad/browserpad/contributors)
>
> Permission to use, copy, modify, and/or distribute this software
> for any purpose with or without fee is hereby granted,
> provided that the above copyright notice and this permission notice
> appear in all copies.
>
> THE SOFTWARE IS PROVIDED "AS IS" AND THE COPYRIGHT HOLDERS AND CONTRIBUTORS
> DISCLAIM ALL WARRANTIES WITH REGARD TO THIS SOFTWARE
> INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS.
> IN NO EVENT SHALL THE COPYRIGHT HOLDERS AND CONTRIBUTORS BE LIABLE
> FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES
> OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,
> WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION,
> ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
