const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
dotenv.config({ path: "backend/config/config.env" });
//Database Connection
connectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
