import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Customer } from "../interfaces/customer";
import { SetCustomer, RemoveCustomer } from "../actions/customer.actions";

export class CustomerStateModel {
    customer: Customer[] = []
}

@State<CustomerStateModel>({
    name: 'customer',
    defaults: {
        customer: []
    }
})
export class CustomerState {

    @Selector()
    static getCustomer(state: CustomerStateModel) {
        return state.customer;
    }

    @Action(SetCustomer)
    setCustomer({ getState, patchState }: StateContext<CustomerStateModel>, { payload }: SetCustomer) {
        const state = getState();
        patchState({
            customer: [...state.customer, payload]
        })
    }

    @Action(RemoveCustomer)
    removeCustomer({ getState, patchState }: StateContext<CustomerStateModel>, { payload }: RemoveCustomer) {
        patchState({
            customer: getState().customer.filter(c => c.email != payload.email)
        })
    }
}