// TODO: write your code here
export default function hpLevel({ health }) {
  let result;
  if (health > 50) {
    result = 'healthy';
  } else if (health < 50 && health > 15) {
    result = 'wounded';
  } else if (health < 15) {
    result = 'critical';
  }
  return result;
}
