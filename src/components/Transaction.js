import React from 'react';

export const Transaction = ({transaction}) => {
	const sing = transaction.amount < 0 ? '-' : '+';


	return(
		<li className={transaction.amount < 0 ? "minus" : "plus"}>
			{transaction.text} <span>{sing}${Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
		</li>
	)
}