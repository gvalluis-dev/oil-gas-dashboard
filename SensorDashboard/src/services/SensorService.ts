import axios from 'axios';

export interface AverageValues {
    equipmentId: string;
    averageValue: number;
}

// Fetch sensor data from the API
export const fetchSensorData = async (period: "1m" | "1w" | "24h" | "48h"): Promise<AverageValues[]> => {
    debugger;
    const apiUrl = import.meta.env.VITE_API_BASE_URL || "https://localhost:7279";
    const response = await axios.get(`${apiUrl}/average?period=${period}`);
    return response.data;
};