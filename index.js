export default function urlparams(url) {
  const params = new URL(url).searchParams;
  const result = {};

  for (const key of params.keys()) {
    const values = params.getAll(key);
    result[key] = values.length > 1 ? values : values[0];
  }

  return result;
}
