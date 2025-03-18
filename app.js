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
            "characterName": "Betti",
            "totalScore": 95
        },
        {
            "characterName": "Zsófi",
            "totalScore": 120
        },
        {
            "characterName": "Patti",
            "totalScore": 85
        },
        {
            "characterName": "Player1",
            "totalScore": 150
        },
        {
            "characterName": "Player2",
            "totalScore": 110
        },
        {
            "characterName": "Player3",
            "totalScore": 75
        },
        {
            "characterName": "Player4",
            "totalScore": 130
        },
        {
            "characterName": "Player5",
            "totalScore": 90
        },
        {
            "characterName": "Player6",
            "totalScore": 140
        },
        {
            "characterName": "Player7",
            "totalScore": 100
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
        }
    );
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});