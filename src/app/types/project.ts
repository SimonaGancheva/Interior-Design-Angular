import { User } from "./user";

export interface Project {
    "title": string,
    "architect": string,
    "client": string,
    "terms": string,
    "type": string,
    "style": string,
   "date": string, 
   "description": string,
   "location": string,
   "created_at": string,
   "userId": User
}