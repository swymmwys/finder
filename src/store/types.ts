export type Dictionary = { [key: string]: any };

export interface Finder {
  content: Dictionary | null;
  findButtonAvailable: boolean;
  error: string;
  progress: boolean;
}

export type Gender = "male" | "female";

export interface State {
  finder: Finder;
}
