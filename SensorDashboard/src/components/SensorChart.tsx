import { useEffect, useState } from 'react';
import 'chart.js/auto';
import { BarChart } from '@mui/x-charts/BarChart';
import { fetchSensorData } from '../services/SensorService';

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

    {/* Function that fetches sensor data and changes screen states according to the API response*/ }
    const getData = async (period: "1m" | "1w" | "24h" | "48h") => {
        setError(null);
        setLoading(true);
        try {
            console.log("Getting sensor data...");
            const response = await fetchSensorData(period);
            setSensorData(response);
        } catch (error: any) {
            setError(error.response.data);
            console.error('Error getting data:', error.response.data);
            setSensorData([defaultValue]);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };
    

    {/* Call the function to fetch the data every time "period" changes its state */ }
    useEffect(() => {
        getData(period);
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
