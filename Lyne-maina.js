
const args = process.argv.slice(2);

const numbers = args.map(Number);


function calculateSum(nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}


const sum = calculateSum(numbers);
console.log("The sum is:", sum);