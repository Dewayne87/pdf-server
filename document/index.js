module.exports = ({
  customer,
  company,
  number,
  date,
  dueDate,
  description,
  balance,
  notes,
  terms,
  items,
  subtotal,
  discount,
  tax,
  shipping,
  total
}) => {
  headerellipsis = str => {
    return str.length > 10 ? str.slice(0, 11) : str;
  };
  const itemChecker = items => {
    let emptyItems = [
      {
        name: "",
        description: "",
        cost: "",
        quantity: "",
        amount: ""
      }
    ];
    return items ? items : emptyItems;
  };

  capitalizeFirstLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  let taxpercent = Number(tax) * 100;
  // const invoiceItems = items.map(row => {
  //   const { name, description, cost, quantity, amount} = row;
  //   return (
  //     `<tr class='invoice-item'>
  //       <td>${name}</td>
  //       <td>${description}</td>
  //       <td>${cost}</td>
  //       <td>${quantity}</td>
  //       <td>${amount}</td>
  //     </tr>`
  //   )
  // })
  //   add items const to line 272 when items array working like this ->>//   ${items.join()}

  return `
 <!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
    body{
     width:99%;
    }
    .container{
     margin: "20px auto";
     width:99%;
    border: "1px solid #eff7f2"
    }
.shippingDiscount {
  background: lightgray;
}
.appbar{
    width:100%;
        backgroundColor: "#eff7f2",

}
.subtotalTax {
  background: #eff7f2;
}
.total-due {
  background: rgb(224, 123, 105);
}
.amount-paid {
  background: #a8e4bc;
}
.box-container {
  display: flex;
  justify-content: space-between;
}
.bottom {
  border-bottom: 1px solid black;
}
.entryName {
  font-size: 3.5rem;
  color: #4fc878;
}
.box {
  width: 45%;
  min-height: 220px;
  padding: 8px 0px 8px 8px;
  font-size: 3.5rem;
  overflow-wrap: break-word;
}
.top-box{
  width: 100%;
}
.header {
  font-size: 4rem;
}
    </style>
  </head>
  <body>
    <div class="container">
    <div class="appbar"><h3>${capitalizeFirstLetter(company.name)}</h3></div>
<div class="box-container bottom">
            <div class="top-box box">
              <p>
                <strong>
                  <span class="entryName">Invoice #:</span>
                </strong>
                ${" " + number}
                <br />
                <strong>
                  <span class="entryName">Date:</span>
                </strong>
                ${headerellipsis(" " + date)}
                <br />
                <strong>
                  <span class="entryName">Due Date:</span>
                </strong>
                ${headerellipsis(" " + dueDate)}
                <br />
                <strong>
                  <span class="entryName">Total:</span>
                </strong>
                ${" $" + total}
                <br />
                <strong>
                  <span class="entryName">Amount Due:</span>
                </strong>
                ${" $" + balance}
              </p>
            </div>
          </div>
          <div class="box-container bottom">
            <div class="box">
              <p>
                <strong>
                  <span class="entryName">From:</span>
                </strong>
                <br />
                ${capitalizeFirstLetter(company.name)}
                <br />
                ${company.address1},${" " + company.address2}
                <br />
                ${capitalizeFirstLetter(company.city)},
                ${" " + company.state.toUpperCase()}
                ${" " + company.zipCode}
                <br />
                ${company.email}
                <br />
                ${" " + company.phoneNumber}
              </p>
            </div>
            <div class="box">
              <p>
                <strong>
                  <span class="entryName">To:</span>
                </strong>
                <br />
                ${capitalizeFirstLetter(customer.name)}
                <br />
                ${customer.address1},${" " + customer.address2}
                <br />
                ${capitalizeFirstLetter(customer.city)},
                ${" " + customer.state.toUpperCase()}
                ${" " + customer.zipCode}
                <br />
                ${customer.email}
                ${" " + customer.phoneNumber}
              </p>
            </div>
          </div>
          <div class="box-container bottom">
            <div class="box mobileBorder">
              <p>
                <strong>
                  <span class="entryName">Invoice Description:</span>
                </strong>
                <br />
                ${description + "."}
              </p>
            </div>
            <div class="box">
              <p class="subtotalTax">Subtotal: $${subtotal}</p>
              <p class="shippingDiscount">Discount: $${discount}</p>
              <p class="subtotalTax">
                Tax:
                ${" " + Number(tax) * 100}%
              </p>
              <p class="shippingDiscount">Shipping: $${shipping}</p>
              <p class="total-due">Total: $${total}</p>
              <p class="amount-paid">Balance: $${balance}</p>
            </div>
          </div>
          <div class="box-container">
            <div class="box">
              <p>
                <strong>
                  <span class="entryName">Notes (if applicable):</span>{" "}
                </strong>
                <br />
                ${notes + "."}
              </p>
            </div>
            <div class="box">
              <p>
                <strong>
                  <span class="entryName">Terms (if applicable):</span>
                </strong>
                <br />
                ${terms + "."}
              </p>
            </div>
          </div>

    <div class="appbar"><h3>Invoice Items (if applicable)</h3></div>
            <table>
            <tr>
                <td>Name</td>
                <td>Description</td>
                <td>Cost</td>
                <td>Quantity</td>
                <td>Amount</td>
            </tr>
            </table>
    </div>
  </body>
</html>
  `;
};
