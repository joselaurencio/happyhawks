"use client";

const SALT = "d2f3cee12353575c";
const HASH = "f3573011accb1327f0504b2e7175cd179e6b32cd7dd0d1d7c491768ce74db684";
const STORAGE_KEY = "happyhawks-scouting-auth";

export function isScoutingUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  return window.sessionStorage.getItem(STORAGE_KEY) === "unlocked";
}

export function lockScouting(): void {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(STORAGE_KEY);
}

export async function verifyScoutingPassword(password: string): Promise<boolean> {
  const data = new TextEncoder().encode(SALT + password);
  const digest = await crypto.subtle.digest("SHA-256", data);
  const hex = Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  if (hex !== HASH) return false;
  if (typeof window !== "undefined") {
    window.sessionStorage.setItem(STORAGE_KEY, "unlocked");
  }
  return true;
}
