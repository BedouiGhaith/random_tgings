import './App.css';
import HistogramChart from "./Histogramme";
import DonutChart from "./DonutChart";
import PieChartAllDevs from "./PieChartAllDevs";
import WebDeployed from "./WebDeployed";
import MobileDeployed from "./MobileDeployed";

function App() {
    const data = {
        "self": "https://api.tempo.io/core/3/worklogs?from=2023-04-02&to=2023-05-02&offset=0&limit=1000",
        "metadata": {
            "count": 56,
            "offset": 0,
            "limit": 1000
        },
        "results": [
            {
                "self": "https://api.tempo.io/core/3/worklogs/11794",
                "tempoWorklogId": 11794,
                "jiraWorklogId": 160296,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5146",
                    "key": "SS-5146",
                    "id": 98405
                },
                "timeSpentSeconds": 21600,
                "billableSeconds": 21600,
                "startDate": "2023-04-03",
                "startTime": "09:00:00",
                "description": "update solution",
                "createdAt": "2023-04-10T08:31:11Z",
                "updatedAt": "2023-04-10T08:31:11Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/11794/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/11795",
                "tempoWorklogId": 11795,
                "jiraWorklogId": 160297,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-600",
                    "key": "SS-600",
                    "id": 52870
                },
                "timeSpentSeconds": 5400,
                "billableSeconds": 5400,
                "startDate": "2023-04-03",
                "startTime": "15:15:00",
                "description": "Working on issue SS-600",
                "createdAt": "2023-04-10T08:31:22Z",
                "updatedAt": "2023-04-10T08:31:22Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/11795/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/11797",
                "tempoWorklogId": 11797,
                "jiraWorklogId": 160299,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5146",
                    "key": "SS-5146",
                    "id": 98405
                },
                "timeSpentSeconds": 21600,
                "billableSeconds": 21600,
                "startDate": "2023-04-04",
                "startTime": "09:00:00",
                "description": "update solution",
                "createdAt": "2023-04-10T08:34:13Z",
                "updatedAt": "2023-04-10T08:34:13Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/11797/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/11798",
                "tempoWorklogId": 11798,
                "jiraWorklogId": 160300,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-600",
                    "key": "SS-600",
                    "id": 52870
                },
                "timeSpentSeconds": 5400,
                "billableSeconds": 5400,
                "startDate": "2023-04-04",
                "startTime": "15:15:00",
                "description": "Working on issue SS-600",
                "createdAt": "2023-04-10T08:34:27Z",
                "updatedAt": "2023-04-10T08:34:27Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/11798/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/11255",
                "tempoWorklogId": 11255,
                "jiraWorklogId": 159757,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5173",
                    "key": "SS-5173",
                    "id": 98778
                },
                "timeSpentSeconds": 10800,
                "billableSeconds": 10800,
                "startDate": "2023-04-05",
                "startTime": "08:00:00",
                "description": "Working on issue SS-5173",
                "createdAt": "2023-04-05T11:10:53Z",
                "updatedAt": "2023-04-05T11:10:53Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/11255/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/11305",
                "tempoWorklogId": 11305,
                "jiraWorklogId": 159807,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5172",
                    "key": "SS-5172",
                    "id": 98777
                },
                "timeSpentSeconds": 7200,
                "billableSeconds": 7200,
                "startDate": "2023-04-05",
                "startTime": "11:00:00",
                "description": "investigation sur l'erreur d'installation des plugins en prod et preprod",
                "createdAt": "2023-04-06T09:00:17Z",
                "updatedAt": "2023-04-06T09:00:17Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/11305/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/11376",
                "tempoWorklogId": 11376,
                "jiraWorklogId": 159878,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5175",
                    "key": "SS-5175",
                    "id": 98787
                },
                "timeSpentSeconds": 9000,
                "billableSeconds": 9000,
                "startDate": "2023-04-05",
                "startTime": "13:00:00",
                "description": "Working on issue SS-5175",
                "createdAt": "2023-04-07T07:45:31Z",
                "updatedAt": "2023-04-07T07:45:31Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/11376/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/11300",
                "tempoWorklogId": 11300,
                "jiraWorklogId": 159802,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5173",
                    "key": "SS-5173",
                    "id": 98778
                },
                "timeSpentSeconds": 3600,
                "billableSeconds": 3600,
                "startDate": "2023-04-06",
                "startTime": "08:00:00",
                "description": "Working on issue SS-5173",
                "createdAt": "2023-04-06T08:34:49Z",
                "updatedAt": "2023-04-06T08:34:49Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/11300/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/11301",
                "tempoWorklogId": 11301,
                "jiraWorklogId": 159803,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5174",
                    "key": "SS-5174",
                    "id": 98786
                },
                "timeSpentSeconds": 3600,
                "billableSeconds": 3600,
                "startDate": "2023-04-06",
                "startTime": "09:00:00",
                "description": "Working on issue SS-5174",
                "createdAt": "2023-04-06T08:45:52Z",
                "updatedAt": "2023-04-06T08:45:52Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/11301/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/11304",
                "tempoWorklogId": 11304,
                "jiraWorklogId": 159806,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5170",
                    "key": "SS-5170",
                    "id": 98766
                },
                "timeSpentSeconds": 3600,
                "billableSeconds": 3600,
                "startDate": "2023-04-06",
                "startTime": "10:00:00",
                "description": "Working on issue SS-5170",
                "createdAt": "2023-04-06T08:58:40Z",
                "updatedAt": "2023-04-06T08:58:40Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/11304/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/11377",
                "tempoWorklogId": 11377,
                "jiraWorklogId": 159879,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5171",
                    "key": "SS-5171",
                    "id": 98775
                },
                "timeSpentSeconds": 3600,
                "billableSeconds": 3600,
                "startDate": "2023-04-06",
                "startTime": "11:00:00",
                "description": "Working on issue SS-5171",
                "createdAt": "2023-04-07T07:46:08Z",
                "updatedAt": "2023-04-07T07:46:08Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/11377/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/11378",
                "tempoWorklogId": 11378,
                "jiraWorklogId": 159880,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5177",
                    "key": "SS-5177",
                    "id": 98815
                },
                "timeSpentSeconds": 7200,
                "billableSeconds": 7200,
                "startDate": "2023-04-06",
                "startTime": "12:00:00",
                "description": "Working on issue SS-5177",
                "createdAt": "2023-04-07T07:46:42Z",
                "updatedAt": "2023-04-07T07:46:42Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/11378/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/11793",
                "tempoWorklogId": 11793,
                "jiraWorklogId": 160295,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-600",
                    "key": "SS-600",
                    "id": 52870
                },
                "timeSpentSeconds": 3600,
                "billableSeconds": 3600,
                "startDate": "2023-04-06",
                "startTime": "14:00:00",
                "description": "Working on issue SS-600",
                "createdAt": "2023-04-10T08:30:23Z",
                "updatedAt": "2023-04-10T08:30:23Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/11793/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/11615",
                "tempoWorklogId": 11615,
                "jiraWorklogId": 160117,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5169",
                    "key": "SS-5169",
                    "id": 98739
                },
                "timeSpentSeconds": 1800,
                "billableSeconds": 1800,
                "startDate": "2023-04-07",
                "startTime": "08:00:00",
                "description": "Working on issue SS-5169",
                "createdAt": "2023-04-07T14:29:20Z",
                "updatedAt": "2023-04-07T14:29:20Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/11615/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/11616",
                "tempoWorklogId": 11616,
                "jiraWorklogId": 160118,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5175",
                    "key": "SS-5175",
                    "id": 98787
                },
                "timeSpentSeconds": 3600,
                "billableSeconds": 3600,
                "startDate": "2023-04-07",
                "startTime": "08:30:00",
                "description": "Working on issue SS-5175",
                "createdAt": "2023-04-07T14:30:10Z",
                "updatedAt": "2023-04-07T14:30:10Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/11616/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/11617",
                "tempoWorklogId": 11617,
                "jiraWorklogId": 160119,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5177",
                    "key": "SS-5177",
                    "id": 98815
                },
                "timeSpentSeconds": 1800,
                "billableSeconds": 1800,
                "startDate": "2023-04-07",
                "startTime": "09:30:00",
                "description": "Working on issue SS-5177",
                "createdAt": "2023-04-07T14:30:45Z",
                "updatedAt": "2023-04-07T14:30:45Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/11617/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/11796",
                "tempoWorklogId": 11796,
                "jiraWorklogId": 160298,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-418",
                    "key": "INT-418",
                    "id": 98395
                },
                "timeSpentSeconds": 7200,
                "billableSeconds": 7200,
                "startDate": "2023-04-07",
                "startTime": "10:15:00",
                "description": "Working on issue INT-418",
                "createdAt": "2023-04-10T08:31:43Z",
                "updatedAt": "2023-04-10T08:31:43Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/11796/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12063",
                "tempoWorklogId": 12063,
                "jiraWorklogId": 160565,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-600",
                    "key": "SS-600",
                    "id": 52870
                },
                "timeSpentSeconds": 12600,
                "billableSeconds": 12600,
                "startDate": "2023-04-07",
                "startTime": "12:45:00",
                "description": "Working on issue SS-600",
                "createdAt": "2023-04-12T13:44:35Z",
                "updatedAt": "2023-04-12T13:44:35Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12063/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12064",
                "tempoWorklogId": 12064,
                "jiraWorklogId": 160566,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5146",
                    "key": "SS-5146",
                    "id": 98405
                },
                "timeSpentSeconds": 14400,
                "billableSeconds": 14400,
                "startDate": "2023-04-10",
                "startTime": "09:00:00",
                "description": "Working on issue SS-5146",
                "createdAt": "2023-04-12T13:46:55Z",
                "updatedAt": "2023-04-12T13:46:55Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12064/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12065",
                "tempoWorklogId": 12065,
                "jiraWorklogId": 160567,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-600",
                    "key": "SS-600",
                    "id": 52870
                },
                "timeSpentSeconds": 12600,
                "billableSeconds": 12600,
                "startDate": "2023-04-10",
                "startTime": "13:15:00",
                "description": "Working on issue SS-600",
                "createdAt": "2023-04-12T13:47:13Z",
                "updatedAt": "2023-04-12T13:47:13Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12065/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12066",
                "tempoWorklogId": 12066,
                "jiraWorklogId": 160568,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-600",
                    "key": "SS-600",
                    "id": 52870
                },
                "timeSpentSeconds": 7200,
                "billableSeconds": 7200,
                "startDate": "2023-04-11",
                "startTime": "09:00:00",
                "description": "documentation pour créer compte service google",
                "createdAt": "2023-04-12T13:50:58Z",
                "updatedAt": "2023-04-12T13:50:58Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12066/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12067",
                "tempoWorklogId": 12067,
                "jiraWorklogId": 160569,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5179",
                    "key": "SS-5179",
                    "id": 98833
                },
                "timeSpentSeconds": 19800,
                "billableSeconds": 19800,
                "startDate": "2023-04-11",
                "startTime": "11:15:00",
                "description": "Working on issue SS-5179",
                "createdAt": "2023-04-12T13:53:26Z",
                "updatedAt": "2023-04-12T13:53:26Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12067/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12379",
                "tempoWorklogId": 12379,
                "jiraWorklogId": 160881,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-3",
                    "key": "INT-3",
                    "id": 11960
                },
                "timeSpentSeconds": 19800,
                "billableSeconds": 19800,
                "startDate": "2023-04-12",
                "startTime": "09:00:00",
                "description": "Working on issue INT-3",
                "createdAt": "2023-04-17T08:59:14Z",
                "updatedAt": "2023-04-17T09:03:21Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12379/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12382",
                "tempoWorklogId": 12382,
                "jiraWorklogId": 160884,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-600",
                    "key": "SS-600",
                    "id": 52870
                },
                "timeSpentSeconds": 7200,
                "billableSeconds": 7200,
                "startDate": "2023-04-12",
                "startTime": "14:45:00",
                "description": "mettre tous les textes dans un fichier excel",
                "createdAt": "2023-04-17T09:04:01Z",
                "updatedAt": "2023-04-17T09:04:10Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12382/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12380",
                "tempoWorklogId": 12380,
                "jiraWorklogId": 160882,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-3",
                    "key": "INT-3",
                    "id": 11960
                },
                "timeSpentSeconds": 19800,
                "billableSeconds": 19800,
                "startDate": "2023-04-13",
                "startTime": "09:00:00",
                "description": "Working on issue INT-3",
                "createdAt": "2023-04-17T08:59:17Z",
                "updatedAt": "2023-04-17T08:59:42Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12380/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12381",
                "tempoWorklogId": 12381,
                "jiraWorklogId": 160883,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-600",
                    "key": "SS-600",
                    "id": 52870
                },
                "timeSpentSeconds": 7200,
                "billableSeconds": 7200,
                "startDate": "2023-04-13",
                "startTime": "14:45:00",
                "description": "mettre tous les textes dans un fichier excel",
                "createdAt": "2023-04-17T09:00:21Z",
                "updatedAt": "2023-04-17T09:00:28Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12381/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12242",
                "tempoWorklogId": 12242,
                "jiraWorklogId": 160744,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5183",
                    "key": "SS-5183",
                    "id": 98932
                },
                "timeSpentSeconds": 3600,
                "billableSeconds": 3600,
                "startDate": "2023-04-14",
                "startTime": "08:45:00",
                "description": "Working on issue SS-5183",
                "createdAt": "2023-04-14T11:56:43Z",
                "updatedAt": "2023-04-14T11:57:03Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12242/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12243",
                "tempoWorklogId": 12243,
                "jiraWorklogId": 160745,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5179",
                    "key": "SS-5179",
                    "id": 98833
                },
                "timeSpentSeconds": 23400,
                "billableSeconds": 23400,
                "startDate": "2023-04-14",
                "startTime": "09:45:00",
                "description": "slave web  offline",
                "createdAt": "2023-04-14T11:57:28Z",
                "updatedAt": "2023-04-17T08:56:53Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12243/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12389",
                "tempoWorklogId": 12389,
                "jiraWorklogId": 160891,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5179",
                    "key": "SS-5179",
                    "id": 98833
                },
                "timeSpentSeconds": 9000,
                "billableSeconds": 9000,
                "startDate": "2023-04-17",
                "startTime": "09:00:00",
                "description": "problem in pipeline jenkins ",
                "createdAt": "2023-04-17T09:47:02Z",
                "updatedAt": "2023-04-25T09:12:28Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12389/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12992",
                "tempoWorklogId": 12992,
                "jiraWorklogId": 161494,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5179",
                    "key": "SS-5179",
                    "id": 98833
                },
                "timeSpentSeconds": 7200,
                "billableSeconds": 7200,
                "startDate": "2023-04-17",
                "startTime": "11:45:00",
                "description": "mise en preprod",
                "createdAt": "2023-04-25T09:12:45Z",
                "updatedAt": "2023-04-25T09:12:45Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12992/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12993",
                "tempoWorklogId": 12993,
                "jiraWorklogId": 161495,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-418",
                    "key": "INT-418",
                    "id": 98395
                },
                "timeSpentSeconds": 10800,
                "billableSeconds": 10800,
                "startDate": "2023-04-17",
                "startTime": "14:00:00",
                "description": "Working on issue INT-418",
                "createdAt": "2023-04-25T09:13:05Z",
                "updatedAt": "2023-04-25T09:13:43Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12993/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12991",
                "tempoWorklogId": 12991,
                "jiraWorklogId": 161493,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-3",
                    "key": "INT-3",
                    "id": 11960
                },
                "timeSpentSeconds": 19800,
                "billableSeconds": 19800,
                "startDate": "2023-04-18",
                "startTime": "09:00:00",
                "description": "investigation api google best practice",
                "createdAt": "2023-04-25T09:12:23Z",
                "updatedAt": "2023-04-25T09:13:25Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12991/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12996",
                "tempoWorklogId": 12996,
                "jiraWorklogId": 161498,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-418",
                    "key": "INT-418",
                    "id": 98395
                },
                "timeSpentSeconds": 7200,
                "billableSeconds": 7200,
                "startDate": "2023-04-18",
                "startTime": "14:45:00",
                "description": "Working on issue INT-418",
                "createdAt": "2023-04-25T09:13:32Z",
                "updatedAt": "2023-04-25T09:13:32Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12996/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12990",
                "tempoWorklogId": 12990,
                "jiraWorklogId": 161492,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-3",
                    "key": "INT-3",
                    "id": 11960
                },
                "timeSpentSeconds": 19800,
                "billableSeconds": 19800,
                "startDate": "2023-04-19",
                "startTime": "09:00:00",
                "description": "Working on issue INT-3",
                "createdAt": "2023-04-25T09:11:53Z",
                "updatedAt": "2023-04-25T09:13:14Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12990/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12995",
                "tempoWorklogId": 12995,
                "jiraWorklogId": 161497,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-418",
                    "key": "INT-418",
                    "id": 98395
                },
                "timeSpentSeconds": 7200,
                "billableSeconds": 7200,
                "startDate": "2023-04-19",
                "startTime": "14:45:00",
                "description": "Working on issue INT-418",
                "createdAt": "2023-04-25T09:13:27Z",
                "updatedAt": "2023-04-25T09:13:27Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12995/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12989",
                "tempoWorklogId": 12989,
                "jiraWorklogId": 161491,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-3",
                    "key": "INT-3",
                    "id": 11960
                },
                "timeSpentSeconds": 19800,
                "billableSeconds": 19800,
                "startDate": "2023-04-20",
                "startTime": "09:00:00",
                "description": "Working on issue INT-3",
                "createdAt": "2023-04-25T09:11:41Z",
                "updatedAt": "2023-04-25T09:12:52Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12989/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12994",
                "tempoWorklogId": 12994,
                "jiraWorklogId": 161496,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-418",
                    "key": "INT-418",
                    "id": 98395
                },
                "timeSpentSeconds": 7200,
                "billableSeconds": 7200,
                "startDate": "2023-04-20",
                "startTime": "14:45:00",
                "description": "Working on issue INT-418",
                "createdAt": "2023-04-25T09:13:16Z",
                "updatedAt": "2023-04-25T09:13:16Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12994/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12988",
                "tempoWorklogId": 12988,
                "jiraWorklogId": 161490,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-378",
                    "key": "INT-378",
                    "id": 12063
                },
                "timeSpentSeconds": 28800,
                "billableSeconds": 28800,
                "startDate": "2023-04-21",
                "startTime": "09:00:00",
                "description": "Working on issue INT-378",
                "createdAt": "2023-04-25T09:11:23Z",
                "updatedAt": "2023-04-25T09:11:23Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12988/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12997",
                "tempoWorklogId": 12997,
                "jiraWorklogId": 161499,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-3",
                    "key": "INT-3",
                    "id": 11960
                },
                "timeSpentSeconds": 19800,
                "billableSeconds": 19800,
                "startDate": "2023-04-24",
                "startTime": "09:00:00",
                "description": "Working on issue INT-3",
                "createdAt": "2023-04-25T09:14:00Z",
                "updatedAt": "2023-04-25T09:14:00Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12997/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12998",
                "tempoWorklogId": 12998,
                "jiraWorklogId": 161500,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-418",
                    "key": "INT-418",
                    "id": 98395
                },
                "timeSpentSeconds": 7200,
                "billableSeconds": 7200,
                "startDate": "2023-04-24",
                "startTime": "14:45:00",
                "description": "Working on issue INT-418",
                "createdAt": "2023-04-25T09:14:12Z",
                "updatedAt": "2023-04-25T09:14:12Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12998/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/12999",
                "tempoWorklogId": 12999,
                "jiraWorklogId": 161501,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5184",
                    "key": "SS-5184",
                    "id": 99072
                },
                "timeSpentSeconds": 3600,
                "billableSeconds": 3600,
                "startDate": "2023-04-25",
                "startTime": "09:00:00",
                "description": "Working on issue SS-5184",
                "createdAt": "2023-04-25T10:38:41Z",
                "updatedAt": "2023-04-28T16:29:29Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/12999/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/13128",
                "tempoWorklogId": 13128,
                "jiraWorklogId": 161630,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5184",
                    "key": "SS-5184",
                    "id": 99072
                },
                "timeSpentSeconds": 3600,
                "billableSeconds": 3600,
                "startDate": "2023-04-25",
                "startTime": "10:45:00",
                "description": "Working on issue SS-5184",
                "createdAt": "2023-04-26T12:41:01Z",
                "updatedAt": "2023-04-28T16:29:26Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/13128/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/13606",
                "tempoWorklogId": 13606,
                "jiraWorklogId": 162105,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-418",
                    "key": "INT-418",
                    "id": 98395
                },
                "timeSpentSeconds": 7200,
                "billableSeconds": 7200,
                "startDate": "2023-04-25",
                "startTime": "12:00:00",
                "description": "Working on issue INT-418",
                "createdAt": "2023-04-28T16:27:35Z",
                "updatedAt": "2023-04-28T16:27:35Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/13606/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/13608",
                "tempoWorklogId": 13608,
                "jiraWorklogId": 162107,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-3",
                    "key": "INT-3",
                    "id": 11960
                },
                "timeSpentSeconds": 12600,
                "billableSeconds": 12600,
                "startDate": "2023-04-25",
                "startTime": "14:15:00",
                "description": "formation angular 15",
                "createdAt": "2023-04-28T16:28:03Z",
                "updatedAt": "2023-04-28T16:30:16Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/13608/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/13605",
                "tempoWorklogId": 13605,
                "jiraWorklogId": 162104,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-418",
                    "key": "INT-418",
                    "id": 98395
                },
                "timeSpentSeconds": 7200,
                "billableSeconds": 7200,
                "startDate": "2023-04-26",
                "startTime": "09:00:00",
                "description": "Working on issue INT-418",
                "createdAt": "2023-04-28T16:27:17Z",
                "updatedAt": "2023-04-28T16:27:17Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/13605/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/13609",
                "tempoWorklogId": 13609,
                "jiraWorklogId": 162108,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-3",
                    "key": "INT-3",
                    "id": 11960
                },
                "timeSpentSeconds": 19800,
                "billableSeconds": 19800,
                "startDate": "2023-04-26",
                "startTime": "11:15:00",
                "description": "formation angular 15",
                "createdAt": "2023-04-28T16:28:36Z",
                "updatedAt": "2023-04-28T16:28:36Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/13609/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/13354",
                "tempoWorklogId": 13354,
                "jiraWorklogId": 161856,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5185",
                    "key": "SS-5185",
                    "id": 99130
                },
                "timeSpentSeconds": 5400,
                "billableSeconds": 5400,
                "startDate": "2023-04-27",
                "startTime": "09:00:00",
                "description": "Working on issue SS-5185",
                "createdAt": "2023-04-27T13:14:15Z",
                "updatedAt": "2023-04-27T13:14:15Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/13354/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/13604",
                "tempoWorklogId": 13604,
                "jiraWorklogId": 162103,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-418",
                    "key": "INT-418",
                    "id": 98395
                },
                "timeSpentSeconds": 7200,
                "billableSeconds": 7200,
                "startDate": "2023-04-27",
                "startTime": "10:45:00",
                "description": "Working on issue INT-418",
                "createdAt": "2023-04-28T16:26:47Z",
                "updatedAt": "2023-04-28T16:26:47Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/13604/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/13611",
                "tempoWorklogId": 13611,
                "jiraWorklogId": 162110,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-3",
                    "key": "INT-3",
                    "id": 11960
                },
                "timeSpentSeconds": 10800,
                "billableSeconds": 10800,
                "startDate": "2023-04-27",
                "startTime": "13:00:00",
                "description": "formation angular 15",
                "createdAt": "2023-04-28T16:29:03Z",
                "updatedAt": "2023-04-28T16:29:52Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/13611/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/13511",
                "tempoWorklogId": 13511,
                "jiraWorklogId": 162013,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-4239",
                    "key": "SS-4239",
                    "id": 52211
                },
                "timeSpentSeconds": 3600,
                "billableSeconds": 3600,
                "startDate": "2023-04-27",
                "startTime": "16:15:00",
                "description": "Working on issue SS-4239",
                "createdAt": "2023-04-28T09:05:47Z",
                "updatedAt": "2023-04-28T16:29:53Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/13511/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/13535",
                "tempoWorklogId": 13535,
                "jiraWorklogId": 162037,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-418",
                    "key": "INT-418",
                    "id": 98395
                },
                "timeSpentSeconds": 14400,
                "billableSeconds": 14400,
                "startDate": "2023-04-28",
                "startTime": "09:00:00",
                "description": "Working on issue INT-418",
                "createdAt": "2023-04-28T11:04:01Z",
                "updatedAt": "2023-04-28T16:29:59Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/13535/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/13610",
                "tempoWorklogId": 13610,
                "jiraWorklogId": 162109,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-3",
                    "key": "INT-3",
                    "id": 11960
                },
                "timeSpentSeconds": 12600,
                "billableSeconds": 12600,
                "startDate": "2023-04-28",
                "startTime": "14:00:00",
                "description": "formation angular 15",
                "createdAt": "2023-04-28T16:28:40Z",
                "updatedAt": "2023-04-28T16:30:03Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/13610/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/13892",
                "tempoWorklogId": 13892,
                "jiraWorklogId": 162392,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-378",
                    "key": "INT-378",
                    "id": 12063
                },
                "timeSpentSeconds": 28800,
                "billableSeconds": 28800,
                "startDate": "2023-05-01",
                "startTime": "09:00:00",
                "description": "Working on issue INT-378",
                "createdAt": "2023-05-03T10:00:32Z",
                "updatedAt": "2023-05-03T10:00:32Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/13892/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/13888",
                "tempoWorklogId": 13888,
                "jiraWorklogId": 162388,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-5136",
                    "key": "SS-5136",
                    "id": 98330
                },
                "timeSpentSeconds": 14400,
                "billableSeconds": 14400,
                "startDate": "2023-05-02",
                "startTime": "09:00:00",
                "description": "générer l'access token et l'ajouter  dans la BDD",
                "createdAt": "2023-05-03T09:56:33Z",
                "updatedAt": "2023-05-03T09:56:33Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/13888/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/13889",
                "tempoWorklogId": 13889,
                "jiraWorklogId": 162389,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/SS-4239",
                    "key": "SS-4239",
                    "id": 52211
                },
                "timeSpentSeconds": 1800,
                "billableSeconds": 1800,
                "startDate": "2023-05-02",
                "startTime": "13:15:00",
                "description": "update database",
                "createdAt": "2023-05-03T09:57:22Z",
                "updatedAt": "2023-05-05T08:23:12Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/13889/work-attribute-values",
                    "values": []
                }
            },
            {
                "self": "https://api.tempo.io/core/3/worklogs/13891",
                "tempoWorklogId": 13891,
                "jiraWorklogId": 162391,
                "issue": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/issue/INT-385",
                    "key": "INT-385",
                    "id": 12052
                },
                "timeSpentSeconds": 10800,
                "billableSeconds": 10800,
                "startDate": "2023-05-02",
                "startTime": "14:00:00",
                "description": "formation angular 14",
                "createdAt": "2023-05-03T09:59:08Z",
                "updatedAt": "2023-05-05T08:23:23Z",
                "author": {
                    "self": "https://mobelite.atlassian.net/rest/api/2/user?accountId=6359486576b91b62562dd4ba",
                    "accountId": "6359486576b91b62562dd4ba",
                    "displayName": "Mohamed Ben Fredj"
                },
                "attributes": {
                    "self": "https://api.tempo.io/core/3/worklogs/13891/work-attribute-values",
                    "values": []
                }
            }
        ]
    }
    const donutData =[
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5a4"
            ],
            "specialite": "Product owner"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5c3"
            ],
            "specialite": "Développeur Web Frontend"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5aa"
            ],
            "specialite": "Chargée de Ressources Humaines"
        },
        {
            "count": 3,
            "users": [
                "6477d170c8999d49d569f5d1",
                "6477d170c8999d49d569f5cb",
                "6477d170c8999d49d569f5cc"
            ],
            "specialite": "PHP Developer"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5d6"
            ],
            "specialite": "iOS Developer"
        },
        {
            "count": 3,
            "users": [
                "6477d170c8999d49d569f5a6",
                "6477d170c8999d49d569f5e5",
                "6477d170c8999d49d569f5f9"
            ],
            "specialite": "DevOps Engineer"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5f8"
            ],
            "specialite": "HR Director"
        },
        {
            "count": 5,
            "users": [
                "6477d170c8999d49d569f5be",
                "6477d170c8999d49d569f5cf",
                "6477d170c8999d49d569f5da",
                "6477d170c8999d49d569f5fb",
                "6477d170c8999d49d569f5fd"
            ],
            "specialite": "Scrum Master"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f603"
            ],
            "specialite": "Consultant Manager"
        },
        {
            "count": 2,
            "users": [
                "6477d170c8999d49d569f5ce",
                "6477d170c8999d49d569f5f4"
            ],
            "specialite": "Consultant"
        },
        {
            "count": 2,
            "users": [
                "6477d170c8999d49d569f5b2",
                "6477d170c8999d49d569f5fa"
            ],
            "specialite": "JAVA Developer"
        },
        {
            "count": 3,
            "users": [
                "6477d170c8999d49d569f5a0",
                "6477d170c8999d49d569f5b8",
                "6477d170c8999d49d569f5e9"
            ],
            "specialite": "Android Developer"
        },
        {
            "count": 3,
            "users": [
                "63ea066adf7154131ced520f",
                "63ea067edf7154131ced5213",
                "63ea02b4b7df45dddcf47ebc"
            ],
            "specialite": "Dev Web"
        },
        {
            "count": 17,
            "users": [
                "6477d170c8999d49d569f5a2",
                "6477d170c8999d49d569f5ab",
                "6477d170c8999d49d569f5b1",
                "6477d170c8999d49d569f5a1",
                "6477d170c8999d49d569f5ae",
                "6477d170c8999d49d569f5b6",
                "6477d170c8999d49d569f5c1",
                "6477d170c8999d49d569f5c2",
                "6477d170c8999d49d569f5c7",
                "6477d170c8999d49d569f5d8",
                "6477d170c8999d49d569f5dd",
                "6477d170c8999d49d569f5de",
                "6477d170c8999d49d569f5e3",
                "6477d170c8999d49d569f5ec",
                "6477d170c8999d49d569f5f1",
                "6477d170c8999d49d569f5f2",
                "6477d170c8999d49d569f5f5"
            ],
            "specialite": "Stagiaire PFE2023"
        },
        {
            "count": 4,
            "users": [
                "6477d170c8999d49d569f5af",
                "6477d170c8999d49d569f5ac",
                "6477d170c8999d49d569f5dc",
                "6477d170c8999d49d569f5ef"
            ],
            "specialite": "Product Owner"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5e1"
            ],
            "specialite": "Responsable Pôle Web"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f602"
            ],
            "specialite": "Développeur Web"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5b9"
            ],
            "specialite": "Team Lead Mobile"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5e6"
            ],
            "specialite": "Consultant Android"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5a9"
            ],
            "specialite": "Java Developer"
        },
        {
            "count": 8,
            "users": [
                "6477d170c8999d49d569f5b7",
                "6477d170c8999d49d569f5bb",
                "6477d170c8999d49d569f5bc",
                "6477d170c8999d49d569f5cd",
                "6477d170c8999d49d569f5c6",
                "6477d170c8999d49d569f5f6",
                "6477d170c8999d49d569f5fc",
                "6477d170c8999d49d569f5e7"
            ],
            "specialite": "Stage PFE 2023"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5ff"
            ],
            "specialite": "Fullstack Developer"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5c0"
            ],
            "specialite": "Senior ColdFusion Developer"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5ba"
            ],
            "specialite": "Functional QA Engineer/Alternant"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5ad"
            ],
            "specialite": "Tech Lead JAVA"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5ca"
            ],
            "specialite": "PFE2023"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5a3"
            ],
            "specialite": "Business Manager"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5d7"
            ],
            "specialite": "Python Developer"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5eb"
            ],
            "specialite": "Chargé de Recrutement"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5ee"
            ],
            "specialite": "Technical Lead JAVA"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5a5"
            ],
            "specialite": "Project Director"
        },
        {
            "count": 3,
            "users": [
                "6477d170c8999d49d569f5b5",
                "6477d170c8999d49d569f5b3",
                "6477d170c8999d49d569f5df"
            ],
            "specialite": "Functional QA Engineer"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5d9"
            ],
            "specialite": "Tech Lead iOS"
        },
        {
            "count": 3,
            "users": [
                "6477d170c8999d49d569f5c4",
                "6477d170c8999d49d569f5f7",
                "6477d170c8999d49d569f5fe"
            ],
            "specialite": "Ingénieur Etude et Développement"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5e8"
            ],
            "specialite": "IOS Developer"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f600"
            ],
            "specialite": "Frontend Developer"
        },
        {
            "count": 1,
            "users": [
                "64819d77f72874897eb7d69e"
            ],
            "specialite": "Web Dev"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5d3"
            ],
            "specialite": "Talent Acquisition "
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5ea"
            ],
            "specialite": "Senior IT System Engineer"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5e4"
            ],
            "specialite": "Talent Acquisition"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5db"
            ],
            "specialite": "QA Automation"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5a7"
            ],
            "specialite": "QA Auto"
        },
        {
            "count": 12,
            "users": [
                "6477d170c8999d49d569f5b0",
                "6477d170c8999d49d569f5b4",
                "6477d170c8999d49d569f5bd",
                "6477d170c8999d49d569f5c5",
                "6477d170c8999d49d569f5c8",
                "6477d170c8999d49d569f5c9",
                "6477d170c8999d49d569f5d2",
                "6477d170c8999d49d569f5d4",
                "6477d170c8999d49d569f5d5",
                "6477d170c8999d49d569f5e0",
                "6477d170c8999d49d569f5f3",
                "6477d170c8999d49d569f5f0"
            ],
            "specialite": "null"
        },
        {
            "count": 4,
            "users": [
                "6477d170c8999d49d569f5d0",
                "6477d170c8999d49d569f5e2",
                "6477d170c8999d49d569f5ed",
                "6477d170c8999d49d569f601"
            ],
            "specialite": "QA Engineer"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5a8"
            ],
            "specialite": "Ingénieur QA"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f59f"
            ],
            "specialite": "IT Manager"
        },
        {
            "count": 1,
            "users": [
                "6477d170c8999d49d569f5bf"
            ],
            "specialite": "Tech Lead WEB"
        }
    ]
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

    return (
    <div className="App">
      <header className="App-header">
          {/*<HistogramChart data ={data.results}></HistogramChart>*/}
          {/*<DonutChart data={donutData}></DonutChart>*/}
          {/*<PieChartAllDevs data={donutData} projets={projets}></PieChartAllDevs>*/}
          <WebDeployed  data={donutData} projets={projets}></WebDeployed>
          <MobileDeployed  data={donutData} projets={projets}></MobileDeployed>

      </header>
    </div>
  );
}

export default App;
