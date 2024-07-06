//rrd library
import {  Link, useLoaderData } from "react-router-dom"

//helper function
import { createExpense, createBudget, fetchData, deleteData } from "../Helper";

//component
import Intro from "../component/Intro";
import AddBudgetForm from "../component/AddBudgetForm";
import AddExpenseForm from "../component/AddExpenseForm";
import BudgetItem from "../component/BudgetItem";
import Table from "../component/Table";

//react=toastify
import { toast } from "react-toastify";

export function dashboardLoader(){
    const userName = fetchData('userName');
    const budget = fetchData('budget');
    const expense = fetchData('expense');
    return {userName , budget , expense};
}

//action
export async function dashboardAction({request}){
    const data = await request.formData();
    const {_action, ...values} = Object.fromEntries(data);

    if(_action==="newUser"){
        try {
            
            localStorage.setItem('userName' , JSON.stringify(values.userName));
            return  toast.success(`Welcome ${values.userName}`);
    
        } catch (error) {
            throw new Error("there was a problem to create account.")
        }
    }

    if(_action==="createBudget"){
        try {
            createBudget({
                name : values.newBudget , 
                amount : values.newBudgetAmount
            });
            return toast.success("Budget created!");
        } catch (error) {
            throw new Error("There is a problem to create budget.");
        }
    }
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

function Dashboard(){
    const {userName , budget , expense} = useLoaderData();

    return (
        <div>
            {userName ? (
                <div className="dashboard">
                    <h1 >Welcome,  <span className="accent">{userName}</span><span >&#128522;</span></h1>
                    <div className="grid-sm">
                    {
                        budget && budget.length > 0  
                        ?  (
                                <div className="grid-lg">
                                    <div className="flex-lg">
                                        <AddBudgetForm/>
                                        <AddExpenseForm budget={budget}/>
                                    </div>
                                    <h2>Existing Budgets</h2>
                                    <div className="budgets">
                                        {
                                            budget.map((budget)=>(
                                            <BudgetItem key={budget.id} budget={budget}/>
                                        ))
                                        }

                                    </div>
                                </div>

                            ) 
                            : (
                                <div className="grid-sm">
                                    <p>Personal budgeting is the secret to financial freedom.</p>
                                    <p>Create a budget to get started.</p>
                                    <AddBudgetForm/>
                                </div>
                            )
                    }
                    {
                        expense && expense.length > 0 && (
                            <div className="grid-md">
                                <h2>Recent Expenses</h2>
                                <Table expense={expense.sort((a,b)=>{b.createdAt - a.createdAt}).slice(0,8)}/>

                                {
                                    <Link
                                    to="expenses"
                                    className="btn btn--dark"
                                    >
                                        View all expenses
                                    </Link>
                                }
                            </div>
                        )
                    }
                    </div>
                </div>
            ) : <Intro/>}
        </div>
    )
}

export default Dashboard