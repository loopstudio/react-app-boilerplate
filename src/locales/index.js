import enUSLanguage from './entries/en-US';
import esESLanguage from './entries/es-ES';

/*
  • How to get messages from react-intl programmatically
    ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
      import { useIntl } from 'react-intl'
      const intl = useIntl()
      console.log(intl.messages['someMsg']) => output: This is some random message

      // messages file
      export default {
        ...
        someMsg: 'This is some random message'
        ...
      }

  • How to pass variables to messages from react-intl programmatically
    ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
      import { useIntl } from 'react-intl'
      const intl = useIntl()
      const msg = intl.formatMessage({ id: 'welcome'}, { name: 'Patrick' })
      console.log(msg) => output: Hello Patrick!, welcome to your dashboard

      // messages file
      export default {
        ...
        welcome: 'Hello {name}!, welcome to your dashboard'
        ...
      }

      More info => https://github.com/formatjs/react-intl/blob/master/docs/API.md#formatmessage

  • How to add a message with custom html tags in JSX
    ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
      import { FormattedMessage } from 'react-intl'

      <FormattedMessage id="signin">
        {msg => <h1>{msg}<h1>}
      </FormattedMessage>

      // messages file
      export default {
        ...
        singIn: 'Sign in'
        ...
      }

  • How to pass variables to messages from react-intl in JSX
    ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
      const name = 'Patrick';
      <FormattedMessage
        id="welcome"
        values={{ name: <h1>{name}</h1> }}
      />

      // messages file
      export default {
        ...
        welcome: 'Hello {name}!, welcome to your dashboard',
        ...
      }

      output => 'Hello Patrick!, welcome to your dashboard'
*/

const AppLocale = {
  en: enUSLanguage,
  es: esESLanguage,
};

export default AppLocale;
