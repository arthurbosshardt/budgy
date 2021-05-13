export class BudgeInfoClassic {
    public type: string;
    public company_name: string;
    public sampling_day: number;
    public price: number;
    public isDone: boolean;

    constructor(type: string, company_name: string, sampling_day: number, price: number, isDone: boolean){
        this.type = type;
        this.company_name = company_name;
        this.sampling_day = sampling_day;
        this.price = price;
        this.isDone = isDone;
    }
}
