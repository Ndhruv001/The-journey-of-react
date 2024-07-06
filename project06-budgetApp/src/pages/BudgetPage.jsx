import { useLoaderData } from "react-router-dom";
import { createExpense, deleteData, getAllMatchingItems } from "../Helper";
import BudgetItem from "../component/BudgetItem";
import AddExpenseForm from "../component/AddExpenseForm";
import Table from "../component/Table";
import ExpenseItem from "../component/ExpenseItem";
import { toast } from "react-toastify";



export async function budgetLoader({params}){
    const budget  = await getAllMatchingItems({
        category : 'budget',
        key : 'id',
        value : params.id
    })[0];

    const expense  = await getAllMatchingItems({
        category : 'expense',
        key : 'budgetId',
        value : params.id
    });


    if(!budget){
        throw new Error("The budget you trying to find doesn't exist.")
    }
    return {budget , expense};
}


export async function budgetAction({request}){
    const data = await request.formData();
    const {_action, ...values} = Object.fromEntries(data);

    if(_action==="createExpense"){
        try {
            createExpense({
                name : values.newExpense , 
                amount : values.newExpenseAmount,
                budgetId : values.newExpenseBudget
            });
            return toast.success(`Expense ${values.newExpense} created!`);
        } catch (error) {
            throw new Error("There is a problem to create expense.");
        }
    }

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

function BudgetPage(){
    const {budget , expense}  = useLoaderData();

    return (
        <div className="grid-lg" 
        style={{
            "--accent" : budget.color
        }}>
            <h1 className="h2">
                <span className="accent">{budget.name} </span>
                Overview
            </h1>
            <div className="flex-lg">
                <BudgetItem budget={budget} showDelete={true}/>
                <AddExpenseForm budget={[budget]}/>
            </div>
            {
                expense && expense.length >0 &&(
                    <div className="grid-md">
                        <h2>
                            <span className="accent">{budget.name} </span>
                            Expenses
                        </h2>
                        <Table expense={expense} showBudget={false}/>
                    </div>
                )
            }
        </div>
    )
}

export default BudgetPage;