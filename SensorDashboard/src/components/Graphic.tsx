import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'chart.js/auto'; 
import { BarChart } from '@mui/x-charts/BarChart';

interface averageValues {
    equipmentId: string,
    averageValue: number
}

const defaultValue = {
    "equipmentId": "Equipment ID",
    "averageValue": 0
}

/**
 * Component SensorChart
 * Displays the average of sensor values ​​for different time periods.
 * @returns JSX.Element
 */

export default function SensorChart() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [period, setPeriod] = useState<"1m" | "1w" | "24h" | "48h">("1m");  // Default: 1m
    const [sensorData, setSensorData] = useState<Array<averageValues>>([defaultValue]);

    {/* Function that fetches sensor data and changes screen states according to the API response*/}
    const fetchSensorData = async (period: "1m" | "1w" | "24h" | "48h") => {
        try {
            console.log("Fetching sensor data...");
            const response = await axios.get(`https://localhost:7279/average?period=${period}`);
            setSensorData(response.data);
            setError(null);
            setLoading(false);
        } catch (error: any) {
            setError(error.response.data);
            console.error('Error fetching data:', error.response.data);
            setSensorData([defaultValue]);
            setLoading(false);
        }
    };

     {/* Call the function to fetch the data every time "period" changes its state */}
    useEffect(() => {
        fetchSensorData(period);
    }, [period]);

    return (
        <div>
            <h1 style={{ marginBottom: 200 }}>Sensor Monitoring</h1>
            <BarChart
                series={[
                    { data: sensorData.map(data => data.averageValue) },
                ]}
                height={290}
                xAxis={[{ data: sensorData.map(data => data.equipmentId), scaleType: 'band' }]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
            

            {/* Filtro de Período */}
            <label>Choose the timerange</label>
            <button onClick={() => setPeriod("24h")}>
            Last day
            </button>
            <button onClick={() => setPeriod("48h")}>
            Last two days
            </button>
            <button onClick={() => setPeriod("1w")}>
            Last Week
            </button>
            <button onClick={() => setPeriod("1m")}>
            Last Month
            </button>
            
            {/* Error Display or Loading */}
            {loading && <p>Loading data...</p>}
            {error && <p>{error}</p>}
            {/* If there is no data */}
            {!loading && sensorData.length === 0 && <p>No data found.</p>}
        </div>

    );
}
