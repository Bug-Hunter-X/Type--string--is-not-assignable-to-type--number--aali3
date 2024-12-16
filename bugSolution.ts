function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2.filter(item => typeof item === 'number')];
}

const arr1: number[] = [1,2,3];
const arr2: (number | string)[] = [4,5,'6'];

const result = combine(arr1, arr2); // This will now filter the string out