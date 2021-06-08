import { makeStyles, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './App.scss';

const useStyle = makeStyles({
  header: {
    fontSize: 30,
    margin: '10px 0'
  },
  table: {
    minWidth: 650,
    marginTop: '20px'
  },
});

export default function Budget() {
  const classes = useStyle();

  const categories = [
    {
      id: 1,
      description: 'Base square feet',
      estimate_amount: 35000000
    },
    {
      id: 2,
      description: 'Change orders',
      estimate_amount: 10000000
    },
    {
      id: 3,
      description: 'Window coverings',
      estimate_amount: 300000
    },
    {
      id: 4,
      description: 'Landscaping',
      estimate_amount: 1000000
    }
  ];

  const actual = 1000000;

  return (
    <section className="content">
      <Typography className={classes.header}>Budget</Typography>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="budget table">
          <TableHead>
            <TableRow>
              <TableCell>Budget cateogry</TableCell>
              <TableCell align="right">Estimate</TableCell>
              <TableCell align="right">Actual</TableCell>
              <TableCell align="right">Variance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell component="th" scope="row">
                  {category.description}
                </TableCell>
                <TableCell align="right">${category.estimate_amount}</TableCell>
                <TableCell align="right">${actual}</TableCell>
                <TableCell align="right">${category.estimate_amount - actual}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  )
}
