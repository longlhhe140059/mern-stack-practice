const { MongoClient, ServerApiVersion } = require("mongodb");
//this is db connection string
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    
    client.connect(uri,function (err, db) {
      console.log("test");
      // Verify we got a good "db" object
      if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
      } else {
        //HURRAY!! We are connected. :)
        console.log('Connection established to', url);
        // do some work here with the database

        //Close connection
        db.close();
      }
    });
  },

  getDb: function () {
    return _db;
  },
};
