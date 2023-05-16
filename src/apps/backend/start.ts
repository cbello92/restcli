import {App} from './app';

new App()
  .start()
  .then(() => {
    console.log('Server is running');
  })
  .catch(err => {
    console.log('Server is failed while retry running', JSON.stringify(err));
    process.exit(1);
  });

process.on('uncaughtException', err => {
  console.log('uncaughtException', err);
  process.exit(1);
});
