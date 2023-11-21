import * as React from 'react';
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

function createData(
    id: string,
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData("8802fe97-667f-4eec-9964-e9f53cdd5d87", 'Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData("6923dfc3-e877-454b-a3cd-ca15c63ffba6", 'Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData("160409c6-02b6-4e5a-bd39-d8efe4344fb6", 'Eclair', 262, 16.0, 24, 6.0),
    createData("e2cc6ed8-556e-4ac3-b43d-5b9039706ec0", 'Cupcake', 305, 3.7, 67, 4.3),
    createData("0fbe8ee8-d548-4a4c-80f6-7ba3c3596ab1", 'Gingerbread', 356, 16.0, 49, 3.9),
];

const ClientList = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        <TableCell align="right">Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            <TableCell align="right"><Button onClick={() => console.log(row)}><EditIcon /></Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ClientList;