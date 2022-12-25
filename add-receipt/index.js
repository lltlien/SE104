import { renderReceipt } from "./receipt.js";

function getRow({ id, name, author, publisher, price, quantity }) {
  const $tag = document.createElement("tr");

  const $id = document.createElement("th");
  $id.scope = "row";
  $id.innerText = id;
  const $name = document.createElement("td");
  $name.innerText = name;
  const $author = document.createElement("td");
  $author.innerText = author;
  const $publisher = document.createElement("td");
  $publisher.innerText = publisher;
  const $price = document.createElement("td");
  $price.innerText = `${price}`;
  const $quantity = document.createElement("td");
  $quantity.innerText = `${quantity}`;

  $tag.appendChild($id);
  $tag.appendChild($name);
  $tag.appendChild($author);
  $tag.appendChild($publisher);
  $tag.appendChild($price);
  $tag.appendChild($quantity);

  const $inputWrapper = document.createElement("td");
  $tag.appendChild($inputWrapper);

  const $input = document.createElement("input");
  $input.type = "number";
  if (quantity === 0) $input.disabled = true;
  $inputWrapper.appendChild($input);

  return { $tag, $input, id, quantity };
}

const $bookList = document.getElementById("book-list");
const bookList = [
  {
    id: "1",
    name: "Doraemon",
    author: "Fujiko Fujio",
    publisher: "Tuổi trẻ",
    price: 35000,
    quantity: 100,
  },
  {
    id: "2",
    name: "Conan",
    author: "Aoyama Gōshō",
    publisher: "Bình Minh",
    price: 70000,
    quantity: 2,
  },
  {
    id: "3",
    name: "Chiếc lược ngà",
    author: "Nguyễn Quang Sáng",
    publisher: "unknown",
    price: 45000,
    quantity: 0,
  },
  {
    id: "4",
    name: "Nhà giả kim",
    author: "Paulo Coelho",
    publisher: "unknown",
    price: 65000,
    quantity: 10,
  },
  {
    id: "5",
    name: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    publisher: "Văn Học",
    price: 100000,
    quantity: 20,
  },
];
const inputList = [];
bookList.forEach((item) => {
  console.log(item);
  const tmp = getRow(item);
  $bookList.appendChild(tmp.$tag);
  inputList.push({ tag: tmp.$input, ...item, num: tmp.quantity });
});

const $btnBuyBooks = document.getElementById("btn-buy-books");
$btnBuyBooks.addEventListener("click", () => {
  const buyList = [];
  for (let i = 0; i < inputList.length; i++) {
    const x = inputList[i];
    if (x.tag.value === "" || x.tag.value === "0") continue;
    const num = parseInt(x.tag.value);
    if (num < 0 || num > x.quantity) {
      swal("Lỗi!", "Số lượng không hợp lệ", "error");
      return;
    }
    buyList.push({
      ...x,
      num: num,
    });
  }

  if (buyList.length === 0) {
    swal("Warning!", "Chưa chọn sách", "info");
    return;
  }
  swal("Thành công!", "Thêm thành công", "success");
  document.getElementById("btn-close-add-book-modal").click();
  renderReceipt(buyList);
});
