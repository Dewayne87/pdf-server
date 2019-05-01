module.exports = ({
  invoiceNumber,
  addressFrom,
  addressTo,
  stateTo,
  company,
  zipCodeTo,
  cityTo,
  emailTo,
  selectedDate,
  invoiceDueDate,
  invoiceDescription,
  balanceDue,
  notes,
  terms,
  invoiceItems,
  subtotal,
  discount,
  tax,
  shipping,
  total,
  amountPaid
}) => {
  headerellipsis = str => {
    return str.length > 10 ? str.slice(0, 10) : str;
  };
  let taxpercent = Number(tax) * 100;
  // const items = invoiceItems.map(row => {
  //   const { item, quantity, rate, amount} = row;
  //   return (
  //     `<tr class='invoice-item'>
  //       <td>${item}</td>
  //       <td>${quantity}</td>
  //       <td>${rate}</td>
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
      body {
        padding: 0;
        margin: 0;
      }
      .page {
        height: 8.5in;
        width: 95%;
        position: relative;
        margin: 30px 20px;
      }
      .page table {
        width: 100%;
      }
      .page .logo {
        width: 150px;
      }
      .invoice-header {
        width: 100%;
        padding-bottom: 20px;
      }
      .invoice-header .logo {
        vertical-align: top;
      }
      .invoice-dates {
        width: 100%;
        text-align: right;
        font-size: 16px;
      }
      .invoice-addresses {
        width: 100%;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        margin: 20px 0;
      }
      .invoice-address {
        padding: 30px;
        line-height: 1.3;
        font-size: 16px;
      }
      .invoice-address .address-frto {
        font-size: 20px;
      }
      .page td .invoice-money {
        text-align: right;
        margin-left: auto;
        margin-bottom: 10px;
        width: 200px;
      }
      .page td .invoice-money tr {
        line-height: 1.3;
        font-size: 16px;
      }
      .page td .invoice-money tr:nth-child(even) {
        background: lightgray;
      }
      .page td .invoice-money tr td {
        padding: 3px;
      }
      .page .invoice-next-page {
        font-size: 16px;
        position: absolute;
        bottom: 0;
        text-align: center;
        width: 100%;
      }
      .invoice-terms {
        width: 100%;
        font-size: 16px;
        padding-top: 10px;
        border-top: 1px solid black;
      }
      .invoice-terms p {
        font-size: 16px;
      }
      #total-due {
        background: rgb(224, 123, 105);
      }
      #amount-paid {
        background: rgb(145, 195, 149);
      }
      .invoice-items {
        max-width: 600px;
        margin: 0 auto;
      }
      .invoice-items .invoice-item{
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <div class="page">
      <table>
        <tr>
          <td>
            <table class="invoice-header">
              <tr>
                <td class="logo">
                  ${company}
                </td>
                <td>
                  <table class="invoice-dates">
                    <tr>
                      <td>Invoice #: ${invoiceNumber}</td>
                    </tr>
                    <tr>
                      <td>Date: ${headerellipsis(selectedDate)}</td>
                    </tr>
                    <tr>
                      <td>Due Date: ${headerellipsis(
                        invoiceDueDate
                      )}</td>
                    </tr>
                    <tr>
                      <td>Amount Due: $${total}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table class="invoice-addresses">
              <tr>
                <td class="invoice-address">
                  <strong class="address-frto">From: </strong><br />
                 ${addressFrom}
                </td>
                <td class="invoice-address">
                <br /><br /><strong class="address-frto">To: </strong><br />
                 ${addressTo}<br />
                 ${cityTo},${" " + stateTo} ${"  " + zipCodeTo}<br />
                 ${emailTo} <br />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table class="invoice-money" cellspacing="0">
              <tr>
                <td>Subtotal:</td>
                <td>$${subtotal}</td>
              </tr>
              <tr>
                <td>Discount:</td>
                <td>$${discount}</td>
              </tr>
              <tr>
                <td>Tax:</td>
                <td>${taxpercent}%</td>
              </tr>
              <tr>
                <td>Shipping:</td>
                <td>$${shipping}</td>
              </tr>
              <tr id="total-due">
                <td>Total:</td>
                <td>$${total}</td>
              </tr>
              <tr id="amount-paid">
                <td>Amount Paid:</td>
                <td>$${amountPaid}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <div class="invoice-terms">
              <h3>Notes and terms \(if applicable\)</h3>
              <p>
                <strong>Notes:</strong>${" " + notes + "."}
              </p>
              <p>
              <strong>Terms:</strong>${" " + terms + "."}
              </p>
            </div>
          </td>
        </tr>
      </table>

      <h3 class="invoice-next-page">
        *** Please look on the next page for an Itemized list of your invoice \(if applicable\).
        ***
      </h3>
    </div>
    <div class="page">
      <table>
        <tr>
          <td>
            <table class="invoice-header">
              <tr>
                <td class="logo">
                  
                </td>
                <td>
                  <table class="invoice-dates">
                    <tr>
                      <td>Invoice #: ${invoiceNumber}</td>
                    </tr>
                    <tr>
                      <td>Date: ${headerellipsis(selectedDate)}</td>
                    </tr>
                    <tr>
                      <td>Due Date: ${headerellipsis(
                        invoiceDueDate
                      )}</td>
                    </tr>
                    <tr>
                      <td>Amount Due: $${total}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
              <h3>Itemized Summary</h3>
          </td>
        </tr>
        <tr>
            <table class='invoice-items' cellspacing="0">
              <tr>
                <td>Item</td>
                <td>Quantity</td>
                <td>Rate</td>
                <td>Amount</td>
            </tr>
            
            </table>
        </tr>
      </table>
    </div>
  </body>
</html>
  `;
};
