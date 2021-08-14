import ExpenseItem from './ExpenseItem';
import './Expense.css';

const Expense = (props) =>{

    const expense_array = [...props.expenses];

    return (
        <div className="expenses">
            <ExpenseItem title={expense_array[0].title} amount={expense_array[0].amount} date={expense_array[0].date} />
            <ExpenseItem title={expense_array[1].title} amount={expense_array[1].amount} date={expense_array[1].date} />
            <ExpenseItem title={expense_array[2].title} amount={expense_array[2].amount} date={expense_array[2].date} />
            <ExpenseItem title={expense_array[3].title} amount={expense_array[3].amount} date={expense_array[3].date} />
        </div>
    )
}

export default Expense;