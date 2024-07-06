//prop-type
import {PropTypes} from 'prop-types'
import { calculateSpentByBudget, formatCurrency, formatPercentage } from '../Helper';
import { Form , Link } from 'react-router-dom';
import bankNote from '../assets/bankNote.svg'
import deleteIcon from '../assets/deleteIcon.svg'


function BudgetItem({ budget , showDelete=false}){
    const {name , id , amount, color } = budget;
    const spent = calculateSpentByBudget(id);

    return (
      <div 
      className="budget"
      style={{
        "--accent": color
      }}
      >
        <div className="progress-text">
            <h3>{name}</h3>
            <p>{formatCurrency(amount) } Budgeted</p>
        </div>
        <progress max={amount} value={spent}>
            {formatPercentage(spent / amount)}
        </progress>
        <div className="progress-text">
            <small>{formatCurrency(spent)} spent</small>
            <small>{formatCurrency(amount-spent)} remaining</small>
        </div>
        {
            showDelete ? (
             <div className="flex-sm">
                <Form 
                  method="post"
                  action = "delete"
                  onSubmit={(event)=>{
                    if(!confirm("are you sure , you want to delete  permanently this budget?")){
                      event.preventDefault();
                    }
                  }}
                >
                    <button type="submit" className='btn'>
                      Delete Budget
                      <img src={deleteIcon} alt="" height={20}/>
                      </button>
                </Form>
             </div>
            ) : (
            <div className="flex-sm">
                <Link
                   to ={`/budget/${id}`}
                    className='btn'
                 >
                  <span>View Details</span>
                  <img src={bankNote} alt="" height={20}/>
              </Link>
            </div>
            )
        }

      </div>
    )
}

BudgetItem.propTypes = {
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

export default BudgetItem;