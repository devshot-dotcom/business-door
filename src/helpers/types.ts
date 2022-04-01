import { StatusCodes } from "http-status-codes";

export type DynamicModule = {
  default: string;
};

export type ApiError = {
  message: string;
  details?: string;
  hint?: string;
  code?: StatusCodes | string;
};

/**
 * Callback functions for a boolean response.
 * Mimicked as `BoolBacks` as in Boolean Callbacks.
 */
export type BoolBacks = {
  onSuccess?: (data?: any) => void;
  onFailure?: (error?: ApiError) => void;
};
