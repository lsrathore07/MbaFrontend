import { Table, Column, HeaderCell, Cell } from 'rsuite-table';



function UsersTable({usersList}){
    return (
        <div className='p-4'>
        <h3 className="m-3">Users</h3>
  <Table autoHeight={true} rowHeight={70} data={usersList}>
    <Column flexGrow={1} sortable fixed resizable>
      <HeaderCell>ID</HeaderCell>
      <Cell dataKey="_id" />
    </Column>

    <Column flexGrow={1} sortable resizable>
      <HeaderCell>Name</HeaderCell>
      <Cell dataKey="name" />
    </Column>

    <Column flexGrow={1} sortable resizable>
      <HeaderCell>UserId</HeaderCell>
      <Cell dataKey="userId"/>
    </Column>
    
    <Column flexGrow={1} sortable resizable>
      <HeaderCell>Email</HeaderCell>
      <Cell dataKey="email" />
    </Column>
    
    <Column flexGrow={1} sortable resizable>
      <HeaderCell>Role</HeaderCell>
      <Cell dataKey="userTypes" />
    </Column>

    <Column flexGrow={1} sortable resizable>
      <HeaderCell>User Status</HeaderCell>
      <Cell dataKey="userStatus" />
    </Column>

    
  </Table>
  </div>
    )
}

export default UsersTable;