import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const projets = [
    {
        "_id": "6479f8706c4c44a7c846aa79",
        "project": "6479f8706c4c44a7c846aa78",
        "equipe": [
            "6477d170c8999d49d569f5cc",
            "63ea02b4b7df45dddcf47ebc",
            "63ea067edf7154131ced5213",
            "63ea066adf7154131ced520f",
            "6477d170c8999d49d569f5cb",
            "6477d170c8999d49d569f5da"
        ],
        "__v": 93
    },
    {
        "_id": "6479f8706c4c44a7c846aa7f",
        "project": "6479f8706c4c44a7c846aa7e",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aa82",
        "project": "6479f8706c4c44a7c846aa81",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aa7c",
        "project": "6479f8706c4c44a7c846aa7b",
        "equipe": [],
        "__v": 2
    },
    {
        "_id": "6479f8706c4c44a7c846aa85",
        "project": "6479f8706c4c44a7c846aa84",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aa88",
        "project": "6479f8706c4c44a7c846aa87",
        "equipe": [
            "6477d170c8999d49d569f5a0",
            "6477d170c8999d49d569f5b8",
            "6477d170c8999d49d569f5e6",
            "6477d170c8999d49d569f5e9"
        ],
        "__v": 4
    },
    {
        "_id": "6479f8706c4c44a7c846aa8b",
        "project": "6479f8706c4c44a7c846aa8a",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aa8e",
        "project": "6479f8706c4c44a7c846aa8d",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aa91",
        "project": "6479f8706c4c44a7c846aa90",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aa94",
        "project": "6479f8706c4c44a7c846aa93",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aa97",
        "project": "6479f8706c4c44a7c846aa96",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aa9a",
        "project": "6479f8706c4c44a7c846aa99",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aa9d",
        "project": "6479f8706c4c44a7c846aa9c",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aaa0",
        "project": "6479f8706c4c44a7c846aa9f",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aaa9",
        "project": "6479f8706c4c44a7c846aaa8",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aaac",
        "project": "6479f8706c4c44a7c846aaab",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aaaf",
        "project": "6479f8706c4c44a7c846aaae",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aab2",
        "project": "6479f8706c4c44a7c846aab1",
        "equipe": [
            "6477d170c8999d49d569f5d6",
            "6477d170c8999d49d569f5d9",
            "6477d170c8999d49d569f5e8"
        ],
        "__v": 3
    },
    {
        "_id": "6479f8706c4c44a7c846aab5",
        "project": "6479f8706c4c44a7c846aab4",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aab8",
        "project": "6479f8706c4c44a7c846aab7",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aabe",
        "project": "6479f8706c4c44a7c846aabd",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aac1",
        "project": "6479f8706c4c44a7c846aac0",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aabb",
        "project": "6479f8706c4c44a7c846aaba",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aac4",
        "project": "6479f8706c4c44a7c846aac3",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aac7",
        "project": "6479f8706c4c44a7c846aac6",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aaca",
        "project": "6479f8706c4c44a7c846aac9",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aacd",
        "project": "6479f8706c4c44a7c846aacc",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aad0",
        "project": "6479f8706c4c44a7c846aacf",
        "equipe": [
            "6477d170c8999d49d569f5a9",
            "6477d170c8999d49d569f5ad",
            "6477d170c8999d49d569f5b2",
            "6477d170c8999d49d569f5ee",
            "6477d170c8999d49d569f5fa"
        ],
        "__v": 5
    },
    {
        "_id": "6479f8706c4c44a7c846aad3",
        "project": "6479f8706c4c44a7c846aad2",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aad6",
        "project": "6479f8706c4c44a7c846aad5",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aad9",
        "project": "6479f8706c4c44a7c846aad8",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aadc",
        "project": "6479f8706c4c44a7c846aadb",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aadf",
        "project": "6479f8706c4c44a7c846aade",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aae2",
        "project": "6479f8706c4c44a7c846aae1",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aae5",
        "project": "6479f8706c4c44a7c846aae4",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aae8",
        "project": "6479f8706c4c44a7c846aae7",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aaeb",
        "project": "6479f8706c4c44a7c846aaea",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aaee",
        "project": "6479f8706c4c44a7c846aaed",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aaf1",
        "project": "6479f8706c4c44a7c846aaf0",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aaf4",
        "project": "6479f8706c4c44a7c846aaf3",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aaf7",
        "project": "6479f8706c4c44a7c846aaf6",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aafa",
        "project": "6479f8706c4c44a7c846aaf9",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aafd",
        "project": "6479f8706c4c44a7c846aafc",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab00",
        "project": "6479f8706c4c44a7c846aaff",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab03",
        "project": "6479f8706c4c44a7c846ab02",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab06",
        "project": "6479f8706c4c44a7c846ab05",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab09",
        "project": "6479f8706c4c44a7c846ab08",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab0c",
        "project": "6479f8706c4c44a7c846ab0b",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab0f",
        "project": "6479f8706c4c44a7c846ab0e",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab12",
        "project": "6479f8706c4c44a7c846ab11",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab15",
        "project": "6479f8706c4c44a7c846ab14",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab18",
        "project": "6479f8706c4c44a7c846ab17",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab1b",
        "project": "6479f8706c4c44a7c846ab1a",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab1e",
        "project": "6479f8706c4c44a7c846ab1d",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab21",
        "project": "6479f8706c4c44a7c846ab20",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aaa3",
        "project": "6479f8706c4c44a7c846aaa2",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab27",
        "project": "6479f8706c4c44a7c846ab26",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab2a",
        "project": "6479f8706c4c44a7c846ab29",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab2d",
        "project": "6479f8706c4c44a7c846ab2c",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846aaa6",
        "project": "6479f8706c4c44a7c846aaa5",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab33",
        "project": "6479f8706c4c44a7c846ab32",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab36",
        "project": "6479f8706c4c44a7c846ab35",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab39",
        "project": "6479f8706c4c44a7c846ab38",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab3c",
        "project": "6479f8706c4c44a7c846ab3b",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab3f",
        "project": "6479f8706c4c44a7c846ab3e",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab42",
        "project": "6479f8706c4c44a7c846ab41",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab45",
        "project": "6479f8706c4c44a7c846ab44",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab48",
        "project": "6479f8706c4c44a7c846ab47",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab4b",
        "project": "6479f8706c4c44a7c846ab4a",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab4e",
        "project": "6479f8706c4c44a7c846ab4d",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab51",
        "project": "6479f8706c4c44a7c846ab50",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab5a",
        "project": "6479f8706c4c44a7c846ab59",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab54",
        "project": "6479f8706c4c44a7c846ab53",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab57",
        "project": "6479f8706c4c44a7c846ab56",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8716c4c44a7c846ab6b",
        "project": "6479f8716c4c44a7c846ab6a",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8716c4c44a7c846ab6e",
        "project": "6479f8716c4c44a7c846ab6d",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab30",
        "project": "6479f8706c4c44a7c846ab2f",
        "equipe": [],
        "__v": 0
    },
    {
        "_id": "6479f8706c4c44a7c846ab24",
        "project": "6479f8706c4c44a7c846ab23",
        "equipe": [],
        "__v": 0
    }
]

const WheelChart = ({ data }) => {
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

    const usersInMobileProjects = checkUsersInProjects(projets, filterData(data)[0].developers);
    const usersInWebProjects = checkUsersInProjects(projets, filterData(data)[1].developers);

    console.log(usersInMobileProjects);
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
