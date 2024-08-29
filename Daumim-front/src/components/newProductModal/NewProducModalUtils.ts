// import {Category} from "../../types/Category.ts";

export interface OriginalObject {
    id: number;
    name: string;
}

export interface TransformedObject {
    value: string;
    label: string;
}


export const transformList = (list: { id: number, name:string}[]): TransformedObject[] =>
    list? list.map(({ name }) => ({ value: name, label: name })): [];