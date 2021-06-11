import { Answer } from "./answer";

export interface Question {
  id?: number
  title: string
  body: string
  createdAt?: Date
  updatedAt?: Date
  accessLink?: string
  Answers?: Answer[]
}
