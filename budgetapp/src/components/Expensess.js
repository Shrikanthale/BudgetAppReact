import React,{useContext} from 'react' ; 
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const Expensess = () => {
    const {expenses} = useContext(AppContext);
    // const expenses = [
    //     {id: 123456, name: "shopping", cost: 50},
    //     {id: 123456, name: "fuel", cost: 300},
    //     {id: 123456, name: "grocery", cost: 20},
    //     {id: 123456, name: "traveling", cost: 55},
    // ];

    return ( 
        <ul className='list-group'>
            {expenses.map((expense)=>(
                <ExpenseItem 
                id={expense.id} 
                name={expense.name} 
                cost={expense.cost} />
            ))}
        </ul>
    )
};

export default Expensess;