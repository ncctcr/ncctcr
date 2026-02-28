import {TECHNOLOGIES} from "../constants/technologies";

export const shortenText = (text: string, maxLength: number = 15): string => {
  const dotIndex = text.lastIndexOf('.');
  if (dotIndex === -1) return text;

  const name = text.slice(0, dotIndex);
  const ext = text.slice(dotIndex);

  if (name.length <= maxLength) {
    return text;
  }

  const keep = maxLength - 1;
  const half = Math.floor(keep / 2);

  const start = name.slice(0, half);
  const end = name.slice(-half);

  return `${start}…${end}${ext}`;
}

export const isChromium = (): boolean => {
  const ua = navigator.userAgent;
  const isChrome = /Chrome/.test(ua) && !/Edg|OPR|Brave/.test(ua);
  const isEdge = /Edg/.test(ua);
  const isOpera = /OPR/.test(ua);
  const isBrave = (navigator as any).brave !== undefined;

  return isChrome || isEdge || isOpera || isBrave;
}

export const getSkills = (skills: string[]) => {
  return TECHNOLOGIES.filter((i) => skills.includes(i.key))
}