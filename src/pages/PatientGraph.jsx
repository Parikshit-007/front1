import React, { useEffect, useState } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import axios from "axios";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const PatientGraph = () => {
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/patient/api/patients/"
        );
        setPatientData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchData();
  }, []);

  const processDataForGraph = () => {
    const monthlyPatientCount = {};

    patientData.forEach((patient) => {
      const monthNumber = parseInt(patient.DOB.split("-")[1], 10);
      const monthName = monthNames[monthNumber - 1];

      monthlyPatientCount[monthName] =
        (monthlyPatientCount[monthName] || 0) + 1;
    });

    const graphData = Object.keys(monthlyPatientCount).map((monthName) => ({
      name: monthName,
      count: monthlyPatientCount[monthName],
    }));

    return graphData;
  };

  return (
    <div className="card-chartbars1" style={styles.container}>
      <div className="flex gap-2 self-stretch font-semibold max-md:flex-wrap">
        <div className="grow self-start font-semibold mt-2 text-[24px] leading-6 text-gray-900 max-md:max-w-full">
          Appointments Analytics
        </div>
        <div className="flex flex-col justify-center px-5 py-3 text-xs leading-3 text-white whitespace-nowrap bg-theme-primary-dark rounded-md basis-0">
          <div className="flex gap-2 justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1601e4224584d47550036468808221b436329da54b13d75d8a0a9346725eb564?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
              className="w-3 aspect-square"
            />
            <div>View</div>
          </div>
        </div>
      </div>
      {patientData.length > 0 && (
        <BarChart width={800} height={400} data={processDataForGraph()}>
          <CartesianGrid strokeDasharray="0 5" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis tick={() => null} axisLine={false} tickLine={false} />

          <Legend
            align="left"
            verticalAlign="top"
            iconType="circle"
            iconSize={10}
          />
          {/* Define three different Bar components with different colors */}
          <Bar
            name="Today"
            dataKey="count"
            fill="#7895FF"
            barSize={8}
            shape={<RoundedBar1 />}
          />
          <Bar
            name="Recent"
            dataKey="count"
            fill="#FF92AE"
            barSize={8}
            shape={<RoundedBar2 />}
          />

          <Bar
            dataKey="count"
            name="All"
            fill="#FFEF5E"
            barSize={8}
            shape={<RoundedBar />}
          />
        </BarChart>
      )}
    </div>
  );
};

// Custom shape for rounded bars
const RoundedBar = (props) => {
  const { x, y, width, height } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="#FFEF5E"
        rx={6}
        ry={6}
      />
    </g>
  );
};

const RoundedBar1 = (props) => {
  const { x, y, width, height } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="#7895FF"
        rx={6}
        ry={6}
      />
    </g>
  );
};
const RoundedBar2 = (props) => {
  const { x, y, width, height } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="#FF92AE"
        rx={6}
        ry={6}
      />
    </g>
  );
};

// Define styles
const styles = {
  container: {
    width: "79%",
    position: "relative",
    borderRadius: "16px",
    backgroundColor: "#FFFFFF",
    boxShadow:
      "0 0 1px rgba(12, 26, 75, 0.24), 0 3px 8px -1px rgba(50, 50, 71, 0.05)",
    display: "flex",
    flexDirection: "column",

    justifyContent: "flex-start",
    padding: "30px 20px 72px",
    boxSizing: "border-box",
    gap: "30px",
  },
};

export default PatientGraph;
