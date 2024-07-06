//prop-types
import {PropTypes} from 'prop-types'

//component
import ExpenseItem from './ExpenseItem';


function Table({expense , showBudget=true}){
    const { name , id , amount , createdAt } = expense;

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        {
                            ["Name" , "Amount" , "Date" , showBudget ? "Budget" : "" , ""].map((i,index)=>(
                                <th key={index}>{i}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        expense.map((exp)=>(
                            <tr key={exp.id}>
                               <ExpenseItem  expense={exp} showBudget={showBudget}/>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
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

export default Table;