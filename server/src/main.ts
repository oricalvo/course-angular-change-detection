import express from "express";
import cors from "cors";

async function main() {
  const app = express();
  const port = 4000;

  app.use(cors());

  app.get("/contact", (req, res) => {
    res.send([
      { id: 1, name: "Ori" },
      { id: 2, name: "Roni" },
    ]);
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

main();
