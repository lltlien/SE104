const customerList = [
  {
    id: "KH001",
    name: "Liên Lê",
    birthday: "15/05/2003",
    gender: "female",
    phoneNumber: "0909333444",
    email: "lienle@gm.uit.edu.vn",
    address: "Hồ Chí Minh",
    totalDebt: 100000,
  },
  {
    id: "KH002",
    name: "Lê Thu Hà",
    birthday: "01/01/2001",
    gender: "female",
    phoneNumber: "0123456789",
    email: "lethuha@gm.uit.edu.vn",
    address: "Hồ Chí Minh",
    totalDebt: 45000000,
  },
  {
    id: "KH003",
    name: "Trần Xuân Minh",
    birthday: "01/02/2003",
    gender: "male",
    phoneNumber: "0444555666",
    email: "tranxuanminh@gm.uit.edu.vn",
    address: "Hồ Chí Minh",
    totalDebt: 12000,
  },
];

function $CustomerItem(data) {
  const $tag = document.createElement("tr");
  $tag.style.cursor = "pointer";

  const $id = document.createElement("th");
  $id.scope = "row";
  $id.innerText = data.id;
  const $name = document.createElement("td");
  $name.innerText = data.name;
  const $phoneNumber = document.createElement("td");
  $phoneNumber.innerText = data.phoneNumber;
  const $email = document.createElement("td");
  $email.innerText = data.email;
  const $totalDebt = document.createElement("td");
  $totalDebt.innerText = `${data.totalDebt}`;

  $tag.appendChild($id);
  $tag.appendChild($name);
  $tag.appendChild($phoneNumber);
  $tag.appendChild($email);
  $tag.appendChild($totalDebt);

  $tag.addEventListener("click", () => {
    document.getElementById("customer-id").innerText = data.id;
    document.getElementById("customer-name").innerText = data.name;
    document.getElementById("customer-phone").innerText = data.phoneNumber;
    document.getElementById("customer-email").innerText = data.email;
    document.getElementById("customer-total-debt").innerText = data.totalDebt;
    document.getElementById("choose-customer-close-modal").click();
  });
  return $tag;
}

const $customerList = document.getElementById("customer-list");
customerList.forEach((item) => {
  $customerList.appendChild($CustomerItem(item));
});
