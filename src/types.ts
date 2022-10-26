export type PersonData = {
  id: number;
  name: string;
  color:string;
  desc: string;
  scores: Score[];
};
export interface Score {
    sprint: string;
    quarter: string;
    date: string;
    point: number;
  }