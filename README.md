# Email Object Project

* Generic Email App
  * Version (string)
  * Manufacturer (string)
  * User Object
  * Mailboxes
    * Inbox - Array of Email Objects
    * Sent - Array of Email Objects
    * Trash - Array of Email Objects
    * Archive - Array of Email Objects
    * Drafts - Array of Email Objects
  * Contacts
    * Array of Contact Objects, see Below

* User Object
  * Email Address (string)
  * Password (hashed string, string for our purposes)
  * Incoming Server (Object w/ IP and Port)
  * Outgoing Server (Object w/ IP and Port)

* Email Object
  * Sender Email (string)
  * Recipient (string)
  * Timestamp (Date is a data type in JS, w/ methods)
  * Subject (string)
  * Text (strings are unlimited in JS)
  * Priority (Boolean)

* Contact Object
  * Name (string)
  * Email (string)
  * Name + Email Method (function)
  * Phone Number (string)
