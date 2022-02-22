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

// export function countMakes(array) {
//   const counter = [];
//   if (counter.length !== 0) {
//     array.map((car) => {
//       counter.map((carCount) => {
//         if (car.make === carCount.x) {
//           carCount.y++;

//   } else {
//       array.map((car) => {
//         counter.push({
//           x: car.make,
//           y: 1,
//         });
//       })
//       }
//     }
//     console.log(counter);
//     return counter;
//   });
// }

export function countMakes(array) {
  const counter = [];
  array.map((car) => {
    if (counter.length === 0) {
      array.map((singleCar) => {
        counter.push({
          x: singleCar.make,
          y: 1,
        });
      });
    } else {
      array.map((singleCar) => {
        counter.map((carCount) => {
          singleCar.make === carCount.x && carCount.y++;
        });
      });
    }
  });
  return counter;
}
