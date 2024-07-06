import { formatCurrency, formatDate, getAllMatchingItems } from "../Helper";

//rrd library
import { Link , useFetcher } from "react-router-dom";

//prop-types
import {PropTypes} from 'prop-types'

//assests
import deleteIcon from '../assets/deleteIcon.svg'

function ExpenseItem({expense , showBudget=true}){
    const fetcher = useFetcher();



    const budget = getAllMatchingItems({
        category : "budget",
        key : "id",
        value : expense.budgetId
    })[0];
    return (
        <>
            <td>{expense.name}</td>
            <td>{formatCurrency(expense.amount)}</td>
            <td>{formatDate(expense.createdAt)}</td>
            {
                showBudget && (
                    
                    <td>
                        <Link 
                        to={`/budget/${budget.id}`}
                        style={{
                            "--accent" : budget.color
                        }}
                        >
                            {budget.name}
                        </Link>
                    </td>
                )
            }

            <td>
                <fetcher.Form
                method ="post"
                >
                    <input type="hidden" name="_action" value="deleteExpense" />
                    <input type="hidden" name="expenseId" value={expense.id} />
                    <button 
                    type="submit"
                    className="btn btn--warning"
                    aria-label={`Delete ${expense.name} expense`}
                    >
                        <img src={deleteIcon} alt="" height={20} />
                    </button>

                </fetcher.Form>
            </td>
        </>
    )
}

ExpenseItem.propTypes = {
    expense: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        }).isRequired,
    )   
  };

export default ExpenseItem;