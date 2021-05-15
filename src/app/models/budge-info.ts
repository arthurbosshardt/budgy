export class BudgeInfoClassic {
    public type: string;
    public company_name: string;
    public sampling_day: number;
    public price: number;
    public tasksToDo: Array<string>;
    public tasksDone: Array<string>;

    constructor(type: string, company_name: string, sampling_day: number, price: number, tasksToDo: Array<string>, tasksDone: Array<string>){
        this.type = type;
        this.company_name = company_name;
        this.sampling_day = sampling_day;
        this.price = price;
        this.tasksToDo = tasksToDo;
        this.tasksDone = tasksDone;
    }
}
