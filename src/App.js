// import React, { useState } from "react";
// import "./App.css";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [maxValue, setMaxValue] = useState("");
//   const [chartData, setChartData] = useState([]);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleMaxValueChange = (event) => {
//     setMaxValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const input = parseFloat(inputValue);
//     const max = parseFloat(maxValue);

//     if (isNaN(input) || isNaN(max)) {
//       alert("Please enter valid numbers.");
//       return;
//     }

//     if (input > max) {
//       alert("Input Value cannot be greater than Max Value.");
//       return;
//     }

//     const data = [
//       {
//         name: "Input Value",
//         value: (input / max) * 100,
//         color: "red",
//       },
//       {
//         name: "Max Value",
//         value: 100,
//         color: "green",
//       },
//     ];

//     setChartData(data);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="input-value">Input Value:</label>
//         <input
//           type="text"
//           id="input-value"
//           value={inputValue}
//           onChange={handleInputChange}
//         />

//         <label htmlFor="max-value">Max Value:</label>
//         <input
//           type="text"
//           id="max-value"
//           value={maxValue}
//           onChange={handleMaxValueChange}
//         />

//         <button type="submit">Submit</button>
//       </form>

//       {chartData.length > 0 && (
//         <ResponsiveContainer width="100%" height={400}>
//           <PieChart>
//             <Pie
//               dataKey="value"
//               data={chartData}
//               cx="50%"
//               cy="50%"
//               outerRadius={100}
//               fill="#8884d8"
//               label
//             >
//               {chartData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={entry.color} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       )}
//     </div>
//   );
// }

// export default App;





import React, { useState } from "react";
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleMaxValueChange = (event) => {
    setMaxValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const input = parseFloat(inputValue);
    const max = parseFloat(maxValue);

    if (isNaN(input) || isNaN(max)) {
      alert("Please enter valid numbers.");
      return;
    }

    if (input > max) {
      alert("Input Value cannot be greater than Max Value.");
      return;
    }
  };

  const data = [
    { name: "Input Value", value: parseFloat(inputValue), fill: "#008CFF" },
    { name: "Max Value", value: parseFloat(maxValue), fill: "#C2E3FF" },
  ];

  const gradientData = [
    { name: "Input Value", value: parseFloat(inputValue), fill: "#008CFF" },
    { name: "Max Value", value: parseFloat(maxValue), fill: "#C2E3FF" },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-value">Input Value:</label>
        <input
          type="text"
          id="input-value"
          value={inputValue}
          onChange={handleInputChange}
        />

        <label htmlFor="max-value">Max Value:</label>
        <input
          type="text"
          id="max-value"
          value={maxValue}
          onChange={handleMaxValueChange}
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Vertical Bar Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>

      <h2>Pie Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <h2>Vertical Bar Chart with Gradient Fill</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={gradientData}>
          <defs>
            <linearGradient id="colorInput" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0088FE" stopOpacity={1} />
              <stop offset="100%" stopColor="#0088FE" stopOpacity={1} />
</linearGradient>
<linearGradient id="colorMax" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stopColor="#00C49F" stopOpacity={1} />
</linearGradient>
</defs>
<Bar dataKey="value" fill="url(#colorInput)" />
<Bar dataKey="value" fill="url(#colorMax)" />
</BarChart>
</ResponsiveContainer>
</div>
);
}

export default App;


