import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const WebDeployedDetails = ({ data, projets }) => {
    const chartRef = useRef(null);
    let chart = null;

    const filterData = (data) => {
        const webDevelopers = [];
        const mobileDevelopers = [];
        const others = [];
        let webCount = 0
        let mobileCount = 0
        let othersCount = 0

        data.forEach((item) => {
            const specialite = item.specialite.toLowerCase(); // Convert specialite to lowercase for case-insensitive matching


            if (specialite.includes('php') ||
                specialite.includes('web') ||
                specialite.includes('java') ||
                specialite.includes('web') ||
                specialite.includes('frontend') ||
                specialite.includes('fullstack') ||
                specialite.includes('python') ||
                specialite.includes('qa')) {
                webDevelopers.push(item);
                webCount += item.users.length
            } else if (specialite.includes('android') ||
                specialite.includes('ios') ||
                specialite.includes('mobile')) {
                mobileDevelopers.push(item);
                mobileCount += item.users.length

            } else {
                others.push(item);
                othersCount += item.users.length
            }

        });

        return [
            { specialite: 'Web Developers', count: webCount, developers: webDevelopers },
            { specialite: 'Mobile Developers', count: mobileCount, developers: mobileDevelopers  },
            { specialite: 'Others', count: othersCount, developers: others },
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

    const list1 = filterData(data)[0].developers.map((item) => item.specialite);
    const list2 = filterData(data)[0].developers.map((item) => item.count);

    const series = list1.map((item, index) => {
        return {
            name: ['Deployed','On Hold'],
            data: [1,2]
        };
    });

    console.log(series)

    const userIds = new Set();

    for (const item of projets) {
       item.equipe.forEach( i => userIds.add(i));
    }

    console.log(userIds)
    const filteredList = data.map((item) => {
        const filteredUsers = item.users.filter((user) => userIds.has(user));
        return { count: filteredUsers.length, users: filteredUsers, specialite: item.specialite };
    });
console.log("data")
    console.log(filterData(filteredList))

    const createChart = () => {
        const chartOptions = {
            series: [{
            name: 'Deployed',
            data: filterData(filteredList)[0].developers.map((item, index) => (item.count*100/filterData(data)[0].developers[index].count).toFixed(2))
        }, {
            name: 'On Hold',
            data: filterData(data)[0].developers.map((item, index) => (((item.count-filterData(filteredList)[0].developers[index].count))*100/item.count).toFixed(2))
        }],
            chart: {
                type: 'bar',
                height: 350,
                width: 600,
                stacked: true,
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        total: {
                            enabled: true,
                            offsetX: 0,
                            style: {
                                fontSize: '13px',
                                fontWeight: 900
                            }
                        }
                    }
                },
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },
            title: {
                text: 'Title'
            },
            xaxis: {
                categories: list1,
                labels: {
                    formatter: function (val) {
                        return val + "%"
                    }
                }
            },
            yaxis: {
                max: 100,
                title: {
                    text: undefined
                },
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + "%";
                    }
                },
                enabled: true, // Add this line to enable tooltips
                style: {
                    fontSize: '12px', // Customize the tooltip font size if needed
                    fontWeight: 500, // Customize the tooltip font weight if needed
                    color: '#000000',
                },
                marker: {
                    show: true, // Add this line to show markers in tooltips if desired
                },

            },
            fill: {
                opacity: 1
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40
            }
        };

        if (chartRef.current) {
            chart = new ApexCharts(chartRef.current, chartOptions);
            chart.render();
        }
    };

    return <div ref={chartRef} />;
};

export default WebDeployedDetails;
