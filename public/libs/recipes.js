const names = ["Haze", "Cleo", "Ade", "Vinnie", "Thokozani"];
const difficulty = ["Easy", "Medium", "Hard"];

class Recipe {
  constructor(recipeName, recipeDescription, image, servings, chefsChoice) {
    this.user = names[Math.floor(Math.random() * names.length)];
    this.recipeName = recipeName || "Lorem ipsum dolor sit";
    this.recipeDescription =
      recipeDescription ||
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at tempus tortor. Mauris at venenatis ex.";
    this.difficulty =
      difficulty[[Math.floor(Math.random() * difficulty.length)]];
    this.image = image;
    this.servings = servings || Math.floor(1 + Math.random() * 10);
    this.chefsChoice =
      chefsChoice != undefined ? chefsChoice : Math.random() < 0.5;
  }
}

export const recipes = [
  new Recipe(
    "CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST",
    "Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…",
    "./img/recipes/rec0.png",
    4,
    true
  ),
  new Recipe(
    "PINEAPPLE FRUIT SALAD WITH FRESH CREAM",
    "The pineapple juice is the star of the dressing and what gives it such a refreshing and sweet taste.",
    "./img/recipes/rec1.png",
    2,
    false
  ),
  new Recipe(
    "CHEESE, SPINACH & MUSHROOM STUFFED",
    "Amp up this dinner party classic by stuffing three types of cheese, spinach and mushroom into…",
    "./img/recipes/rec2.png",
    2,
    true
  ),
  new Recipe(
    "FETA AND PEACH COUSCOUS",
    "Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta...",
    "./img/recipes/rec3.png",
    8,
    false
  ),
];

for (let i = 4; i <= 13; i++) {
  if (i === 13) {
    recipes.push(
      new Recipe(
        undefined,
        undefined,
        `./img/recipes/rec${i}.jpeg`,
        undefined,
        false
      )
    );
  } else {
    recipes.push(
      new Recipe(
        undefined,
        undefined,
        `./img/recipes/rec${i}.jpeg`,
        undefined,
        undefined
      )
    );
  }
}
