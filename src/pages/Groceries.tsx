import { ReactNode } from "react";
import 'C:/Users/bsams/Documents/shopperators/src/tailwind.css';

export default function Groceries(): ReactNode {
  return (
    <div className="groceries">
      <section className="page-title">
        <p>
          Grocery List
        </p>
      </section>
      <table className="table1">
        <tr className="table-row">
          <th className="table-column">Drinks</th>
          <th className="table-column">Drink Brand</th>
          <th className="table-column">Amount Left</th>
          <th className="table-column">Edit Item</th>
        </tr>
        <tr>
          <td className="table-body">Water</td>
          <td className="table-body">Ozarka</td>
          <td className="table-body">24</td>
          <td className="table-body"><button className="button">Edit</button></td>
        </tr>
      </table>
    </div>
  );
}
