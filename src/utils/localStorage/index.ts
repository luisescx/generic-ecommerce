const APP_KEY = "@ONLINE_SHOPPING";

export enum LocalStorageKeys {
  favoritesProducts = "FAVORITES"
}

export function getStorageItem(key: string) {
  if (typeof window === "undefined") return;

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`);

  if (data) {
    return JSON.parse(data);
  }

  return null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setStorageItem(key: string, value: any) {
  if (typeof window === "undefined") return;

  const data = JSON.stringify(value);
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data);
}
