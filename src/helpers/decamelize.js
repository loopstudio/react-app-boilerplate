import decamelize from 'decamelize';
import mapObj from 'map-obj';

export const decamelizeKeys = (collection, options) => {
  if (!collection) {
    return collection;
  }

  if (collection instanceof Date) {
    return collection;
  }

  if (Array.isArray(collection)) {
    return collection.map((element) => decamelizeKeys(element, options));
  }

  if (typeof collection === 'object') {
    return mapObj(collection, (key, value) => {
      const decamelizedKey = decamelize(key, options);

      if (key !== decamelizedKey && decamelizedKey in collection) {
        throw new Error(
          `Decamelized key '${decamelizedKey}' would overwrite existing key of the object`
        );
      }
      return [decamelizedKey, decamelizeKeys(value, options)];
    });
  }

  return collection;
};
