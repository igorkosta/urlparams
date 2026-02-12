// test/index.test.js
import test from "node:test";
import assert from "node:assert/strict";

import searchParams from "../index.js";

test("Get URL Params as JSON Object", () => {
  const url = "https://example.com?foo=bar&baz=qux";
  const result = searchParams(url);
  assert.equal(typeof result, "object");
  assert.deepStrictEqual({
    foo: "bar",
    baz: "qux"
  }, result);
});

test("With encoded values", () => {
  const url = "https://example.com/?q=hello%20world&lang=en";
  const result = searchParams(url);
  assert.equal(typeof result, "object");
  assert.deepStrictEqual({
    q: "hello world",
    lang: "en"
  }, result);
});


test("Wit Repeated Parameters", () => {
  const url = "https://example.com/?tag=js&tag=node&tag=web";
  const result = searchParams(url);
  assert.equal(typeof result, "object");
  assert.deepStrictEqual({
    tag: ["js", "node", "web"]
  }, result);
});

test("Without Parameters", () => {
  const url = "https://example.com/";
  const result = searchParams(url);
  assert.equal(typeof result, "object");
  assert.deepStrictEqual({
  }, result);
});
