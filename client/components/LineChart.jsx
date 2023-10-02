import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState.js'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Chart = () => {
  const context = useContext(GlobalContext)
  let foodDrinksTransactions = context.transactions.filter(ele => ele.category == 'Food & Drinks')
  let billsTransactions = context.transactions.filter(ele => ele.category == 'Bills')
  let transportationTransactions = context.transactions.filter(ele => ele.category == 'Transportation')
  let miscellaneousTransactions = context.transactions.filter(ele => ele.category == 'Miscellaneous')

  function findTotalExpenseInCategory(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].amount
    }
    return sum;
  }

  let foodDrinksAmount = findTotalExpenseInCategory(foodDrinksTransactions)
  let billsAmount = findTotalExpenseInCategory(billsTransactions)
  let transportationAmount = findTotalExpenseInCategory(transportationTransactions)
  let miscellaneousAmount = findTotalExpenseInCategory(miscellaneousTransactions)

  const data = [
    { name: 'Food & Drinks', value: foodDrinksAmount, fill: '#4D3C77' },
    { name: 'Bills', value: billsAmount, fill: '#E06469' },
    { name: 'Transportation', value: transportationAmount, fill: '#94A684' },
    { name: 'Miscellaneous', value: miscellaneousAmount, fill: '#BE5A83' }
  ]

  return (
    <div className='piechart'>
      <PieChart width={500} height={300}>
        <Pie
          data={data}
          innerRadius={50}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )


}

export default Chart;