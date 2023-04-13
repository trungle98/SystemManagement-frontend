export class Reaction {
    like?:boolean;
    ideaId?:String;
    userId?:String;
constructor(isLike: boolean, ideaId:String, userId:String){
    this.ideaId = ideaId;
    this.like = isLike;
    this.userId = userId
}
}
