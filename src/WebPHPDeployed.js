import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const WebPHPDeployed = ({ data, projets }) => {
    const chartRef = useRef(null);
    let chart = null;

    const filterData = (data) => {
        const webDevelopers = [];
        let webCount = 0


        data.forEach((item) => {
            const specialite = item.specialite.toLowerCase(); // Convert specialite to lowercase for case-insensitive matching


            if (specialite.includes('php')){
                webDevelopers.push(item);
                webCount += item.users.length
            }

        });

        return [
            { specialite: 'PHP Developer', count: webCount, developers: webDevelopers }
        ];
    };

    console.log(filterData(data));

    const checkUsersInProjects = (projets, data) => {
        const usersInProjects = [];

        data.forEach((item) => {
            item.users.forEach((userId) => {
                const userExistsInProjects = projets.some((project) =>
                    project.equipe.includes(userId)
                );
                if (userExistsInProjects) {
                    usersInProjects.push(userId);
                }
            });
        });

        return usersInProjects;
    };

    const usersInWebProjects = checkUsersInProjects(projets, filterData(data)[0].developers);

    console.log(usersInWebProjects);

    console.log(filterData(data))
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
            series: [usersInWebProjects.length*100/filterData(data)[0].count,(filterData(data)[0].count-usersInWebProjects.length)*100/filterData(data)[0].count],
            labels: ["Deployed", "On Hold"],
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

export default WebPHPDeployed;
