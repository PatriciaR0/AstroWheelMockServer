const express = require('express');
const cors = require('cors');
const app = express();
const port = 3005;

// Define CORS options
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    preflightContinue: false
};

// Use CORS middleware
app.use(cors(corsOptions));

app.use(express.json()); // Middleware to parse JSON requests

app.post("/api/Auth/login", (req, res, next) => {
    if (req.body.password === "errorTest") {
        return res.status(401).json({ error: "Invalid email or password!" });
    }
    return res.json({ "token": "validMockToken" });
});

app.get("/api/character/:characterId", (req, res, next) => {
    res.json({
        "characterId": 1,
        "astroSign": "Leo",
        "gender": "Male",
        "characterIndex": 1,
    });
});

app.get("/api/inventory", (req, res, next) => {
    res.json([
        {
            "inventoryId": 2,
            "totalScore": 400,
            "playerId": 2,
            "playerName": "Pati"
        },
    ]);
});

app.get("/api/TotalScore/:playerId", (req, res, next) => {
    const playerId = req.params.playerId;
    console.log(`playerId: ${playerId}`)
    res.json(0);
});

app.get("/api/players/me", (req, res, next) => {
    res.json(
        {
            "playerId": 1,
            "playerName": "Betti",
            "userId": "22f83bb3-36a9-49f0-99c1-b7bc7d7280e0",
            "characterId": 1,
            "islandId": null,
            "InventoryId": 1,
            "recipeBookId": null,
            "totalScore": 1,
            "lastLogin": null,
            "createdAt": "2025-03-12T14:07:50.251241",
            "characterName": "Capricorn",
            "islandName": null,
            "materials": [
                {
                    "materialId": 12,
                    "witchName": "Dragon's Claw",
                    "englishName": "Coral-root",
                    "latinName": "Corallorhiza odontorrhiza",
                    "quantity": 4
                }

            ],
        }
    );
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});