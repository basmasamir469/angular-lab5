import { lang } from "./lang.model";

export interface ProductLang{
    id?:number;
    name:string;
    description:string;
    lang:lang;
}