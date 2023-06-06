import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const BarChart = ({ data }) => {
    const chartRef = useRef(null);
    let chart = null;

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
                type: 'bar',
                height: 600,
                width : 1100,
                toolbar: {
                    show: false,
                },
            },
            series: [
                {
                    name: 'Time Spent',
                    data: data.map((item) => item.timeSpentSeconds/3600),
                },
            ],
            xaxis: {
                categories: data.map((item) => item.startDate),
                labels: {
                    rotate: -45,
                    rotateAlways: true,
                },
            },
            yaxis: {
                title: {
                    text: 'Time Spent (Hours)',
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: '80%', // Adjust the column width here (e.g., '80%')
                    distributed: true, // Add spacing between bars
                },
            },
        };

        if (chartRef.current) {
            chart = new ApexCharts(chartRef.current, chartOptions);
            chart.render();
        }
    };

    return <div ref={chartRef} />;
};

export default BarChart;
