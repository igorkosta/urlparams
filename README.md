# @igorkosta/urlparams

A tiny utility that takes a URL and returns its search (query) parameters as a plain JavaScript object.

Useful for parsing URLs, handling query strings, or normalizing request parameters in Node.js and browser environments.

---

## Installation

```bash
npm install @igorkosta/urlparams

## Basic Example
```node
import urlparams from "@igorkosta/urlparams";

const params = urlparams("https://example.com/page?foo=bar&baz=123");

console.log(params);
// {
//   foo: "bar",
//   baz: "123"
// }
```

## With encoded values

```node
import urlparams from "@igorkosta/urlparams";

const params = urlparams("https://example.com/?q=hello%20world&lang=en");

console.log(params);
// {
//   q: "hello world",
//   lang: "en"
// }
```

## Repeated parameters

```nod
import urlparams from "@igorkosta/urlparams";

const params = urlparams("https://example.com/?tag=js&tag=node&tag=web");

console.log(params);
// {
//   tag: ["js", "node", "web"]
// }
```

## Without parameters

```node
import urlparams from "@igorkosta/urlparams";

const params = urlparams("https://example.com/");

console.log(params);
// {}
```
