import { Customer } from "../interfaces/customer";

export class SetCustomer {
    static readonly type = '[CUSTOMER] Set';

    constructor(public payload: Customer) {}
}

export class RemoveCustomer {
    static readonly type = '[CUSTOMER] Remove';

    constructor(public payload: Customer) {}
}