import { baseMapColor, gameObjectColors } from "../constants";

export type Color = typeof baseMapColor | (typeof gameObjectColors)[number];
