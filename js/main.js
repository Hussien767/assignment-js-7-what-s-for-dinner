
var meals = [
    {
        name: "Chicken Pasta",
        description: "Delicious creamy chicken pasta with parmesan cheese",
        image: "./imges/meal9.jpg",
        difficulty: "Easy",
        category: "Italian",
        prepTime: 15,
        cookTime: 25,
        servings: 2,

        ingredients: [
            "200g pasta",
            "150g chicken breast",
            "1 cup cooking cream",
            "Parmesan cheese",
            "2 garlic cloves"
        ],

        instructions: [
            "Boil the pasta in salted water",
            "Cut chicken into small pieces",
            "Cook chicken with garlic",
            "Add cooking cream and parmesan",
            "Mix pasta with the sauce and serve"
        ],

        nutrition: {
            calories: "450 kcal",
            carbs: "55g",
            fiber: "4g"
        }
    },

    {
        name: "Beef Burger",
        description: "Juicy homemade burger with fresh vegetables",
        image: "./imges/meal9.jpg",
        difficulty: "Medium",
        category: "American",
        prepTime: 20,
        cookTime: 15,
        servings: 2,

        ingredients: [
            "2 burger buns",
            "250g ground beef",
            "2 cheese slices",
            "Lettuce",
            "Tomato",
            "Burger sauce"
        ],

        instructions: [
            "Season the ground beef",
            "Shape the beef into burger patties",
            "Cook patties in a hot pan",
            "Add cheese slices",
            "Assemble the burger with vegetables and sauce"
        ],

        nutrition: {
            calories: "520 kcal",
            carbs: "35g",
            fiber: "3g"
        }
    },

    {
        name: "Caesar Salad",
        description: "Fresh Caesar salad with chicken and parmesan",
        image: "./imges/meal9.jpg",
        difficulty: "Easy",
        category: "Healthy",
        prepTime: 10,
        cookTime: 15,
        servings: 2,

        ingredients: [
            "Romaine lettuce",
            "Chicken breast",
            "Caesar dressing",
            "Parmesan cheese",
            "Croutons",
            "Black pepper"
        ],

        instructions: [
            "Wash and chop the lettuce",
            "Grill the chicken breast",
            "Cut chicken into small pieces",
            "Add Caesar dressing",
            "Mix all ingredients and serve"
        ],

        nutrition: {
            calories: "320 kcal",
            carbs: "18g",
            fiber: "3g"
        }
    },

    {
        name: "Margherita Pizza",
        description: "Classic Italian pizza with tomato and mozzarella",
        image: "./imges/meal9.jpg",
        difficulty: "Medium",
        category: "Italian",
        prepTime: 20,
        cookTime: 25,
        servings: 4,

        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Mozzarella cheese",
            "Fresh basil",
            "Olive oil"
        ],

        instructions: [
            "Prepare the pizza dough",
            "Spread tomato sauce",
            "Add mozzarella cheese",
            "Bake in the oven",
            "Add fresh basil and serve"
        ],

        nutrition: {
            calories: "300 kcal",
            carbs: "40g",
            fiber: "2g"
        }
    },

    {
        name: "Chicken Shawarma",
        description: "Delicious chicken shawarma with garlic sauce",
        image: "./imges/meal9.jpg",
        difficulty: "Easy",
        category: "Middle Eastern",
        prepTime: 15,
        cookTime: 20,
        servings: 2,

        ingredients: [
            "Chicken breast",
            "Garlic",
            "Yogurt",
            "Lemon juice",
            "Shawarma spices",
            "Arabic bread"
        ],

        instructions: [
            "Cut chicken into strips",
            "Mix chicken with spices and yogurt",
            "Marinate for 30 minutes",
            "Cook chicken in a pan",
            "Serve with bread and garlic sauce"
        ],

        nutrition: {
            calories: "400 kcal",
            carbs: "30g",
            fiber: "3g"
        }
    }
];


// Select HTML Elements

var mealImage = document.querySelector("#mealImage");
var mealName = document.querySelector("#mealName");
var mealDescription = document.querySelector("#mealDescription");

var mealDifficulty = document.querySelector("#mealDifficulty");
var mealCategory = document.querySelector("#mealCategory");

var prepTime = document.querySelector("#prepTime");
var cookTime = document.querySelector("#cookTime");
var servings = document.querySelector("#servings");

var ingredientsList = document.querySelector("#ingredientsList");
var instructionsList = document.querySelector("#instructionsList");

var calories = document.querySelector("#calories");
var carbs = document.querySelector("#carbs");
var fiber = document.querySelector("#fiber");

const randomBtn = document.querySelector("#randomBtn");


// Display Meal Function

function displayMeal(meal) {

    mealImage.src = meal.image;

    mealName.textContent = meal.name;
    mealDescription.textContent = meal.description;

    mealDifficulty.textContent = meal.difficulty;
    mealCategory.textContent = meal.category;

    prepTime.textContent = meal.prepTime + " min";
    cookTime.textContent = meal.cookTime + " min";
    servings.textContent = meal.servings + " people";


    // Display Ingredients

  var ingredients = "";

    for (var i = 0; i < meal.ingredients.length; i++) {

        ingredients += `
            <p>
                <span>${i + 1}</span>
                ${meal.ingredients[i]}
            </p>
        `;

    }

    ingredientsList.innerHTML = ingredients;


    // Display Instructions

    var instructions = "";

    for (var i = 0; i < meal.instructions.length; i++) {

        instructions += `
            <p>
                <span>${i + 1}</span>
                ${meal.instructions[i]}
            </p>
        `;

    }

    instructionsList.innerHTML = instructions;


    // Display Nutrition

    calories.textContent = meal.nutrition.calories;
    carbs.textContent = meal.nutrition.carbs;
    fiber.textContent = meal.nutrition.fiber;

}


    
function getRandomMeal() {

    var randomIndex = Math.floor(Math.random() * meals.length);

    var selectedMeal = meals[randomIndex];

    displayMeal(selectedMeal);

}


// Button Event

randomBtn.addEventListener("click", getRandomMeal);


// Show Random Meal When Page Loads

getRandomMeal();
