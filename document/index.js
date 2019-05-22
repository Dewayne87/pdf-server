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

  capitalizeFirstLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const invoiceItems = items.map(row => {
    const { name, description, cost, quantity, amount } = row;
    return `<tr>
        <td class="items">${name}</td>
        <td class="items">${description ? description + ".":"None"}</td>
        <td class="items">${cost}</td>
        <td class="items">${quantity}</td>
        <td class="items">${amount}</td>
      </tr>`;
  });
  const itemChecker = i => {
    let emptyItems = `<tr>
        <td class="items"></td>
        <td class="items"></td>
        <td class="items"></td>
        <td class="items"></td>
        <td class="items"></td>
      </tr>`;
    return i.length > 0 ? invoiceItems : emptyItems;
  };

  return `
 <!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body{
   width:100%;
}
.container{
   width:98%;
   margin:1%;
}
.shippingDiscount {
   background: lightgray;
}
.appbar{
   width:100%;
   font-size:1.6rem;
   padding:10px 0px 10px 0px;
   background: #ffffff;
   box-shadow: 2px 5px 2px 2px silver;
}
.subtotalTax {
   background: #eff7f2;
}
.total-due {
   background: rgb(224, 123, 105);
}
.amount-paid {
   background: #8bc34a;
}
.bottom {
   border-bottom: 1px solid black;
}
.entryName {
   font-size: 1.4rem;
   color: #8bc34a;
   padding-bottom:5px;
}

.box{
   width:50%;
   min-height:180px;
   padding-top:15px;
   font-size: 1.4rem;
   word-wrap:break-word
}
.topTables{
   width:100%;
   border-top:1px solid black;
   margin-top:15px;
   min-height:180px;
   table-layout: fixed;
}
.topRows{
   width:100%;
   margin-top:15px;
   min-height:180px;
   word-wrap:break-word

}
.top-box{
   width: 100%;
   font-size: 1.4rem;
   margin-top:15px;
   margin-bottom:10px;
   overflow-wrap: break-word;
}
.header {
   font-size:2.2rem;
   margin-bottom:10px;
}
.white{
   color:white;
   margin-bottom:10px;
   width:100%
}
.items{
   color:black;
   font-size:1.2rem;
   text-align:center;
   padding-bottom:10px;
   word-wrap:break-word
}
.btmTable{
   width:100%;
   table-layout: fixed;
}
.align{
   text-align:center;
   font-size:1.2rem;
   padding-top: 10px;
}
.divider{
   width:100%;
   border-top:1px solid black;
   text-align:center;
   padding-top:10px;
   padding-bottom:5px;
   font-size: 1.2rem;
}
.btmTopRow{
   margin-top:10px;
}

</style>
  </head>
  <body>
    <div class="container">
    <div class="appbar header"><h3>${capitalizeFirstLetter(
      company.name
    )}</h3></div>
            <div class="top-box">
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
          <table class="topTables">
          <tr class="topRows">
          <td class="box">
                <strong>
                  <p class="entryName">From:</p>
                </strong>
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
                ${company.phoneNumber}
                </td>
          <td class="box">
                <strong>
                  <p class="entryName">To:</p>
                </strong>
                ${capitalizeFirstLetter(customer.name)}
                <br />
                ${customer.address1},${" " + customer.address2}
                <br />
                ${capitalizeFirstLetter(customer.city)},
                ${" " + customer.state.toUpperCase()}
                ${" " + customer.zipCode}
                <br />
                ${customer.email}
                </br>
                ${customer.phoneNumber}
                </td>
                </tr>
                </table>
            <table class="topTables">
            <tr class="topRows">
            <td class="box">
                <strong>
                  <p class="entryName">Invoice Description:</p>
                </strong>
                ${description ? description + ".":"None"}
            </td>
            <td class="box">
              <p class="subtotalTax">Subtotal: $${subtotal}</p>
              <p class="shippingDiscount">Discount: $${discount}</p>
              <p class="subtotalTax">
                Tax:
                ${" " + Number(tax) * 100}%
              </p>
              <p class="shippingDiscount">Shipping: $${shipping}</p>
              <p class="total-due">Total: $${total}</p>
              <p class="amount-paid">Balance: $${balance}</p>
            </td>
            </tr>
            </table>
            <table class="topTables">
            <tr class="topRows">
            <td class="box">
                <strong>
                  <p class="entryName">Notes (if applicable):</p>
                </strong>
                ${notes ? notes + ".":"None"}
        </td>
        <td class="box">
                <strong>
                  <p class="entryName">Terms (if applicable):</p>
                </strong>
                ${terms ? terms + ".":"None"}
        </td>
        </tr>
        </table>
        <div class="divider">****Look to next page for Invoice Items (if applicable)****</div>
    <div class="appbar"><h3>Invoice Items (if applicable)</h3></div>
    <div class="white">
            <table class="btmTable" >
            <tr class="btmTopRow">
                <td class="entryName align">Name</td>
                <td class="entryName align">Description</td>
                <td class="entryName align">Cost</td>
                <td class="entryName align">Quantity</td>
                <td class="entryName align">Amount</td>
            </tr>
            ${itemChecker(items)}
            </table>
            </div>
    </div>
  </body>
</html>
  `;
};
