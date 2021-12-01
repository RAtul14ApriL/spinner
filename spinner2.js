const array = ["|", "/", "-", "\\", "|", "/", "-", "\\"]; 
const typeWriter = (array) => {
  let delay = 0;
  for (let i of array) {
    setTimeout(() => {
      process.stdout.write('\r' + i);
      }, delay +=200);}
      setTimeout(() => {
        process.stdout.write('\n');
      }, 2000);      
}
typeWriter(array);