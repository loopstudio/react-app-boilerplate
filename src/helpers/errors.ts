import { capitalize } from 'helpers/string';

type AttributesErrors = {
  [prop: string]: any;
};

type RequestError = {
  attributesErrors?: AttributesErrors;
  errors?: string[];
};

const getKeyValue = (key: string) => (obj: Record<string, any>) => obj[key];

// export function handleErrors(
//   { attributesErrors, errors }: RequestError,
//   setError: (name: string , error: { message: string }) => void
// ) {
//   if (errors?.length) {
//     setError('general' as string, { message: capitalize(errors[0]) });
//   }

//   if (attributesErrors && Object.keys(attributesErrors).length) {
//     Object.keys(attributesErrors).forEach((fieldName) => {
//       setError(fieldName as string, {
//         message: capitalize(getKeyValue(fieldName)(attributesErrors)[0])
//       });
//     });
//   }
// }
