import DataGrid from 'react-data-grid';
import data from './TableData';
import { generateColumns, makeCountByAge } from './data-utils';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

// const columns = [
//   { key: 'id', name: 'ID' },
//   { key: 'title', name: 'Title' },
// ];

// const rows = [
//   { id: 0, title: 'Example' },
//   { id: 1, title: 'Demo' },
// ];

export default function App() {
  return (
    <>
      <DataGrid columns={generateColumns(data)} rows={data} />;
      <VictoryChart domainPadding={20}>
        <VictoryBar data={makeCountByAge(data)} x="make" y="averageAge" />
      </VictoryChart>
      ;
    </>
  );
}
