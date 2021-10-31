import React from "react";

function Product () {
  return (
    <div>
      <h1 className="h3 mb-2 text-gray-800">Products</h1>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the{" "}
        <a target="_blank" href="https://datatables.net">
          official DataTables documentation
        </a>
        .
      </p>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Seller</th>
                  <th>Mfg Year</th>
                  <th>Delivery Date</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                <th>Name</th>
                  <th>Brand</th>
                  <th>Seller</th>
                  <th>Mfg Year</th>
                  <th>Delivery Date</th>
                  <th>Price</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>iPhone SE</td>
                  <td>Apple</td>
                  <td>iMagine</td>
                  <td>2020</td>
                  <td>2021/08/25</td>
                  <td>Rs.31,499</td>
                </tr>
                <tr>
                  <td>Nord 2 5G</td>
                  <td>Oneplus</td>
                  <td>Oneplus India</td>
                  <td>2021</td>
                  <td>2021/08/25</td>
                  <td>Rs.26,999</td>
                </tr>
                <tr>
                  <td>FOld 3 Flip</td>
                  <td>Samsung</td>
                  <td>Flipkart</td>
                  <td>2021</td>
                  <td>2021/08/25</td>
                  <td>Rs.89,000</td>
                </tr>
                <tr>
                  <td>Moto G8</td>
                  <td>Motorola</td>
                  <td>Amazon</td>
                  <td>2021</td>
                  <td>2021/08/25</td>
                  <td>Rs.19,999</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;