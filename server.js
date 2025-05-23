require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("MongoDB Connection Error:", err));

    
// Sample data (Replace with MongoDB logic)
const mealPlans = [
    { id: 1, name: "Weight Loss Plan", description: "A plan to help you lose weight." },
    { id: 2, name: "Muscle Gain Plan", description: "A plan to help you gain muscle." },
    { id: 3, name: "Balanced Diet Plan", description: "A plan for a balanced diet." },
];

const recipes = [
    { id: 1, title: "Grilled Chicken Salad", ingredients: "Chicken, Lettuce, Olive Oil, Lemon", instructions: "Grill chicken and mix with salad ingredients." },
    { id: 2, title: "Quinoa Bowl", ingredients: "Quinoa, Black Beans, Corn, Avocado", instructions: "Cook quinoa and mix with other ingredients." },
    { id: 3, title: "Vegetable Stir Fry", ingredients: "Broccoli, Carrots, Bell Peppers, Soy Sauce", instructions: "Stir fry vegetables in a pan." },
];

// API Routes
app.get("/api/meal-plans", (req, res) => res.json(mealPlans));
app.get("/api/recipes", (req, res) => res.json(recipes));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
