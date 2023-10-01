const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
dotenv.config({ path: "backend/config/config.env" });

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting Down Server Due to uncaught Exception`);
  process.exit(1);
});
//Database Connection
connectDB();
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

//unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error ${err.message}`);
  console.log("Shuting down the server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
