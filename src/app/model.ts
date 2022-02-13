export class Model{
    user;
    items;
    constructor(){
this.user="UserNamef";
this.items=[

    new TodoItem("Spor",false),
    new TodoItem("Havalandırma",false),
    new TodoItem("Ödev",false),

];
    }
}

export class TodoItem{
    description;
    action;
    constructor(description: string, action: boolean){
        this.description=description;
        this.action=action;
    }
}