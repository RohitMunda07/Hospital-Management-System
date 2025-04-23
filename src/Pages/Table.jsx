import React from 'react';

const Table = ({ data = [], className = "min-w-full", style = {} }) => {
  return (
    <div className="overflow-x-auto mt-10 w-full">
      <table style={style} className={`${className} bg-white text-black border border-gray-300 rounded-lg shadow-md`}>
        <thead className="bg-amber-600 text-white text-lg">
          <tr>
            <th className="py-3 px-4 text-left border-r">Claimed Amount</th>
            <th className="py-3 px-4 text-left border-r">Passed Amount</th>
            <th className="py-3 px-4 text-left border-r">Month</th>
            <th className="py-3 px-4 text-left border-r">Year</th>
            <th className="py-3 px-4 text-left">Remarks</th>
          </tr>
        </thead>
        <tbody className="text-xl">
          {data.map((item, index) => (
            <tr key={index} className="border-t border-gray-300">
              <td className="py-3 px-4 border-r">{item.claimed}</td>
              <td className="py-3 px-4 border-r">{item.passed}</td>
              <td className="py-3 px-4 border-r">{item.month}</td>
              <td className="py-3 px-4 border-r">{item.year}</td>
              <td className="py-3 px-4">{item.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
