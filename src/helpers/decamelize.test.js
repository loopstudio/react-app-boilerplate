import { decamelizeKeys } from './decamelize';

describe('decamelizeKey', () => {
  it('should deeply decamelize the keys of an object', () => {
    const fakeDate = new Date(2016, 3, 15);

    const obj = {
      nestedObj: {
        fooBar: 1,
        fakeDate,
        anArray: [1, 2, { fooBar: 3 }],
      },
    };

    expect(decamelizeKeys(obj)).toEqual({
      nested_obj: {
        foo_bar: 1,
        fake_date: fakeDate,
        an_array: [1, 2, { foo_bar: 3 }],
      },
    });
  });

  it('should raise an error if decamelized key would overwrite existing key of the object', () => {
    const invalidObj = { fooBar: 1, foo_bar: 2 };
    const validObj = { fooBar: 1, fooBaz: 2 };

    const wrapper = (obj) => () => {
      decamelizeKeys(obj);
    };

    expect(wrapper(invalidObj)).toThrow();
    expect(wrapper(validObj)).not.toThrow();
  });
});
