import express from "express";
import cors from "cors";

async function main() {
    const app = express();
    const port = 4000;

    app.use(cors());

    app.get("/contact", async (req, res) => {
        await delay(2000);

        res.send([
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
        ]);
    });

    app.get("/group", async (req, res) => {
        await delay(1000);

        res.send([
            {id: 1, name: "Friends"},
            {id: 2, name: "Family"},
        ]);
    });

    app.get("/contactsAndGroups", async (req, res) => {
        await delay(2000);

        res.send({
            contacts: [
                {id: 1, name: "Ori"},
                {id: 2, name: "Roni"},
            ],
            groups: [
                {id: 1, name: "Friends"},
                {id: 2, name: "Family"},
            ]
        });
    });

    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}

async function delay(number: number) {
    return new Promise(resolve => setTimeout(resolve, number));
}

main();

