import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Import necessário para o Chart.js funcionar com React
import { BarChart } from '@mui/x-charts/BarChart';
// import * as React from 'react';


interface averageValues {
    equipmentId: string,
    averageValue: number
}

const defaultValue = {
    "equipmentId": "Id do equipemento",
    "averageValue": 0
}


export default function SensorChart() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [period, setPeriod] = useState<"1m" | "1w" | "24h" | "48h">("1m");  // Default: 1m
    const [sensorData, setSensorData] = useState<Array<averageValues>>([defaultValue]);

    const fetchSensorData = async (period: "1m" | "1w" | "24h" | "48h") => {
        try {
            console.log("Buscando dados do sensor...");
            const response = await axios.get(`https://localhost:7279/average?period=${period}`);
            setSensorData(response.data);
            setError(null);
            setLoading(false);
        } catch (error: any) {
            setError(error.response.data);
            console.error('Erro ao buscar dados:', error.response.data);
            setSensorData([defaultValue]);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSensorData(period);
    }, [period]);

    return (
        <div>
            <h1 style={{ marginBottom: 200 }}>Monitoramento de Sensores</h1>
            <BarChart
                series={[
                    { data: sensorData.map(data => data.averageValue) },
                ]}
                height={290}
                xAxis={[{ data: sensorData.map(data => data.equipmentId), scaleType: 'band' }]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
            

            {/* Filtro de Período */}
            <label>Escolha o Período:</label>
            <button onClick={() => setPeriod("24h")}>
                Último dia
            </button>
            <button onClick={() => setPeriod("48h")}>
                Últimos dois dias
            </button>
            <button onClick={() => setPeriod("1w")}>
                Última Semana
            </button>
            <button onClick={() => setPeriod("1m")}>
                Último Mês
            </button>
            
            {/* Exibição de Erro ou Carregamento */}
            {loading && <p>Carregando dados...</p>}
            {error && <p>{error}</p>}
            {/* Se não houver dados */}
            {!loading && sensorData.length === 0 && <p>Nenhum dado encontrado.</p>}
        </div>

    );
}
