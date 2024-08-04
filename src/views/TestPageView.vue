<template>
  <div class="" style="padding-top: 200px; padding-bottom: 200px">
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th class="fixed-column">Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
            <th>Header 4</th>
            <th>Header 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="fixed-column">Row Header 1</th>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 4</td>
          </tr>
          <tr>
            <th class="fixed-column">Row Header 2</th>
            <td>Data 5</td>
            <td>Data 6</td>
            <td>Data 7</td>
            <td>Data 8</td>
          </tr>
          <tr>
            <th class="fixed-column">Row Header 3</th>
            <td>Data 9</td>
            <td>Data 10</td>
            <td>Data 11</td>
            <td>Data 12</td>
          </tr>
          <tr>
            <th class="fixed-column">Row Header 4</th>
            <td>Data 13</td>
            <td>Data 14</td>
            <td>Data 15</td>
            <td>Data 16</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.table-container {
  overflow-x: auto;
  white-space: nowrap;
  position: relative;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
th {
}
.fixed-column {
  position: sticky;
  left: 0;
  z-index: 1;
}
</style>
