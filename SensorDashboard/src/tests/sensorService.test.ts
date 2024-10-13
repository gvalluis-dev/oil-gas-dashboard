import axios from 'axios';
import { fetchSensorData } from '../services/SensorService';
import Jest

jest.mock('axios');

describe('fetchSensorData', () => {
    it('should fetch sensor data successfully', async () => {
        const data = [{ equipmentId: 'sensor1', averageValue: 25 }];
        (axios.get as jest.Mock).mockResolvedValueOnce({ data });

        const result = await fetchSensorData("1m");

        expect(result).toEqual(data);
        expect(axios.get).toHaveBeenCalledWith('https://localhost:7279/average?period=1m');
    });

    it('should handle errors', async () => {
        const errorMessage = 'Network Error';
        (axios.get as jest.Mock).mockRejectedValueOnce({ response: { data: errorMessage } });

        await expect(fetchSensorData("1m")).rejects.toThrow(errorMessage);
    });
});