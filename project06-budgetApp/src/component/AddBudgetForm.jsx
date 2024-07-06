//rrd library
import { useFetcher } from "react-router-dom";

//assets
import rupee from '../assets/rupee.svg'
import { useEffect, useRef } from "react";

function AddBudgetForm(){
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state==="submitting";

    const focusRef = useRef()

    const formRef = useRef();
    useEffect(()=>{
        if(!isSubmitting){
            formRef.current.reset();
            focusRef.current.focus();
        }
    },[isSubmitting])
    return (
        <div className="form-wrapper">
            <h2 className="h3">Create Budget</h2>
            <fetcher.Form
                method="post"
                className="grid-sm"
                ref={formRef}
            >
                <div className="grid-xs">
                    <label htmlFor="newBudget">Budget Name</label>
                    <input type="text" name="newBudget" id="newBudget" required placeholder="e.g. Groceries" ref={focusRef}/>
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">Amount</label>
                    <input type="number" name="newBudgetAmount" id="newBudgetAmount" required placeholder="e.g. 100"  />
                </div>
                <input type="hidden" name="_action" value="createBudget" />
                <button className="btn btn--dark" disabled={isSubmitting}>
                    {
                        isSubmitting ? <span>Submitting...</span> : (
                            <>
                                Create Budget
                                <img src={rupee} alt="" height={25}/>
                            </>
                        )
                    }
                </button>
            </fetcher.Form>
        </div>
    )
}

export default AddBudgetForm;