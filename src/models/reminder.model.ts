import { ObjectId } from "mongodb";

export default class Reminder {
    constructor(
        public name: string, 
        public price: number, 
        public category: string, 
        public id?: ObjectId
    ) {}
}