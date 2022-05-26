import * as React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Session, User } from "@supabase/supabase-js";
import { StatusCodes } from "http-status-codes";
import { ToastOptions } from "../components/toast";

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

/**
 * A type that represents the action that needs
 * to be performed based on the application's metadata.
 */
export type AppAction = "EMAIL_CHANGED" | "ACCOUNT_CREATED";

/**
 * A type representing the app's metadata.
 */
export type AppState = {
  action: AppAction;

  /**
   * The data to be used for the action.
   */
  payload?: {
    [key: string]: any;
  };
};

export type Response = {
  /**
   * The user object.
   *
   * @type {User | null}
   */
  user?: User | null;

  /**
   * The response-data, retrived instead of user, at times.
   *
   * @type {User | Session | {} | null}
   */
  data?: User | Session | {} | null;

  /**
   * The error object. Null when there ain't an error.
   *
   * @type {ApiError | null}
   */
  error: ApiError | null;
};

export type ApiResponseHandler = {
  response: Response;
  successToast?: ToastOptions;
  failureToast?: ToastOptions;
  boolBacks?: BoolBacks;
};

export type ApiErrorHandler = {
  error?: ApiError | null;
  shouldToast?: boolean;
  boolBacks?: BoolBacks;
};

/**
 * The response received from the storage API.
 * @author kashan-ahmad
 * @version 1.0.0
 */
export type StorageApiResponse = {
  /**
   * The response-data.
   *
   * @type {null | { Key: string }} Mostly, the Key contains the name of the file being worked upon in the cloud storage.
   */
  data: null | {
    Key: string;
  };

  /**
   * The error object. Null when there ain't an error.
   *
   * @type {null | Error}
   */
  error: Error | null;
};

export type Font = {
  family: string;
  source: string;
};

export type CardField = {
  attributes?: JSX.IntrinsicElements["div"];
  label: string;
  text: string;
};

export type CardComplexIcon = {
  src: IconProp;
  styles?: React.CSSProperties;
};

export type CardComplexTitle = {
  text: string;
  attributes?: JSX.IntrinsicElements["div"];
};

export type CardComplexField = {
  attributes?: JSX.IntrinsicElements["div"];
  icon?: CardComplexIcon;
  title?: CardComplexTitle;
  field: CardField;
};

/**
 * The data received from the `supabase.cards`
 */
export type CardData = {
  id?: number;
  name: string;
  tags?: string[];
  fileName: string;
  isVertical?: boolean;
  width: number;
  height: number;
  fonts?: Font[];
  qrCodeStyles: React.CSSProperties;
  fields: CardField[];
  complexFields?: CardComplexField[];
  qrCode?: string;
};
