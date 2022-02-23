import DataGrid from 'react-data-grid';
import data from './TableData';
import { generateColumns, makeCountByAge, countMakes } from './data-utils';
import { VictoryBar, VictoryChart, VictoryScatter } from 'victory';
import { VictoryPie } from 'victory';

export default function App() {
  // console.log(countMakes(data));
  return (
    <>
      Test
      <DataGrid columns={generateColumns(data)} rows={data} />;
      <VictoryChart domainPadding={20}>
        <VictoryBar data={makeCountByAge(data)} x="make" y="averageAge" />
      </VictoryChart>
      <VictoryPie
        data={countMakes(data)}
        labelPlacement={'parallel'}
        style={{ labels: { fontSize: 4 } }}
      />
      <VictoryScatter data={countMakes(data)} />
    </>
  );
}
