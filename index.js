//module
const app = require("./src/main");
const port = normalizaPort(process.env.PORT || "3000");

//port
function normalizaPort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

//Start ite
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
