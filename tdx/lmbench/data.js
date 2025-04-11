window.BENCHMARK_DATA = {
  "lastUpdate": 1744354363795,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "vfs_write_lat": [
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
        "date": 1744354357025,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of write (/dev/null)",
        "description": "lat_syscall write",
        "display": true,
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1074",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.0999",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}