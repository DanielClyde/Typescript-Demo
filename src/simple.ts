function helloWorld(name: string, val?: number) {
  console.log(`Hello ${name}! ${val || ''}`);
}

helloWorld('Joe');
helloWorld('John', 5);
