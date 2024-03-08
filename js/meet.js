async function httpRequest(url) {
  //const response = fetch("https://btm-webform-default-rtdb.firebaseio.com",);
  const response = await fetch(
    `https://btm-webform-default-rtdb.firebaseio.com/${url}.json`,
    {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(dataJson), // body data type must match "Content-Type" header
    }
  );
}
const button = document.getElementById("submitBtn");
let dataJson = {};
button.addEventListener("click", async (value) => {
  value.preventDefault();

  const data = new FormData(form);
  for (const [key, value] of data) {
    dataJson[`${key}`] = value;
  }
  const resquest = await httpRequest("Meetup");
  console.log("response", resquest);
  form.reset();
  //console.log(data.getAll());
  console.log(dataJson);

  Email.send({
    SecureToken: "adb1b8ff-18a2-488c-9a45-1eaefac58f07",
    To: dataJson[`${key}`],
    From: "agency@btmlimited.net",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
});
