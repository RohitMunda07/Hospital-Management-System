import React from 'react';

const Table = ({className="min-w-full"}) => {
  const data = [
    {
      claimed: '₹1,000',
      passed: '₹900',
      month: 'January',
      year: '2025',
      remarks: 'Dental Checkup',
    },
    {
      claimed: '₹3,000',
      passed: '₹2,500',
      month: 'March',
      year: '2025',
      remarks: 'Body Checkup',
    },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className={`${className} bg-white text-black border border-gray-300 rounded-lg shadow-md`}>
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
