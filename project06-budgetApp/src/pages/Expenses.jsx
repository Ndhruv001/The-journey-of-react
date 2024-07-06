import { useLoaderData } from "react-router-dom";
import { deleteData, fetchData } from "../Helper";
import Table from '../component/Table'

import { toast } from "react-toastify";

export function expenseLoader(){
    const expense = fetchData('expense');
    return { expense};
}

export async function expenseAction({request}){
    const data = await request.formData();
    const {_action, ...values} = Object.fromEntries(data);


    if(_action==="deleteExpense"){
        try {
            deleteData({
                key : "expense",
                id : values.expenseId,
            });
            return toast.success("Expense deleted!");
        } catch (error) {
            throw new Error("There is a problem to delete expense.");
        }
    }
}
function Expenses(){
    const {expense} = useLoaderData();

    return (
        <div className="grid-lg">
            <h1>All Expenses</h1>

            {
                expense && expense.length > 0
                ? (
                    <div className="grid-md">
                        <h2>Recent Expenses <small>({expense.length} total)</small></h2>
                        <Table expense={expense} />
                    </div>
                ) : (
                    <p>No Expenses</p>
                )
            }
        </div>
    )
}

export default Expenses;