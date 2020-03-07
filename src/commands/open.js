import open from 'open';
import { bold, gray, red } from 'kleur';
import accounts from '../accounts';

const Open = ({ args }) => {
  if (!args[0]) {
    args[0] = 'website';
  }

  const account = accounts.find(({ flags }) => {
    const flag = args[0].toLowerCase();
    return flags.indexOf(flag) !== -1;
  });

  if (!account) {
    console.error(red("sorry, I don't have the account you are looking for."));
    console.error(
      'The account I have: ' +
        accounts.map(({ flags }) => bold(flags[0])).join(', ')
    );
    process.exit(1);
  }

  console.log(
    `Opening my ${bold(account.name)}... ${gray(`(${account.url})`)}`
  );
  console.log(bold().green('Thank you for accessing!!'));

  return open(account.url);
};

export default Open;
