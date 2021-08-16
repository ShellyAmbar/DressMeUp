import React, { useMemo } from "react";
import { observer } from "mobx-react";
import "./Table.css";
import OutfitsStore from "../../../store/OutfitsStore";
import { COLUMNS } from "./Colums";
import { useTable } from "react-table";
function Table() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => OutfitsStore.getAllPickedItemsOfSets(), []);
  const table = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;
  return (
    <table {...getTableProps()}>
      {console.log(OutfitsStore.getAllPickedItemsOfSets())}
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default observer(Table);
