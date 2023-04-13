export class Comment {
    createdBy?:String;
    ideaId?:String;
    createdDate?:String;
    commentContent?:String;
    constructor(ideaId:String, createdBy:String, commentContent?:String, createdDate?:String){
        this.ideaId = ideaId;
        this.createdBy = createdBy;
        this.commentContent = commentContent;
        this.createdDate = createdDate;
    }
}
