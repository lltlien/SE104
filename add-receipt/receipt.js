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
  $money.innerText = `${data.num * data.price}`;

  $tag.appendChild($id);
  $tag.appendChild($name);
  $tag.appendChild($author);
  $tag.appendChild($price);
  $tag.appendChild($quantity);
  $tag.appendChild($money);

  return $tag;
}

function renderReceipt(buyList) {
  const $receipt = document.getElementById("receipt-book-list");
  $receipt.innerHTML = "";

  buyList.forEach((item) => {
    console.log(item);
    $receipt.appendChild(getRow(item));
  });
}

export { renderReceipt };
