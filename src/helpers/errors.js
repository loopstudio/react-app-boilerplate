import { capitalize } from 'helpers/string';

export function handleErrors({ attributesErrors, errors }, setError) {
  if (errors?.length) {
    setError('general', { message: errors[0] });
  }

  if (attributesErrors && Object.keys(attributesErrors).length) {
    const filteredErrors = Object.keys(attributesErrors).filter(
      (fieldName) => attributesErrors[fieldName].length
    );
    filteredErrors.forEach((fieldName) =>
      setError(fieldName, {
        message: capitalize(attributesErrors[fieldName][0]),
      })
    );
  }
}
