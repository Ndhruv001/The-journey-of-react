
//react
import { useEffect, useRef } from "react";

//rrd library
import { useFetcher } from "react-router-dom";

//prop-types
import {PropTypes} from 'prop-types'

//assests
import plusCircle from '../assets/plusCircle.svg'

function AddExpenseForm({budget}){
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state==="submitting";
    const formRef = useRef();
    const focusRef = useRef();
    useEffect(()=>{
        if(!isSubmitting){
            formRef.current.reset();
            focusRef.current.focus();
        }
    },[isSubmitting])


    return (
        <div className="form-wrapper">
            <h2 className="h3">Add new {" "}
                <span className="accent">
                    {
                        budget.length===1 && `${budget.map((budg)=> budg.name)}`
                    }
                </span>{" "}
                Expense
            </h2>
        <fetcher.Form
            method = "post"
            className="grid-sm"
            ref={formRef}
        >   
            <div className="expense-inputs">
                <div className="grid-xs">
                    <label htmlFor="newExpense">Expense Name</label>
                    <input 
                    type="text" 
                    name="newExpense"
                    id="newExpense"
                    placeholder="e.g. Coffee"
                    ref={focusRef}
                    required
                    />
                    <label htmlFor="newExpenseAmount">Amount</label>
                    <input 
                    type="number"
                    name="newExpenseAmount"
                    id="newExpenseAmount"
                    placeholder="e.g. 100"
                    required
                    />
                </div>
            </div>
            <div className="grid-xs" hidden={budget.length === 1}>
                <label htmlFor="newExpenseBudget">Budget Category</label>
                <select name="newExpenseBudget" id="newExpenseBudget">
                    {
                        budget.sort((a,b)=>{a.createdAt-b.createdAt})
                        .map((budget)=>{
                            return <option value={budget.id} key={budget.id}>
                                {budget.name}
                            </option>
                        })

                    }
                </select>
            </div>
            <input type="hidden" name="_action" value="createExpense" />
            <button className="btn btn--dark " disabled={isSubmitting}> 
            {
                        isSubmitting ? <span>Submitting...</span> : (
                            <>
                                Add Expense
                                <img src={plusCircle} alt="" height={25}/>
                            </>
                        )
                    }
            </button>

        </fetcher.Form>
        </div>

    )
}

AddExpenseForm.propTypes = {
    budget: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        }).isRequired,
    )   
  };
  

export default AddExpenseForm;