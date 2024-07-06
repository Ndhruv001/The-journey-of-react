function generateRandomColor(){
    const existingBudgetLength = fetchData("budget")?.length ?? 0;
    return `${existingBudgetLength*34} 65% 50%`;
}


// local storage
export const fetchData = (userName) => {
    return  JSON.parse(localStorage.getItem(userName));
    
};

//createBudget
export function createBudget({
    name , amount
}){
    const newItem = {
        id : crypto.randomUUID(),
        name : name,
        createdAt : Date.now(),
        amount : +amount,
        color : generateRandomColor()
    }
    const existingBudget = JSON.parse(localStorage.getItem('budget')) ?? [];
    return localStorage.setItem("budget", JSON.stringify([...existingBudget, newItem]));
}

//get all items from the local storage
export function getAllMatchingItems({
    category , key , value
}){
    const data = fetchData(category) ?? [];
    return data.filter((item)=>(item[key]===value));

}

//create expense
export function createExpense({
    name , amount , budgetId
}){
    const newItem = {
        id : crypto.randomUUID(),
        name : name,
        createdAt : Date.now(),
        amount : +amount,
        color : generateRandomColor(),
         budgetId : budgetId
    }
    const existingExpense = JSON.parse(localStorage.getItem('expense')) ?? [];
    return localStorage.setItem("expense", JSON.stringify([...existingExpense, newItem]));
}

//delete the user
export function deleteData({key ,id}){
    if(id){
        const existingData = fetchData(key);
        const newData = existingData.filter((data)=>data.id!==id);
        return localStorage.setItem(key,JSON.stringify(newData));
    }
    return localStorage.removeItem(key);
}

export function calculateSpentByBudget(budgetId){
    const expenses = fetchData('expense') ?? [];
    const budgetSpent = expenses.reduce((acc,expnese)=>{
        if(expnese.budgetId!==budgetId) return acc;

        return acc+=expnese.amount;
    },0);
    return budgetSpent;
}


//Formatting

//format percentage
export function formatPercentage(amount){
    return amount.toLocaleString(undefined,{
        style : "percent",
        minimumFractionDigits : 0,
    })
}

//format date
export function formatDate(date){
    return new Date(date).toLocaleDateString();
}

//currency formating
export function formatCurrency(amount){
    return amount.toLocaleString(undefined,{
        style : "currency",
        currency : "INR"
    })
}