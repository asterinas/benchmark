window.BENCHMARK_DATA = {
  "lastUpdate": 1744354143717,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "cpu_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354136794,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "3.84",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "3.92",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "thread_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354128699,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "13.60",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "11.20",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}