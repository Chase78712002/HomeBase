import { useEffect, useState } from "react";
import axios from "axios";

// app imports
import ChangeOrdersTable from './ChangeOrdersTable';
import Title from '../Title';

export default function ChangeOrders() {
  const [state, setState] = useState({
    changeOrders: [],
    changeOrderStatus: []
  });

  // fetch data from database
  useEffect(() => {
    Promise.all([
      axios.get("/api/change_orders"),
      axios.get("/api/change_order_status"),
      axios.get("/api/projects"),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          changeOrders: all[0].data,
          changeOrderStatus: all[1].data,
          projects: all[2].data,
        }));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="content">
      <Title title={"Change Orders"} />
      <ChangeOrdersTable changeOrders={state.changeOrders} status={state.changeOrderStatus} projects={state.projects} />
    </section>
  );
}