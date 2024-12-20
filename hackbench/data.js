window.BENCHMARK_DATA = {
  "lastUpdate": 1734737042468,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "group8_smp1": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f98c4900d1d9c0986b32128a44ed669bd707b2e",
          "message": "Bump version to 0.10.3",
          "timestamp": "2024-12-19T09:01:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f98c4900d1d9c0986b32128a44ed669bd707b2e"
        },
        "date": 1734737016874,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.145",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.442",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}