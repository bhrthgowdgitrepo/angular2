import { UserModel } from './UserModel';
import { UserService } from './UserService';
export declare class UserForm {
    private service;
    formModel: UserModel;
    constructor(service: UserService);
    frequencies: [any];
    days: number[];
    drawCheckBoxes(event: any): void;
    getLabel(id: any): any;
    delete(index: any): void;
    users: UserModel[];
    save(): void;
    diagnostic: string;
}
