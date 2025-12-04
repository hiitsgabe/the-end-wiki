import { IGDBGame } from "./igdb";

export type Game = Omit<IGDBGame, "checksum">;
