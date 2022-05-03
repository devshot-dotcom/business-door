import { AppState } from "../../helpers/types";

export function getAppMetaData(): AppState | null {
  const object = localStorage.getItem("appMetaData");
  return object ? JSON.parse(object) : null;
}

export const setAppMetaData = (data: AppState) =>
  localStorage.setItem("appMetaData", JSON.stringify(data));

export const clearAppMetaData = () => localStorage.removeItem("appMetaData");
