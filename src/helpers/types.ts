export type DynamicModule = {
  default: string;
};

/**
 * Callback functions for a boolean response.
 * Mimicked as `BoolBacks` as in Boolean Callbacks.
 */
export type BoolBacks = {
  onSuccess?: () => void;
  onFailure?: () => void;
};
