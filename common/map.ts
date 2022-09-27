export const MAP_BOUNDARIES = {
  top: -400,
  left: -450,
  bottom: 1750,
  right: 550,
};

export const MAP_WIDTH = MAP_BOUNDARIES.right - MAP_BOUNDARIES.left;
export const MAP_HEIGHT = MAP_BOUNDARIES.bottom - MAP_BOUNDARIES.top;

export const MAP = [
  // Red base
  {
    x: -150,
    y: -50,
    width: 50,
    height: 400,
    color: 0x773333,
  },
  {
    x: -150,
    y: -100,
    width: 450,
    height: 50,
    color: 0x773333,
  },
  {
    x: 250,
    y: -50,
    width: 50,
    height: 400,
    color: 0x773333,
  },

  // Blockades
  {
    x: -100,
    y: 550,
    width: 200,
    height: 25,
    color: 0x333333,
  },
  {
    x: 100,
    y: 400,
    width: 200,
    height: 25,
    color: 0x333333,
  },
  {
    x: -50,
    y: 700,
    width: 75,
    height: 75,
    color: 0x333333,
  },
  {
    x: 0,
    y: 900,
    width: 300,
    height: 50,
    color: 0x333333,
  },

  // Blue base
  {
    x: -150,
    y: 1000,
    width: 50,
    height: 400,
    color: 0x333377,
  },
  {
    x: -150,
    y: 1400,
    width: 450,
    height: 50,
    color: 0x333377,
  },
  {
    x: 250,
    y: 1000,
    width: 50,
    height: 400,
    color: 0x333377,
  },
];
