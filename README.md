# DOG BOMB!

![cody](https://i.imgur.com/iOvgJti.png)

Take your favourite cut out picture of a dog, host it, and paste the url in the app. Then choose a category to bomb (my favourite is weddings), and click Bombs away!

## Getting Started

Simply checkout the app, run `npm install`, then `npm start`.
The browser should open with the app running.

## Testing

Run `npm test` to run test suite.

## Notes:

I've never written React tests before, and there is a test that checks to see that the dog image updates with a valid url that's different than the original. When the test is run with `.only` it works fine, but in the full suite doesn't. This is probably some small Jest `async` issue with `setStates` callback not having been called yet.

Enjoy!