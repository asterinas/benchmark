window.BENCHMARK_DATA = {
  "lastUpdate": 1735564391408,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "t8_conc32_window10k": [
      {
        "commit": {
          "author": {
            "name": "jiangjianfeng",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bfc71d1b2708075fb0abf326960a20b4bb6b58e2",
          "message": "Bump version to 0.11.1",
          "timestamp": "2024-12-30T06:39:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/bfc71d1b2708075fb0abf326960a20b4bb6b58e2"
        },
        "date": 1735564363187,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput with 8 client threads, 32 concurrency and 10k window",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4751054",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3976035",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "t16_conc64_window10k": [
      {
        "commit": {
          "author": {
            "name": "jiangjianfeng",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bfc71d1b2708075fb0abf326960a20b4bb6b58e2",
          "message": "Bump version to 0.11.1",
          "timestamp": "2024-12-30T06:39:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/bfc71d1b2708075fb0abf326960a20b4bb6b58e2"
        },
        "date": 1735564323228,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput with 16 client threads, 64 concurrency and 10k window",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4396658",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3998899",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}