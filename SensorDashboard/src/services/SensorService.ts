import axios from 'axios';


export interface AverageValues {
    equipmentId: string;
    averageValue: number;
}

// Fetch sensor data from the API
export const fetchSensorData = async (period: "1m" | "1w" | "24h" | "48h"): Promise<AverageValues[]> => {
    debugger;
    console.log(process.env.REACT_APP_API_URL);
    const apiUrl = process.env.REACT_APP_API_URL;
    const response = await axios.get(`${apiUrl}/average?period=${period}`);
    return response.data;
};