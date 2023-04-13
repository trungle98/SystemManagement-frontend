export class Topic {
    id : any;
    name!: String;
    closure!: Date;
    finalClosure!: Date;
    constructor(id:any, name:String, closure:Date, finalClosure:Date){
        this.id = id;
        this.name = name;
        this.closure = closure;
        this.finalClosure = finalClosure;
    }
}
