import React from "react";

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

/**
 * Component to render tables. 
 * Takes row and column details as input props.
 * 
 * @author syuki
 */
export default class BatchTable extends React.Component {

    state = { 
        page: 0, 
        rowsPerPage: 5,
      };

      handleChangePage = (event, newPage) => {
        this.setState({ page: newPage });
      };

    render() {
        return(
            <Paper elevation={0} style={{ minHeight: 450 }}>
                <TableContainer style={{ minHeight: 420 }}>
                    <Table aria-label="simple table">
                        <TableHead color="primary">
                            <TableRow color="primary">
                                {
                                    this.props.cols.map((col) => (
                                        <TableCell key={col.field} align={col.align}>{col.title.toUpperCase()}</TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.props.rows.length > 0 ? 
                                    this.props.rows
                                    .slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                                    .map((row) => (
                                        <TableRow
                                            hover
                                            tabIndex={-1}
                                            key={row.productId}
                                        >
                                            <TableCell component="th" scope="row" align="left" width="10%">{row.productId}</TableCell>
                                            <TableCell align="left" width="20%">{row.productName}</TableCell> 
                                            <TableCell align="left" width="10%">{row.productStatus}</TableCell>
                                            <TableCell align="center" width="20%">
                                                <Button 
                                                    variant="outlined" 
                                                    color='secondary' 
                                                    disabled={row.disableActionButton}
                                                    onClick={() => this.props.showConfirmActionPopUp(row.action, row.productId)}>{row.action}</Button>
                                            </TableCell>
                                            <TableCell align="center" width="20%">
                                                <Button 
                                                    variant="outlined" 
                                                    color='secondary' 
                                                    onClick={() => this.props.toggleBatchDetailsPopUp(row)}>View Details</Button>
                                            </TableCell>
                                        </TableRow>
                                    )) 
                                : 
                                <TableRow tabIndex={-1}>
                                    <TableCell 
                                        colSpan={6} 
                                        align="center">
                                        {this.props.emptyRowsMessage}
                                    </TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5]}
                    component="div"
                    count={this.props.rows.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    onPageChange={this.handleChangePage}
                />
            </Paper>
        );
    }
};
