const fs = require("fs");
const path = require("path");

class HomePageController {
  async display(req, res) {
    const readmePath = path.resolve(__dirname, "..", "..", "index.html");
    const readmeContent = fs.readFileSync(readmePath, "utf-8");
    res.send(readmeContent);
  }
}

module.exports = HomePageController;
