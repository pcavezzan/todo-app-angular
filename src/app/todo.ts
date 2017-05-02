export class Todo {
    id: string;
    order: number;
    title: string = '';
    complete: boolean = false;
    
    constructor(values: Object) {
        Object.assign(this, values);
    }



}
