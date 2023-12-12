import { Episode } from "./Episode";

export interface Response {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
  results: Episode[];
}
