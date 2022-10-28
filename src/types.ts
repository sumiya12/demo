export type PersonData = {
  id: number;
  name: string;
  color:string;
  desc: string;
  scores: Score[];
};
export interface Score {
    sprint: number;
    quarter: number;
    date: string;
    point: number | null;
  }