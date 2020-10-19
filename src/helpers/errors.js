import { capitalize } from 'helpers/string';

export function handleErrors({ attributesErrors, errors }, setError) {
  if (errors?.length) {
    setError('general', { message: errors[0] });
  }

  if (attributesErrors && Object.keys(attributesErrors).length) {
    Object.keys(attributesErrors).forEach((fieldName) => {
      setError(fieldName, {
        message: capitalize(attributesErrors[fieldName][0]),
      });
    });
  }
}
