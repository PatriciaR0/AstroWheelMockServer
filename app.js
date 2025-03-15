const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

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

app.get("/api/Characters", (req, res, next) => {
    res.json({
        "CharacterID": 1,
        "AstroSign": "Leo",
        "Gender": "Male",
        "CharacterIndex": 1,
    });
});

app.get("/api/Inventory", (req, res, next) => {
    res.json(
        [
            {
                "inventoryId": 1,
                "totalScore": 1,
            },
            {
                "inventoryId": 2,
                "totalScore": 1,
            }
        ]
    );
});

app.get("/api/HighScore", (req, res, next) => {
    res.json([
        {
            "characterId": 1,
            "totalScore": 95
        },
        {
            "characterId": 2,
            "totalScore": 120
        },
        {
            "characterId": 3,
            "totalScore": 85
        },
        {
            "characterId": 4,
            "totalScore": 150
        },
        {
            "characterId": 5,
            "totalScore": 110
        },
        {
            "characterId": 6,
            "totalScore": 75
        },
        {
            "characterId": 7,
            "totalScore": 130
        },
        {
            "characterId": 8,
            "totalScore": 90
        },
        {
            "characterId": 9,
            "totalScore": 140
        },
        {
            "characterId": 10,
            "totalScore": 100
        },
        {
            "characterId": 11,
            "totalScore": 80
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
            "characterName": "mérleg",
            "islandName": null,
        }
    );
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});