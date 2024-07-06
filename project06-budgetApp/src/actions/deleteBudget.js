//rrd library
import { redirect } from "react-router-dom";

//helper function
import { deleteData, getAllMatchingItems } from "../Helper";

//toastify library
import { toast } from "react-toastify";

export function deleteBudget({params}){
    try {
        deleteData({
            key : 'budget',
            id : params.id
        });
        const assiciatedExpense= getAllMatchingItems({
            category : 'expense',
            key : 'budgetId',
            value  : params.id
        });
        assiciatedExpense.forEach(element => {
            deleteData({
                key : "expense",
                id : element.id
            })
        });

        toast.success("deleted this budget!");
    } catch (error) {
        throw new Error("There is a problem in deleting this budget.");
    }

    return redirect('/')
}