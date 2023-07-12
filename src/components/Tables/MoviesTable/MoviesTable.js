import { Table, Column, HeaderCell, Cell } from 'rsuite-table';


function MoviesTable({moviesList}){

    const ImageCell = ({ rowData, dataKey, ...rest }) => (
        <Cell {...rest}>
          <img src={rowData[dataKey]} width="70" />
        </Cell>
      );

    return(
           <div className='p-4'>
            <h3 className="m-3">Movies</h3>
  <Table rowHeight={100} autoHeight={true} data={moviesList}>
    <Column flexGrow={1} sortable fixed resizable>
      <HeaderCell>ID</HeaderCell>
      <Cell dataKey="_id" />
    </Column>

    <Column flexGrow={1}  resizable>
      <HeaderCell>Poster</HeaderCell>
      <ImageCell dataKey="posterUrl" />
    </Column>

    <Column flexGrow={1} sortable resizable>
      <HeaderCell>Language</HeaderCell>
      <Cell dataKey="language"/>
    </Column>
    
    <Column flexGrow={1} sortable resizable>
      <HeaderCell>Director</HeaderCell>
      <Cell dataKey="director" />
    </Column>
    
    <Column flexGrow={1} sortable resizable>
      <HeaderCell>Release</HeaderCell>
      <Cell dataKey="releaseStatus" />
    </Column>

    <Column flexGrow={1} sortable resizable>
      <HeaderCell>Release Date</HeaderCell>
      <Cell dataKey="releaseDate" />
    </Column>

    
  </Table>
  </div>
    )
}

export default MoviesTable;