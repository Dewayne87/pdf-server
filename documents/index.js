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
${company}
    </div>
  </body>
</html>
  `;
};
