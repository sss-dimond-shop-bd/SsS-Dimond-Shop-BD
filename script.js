
document.getElementById("ffForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    uid: form.uid.value,
    package: form.package.value,
    trx: form.trx.value,
    type: "FF UID TOPUP"
  };

  fetch("https://script.google.com/macros/s/AKfycbxR3jA2f9JCKuTdzNI6898GMPcgelXUxp9uh0WZGRVMPdtPK_Zh1s84I_ApMJkFdDWC5A/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.text())
    .then(result => alert("Order Placed Successfully!"))
    .catch(error => alert("Error!"));
});
