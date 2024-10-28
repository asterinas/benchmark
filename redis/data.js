window.BENCHMARK_DATA = {
  "lastUpdate": 1730153745736,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "ping_inline_100k_conc20_rps": [
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "dc06d7c37d76af448337557db40c8ebb1f8f3418",
          "message": "Support TCP sockets HUP&RDHUP events",
          "timestamp": "2024-10-24T09:24:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/dc06d7c37d76af448337557db40c8ebb1f8f3418"
        },
        "date": 1730153426374,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "125786.16",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "38834.95",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ping_mbulk_100k_conc20_rps": [
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "dc06d7c37d76af448337557db40c8ebb1f8f3418",
          "message": "Support TCP sockets HUP&RDHUP events",
          "timestamp": "2024-10-24T09:24:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/dc06d7c37d76af448337557db40c8ebb1f8f3418"
        },
        "date": 1730153582501,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "134408.59",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "38505.97",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "get_100k_conc20_rps": [
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "dc06d7c37d76af448337557db40c8ebb1f8f3418",
          "message": "Support TCP sockets HUP&RDHUP events",
          "timestamp": "2024-10-24T09:24:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/dc06d7c37d76af448337557db40c8ebb1f8f3418"
        },
        "date": 1730153273898,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "105820.11",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "37411.15",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "set_100k_conc20_rps": [
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "dc06d7c37d76af448337557db40c8ebb1f8f3418",
          "message": "Support TCP sockets HUP&RDHUP events",
          "timestamp": "2024-10-24T09:24:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/dc06d7c37d76af448337557db40c8ebb1f8f3418"
        },
        "date": 1730153732663,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "103842.16",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38759.69",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}