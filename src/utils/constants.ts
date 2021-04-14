export const BACKGROUND_COLOR = "#FFFAFA";
export const LOADER_FILL_COLOR = 0xff0000;

export const GAME_RESOLUTION = {
  width: 800,
  height: 600,
};

export const SOUND_BUTTON_POSITION = {
  x: 20,
  y: 20,
};

export const RULES_TEXT =
  "Phasellus tempor velit tellus, tempus facilisis sem placerat et. Maecenas et risus in tortor bibendum laoreet. Vestibulum vel augue nec erat dignissim ullamcorper vel vel dui. Fusce rutrum libero ornare dolor luctus, sit amet eleifend elit rutrum. \n" +
  "\n" +
  "Sed tincidunt urna eu leo gravida hendrerit. Nam imperdiet fermentum felis, venenatis mattis justo ultrices vitae. Maecenas odio orci, vehicula in egestas a, ultrices quis risus. Etiam posuere rhoncus erat, in suscipit erat dignissim at. \n" +
  "\n" +
  "Nam imperdiet fermentum felis, venenatis mattis justo ultrices vitae. Maecenas odio orci, vehicula in egestas a, ultrices quis risus. Etiam posuere rhoncus erat, in suscipit erat dignissim at.";

export const TEXT_AREA_CONFIG_FOR_RULES = {
  x: 0,
  y: 50,
  width: 600,
  height: 352,
};

export const DEPTH_LAYERS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};

export const GAME_HEALTH_POINTS = 5;

export const PATH_SPRITES = "./assets/sprites";

export const LEVELS = [
  {
    numbersAmount: 3,
    targetNumber: 5, //from 1 to targetNumber
    isExpression: false,
  },
  {
    numbersAmount: 3,
    targetNumber: 10, //from 1 to targetNumber
    isExpression: false,
  },
  {
    numbersAmount: 3,
    targetNumber: 120, //from 1 to targetNumber
    isExpression: false,
  },
  {
    numbersAmount: 4,
    targetNumber: 1000, //from 1 to targetNumber
    isExpression: false,
  },
];

export const TOTAL_EXAMPLES = LEVELS[3].numbersAmount;
