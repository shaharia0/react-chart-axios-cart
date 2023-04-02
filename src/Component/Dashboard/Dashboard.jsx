import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {

  const marksArray = [
    {
      "id": 1,
      "name": "John",
      "physics": 75,
        "chemistry": 82,
        "math": 88
    },
    {
      "id": 2,
      "name": "Alice",
      "physics": 90,
      "chemistry": 92,
      "math": 86
    },
    {
      "id": 3,
      "name": "Bob",
      "physics": 80,
        "chemistry": 76,
        "math": 81
    },
    {
      "id": 4,
      "name": "Jane",
      "physics": 95,
        "chemistry": 88,
        "math": 90
    },
    {
      "id": 5,
      "name": "Max",
      "physics": 87,
        "chemistry": 89,
        "math": 92
    },
    {
      "id": 6,
      "name": "Maggie",
      "physics": 92,
        "chemistry": 95,
        "math": 94
    },
    {
      "id": 7,
      "name": "Sam",
      "physics": 76,
        "chemistry": 78,
        "math": 81
    },
    {
      "id": 8,
      "name": "Sara",
      "physics": 83,
        "chemistry": 85,
        "math": 89
    },
    {
      "id": 9,
      "name": "Tom",
      "physics": 91,
      "chemistry": 87,
      "math": 84
    },
    {
      "id": 10,
      "name": "Emma",
      "physics": 94,
      "chemistry": 91,
      "math": 90
    },
    {
      "id": 11,
      "name": "David",
      "physics": 88,
      "chemistry": 90,
      "math": 91
    },
    {
      "id": 12,
      "name": "Lena",
      "physics": 85,
        "chemistry": 87,
        "math": 89
    }
  ]
  
  return <div>

    <LineChart
    width={1000}
    height={300}
    data={marksArray}
    > 
    <Line dataKey='physics'></Line>
    <Line stroke="#82ca9d" dataKey='chemistry'></Line>
    <Line  stroke="#8884d8" dataKey='math'></Line>
    <XAxis dataKey="name" />
    <YAxis></YAxis>
    <Tooltip />
    </LineChart>
  </div>;
};

export default Dashboard;
