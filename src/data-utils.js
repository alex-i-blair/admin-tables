export function generateColumns(array) {
  const keys = Object.keys(array[0]);
  const columns = keys.map((key) => {
    return {
      key: key,
      name: key,
    };
  });
  return columns;
}

export function makeCountByAge(array) {
  const countTotalObject = array.reduce((acc, curr) => {
    if (acc[curr.make]) {
      acc[curr.make].count++;
      acc[curr.make].total = acc[curr.make].total + (2022 - curr.year);
    } else {
      acc[curr.make] = {};
      acc[curr.make].count = 1;
      acc[curr.make].total = 2022 - curr.year;
    }
    return acc;
  }, {});

  return Object.entries(countTotalObject).map((entry) => ({
    make: entry[0],
    averageAge: entry[1].total / entry[1].count,
  }));
}
