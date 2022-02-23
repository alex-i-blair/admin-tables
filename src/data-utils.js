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

export function countMakes(array) {
  const desiredMakes = array.filter(
    (item) =>
      item.make === 'Honda' ||
      item.make === 'Toyota' ||
      item.make === 'Ford' ||
      item.make === 'Audi' ||
      item.make === 'Dodge' ||
      item.make === 'Subaru'
  );
  const hashMap = desiredMakes.reduce((acc, curr) => {
    if (acc[curr.make]) {
      acc[curr.make]++;
    } else {
      acc[curr.make] = 1;
    }
    return acc;
  }, {});
  const refactorObject = Object.entries(hashMap);
  const objectMap = refactorObject.map((object) => {
    const carObj = {
      x: object[0],
      y: object[1],
    };
    return carObj;
  });
  return objectMap;
}
