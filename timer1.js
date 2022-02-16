const args = process.argv.slice(2);
let numbers = args.filter(number => {
  return number > 0;
});

const timer = function() {
  for (const num of numbers) {
    setTimeout(() => {
      console.log('Beep!');
      return process.stdout.write('\x07'); //no sound?
    }, num * 1000);
  }
};

timer();