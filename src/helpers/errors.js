import { capitalize } from './string';

export function handleErrors({ attributesErrors, errors }, setError) {
  if (errors?.length) {
    setError('general', 'custom', errors[0]);
  }

  if (attributesErrors && Object.keys(attributesErrors).length) {
    setError(
      Object.keys(attributesErrors).map((fieldName) => ({
        message: capitalize(attributesErrors[fieldName][0]),
        name: fieldName,
      }))
    );
  }
}
