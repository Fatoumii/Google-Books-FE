import React from "react";
import { Pie } from "react-chartjs-2";
import faker from "faker";

//labels: ['category', 'category', 'etc']
//data: [2, 10] << amount of books in each category
//tally: {category: 2, category: 10}
const Chart = ({ books }) => {
  const tally = books.reduce((acc, book) => {
    book.volumeInfo.categories.forEach(category => {
      acc[category] = (acc[category] || 0) + 1;
    });
    return acc;
  }, {});

  const labels = Object.keys(tally);
  const chartData = labels.map(label => {
    return tally[label];
  }); // object aren't ordered so may bring back ones which aren't matched if object.values(tally)

  const data = {
    labels,
    datasets: [
      {
        data: chartData,
        backgroundColor: labels.map(label => {
          return faker.commerce.color();
        })
      }
    ]
  };
  return (
    <div className="chart">
      <Pie data={data} height={200} />
    </div>
  );
};

export default Chart;
