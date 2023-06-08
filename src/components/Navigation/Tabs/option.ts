export interface tabOption {
  id: string;
  label: string;
  icon: string;
}

export const tabOptions = [
  {
    id: "single-VOD",
    label: "VOD Lẻ",
    icon: "youtube",
  },
  {
    id: "series-VOD",
    label: "VOD Bộ",
    icon: "youtube",
  },

  {
    id: "event",
    label: "Event",
    icon: "radio",
  },
  {
    id: "short",
    label: "Short",
    icon: "zap",
  },
  {
    id: "story",
    label: "Story",
    icon: "clock",
  },
];
