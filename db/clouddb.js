/**
 * Setup the Database URL
 */


const DB_USER = "devesh"
const DB_PASSWORD = "7XQ9yzx8Pudn6zpv"
const DB_NAME = "acmetravel"
const CLUSTER_HOST = "cluster0-1kync.mongodb.net"

// Setup the DB URI
exports.DB_URI= "mongodb+srv://"+DB_USER+":"+DB_PASSWORD+"@"+CLUSTER_HOST+"/"+DB_NAME+"?retryWrites=true&w=majority"