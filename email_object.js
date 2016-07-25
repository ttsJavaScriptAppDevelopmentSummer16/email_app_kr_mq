var kevin = {
  name: "Kevin R",
  email: "kevin@example.com",
  password: "hash_goes_here",
  incoming_server: {
    ip: "127.0.0.1",
    port: 3300
  },
  outgoing_server: {
    ip: "127.0.0.1",
    port: 4400
  }
}

var email_01 = {
  sender: "mary@example.com",
  receipient: "kevin@example.com",
  // timestamp = Date(),
  subject: "Blah",
  text: "blah blah blah blah",
  priority: false
}

var email_02 = {
  sender: "mary@example.com",
  receipient: "kevin@example.com",
  // timestamp = Date(),
  subject: "Blah",
  text: "blah blah blah blah",
  priority: false
}

var email_03 = {
  sender: "george@example.com",
  receipient: "kevin@example.com",
  // timestamp = Date(),
  subject: "Blah",
  text: "blah blah blah blah",
  priority: false
}

var email_04 = {
  sender: "kevin@example.com",
  receipient: "mary@example.com",
  // timestamp = Date(),
  subject: "Re:Blah",
  text: "blah blah blah blah",
  priority: true
}

var email_05 = {
  sender: "mary@example.com",
  receipient: "kevin@example.com",
  // timestamp = Date(),
  subject: "Blah",
  text: "blah blah blah blah",
  priority: false
}

var email_06 = {
  sender: "mary@example.com",
  receipient: "kevin@example.com",
  // timestamp = Date(),
  subject: "Blah",
  text: "blah blah blah blah",
  priority: true
}

var mary = {
  name: "Mary",
  email: "mary@example.com",
  // full_address = function(){
  //   return this.name + " - " + this.email
  // },
  phone: "555-555-5555"
}

var george = {
  name: "George",
  email: "george@example.com",
  // full_address = function(){
  //   return this.name + " - " + this.email
  // },
  phone: "555-555-5555"
}

var my_email_app = {
  name: "Google Inbox, Except Not Really",
  version: "3.141592",
  manufacturer: "Kevin Incorporated",
  user: kevin
  mailboxes: [
    { name: "Inbox",
      mail: [email_01,email_02] },
    { name: "Sent",
      mail: [email_04] },
    { name: "Archive",
      mail: [email_05, email_06] },
    { name: "Drafts",
      mail: [] },
    { name: "Trash",
      mail: [email_03] }
  ],
  contacts = [ mary, george ]
}

console.log(my_email_app.user.name);
