import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const WheelChart = ({ data }) => {
    const chartRef = useRef(null);
    let chart = null;

    const filterData = (data) => {
        const webDevelopers = [];
        const mobileDevelopers = [];
        const others = [];

        data.forEach((item) => {
            if (item.specialite === 'Web Developer') {
                webDevelopers.push(item);
            } else if (item.specialite === 'Mobile Developer') {
                mobileDevelopers.push(item);
            } else {
                others.push(item);
            }
        });

        return [
            { specialite: 'Web Developers', count: webDevelopers.length },
            { specialite: 'Mobile Developers', count: mobileDevelopers.length },
            { specialite: 'Others', count: others.length },
        ];
    };


    useEffect(() => {
        createChart();

        // Clean up function
        return () => {
            if (chart) {
                chart.destroy();
            }
        };
    }, [data]);

    const createChart = () => {
        const chartOptions = {
            chart: {
                type: 'donut',
                width: '700px', // Increase the width of the chart
                height: '700px', // Increase the height of the chart
            },
            series: data.map((item) => item.count),
            labels: data.map((item) => item.specialite),
            legend: {
                position: 'right',
                offsetY: 0,
                height: 230,
            },
            colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8', '#F9CE1D', '#A389D4', '#EC4561', '#FF7F00', '#5D62B5', '#2E294E', '#00D8A0', '#6800B4', '#F0F3FA'],
        };

        if (chartRef.current) {
            chart = new ApexCharts(chartRef.current, chartOptions);
            chart.render();
        }
    };

    return <div ref={chartRef} />;
};

export default WheelChart;
