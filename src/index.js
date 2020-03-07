import { version } from '../package';

import Hello from './commands/hello';
import Open from './commands/open';

module.exports = {
  name: `@nzws/me ${version}`,
  binName: 'npx @nzws/me',
  defaultCommand: 'hello',
  commands: {
    hello: {
      description: 'My Profile',
      function: Hello
    },
    open: {
      description: 'Open accounts in your browser',
      function: Open
    }
  }
};
