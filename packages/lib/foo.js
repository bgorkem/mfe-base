export const bar = (num) => {
  console.log('this is bar incrementer');
  return num + 1;
};

export default () => {
  console.log('this is a foo library');
  return 100;
};
