import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button
} from '@mui/material/';
import EditIcon from '@mui/icons-material/Edit';
import Groups2Icon from '@mui/icons-material/Groups2';
import { CustomerType } from '../../../types/CustomerType';

type CustomerListProps = {
    customers: CustomerType[];
}
const CustomerList = ({customers}: CustomerListProps) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">CPF</TableCell>
                        <TableCell align="right">Membro do clube</TableCell>
                        <TableCell align="right">Endereços cadastrados</TableCell>
                        <TableCell align="right">Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customers.map((customer) => (
                        <TableRow
                            key={customer.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                            {customer.name + ' ' + customer.lastName}
                            </TableCell>
                            <TableCell align="right">{customer.cpf}</TableCell>
                            <TableCell align="right">{customer.isClubMember ? <Groups2Icon color="success" /> : <Groups2Icon color="error" />}</TableCell>
                            <TableCell align="right">{customer.address.length}</TableCell>
                            <TableCell align="right"><Button onClick={() => console.log(customer)}><EditIcon /></Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CustomerList;