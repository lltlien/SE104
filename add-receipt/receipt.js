function getRow(data) {
  const $tag = document.createElement("tr");

  const $id = document.createElement("th");
  $id.scope = "row";
  $id.innerText = data.id;
  const $name = document.createElement("td");
  $name.innerText = data.name;
  const $author = document.createElement("td");
  $author.innerText = data.author;
  const $price = document.createElement("td");
  $price.innerText = `${data.price}`;
  const $quantity = document.createElement("td");
  $quantity.innerText = `${data.num}`;
  const $money = document.createElement("td");
  $money.innerText = `${data.money}`;

  $tag.appendChild($id);
  $tag.appendChild($name);
  $tag.appendChild($author);
  $tag.appendChild($price);
  $tag.appendChild($quantity);
  $tag.appendChild($money);

  return $tag;
}

let totalPrice = 0;
function renderReceipt(buyList) {
  const $receipt = document.getElementById("receipt-book-list");
  $receipt.innerHTML = "";

  totalPrice = 0;
  buyList.forEach((item) => {
    $receipt.appendChild(getRow(item));
    totalPrice += item.num * item.price;
  });
  $receipt.appendChild(
    getRow({
      id: "",
      name: "",
      author: "",
      price: "",
      num: "",
      money: totalPrice,
    })
  );
}

const $btnCreateReceipt = document.getElementById("btn-create-receipt");
$btnCreateReceipt.onclick = function () {
  if (document.getElementById("customer-id").innerText === "") {
    swal("Lỗi!", "Chưa chọn khách hàng!", "error");
    return;
  }
  if (document.getElementById("receipt-book-list").innerHTML === "") {
    swal("Lỗi!", "Chưa chọn sách!", "error");
    return;
  }
  const $money = document.getElementById("receipt-money-field");
  if ($money.value === "") {
    swal("Lưu ý!", "Chưa nhập số tiền thanh toán!", "info");
    return;
  }
  const money = parseInt($money.value);
  if (money < 0) {
    swal("Lỗi!", "Số tiền không hợp lệ!", "error");
    return;
  }

  swal(
    "Thanh toán thành công!",
    `Số tiền: ${money} VNĐ` +
      (money < totalPrice
        ? `\nNợ: ${totalPrice - money} VNĐ`
        : money > totalPrice
        ? `\nDư: ${money - totalPrice}`
        : ""),
    "success"
  );
};

export { renderReceipt };
