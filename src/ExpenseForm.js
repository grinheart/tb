import React, { useRef } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm({
    expense,
    setExpense,
    onClick,
    onSubmit,
    handleClose,
}) {
    const desc = useRef(null);
    const date = useRef(null);
    const price = useRef(null);
    const cat = useRef(null);

    const AddExpense = (e) => {
        e.preventDefault();

        let d = date.current.value.split('-');
        let newD = new Date(d[0], d[1] - 1, d[2]);

        const updateExpenses = [
            ...expense,
            {
                desc: desc.current.value,
                price: +price.current.value,
                category: cat.current.value,
                date: newD.getTime(),
            },
        ];

        setExpense(updateExpenses);
        const locStor = window.localStorage;
        locStor.setItem('expenses', JSON.stringify(updateExpenses));

        desc.current.value = '';
        price.current.value = null;
        date.current.value = null;

        handleClose();
    };

    return (
        <form className="expense-form" onSubmit={AddExpense}>
            <div className="form-inner">
                <select placeholder="Spending..."
                    ref={cat}>
                    <option value="category">Category</option>
                    <option value="bus">Bus</option>
                    <option value="airplane">Airplane</option>
                    <option value="taxi">Taxi</option>
                    <option value="hotel">Hotel</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="attractions">Attractions</option>
                </select>
                <input
                    type="text"
                    name="desc"
                    id="desc"
                    placeholder="Spending..."
                    ref={desc}
                />
                <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Price..."
                    ref={price}
                />
                <input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Date..."
                    ref={date}
                />
                <input type="submit" value="Add" onClick={onClick} />
            </div>
        </form>
    );
}
