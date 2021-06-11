import { useEffect, useState } from "react";
import axios from "axios";

import { makeStyles, Typography } from '@material-ui/core';

import ChangeOrdersTable from './ChangeOrders/ChangeOrdersTable';

const useStyle = makeStyles({
  header: {
    color: '#05668d',
    fontSize: 30,
    margin: '10px 0'
  },
  table: {
    minWidth: 650,
    marginTop: '20px'
  },
});

export default function ChangeOrders() {
  const classes = useStyle();

  const [state, setState] = useState({
    changeOrders: [],
    changeOrderStatus: []
  });

  // fetch data from database
  useEffect(() => {
    Promise.all([
      axios.get("/api/change_orders"),
      axios.get("/api/change_order_status"),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          changeOrders: all[0].data,
          changeOrderStatus: all[1].data,
        }));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="content">
      <Typography className={classes.header}>Change orders</Typography>
      <ChangeOrdersTable changeOrders={state.changeOrders} status={state.changeOrderStatus} />
    </section>
  )
}