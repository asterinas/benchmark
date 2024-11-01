window.BENCHMARK_DATA = {
  "lastUpdate": 1730498793663,
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
      },
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
        "date": 1730239682072,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "125628.14",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "38910.51",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "96a153dfc5fda6ac8652c1da149562037200939b",
          "message": "Implement dummy `metadata()` for epoll and socket files",
          "timestamp": "2024-10-30T03:42:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/96a153dfc5fda6ac8652c1da149562037200939b"
        },
        "date": 1730326033867,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "127877.23",
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
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "7e2e9cebf69ea193ec72cad05ac46c2555919c04",
          "message": "Perform more noncontroversial cleanups",
          "timestamp": "2024-10-21T14:44:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/7e2e9cebf69ea193ec72cad05ac46c2555919c04"
        },
        "date": 1730412570960,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "125944.58",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "39001.56",
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
      },
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
        "date": 1730239990559,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "102880.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "39016.78",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "96a153dfc5fda6ac8652c1da149562037200939b",
          "message": "Implement dummy `metadata()` for epoll and socket files",
          "timestamp": "2024-10-30T03:42:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/96a153dfc5fda6ac8652c1da149562037200939b"
        },
        "date": 1730326346188,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "130890.05",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "38880.25",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "7e2e9cebf69ea193ec72cad05ac46c2555919c04",
          "message": "Perform more noncontroversial cleanups",
          "timestamp": "2024-10-21T14:44:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/7e2e9cebf69ea193ec72cad05ac46c2555919c04"
        },
        "date": 1730412720641,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "133333.33",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "38654.81",
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
      },
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
        "date": 1730239526931,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "130208.34",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38789.76",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "96a153dfc5fda6ac8652c1da149562037200939b",
          "message": "Implement dummy `metadata()` for epoll and socket files",
          "timestamp": "2024-10-30T03:42:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/96a153dfc5fda6ac8652c1da149562037200939b"
        },
        "date": 1730326187366,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "132802.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "39108.33",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "7e2e9cebf69ea193ec72cad05ac46c2555919c04",
          "message": "Perform more noncontroversial cleanups",
          "timestamp": "2024-10-21T14:44:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/7e2e9cebf69ea193ec72cad05ac46c2555919c04"
        },
        "date": 1730412426858,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "108225.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38850.04",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "7ddfd42baa210656127044995d8707fde74fab4d",
          "message": "Make `wait_events` support timeout",
          "timestamp": "2024-09-02T07:17:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/7ddfd42baa210656127044995d8707fde74fab4d"
        },
        "date": 1730498779651,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "125156.45",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "39108.33",
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
      },
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
        "date": 1730239837212,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "128369.71",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "36832.41",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "96a153dfc5fda6ac8652c1da149562037200939b",
          "message": "Implement dummy `metadata()` for epoll and socket files",
          "timestamp": "2024-10-30T03:42:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/96a153dfc5fda6ac8652c1da149562037200939b"
        },
        "date": 1730326489404,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "126103.41",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38880.25",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "7e2e9cebf69ea193ec72cad05ac46c2555919c04",
          "message": "Perform more noncontroversial cleanups",
          "timestamp": "2024-10-21T14:44:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/7e2e9cebf69ea193ec72cad05ac46c2555919c04"
        },
        "date": 1730412881543,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "130718.95",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38714.67",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}