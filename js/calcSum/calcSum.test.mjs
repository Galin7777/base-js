import {calcSum} from './calcSum.mjs';

try {
  console.log(calcSum(4, 3));
  console.log(calcSum('kost', 3));
  console.log(calcSum(3));
} catch (error) {
    console.error(error.message);
}
