import { capitalize } from './string';

export function handleErrors({ attributesErrors, errors }, setError) {
  if (errors?.length) {
    setError('general', 'custom', errors[0]);
  }

  if (attributesErrors && Object.keys(attributesErrors).length) {
    const filteredErrors = Object.keys(attributesErrors).filter(
      (fieldName) => attributesErrors[fieldName].length
    );

    setError(
      filteredErrors.map((fieldName) => ({
        message: capitalize(attributesErrors[fieldName][0]),
        name: fieldName,
      }))
    );
  }
}
