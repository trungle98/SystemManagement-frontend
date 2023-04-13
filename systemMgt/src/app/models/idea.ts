export class Idea {
    id? :any ;

    brief? :String ;

    content? :String ;

    author? :String ;

    fileLocation? :String ;

    topicId? :number ;
    views?:number;
    categoryId?:number;
    constructor(brief:String, content :String, author :String, fileLocation :String, topicId :String, categoryId:number) {}
    }
