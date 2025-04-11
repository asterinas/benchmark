window.BENCHMARK_DATA = {
  "lastUpdate": 1744354697869,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "group8_smp1": [
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
        "date": 1744354691099,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.208",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.592",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}