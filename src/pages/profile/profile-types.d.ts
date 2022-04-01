/**
 * The state of the profile component.
 */
export type ProfileState = {
  /**
   * The data representing a user's profile,
   * undefined until fetched successfully.
   */
  data?: any;

  /**
   * The status of the profile component,
   * represents the ongoing processes for desired usage.
   * - `fetching`: The user profile is being fetched.
   * - `failed`: There was an error, profile couldn't be fetched.
   * - `fetched`: The profile was fetched successfully.
   */
  status?: "fetching" | "failed" | "fetched";

  /**
   * In case of a failed request, this object contains
   * the details of the errors. Note that only the bridge
   * (`useApi`) knows when to call for an error.
   */
  error?: ApiError;
};

/**
 * The action used by the `profileReducer` to
 * dispatch the state of the profile. The default
 * action isn't used as the profile itself initiates
 * the default state, which results in one of the two;
 * - `successful`: The profile is fetched, inform the reducer.
 * - `failed`: The profile request failed, inform the reducer.
 */
export type ProfileAction = ProfileState & {
  type: "successful" | "failed";
};

export type ProfileData = {
  aboutMe?: string;
  additionalInfo?: string;
  avatarUrl?: string;
  city?: string;
  country?: string;
  fullname?: string;
  readonly id?: string;
  organization?: string;
  profession?: string;
  readonly updatedAt?: string;
  username: string;
  website?: string;
};
