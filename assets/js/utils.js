import range from 'lodash/range';
import identity from 'lodash/identity';

export const generateGameField = () => {
  const field = range(10)
  .map(() => range(10))
  .map((column, y) => column.map((square, x) => ({ x, y })))
  .flatMap(identity);
  return field;
};