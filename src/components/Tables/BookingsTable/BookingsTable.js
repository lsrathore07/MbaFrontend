import { Table, Column, HeaderCell, Cell } from 'rsuite-table';


function BookingsTable({bookingsList}){
    console.log(bookingsList)
return (
    <div className='p-4'>
    <h3 className="m-3">Bookings</h3>
<Table autoHeight={true} rowHeight={70} data={bookingsList}>
<Column flexGrow={1} sortable fixed resizable>
  <HeaderCell>ID</HeaderCell>
  <Cell dataKey="_id" />
</Column>

<Column flexGrow={1} sortable resizable>
  <HeaderCell>Movie Name</HeaderCell>
  <Cell dataKey="movieId.name" />
</Column>

<Column flexGrow={1} sortable resizable>
  <HeaderCell>Seats </HeaderCell>
  <Cell dataKey="noOfSeats"/>
</Column>

<Column flexGrow={1} sortable resizable>
  <HeaderCell>Timing</HeaderCell>
  <Cell dataKey="timing" />
</Column>

<Column flexGrow={1} sortable resizable>
  <HeaderCell>Total Cost</HeaderCell>
  <Cell dataKey="totalCost" />
</Column>
<Column flexGrow={1} sortable resizable>
  <HeaderCell> Theatre name</HeaderCell>
  <Cell dataKey="theatreId.name" />
</Column>

<Column flexGrow={1} sortable resizable>
  <HeaderCell>Payment </HeaderCell>
  <Cell dataKey="status" />
</Column>


</Table>\
</div>
)
}

export default BookingsTable
