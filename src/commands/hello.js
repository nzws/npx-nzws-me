import { cyan, bold, gray, underline } from 'kleur';
import accounts from '../accounts';

const withSpace = str => `  ${str}`;
const account = (service, url, acct) =>
  withSpace(`${service}: ${url}${acct ? gray(` (${underline(acct)})`) : ''}`);

const Hello = () => {
  const message = [
    cyan().bold("Hello, I'm nzws (ねじわさ)"),
    "> I'm a high-schooler, learning programming",
    'https://nzws.me/',
    '',
    bold('Accounts:')
  ];
  message.push(
    ...accounts
      .filter(v => !v.invisible)
      .map(({ name, url, acct }) => account(name, url, acct))
  );

  console.log(message.join('\n'));
};

export default Hello;
