// A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated
// identifier.

// Posts input to database
const postToDatabase = (contact) => {
  fetch("http://localhost:3000/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contact)
  })
}

// Fetches all data from database (contacts.json) and adds the results to the DOM
const getAllFromDatabase = () => {
  fetch("http://localhost:3000/contacts", {
    headers: {
      "Content-Type": "application/json"
    },
  }).then(response => response.json())
    .then(data => {
      data.forEach((item) => {
      $(".output").append(
        `<p>${item.firstName} ${item.lastName}</p>
        <p>${item.phoneNumber}</p>
        <p>${item.address1}</p>
        <p>${item.address2}</p>
        <p>${item.city}, ${item.state} ${item.zipCode}</p>`)
      })
      // console.table(data)
    })
}

export { postToDatabase, getAllFromDatabase }