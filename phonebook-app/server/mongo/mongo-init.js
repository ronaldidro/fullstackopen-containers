db.createUser({
  user: "the_username",
  pwd: "the_password",
  roles: [
    {
      role: "dbOwner",
      db: "the_database",
    },
  ],
});

db.createCollection("people");

db.people.insertOne({ name: "Anna", number: "040-123456" });
db.people.insertOne({ name: "Arto Vihavainen", number: "045-1232456" });
db.people.insertOne({ name: "Ada Lovelace", number: "040-1231236" });
