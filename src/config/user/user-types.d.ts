import { ThemeColors } from "..";

export type UserLevelCodes = 1 | 2 | 3 | 4;

export type UserLevel = {
  CODE: UserLevelCodes;
  LABEL: string;
  COLOR: ThemeColors;
};
