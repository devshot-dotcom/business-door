import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { NavigateFunction } from "react-router-dom";
import { ToastOptions } from "../../components/toast";
import { ApiResponseHandler, ApiErrorHandler } from "../../helpers/types";

/**
 * A general purpose API wrapper.
 * Can be extended to inherit the base hooks
 * that can be used to send toasts or navigate to other routes.
 */
class Api {
  /**
   * Function retrieved from the `useToast` hook.
   * Used to send toasts to notify API responses.
   */
  readonly makeToast: (toast: ToastOptions) => void;

  /**
   * Function retrived from the `useNavigate` hook.
   * Used to navigate to other routes. `useNavigate` comes from the `react-router` dependency.
   */
  readonly navigate?: NavigateFunction;

  /**
   * @param makeToast Function retrieved from the `useToast` hook.
   * Used to send toasts to notify API responses.
   *
   * @param navigate Function retrived from the `useNavigate` hook.
   * Used to navigate to other routes. `useNavigate` comes from the `react-router` dependency.
   */
  constructor(
    makeToast: (toast: ToastOptions) => void,
    navigate?: NavigateFunction
  ) {
    this.makeToast = makeToast;
    this.navigate = navigate;
  }

  handleError({ error, shouldToast, boolBacks }: ApiErrorHandler) {
    shouldToast &&
      this.makeToast({
        variant: "invalid",
        title: error?.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
      });

    console.error(error);
    boolBacks?.onFailure?.(
      error || {
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      }
    );
  }

  /**
   * API response handler. Handles errors and corresponds to callbacks gracefully.
   *
   * @param {ApiResponseHandler} { response, successToast, failureToast, boolBacks } The properties of a response handler.
   * @returns {void}
   */
  handleResponse({
    response,
    successToast,
    failureToast,
    boolBacks,
  }: ApiResponseHandler): void {
    const { user, data, error } = response;

    if (error) {
      this.handleError({ error, shouldToast: true, boolBacks });
      return;
    }

    // A toast that indicates success.
    const makeValidToast = () =>
      successToast &&
      this.makeToast({
        ...successToast,
        variant: successToast.variant || "valid",
      });

    // The API either returns the user or the data.
    // So we check both of their availability and return corresponding objects.
    if (user) {
      makeValidToast();
      boolBacks?.onSuccess?.(user);
      return;
    }

    if (data) {
      makeValidToast();
      boolBacks?.onSuccess?.(data);
      return;
    }

    // In case the API returns nothing, we consider it a failed request.
    this.handleError({ error, shouldToast: true, boolBacks });
  }
}

export default Api;
