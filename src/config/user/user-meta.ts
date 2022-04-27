import { UserMeta } from ".";

export function getUserMetaData(): UserMeta | null {
  const object = localStorage.getItem("userMetaData");
  return object ? JSON.parse(object) : null;
}

export const setUserMetaData = (data: UserMeta) =>
  localStorage.setItem("userMetaData", JSON.stringify(data));

export const clearUserMetaData = () => localStorage.removeItem("userMetaData");
