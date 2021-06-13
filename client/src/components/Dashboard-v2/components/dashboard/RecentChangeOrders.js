import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

export default function RecentChangeOrders(props) {
  return (
    <Card style={{ backgroundColor: "rgba(255,255,255, 0.2)" }} raised>
      <CardHeader title="Recent Change Orders" />
      <Divider />
      <PerfectScrollbar>
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order Ref</TableCell>
                <TableCell>Description</TableCell>
                <TableCell sortDirection="desc">Cost</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((order) => (
                <TableRow hover key={order.id}>
                  <TableCell>CO_{order.id}</TableCell>
                  <TableCell>{order.description}</TableCell>
                  <TableCell>{order.cost}</TableCell>
                  <TableCell>
                    <Chip
                      color='primary'
                      label={order.change_order_status.status}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
}
