window.BENCHMARK_DATA = {
  "lastUpdate": 1736038284460,
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
        "date": 1730498937305,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "132275.14",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "38850.04",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50773de35fc154877abc1e143fa03dd6e7e0e525",
          "message": "Fix a TDX minor issue",
          "timestamp": "2024-11-02T02:11:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50773de35fc154877abc1e143fa03dd6e7e0e525"
        },
        "date": 1730585307995,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "127713.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "38654.81",
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
          "id": "efd49a96e3eb83094f6bc93f2723ef376b29fabb",
          "message": "Rename `cond()` to `try_op()`",
          "timestamp": "2024-11-01T12:02:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/efd49a96e3eb83094f6bc93f2723ef376b29fabb"
        },
        "date": 1730671849944,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "106951.88",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "38714.67",
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
          "id": "efd49a96e3eb83094f6bc93f2723ef376b29fabb",
          "message": "Rename `cond()` to `try_op()`",
          "timestamp": "2024-11-01T12:02:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/efd49a96e3eb83094f6bc93f2723ef376b29fabb"
        },
        "date": 1730758102282,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "124069.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "37160.91",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5b3a1d6dd39e86e07790d1febcebe1d25248094",
          "message": "Unify the qemu arguments generation",
          "timestamp": "2024-11-04T04:03:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5b3a1d6dd39e86e07790d1febcebe1d25248094"
        },
        "date": 1730844711809,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "104058.27",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "52338271608ce092a17367ffc86f1cea849abbee",
          "message": "Don't preempt without good reason",
          "timestamp": "2024-10-31T02:00:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/52338271608ce092a17367ffc86f1cea849abbee"
        },
        "date": 1730930973271,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "124688.28",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "13066.77",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "25a918d132277eff7ea202cacc4bfa284de2dec5",
          "message": "Print who and on which CPU the kernel panics",
          "timestamp": "2024-11-07T03:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/25a918d132277eff7ea202cacc4bfa284de2dec5"
        },
        "date": 1730976020764,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "127713.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "37835.79",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "25a918d132277eff7ea202cacc4bfa284de2dec5",
          "message": "Print who and on which CPU the kernel panics",
          "timestamp": "2024-11-07T03:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/25a918d132277eff7ea202cacc4bfa284de2dec5"
        },
        "date": 1730984999498,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "128700.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "38789.76",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "25a918d132277eff7ea202cacc4bfa284de2dec5",
          "message": "Print who and on which CPU the kernel panics",
          "timestamp": "2024-11-07T03:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/25a918d132277eff7ea202cacc4bfa284de2dec5"
        },
        "date": 1731017450540,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "127713.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "36616.62",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491",
          "message": "Fix the title of ext2 and ramfs benchmark",
          "timestamp": "2024-11-08T03:08:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491"
        },
        "date": 1731041694580,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "126903.55",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "38580.25",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491",
          "message": "Fix the title of ext2 and ramfs benchmark",
          "timestamp": "2024-11-08T03:08:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491"
        },
        "date": 1731055479138,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "103626.95",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "38535.64",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491",
          "message": "Fix the title of ext2 and ramfs benchmark",
          "timestamp": "2024-11-08T03:08:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491"
        },
        "date": 1731103745048,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "120918.98",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "38714.67",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1f612e45f7fccb4caa3901ee26605f828ec64a06",
          "message": "Remove unnecessary page table items",
          "timestamp": "2024-11-09T11:22:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/1f612e45f7fccb4caa3901ee26605f828ec64a06"
        },
        "date": 1731191351387,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "126903.55",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "38669.76",
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
          "id": "11382524d1d23cc6d41adf977a72138baa39e38d",
          "message": "Use new `SpinLock` APIs in `wait.rs`",
          "timestamp": "2024-11-07T14:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/11382524d1d23cc6d41adf977a72138baa39e38d"
        },
        "date": 1731277928895,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100300.91",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "38226.30",
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
          "id": "11382524d1d23cc6d41adf977a72138baa39e38d",
          "message": "Use new `SpinLock` APIs in `wait.rs`",
          "timestamp": "2024-11-07T14:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/11382524d1d23cc6d41adf977a72138baa39e38d"
        },
        "date": 1731364226609,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "117508.81",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "38624.95",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "38682e3ed923c0ec7880f414267789a2ded06dbe",
          "message": "Assign callback to shared irq if there's no single irq line",
          "timestamp": "2024-11-12T03:39:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/38682e3ed923c0ec7880f414267789a2ded06dbe"
        },
        "date": 1731450691905,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "126903.55",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "58207.21",
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
          "id": "e6c613f53841983765a7b3c56ea9958775c76199",
          "message": "Rename `(Posix)ThreadExt` to `As(Posix)Thread`",
          "timestamp": "2024-11-12T01:53:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6c613f53841983765a7b3c56ea9958775c76199"
        },
        "date": 1731537193391,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "121951.22",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "60901.34",
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
          "id": "e6c613f53841983765a7b3c56ea9958775c76199",
          "message": "Rename `(Posix)ThreadExt` to `As(Posix)Thread`",
          "timestamp": "2024-11-12T01:53:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6c613f53841983765a7b3c56ea9958775c76199"
        },
        "date": 1731623701077,
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
            "value": "60422.96",
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
          "id": "39d303c72f622a735927fd1d4fece11fe4b46001",
          "message": "Rename `get_current_userspace` to `current_userspace`",
          "timestamp": "2024-11-14T11:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/39d303c72f622a735927fd1d4fece11fe4b46001"
        },
        "date": 1731709985392,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "128205.13",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "61012.81",
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
          "id": "197d53c0ab1edbf8545d2ab827a930d66a1ab528",
          "message": "Accept sockets in the ESTABLISHED state",
          "timestamp": "2024-11-15T03:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/197d53c0ab1edbf8545d2ab827a930d66a1ab528"
        },
        "date": 1731796101386,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "131233.59",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "57537.40",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cautreoxit",
            "username": "Cautreoxit",
            "email": "huk@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "885950c2a4a65486524ac53e40f6b6515d7ebd3a",
          "message": "Add VirtioBlockFeature to cache virtio-blk's features",
          "timestamp": "2024-11-14T13:10:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/885950c2a4a65486524ac53e40f6b6515d7ebd3a"
        },
        "date": 1731882472069,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "125313.29",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "58275.06",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cautreoxit",
            "username": "Cautreoxit",
            "email": "huk@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "885950c2a4a65486524ac53e40f6b6515d7ebd3a",
          "message": "Add VirtioBlockFeature to cache virtio-blk's features",
          "timestamp": "2024-11-14T13:10:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/885950c2a4a65486524ac53e40f6b6515d7ebd3a"
        },
        "date": 1731968797501,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "128865.98",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "56242.97",
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
          "id": "b3f8d21c3db7310f7071b50dcbf8663bc4e507e1",
          "message": "Refine comments about the lock usage",
          "timestamp": "2024-11-18T13:07:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/b3f8d21c3db7310f7071b50dcbf8663bc4e507e1"
        },
        "date": 1732055219486,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "102459.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "59136.61",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732232412402,
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
            "value": "64308.68",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732318203954,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "102774.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "56625.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732404690116,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "103519.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "55772.45",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732490524703,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "128369.71",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "63492.06",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e5075dab7c42182b164a433daa8ea6c7ff38bbc",
          "message": "Clear `DF` flag during trap handling to conform to x86-64 calling convention",
          "timestamp": "2024-11-24T14:46:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e5075dab7c42182b164a433daa8ea6c7ff38bbc"
        },
        "date": 1732577066904,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "104166.67",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "57537.40",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9da6af03943c15456cdfd781021820a7da78ea40",
          "message": "Add TDX debugging documentation",
          "timestamp": "2024-11-25T07:59:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/9da6af03943c15456cdfd781021820a7da78ea40"
        },
        "date": 1732663491023,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "126582.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "53850.30",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5313689d6fa91596f4bc52bf6fb866bf6a7a706f",
          "message": "Fix deadlock in FLUSH_OPS by disabling IRQ",
          "timestamp": "2024-11-26T13:04:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/5313689d6fa91596f4bc52bf6fb866bf6a7a706f"
        },
        "date": 1732750268493,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "126582.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "54975.26",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f762eb8913c992d932147f3e62ab47519fef8a91",
          "message": "Remove the `lazy_static` dependency",
          "timestamp": "2024-11-28T05:53:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/f762eb8913c992d932147f3e62ab47519fef8a91"
        },
        "date": 1732836741047,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "105152.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "54377.38",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5e35704e3896897550ac4ee383923d1e054f3dd1",
          "message": "Support eagerly FPU state save/restore\n\nCo-authored-by: Shaowei Song <songshaowei.ssw@antgroup.com>",
          "timestamp": "2024-11-28T11:36:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/5e35704e3896897550ac4ee383923d1e054f3dd1"
        },
        "date": 1732923532559,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "102774.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "55772.45",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6d3bb5a9d0b1d4d53e298402bc8fec57dc899f15",
          "message": "Fix compile error caused by updated `Step::steps_between` in Rust",
          "timestamp": "2024-11-30T10:58:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d3bb5a9d0b1d4d53e298402bc8fec57dc899f15"
        },
        "date": 1733096283251,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "126903.55",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "57670.13",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "anbo225",
            "username": "anbo225",
            "email": "anbo225@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9608a57cb0496ec2da69de33bd40b3945afb17d6",
          "message": "Make sys_setuid and sys_setgid behave consistently with Linux",
          "timestamp": "2024-11-29T06:28:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/9608a57cb0496ec2da69de33bd40b3945afb17d6"
        },
        "date": 1733183188568,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "103092.78",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "56369.79",
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
          "id": "a260411a2a8bb1bcc12b9920b33ad19c8a82899e",
          "message": "Implement `WriteIrqDisabled`",
          "timestamp": "2024-12-03T02:51:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/a260411a2a8bb1bcc12b9920b33ad19c8a82899e"
        },
        "date": 1733268689705,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "103842.16",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "62774.64",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd",
          "message": "Inject the logger for Asterinas",
          "timestamp": "2024-11-15T08:58:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd"
        },
        "date": 1733290954389,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "105042.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "56274.62",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd",
          "message": "Inject the logger for Asterinas",
          "timestamp": "2024-11-15T08:58:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd"
        },
        "date": 1733356880887,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "103842.16",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "56085.25",
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
          "id": "36fc1d37573f6809980aee652f4209c64979b209",
          "message": "Move FS things to `PosixThread`",
          "timestamp": "2024-12-01T03:41:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/36fc1d37573f6809980aee652f4209c64979b209"
        },
        "date": 1733441916195,
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
            "value": "66137.57",
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
          "id": "36fc1d37573f6809980aee652f4209c64979b209",
          "message": "Move FS things to `PosixThread`",
          "timestamp": "2024-12-01T03:41:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/36fc1d37573f6809980aee652f4209c64979b209"
        },
        "date": 1733528315483,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "128040.97",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "56689.34",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733614879936,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "103842.16",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "55279.16",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733701458493,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "126103.41",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "56625.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733787696358,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "104712.05",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "54347.82",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733885803355,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "127713.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "62814.07",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "4316247d82d86e1230f23883c193c26133b12e6a",
          "message": "Add ext2 benchmarks of sqlite",
          "timestamp": "2024-12-11T09:56:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/4316247d82d86e1230f23883c193c26133b12e6a"
        },
        "date": 1733959944664,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "103734.44",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "60679.61",
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
          "id": "8bbbde4ccb9d31ed48ae99f209538c16d14016bb",
          "message": "Use `Ordering::Relaxed` for `is_nonblocking`",
          "timestamp": "2024-12-08T08:26:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bbbde4ccb9d31ed48ae99f209538c16d14016bb"
        },
        "date": 1734046329815,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "103626.95",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "59136.61",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "acc10376e60291386dd1026f238140d145230808",
          "message": "Update benchmark README",
          "timestamp": "2024-12-14T05:14:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/acc10376e60291386dd1026f238140d145230808"
        },
        "date": 1734565152112,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "127713.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "104602.52",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "9a540d0fb6d073f1feb20c30dc78230c46c595a3",
          "message": "Notify virtqueue in a batch manner",
          "timestamp": "2024-12-17T02:24:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/9a540d0fb6d073f1feb20c30dc78230c46c595a3"
        },
        "date": 1734651694271,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "106044.54",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "101010.10",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1734738868404,
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
            "value": "102564.10",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1734825122907,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "105152.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "102986.61",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1e3403e756ced989ddd44c9f0c81cf71557e962a",
          "message": "Support ELF files with zero `p_filesz`.",
          "timestamp": "2024-12-19T03:33:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/1e3403e756ced989ddd44c9f0c81cf71557e962a"
        },
        "date": 1734911695464,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "103519.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "103305.79",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1e3403e756ced989ddd44c9f0c81cf71557e962a",
          "message": "Support ELF files with zero `p_filesz`.",
          "timestamp": "2024-12-19T03:33:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/1e3403e756ced989ddd44c9f0c81cf71557e962a"
        },
        "date": 1734998015991,
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
            "value": "113250.28",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "8a27f7a3b57704d5e71952be1d55069745150ffe",
          "message": "Clarify the naming conventions under benchmark/schbench/",
          "timestamp": "2024-12-23T07:50:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a27f7a3b57704d5e71952be1d55069745150ffe"
        },
        "date": 1735084277727,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "105042.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "105820.11",
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
          "id": "5aa73d3bcff8a549176d4366c64ee8bc56de9e6d",
          "message": "Use `REF_COUNT_MAX` to avoid overflowing",
          "timestamp": "2024-12-23T15:09:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa73d3bcff8a549176d4366c64ee8bc56de9e6d"
        },
        "date": 1735171112709,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "102669.41",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "112994.35",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1735564528923,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "103734.44",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "154320.98",
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
          "id": "7334c93ff5ac47a1a82e63b035514f91669c3c1b",
          "message": "Make bigtcp error wrappers consistent",
          "timestamp": "2024-12-30T07:47:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/7334c93ff5ac47a1a82e63b035514f91669c3c1b"
        },
        "date": 1735604907723,
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
            "value": "21362.96",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "6e691d5838e48c71f7947b1c571022dbd9b1c932",
          "message": "Fix several typos in benchmarks",
          "timestamp": "2024-12-31T03:07:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e691d5838e48c71f7947b1c571022dbd9b1c932"
        },
        "date": 1735628571673,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "126742.72",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "20708.22",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "6e691d5838e48c71f7947b1c571022dbd9b1c932",
          "message": "Fix several typos in benchmarks",
          "timestamp": "2024-12-31T03:07:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e691d5838e48c71f7947b1c571022dbd9b1c932"
        },
        "date": 1735691340037,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100908.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "126903.55",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "0c8200dc7b6bb8d9f7a8c319c67b842d83e25a75",
          "message": "Add nginx benchmark and workaround",
          "timestamp": "2024-12-31T06:40:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c8200dc7b6bb8d9f7a8c319c67b842d83e25a75"
        },
        "date": 1735778755898,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "126742.72",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "161030.59",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1735865268613,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "125470.52",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "133689.83",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1735955067090,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "103412.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "161290.33",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736038159944,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "126742.72",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "160256.41",
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
        "date": 1730499090232,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "130208.34",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "39525.69",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50773de35fc154877abc1e143fa03dd6e7e0e525",
          "message": "Fix a TDX minor issue",
          "timestamp": "2024-11-02T02:11:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50773de35fc154877abc1e143fa03dd6e7e0e525"
        },
        "date": 1730585460561,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "129701.68",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "38624.95",
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
          "id": "efd49a96e3eb83094f6bc93f2723ef376b29fabb",
          "message": "Rename `cond()` to `try_op()`",
          "timestamp": "2024-11-01T12:02:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/efd49a96e3eb83094f6bc93f2723ef376b29fabb"
        },
        "date": 1730672009787,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "131061.59",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "39093.04",
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
          "id": "efd49a96e3eb83094f6bc93f2723ef376b29fabb",
          "message": "Rename `cond()` to `try_op()`",
          "timestamp": "2024-11-01T12:02:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/efd49a96e3eb83094f6bc93f2723ef376b29fabb"
        },
        "date": 1730758257949,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "132100.39",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "36245.02",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5b3a1d6dd39e86e07790d1febcebe1d25248094",
          "message": "Unify the qemu arguments generation",
          "timestamp": "2024-11-04T04:03:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5b3a1d6dd39e86e07790d1febcebe1d25248094"
        },
        "date": 1730844863595,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "127064.80",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "38580.25",
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
          "id": "52338271608ce092a17367ffc86f1cea849abbee",
          "message": "Don't preempt without good reason",
          "timestamp": "2024-10-31T02:00:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/52338271608ce092a17367ffc86f1cea849abbee"
        },
        "date": 1730931125107,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "125156.45",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "38138.82",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "25a918d132277eff7ea202cacc4bfa284de2dec5",
          "message": "Print who and on which CPU the kernel panics",
          "timestamp": "2024-11-07T03:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/25a918d132277eff7ea202cacc4bfa284de2dec5"
        },
        "date": 1730976164511,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "126422.25",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "35752.59",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "25a918d132277eff7ea202cacc4bfa284de2dec5",
          "message": "Print who and on which CPU the kernel panics",
          "timestamp": "2024-11-07T03:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/25a918d132277eff7ea202cacc4bfa284de2dec5"
        },
        "date": 1730985167160,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "127877.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "39154.27",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "25a918d132277eff7ea202cacc4bfa284de2dec5",
          "message": "Print who and on which CPU the kernel panics",
          "timestamp": "2024-11-07T03:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/25a918d132277eff7ea202cacc4bfa284de2dec5"
        },
        "date": 1731017290906,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "130548.30",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "39001.56",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491",
          "message": "Fix the title of ext2 and ramfs benchmark",
          "timestamp": "2024-11-08T03:08:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491"
        },
        "date": 1731041843971,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "129032.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "37664.79",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491",
          "message": "Fix the title of ext2 and ramfs benchmark",
          "timestamp": "2024-11-08T03:08:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491"
        },
        "date": 1731055628131,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "128040.97",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "38714.67",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491",
          "message": "Fix the title of ext2 and ramfs benchmark",
          "timestamp": "2024-11-08T03:08:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491"
        },
        "date": 1731103897179,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "129870.13",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "37160.91",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1f612e45f7fccb4caa3901ee26605f828ec64a06",
          "message": "Remove unnecessary page table items",
          "timestamp": "2024-11-09T11:22:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/1f612e45f7fccb4caa3901ee26605f828ec64a06"
        },
        "date": 1731191504720,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "130718.95",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "38669.76",
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
          "id": "11382524d1d23cc6d41adf977a72138baa39e38d",
          "message": "Use new `SpinLock` APIs in `wait.rs`",
          "timestamp": "2024-11-07T14:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/11382524d1d23cc6d41adf977a72138baa39e38d"
        },
        "date": 1731278072607,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "127713.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
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
          "id": "11382524d1d23cc6d41adf977a72138baa39e38d",
          "message": "Use new `SpinLock` APIs in `wait.rs`",
          "timestamp": "2024-11-07T14:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/11382524d1d23cc6d41adf977a72138baa39e38d"
        },
        "date": 1731364542138,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "126582.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "37878.79",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "38682e3ed923c0ec7880f414267789a2ded06dbe",
          "message": "Assign callback to shared irq if there's no single irq line",
          "timestamp": "2024-11-12T03:39:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/38682e3ed923c0ec7880f414267789a2ded06dbe"
        },
        "date": 1731451009303,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "130039.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "58105.75",
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
          "id": "e6c613f53841983765a7b3c56ea9958775c76199",
          "message": "Rename `(Posix)ThreadExt` to `As(Posix)Thread`",
          "timestamp": "2024-11-12T01:53:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6c613f53841983765a7b3c56ea9958775c76199"
        },
        "date": 1731537341289,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "126422.25",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "61124.69",
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
          "id": "e6c613f53841983765a7b3c56ea9958775c76199",
          "message": "Rename `(Posix)ThreadExt` to `As(Posix)Thread`",
          "timestamp": "2024-11-12T01:53:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6c613f53841983765a7b3c56ea9958775c76199"
        },
        "date": 1731623849453,
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
            "value": "61766.52",
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
          "id": "39d303c72f622a735927fd1d4fece11fe4b46001",
          "message": "Rename `get_current_userspace` to `current_userspace`",
          "timestamp": "2024-11-14T11:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/39d303c72f622a735927fd1d4fece11fe4b46001"
        },
        "date": 1731710130665,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "128205.13",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "61349.70",
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
          "id": "197d53c0ab1edbf8545d2ab827a930d66a1ab528",
          "message": "Accept sockets in the ESTABLISHED state",
          "timestamp": "2024-11-15T03:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/197d53c0ab1edbf8545d2ab827a930d66a1ab528"
        },
        "date": 1731796403808,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "102986.61",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "58105.75",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cautreoxit",
            "username": "Cautreoxit",
            "email": "huk@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "885950c2a4a65486524ac53e40f6b6515d7ebd3a",
          "message": "Add VirtioBlockFeature to cache virtio-blk's features",
          "timestamp": "2024-11-14T13:10:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/885950c2a4a65486524ac53e40f6b6515d7ebd3a"
        },
        "date": 1731882617967,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "131406.05",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "57273.77",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cautreoxit",
            "username": "Cautreoxit",
            "email": "huk@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "885950c2a4a65486524ac53e40f6b6515d7ebd3a",
          "message": "Add VirtioBlockFeature to cache virtio-blk's features",
          "timestamp": "2024-11-14T13:10:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/885950c2a4a65486524ac53e40f6b6515d7ebd3a"
        },
        "date": 1731968948682,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "105042.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "56915.20",
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
          "id": "b3f8d21c3db7310f7071b50dcbf8663bc4e507e1",
          "message": "Refine comments about the lock usage",
          "timestamp": "2024-11-18T13:07:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/b3f8d21c3db7310f7071b50dcbf8663bc4e507e1"
        },
        "date": 1732055518269,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "102040.81",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "60096.15",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732232560874,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "125944.58",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "65919.58",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732318358798,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "105708.25",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "65832.78",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732404839895,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "116279.07",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "56497.18",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732490692289,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "103950.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "55928.41",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e5075dab7c42182b164a433daa8ea6c7ff38bbc",
          "message": "Clear `DF` flag during trap handling to conform to x86-64 calling convention",
          "timestamp": "2024-11-24T14:46:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e5075dab7c42182b164a433daa8ea6c7ff38bbc"
        },
        "date": 1732577215522,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "128700.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "65019.51",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9da6af03943c15456cdfd781021820a7da78ea40",
          "message": "Add TDX debugging documentation",
          "timestamp": "2024-11-25T07:59:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/9da6af03943c15456cdfd781021820a7da78ea40"
        },
        "date": 1732663645372,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "105932.20",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "57971.02",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5313689d6fa91596f4bc52bf6fb866bf6a7a706f",
          "message": "Fix deadlock in FLUSH_OPS by disabling IRQ",
          "timestamp": "2024-11-26T13:04:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/5313689d6fa91596f4bc52bf6fb866bf6a7a706f"
        },
        "date": 1732750434656,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "104493.20",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "56369.79",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f762eb8913c992d932147f3e62ab47519fef8a91",
          "message": "Remove the `lazy_static` dependency",
          "timestamp": "2024-11-28T05:53:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/f762eb8913c992d932147f3e62ab47519fef8a91"
        },
        "date": 1732837053250,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "103519.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "55370.98",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5e35704e3896897550ac4ee383923d1e054f3dd1",
          "message": "Support eagerly FPU state save/restore\n\nCo-authored-by: Shaowei Song <songshaowei.ssw@antgroup.com>",
          "timestamp": "2024-11-28T11:36:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/5e35704e3896897550ac4ee383923d1e054f3dd1"
        },
        "date": 1732923674294,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "127388.53",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "64683.05",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6d3bb5a9d0b1d4d53e298402bc8fec57dc899f15",
          "message": "Fix compile error caused by updated `Step::steps_between` in Rust",
          "timestamp": "2024-11-30T10:58:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d3bb5a9d0b1d4d53e298402bc8fec57dc899f15"
        },
        "date": 1733096119609,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "128534.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "58685.45",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "anbo225",
            "username": "anbo225",
            "email": "anbo225@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9608a57cb0496ec2da69de33bd40b3945afb17d6",
          "message": "Make sys_setuid and sys_setgid behave consistently with Linux",
          "timestamp": "2024-11-29T06:28:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/9608a57cb0496ec2da69de33bd40b3945afb17d6"
        },
        "date": 1733183359258,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "104602.52",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "66225.16",
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
          "id": "a260411a2a8bb1bcc12b9920b33ad19c8a82899e",
          "message": "Implement `WriteIrqDisabled`",
          "timestamp": "2024-12-03T02:51:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/a260411a2a8bb1bcc12b9920b33ad19c8a82899e"
        },
        "date": 1733268858264,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "105932.20",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "54854.64",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd",
          "message": "Inject the logger for Asterinas",
          "timestamp": "2024-11-15T08:58:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd"
        },
        "date": 1733356721071,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "104058.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "57438.25",
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
          "id": "36fc1d37573f6809980aee652f4209c64979b209",
          "message": "Move FS things to `PosixThread`",
          "timestamp": "2024-12-01T03:41:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/36fc1d37573f6809980aee652f4209c64979b209"
        },
        "date": 1733442064554,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "104712.05",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "65746.22",
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
          "id": "36fc1d37573f6809980aee652f4209c64979b209",
          "message": "Move FS things to `PosixThread`",
          "timestamp": "2024-12-01T03:41:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/36fc1d37573f6809980aee652f4209c64979b209"
        },
        "date": 1733528479176,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "104166.67",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "65876.16",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733615039600,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "105374.08",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "61087.36",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733702030325,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "128040.97",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "63091.48",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733787533638,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "103092.78",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "54975.26",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733885643673,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "105374.08",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "57175.53",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "4316247d82d86e1230f23883c193c26133b12e6a",
          "message": "Add ext2 benchmarks of sqlite",
          "timestamp": "2024-12-11T09:56:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/4316247d82d86e1230f23883c193c26133b12e6a"
        },
        "date": 1733959980978,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "128534.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "65359.48",
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
          "id": "8bbbde4ccb9d31ed48ae99f209538c16d14016bb",
          "message": "Use `Ordering::Relaxed` for `is_nonblocking`",
          "timestamp": "2024-12-08T08:26:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bbbde4ccb9d31ed48ae99f209538c16d14016bb"
        },
        "date": 1734046368003,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "103412.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "54585.15",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "acc10376e60291386dd1026f238140d145230808",
          "message": "Update benchmark README",
          "timestamp": "2024-12-14T05:14:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/acc10376e60291386dd1026f238140d145230808"
        },
        "date": 1734565188446,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "116279.07",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "96711.80",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "9a540d0fb6d073f1feb20c30dc78230c46c595a3",
          "message": "Notify virtqueue in a batch manner",
          "timestamp": "2024-12-17T02:24:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/9a540d0fb6d073f1feb20c30dc78230c46c595a3"
        },
        "date": 1734651731948,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "129032.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "113895.21",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1734738907370,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "104058.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "103842.16",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1734825162428,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "104384.13",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "103626.95",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1e3403e756ced989ddd44c9f0c81cf71557e962a",
          "message": "Support ELF files with zero `p_filesz`.",
          "timestamp": "2024-12-19T03:33:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/1e3403e756ced989ddd44c9f0c81cf71557e962a"
        },
        "date": 1734911733892,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "130039.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "116686.12",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1e3403e756ced989ddd44c9f0c81cf71557e962a",
          "message": "Support ELF files with zero `p_filesz`.",
          "timestamp": "2024-12-19T03:33:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/1e3403e756ced989ddd44c9f0c81cf71557e962a"
        },
        "date": 1734998056951,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "128534.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "115074.80",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "8a27f7a3b57704d5e71952be1d55069745150ffe",
          "message": "Clarify the naming conventions under benchmark/schbench/",
          "timestamp": "2024-12-23T07:50:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a27f7a3b57704d5e71952be1d55069745150ffe"
        },
        "date": 1735084317681,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "127551.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "107874.87",
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
          "id": "5aa73d3bcff8a549176d4366c64ee8bc56de9e6d",
          "message": "Use `REF_COUNT_MAX` to avoid overflowing",
          "timestamp": "2024-12-23T15:09:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa73d3bcff8a549176d4366c64ee8bc56de9e6d"
        },
        "date": 1735171151578,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "104384.13",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "103842.16",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1735564572369,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "128534.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "131752.31",
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
          "id": "7334c93ff5ac47a1a82e63b035514f91669c3c1b",
          "message": "Make bigtcp error wrappers consistent",
          "timestamp": "2024-12-30T07:47:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/7334c93ff5ac47a1a82e63b035514f91669c3c1b"
        },
        "date": 1735604948219,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "127713.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "21097.05",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "6e691d5838e48c71f7947b1c571022dbd9b1c932",
          "message": "Fix several typos in benchmarks",
          "timestamp": "2024-12-31T03:07:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e691d5838e48c71f7947b1c571022dbd9b1c932"
        },
        "date": 1735628614488,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "105820.11",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "20986.36",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "6e691d5838e48c71f7947b1c571022dbd9b1c932",
          "message": "Fix several typos in benchmarks",
          "timestamp": "2024-12-31T03:07:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e691d5838e48c71f7947b1c571022dbd9b1c932"
        },
        "date": 1735691380898,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "105708.25",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "141043.72",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "0c8200dc7b6bb8d9f7a8c319c67b842d83e25a75",
          "message": "Add nginx benchmark and workaround",
          "timestamp": "2024-12-31T06:40:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c8200dc7b6bb8d9f7a8c319c67b842d83e25a75"
        },
        "date": 1735778798909,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "109289.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "158982.52",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1735865315403,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "127877.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "135501.36",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1735955112114,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "104931.80",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "134770.89",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736038208028,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "126262.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "163132.14",
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
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50773de35fc154877abc1e143fa03dd6e7e0e525",
          "message": "Fix a TDX minor issue",
          "timestamp": "2024-11-02T02:11:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50773de35fc154877abc1e143fa03dd6e7e0e525"
        },
        "date": 1730584946989,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "130890.05",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "efd49a96e3eb83094f6bc93f2723ef376b29fabb",
          "message": "Rename `cond()` to `try_op()`",
          "timestamp": "2024-11-01T12:02:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/efd49a96e3eb83094f6bc93f2723ef376b29fabb"
        },
        "date": 1730671703799,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "131406.05",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
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
          "id": "efd49a96e3eb83094f6bc93f2723ef376b29fabb",
          "message": "Rename `cond()` to `try_op()`",
          "timestamp": "2024-11-01T12:02:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/efd49a96e3eb83094f6bc93f2723ef376b29fabb"
        },
        "date": 1730757956872,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "127388.53",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "34153.00",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5b3a1d6dd39e86e07790d1febcebe1d25248094",
          "message": "Unify the qemu arguments generation",
          "timestamp": "2024-11-04T04:03:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5b3a1d6dd39e86e07790d1febcebe1d25248094"
        },
        "date": 1730844566073,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "126582.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38744.67",
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
          "id": "52338271608ce092a17367ffc86f1cea849abbee",
          "message": "Don't preempt without good reason",
          "timestamp": "2024-10-31T02:00:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/52338271608ce092a17367ffc86f1cea849abbee"
        },
        "date": 1730930809134,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "130548.30",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "35549.23",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "25a918d132277eff7ea202cacc4bfa284de2dec5",
          "message": "Print who and on which CPU the kernel panics",
          "timestamp": "2024-11-07T03:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/25a918d132277eff7ea202cacc4bfa284de2dec5"
        },
        "date": 1730975867194,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "131578.95",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "37907.50",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "25a918d132277eff7ea202cacc4bfa284de2dec5",
          "message": "Print who and on which CPU the kernel panics",
          "timestamp": "2024-11-07T03:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/25a918d132277eff7ea202cacc4bfa284de2dec5"
        },
        "date": 1730984639555,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "129870.13",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38925.65",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "25a918d132277eff7ea202cacc4bfa284de2dec5",
          "message": "Print who and on which CPU the kernel panics",
          "timestamp": "2024-11-07T03:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/25a918d132277eff7ea202cacc4bfa284de2dec5"
        },
        "date": 1731017139799,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "123304.56",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38051.75",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491",
          "message": "Fix the title of ext2 and ramfs benchmark",
          "timestamp": "2024-11-08T03:08:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491"
        },
        "date": 1731041541719,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "129533.68",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38387.71",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491",
          "message": "Fix the title of ext2 and ramfs benchmark",
          "timestamp": "2024-11-08T03:08:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491"
        },
        "date": 1731055334091,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "128040.97",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "37864.45",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491",
          "message": "Fix the title of ext2 and ramfs benchmark",
          "timestamp": "2024-11-08T03:08:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491"
        },
        "date": 1731103423486,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "128534.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "37907.50",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1f612e45f7fccb4caa3901ee26605f828ec64a06",
          "message": "Remove unnecessary page table items",
          "timestamp": "2024-11-09T11:22:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/1f612e45f7fccb4caa3901ee26605f828ec64a06"
        },
        "date": 1731191190260,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "120627.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38654.81",
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
          "id": "11382524d1d23cc6d41adf977a72138baa39e38d",
          "message": "Use new `SpinLock` APIs in `wait.rs`",
          "timestamp": "2024-11-07T14:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/11382524d1d23cc6d41adf977a72138baa39e38d"
        },
        "date": 1731277778589,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "130890.05",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38520.80",
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
          "id": "11382524d1d23cc6d41adf977a72138baa39e38d",
          "message": "Use new `SpinLock` APIs in `wait.rs`",
          "timestamp": "2024-11-07T14:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/11382524d1d23cc6d41adf977a72138baa39e38d"
        },
        "date": 1731364059144,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "127877.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "37369.21",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "38682e3ed923c0ec7880f414267789a2ded06dbe",
          "message": "Assign callback to shared irq if there's no single irq line",
          "timestamp": "2024-11-12T03:39:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/38682e3ed923c0ec7880f414267789a2ded06dbe"
        },
        "date": 1731450527437,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "130378.09",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "37064.49",
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
          "id": "e6c613f53841983765a7b3c56ea9958775c76199",
          "message": "Rename `(Posix)ThreadExt` to `As(Posix)Thread`",
          "timestamp": "2024-11-12T01:53:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6c613f53841983765a7b3c56ea9958775c76199"
        },
        "date": 1731537028780,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "125944.58",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "61349.70",
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
          "id": "e6c613f53841983765a7b3c56ea9958775c76199",
          "message": "Rename `(Posix)ThreadExt` to `As(Posix)Thread`",
          "timestamp": "2024-11-12T01:53:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6c613f53841983765a7b3c56ea9958775c76199"
        },
        "date": 1731623401736,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "130378.09",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "60679.61",
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
          "id": "39d303c72f622a735927fd1d4fece11fe4b46001",
          "message": "Rename `get_current_userspace` to `current_userspace`",
          "timestamp": "2024-11-14T11:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/39d303c72f622a735927fd1d4fece11fe4b46001"
        },
        "date": 1731709838675,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "129870.13",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "61274.51",
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
          "id": "197d53c0ab1edbf8545d2ab827a930d66a1ab528",
          "message": "Accept sockets in the ESTABLISHED state",
          "timestamp": "2024-11-15T03:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/197d53c0ab1edbf8545d2ab827a930d66a1ab528"
        },
        "date": 1731796251729,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "128534.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "58105.75",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cautreoxit",
            "username": "Cautreoxit",
            "email": "huk@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "885950c2a4a65486524ac53e40f6b6515d7ebd3a",
          "message": "Add VirtioBlockFeature to cache virtio-blk's features",
          "timestamp": "2024-11-14T13:10:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/885950c2a4a65486524ac53e40f6b6515d7ebd3a"
        },
        "date": 1731882325839,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "125786.16",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "57077.62",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cautreoxit",
            "username": "Cautreoxit",
            "email": "huk@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "885950c2a4a65486524ac53e40f6b6515d7ebd3a",
          "message": "Add VirtioBlockFeature to cache virtio-blk's features",
          "timestamp": "2024-11-14T13:10:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/885950c2a4a65486524ac53e40f6b6515d7ebd3a"
        },
        "date": 1731968659490,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "123152.71",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "57504.31",
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
          "id": "b3f8d21c3db7310f7071b50dcbf8663bc4e507e1",
          "message": "Refine comments about the lock usage",
          "timestamp": "2024-11-18T13:07:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/b3f8d21c3db7310f7071b50dcbf8663bc4e507e1"
        },
        "date": 1732055373963,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "119331.74",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "59382.42",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732232260358,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "125786.16",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "65876.16",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732318043736,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "128205.13",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "64977.26",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732404521357,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "105374.08",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "56179.78",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732490363178,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "129032.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "63211.12",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e5075dab7c42182b164a433daa8ea6c7ff38bbc",
          "message": "Clear `DF` flag during trap handling to conform to x86-64 calling convention",
          "timestamp": "2024-11-24T14:46:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e5075dab7c42182b164a433daa8ea6c7ff38bbc"
        },
        "date": 1732576914042,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "126103.41",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "63532.40",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9da6af03943c15456cdfd781021820a7da78ea40",
          "message": "Add TDX debugging documentation",
          "timestamp": "2024-11-25T07:59:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/9da6af03943c15456cdfd781021820a7da78ea40"
        },
        "date": 1732663340777,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "126742.72",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "65359.48",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5313689d6fa91596f4bc52bf6fb866bf6a7a706f",
          "message": "Fix deadlock in FLUSH_OPS by disabling IRQ",
          "timestamp": "2024-11-26T13:04:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/5313689d6fa91596f4bc52bf6fb866bf6a7a706f"
        },
        "date": 1732750087375,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "104058.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "55493.89",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f762eb8913c992d932147f3e62ab47519fef8a91",
          "message": "Remove the `lazy_static` dependency",
          "timestamp": "2024-11-28T05:53:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/f762eb8913c992d932147f3e62ab47519fef8a91"
        },
        "date": 1732836893829,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "126103.41",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "62539.09",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5e35704e3896897550ac4ee383923d1e054f3dd1",
          "message": "Support eagerly FPU state save/restore\n\nCo-authored-by: Shaowei Song <songshaowei.ssw@antgroup.com>",
          "timestamp": "2024-11-28T11:36:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/5e35704e3896897550ac4ee383923d1e054f3dd1"
        },
        "date": 1732923377617,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "104058.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "55218.11",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6d3bb5a9d0b1d4d53e298402bc8fec57dc899f15",
          "message": "Fix compile error caused by updated `Step::steps_between` in Rust",
          "timestamp": "2024-11-30T10:58:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d3bb5a9d0b1d4d53e298402bc8fec57dc899f15"
        },
        "date": 1733095968034,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "129366.11",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "58207.21",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "anbo225",
            "username": "anbo225",
            "email": "anbo225@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9608a57cb0496ec2da69de33bd40b3945afb17d6",
          "message": "Make sys_setuid and sys_setgid behave consistently with Linux",
          "timestamp": "2024-11-29T06:28:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/9608a57cb0496ec2da69de33bd40b3945afb17d6"
        },
        "date": 1733183021756,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "126262.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "65746.22",
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
          "id": "a260411a2a8bb1bcc12b9920b33ad19c8a82899e",
          "message": "Implement `WriteIrqDisabled`",
          "timestamp": "2024-12-03T02:51:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/a260411a2a8bb1bcc12b9920b33ad19c8a82899e"
        },
        "date": 1733268532153,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "102669.41",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "54436.58",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd",
          "message": "Inject the logger for Asterinas",
          "timestamp": "2024-11-15T08:58:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd"
        },
        "date": 1733290795576,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "103950.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "54884.74",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd",
          "message": "Inject the logger for Asterinas",
          "timestamp": "2024-11-15T08:58:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd"
        },
        "date": 1733356315850,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "103734.44",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "57045.07",
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
          "id": "36fc1d37573f6809980aee652f4209c64979b209",
          "message": "Move FS things to `PosixThread`",
          "timestamp": "2024-12-01T03:41:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/36fc1d37573f6809980aee652f4209c64979b209"
        },
        "date": 1733441758364,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "104058.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "65789.48",
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
          "id": "36fc1d37573f6809980aee652f4209c64979b209",
          "message": "Move FS things to `PosixThread`",
          "timestamp": "2024-12-01T03:41:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/36fc1d37573f6809980aee652f4209c64979b209"
        },
        "date": 1733528163037,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "105596.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "57537.40",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733614722723,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "106044.54",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "56785.91",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733701295033,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "129032.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "55772.45",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733787371090,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "126582.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "63011.97",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733885333069,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "103199.18",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "54466.23",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "4316247d82d86e1230f23883c193c26133b12e6a",
          "message": "Add ext2 benchmarks of sqlite",
          "timestamp": "2024-12-11T09:56:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/4316247d82d86e1230f23883c193c26133b12e6a"
        },
        "date": 1733959906559,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "127226.46",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "64226.07",
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
          "id": "8bbbde4ccb9d31ed48ae99f209538c16d14016bb",
          "message": "Use `Ordering::Relaxed` for `is_nonblocking`",
          "timestamp": "2024-12-08T08:26:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bbbde4ccb9d31ed48ae99f209538c16d14016bb"
        },
        "date": 1734046293091,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "128700.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "61957.87",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "acc10376e60291386dd1026f238140d145230808",
          "message": "Update benchmark README",
          "timestamp": "2024-12-14T05:14:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/acc10376e60291386dd1026f238140d145230808"
        },
        "date": 1734565113755,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "104166.67",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "96899.23",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "9a540d0fb6d073f1feb20c30dc78230c46c595a3",
          "message": "Notify virtqueue in a batch manner",
          "timestamp": "2024-12-17T02:24:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/9a540d0fb6d073f1feb20c30dc78230c46c595a3"
        },
        "date": 1734651657761,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "126262.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "114285.71",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1734738830248,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "126582.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "103412.62",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1734825084787,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "105263.16",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "101112.23",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1e3403e756ced989ddd44c9f0c81cf71557e962a",
          "message": "Support ELF files with zero `p_filesz`.",
          "timestamp": "2024-12-19T03:33:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/1e3403e756ced989ddd44c9f0c81cf71557e962a"
        },
        "date": 1734911655189,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "105374.08",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "103092.78",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1e3403e756ced989ddd44c9f0c81cf71557e962a",
          "message": "Support ELF files with zero `p_filesz`.",
          "timestamp": "2024-12-19T03:33:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/1e3403e756ced989ddd44c9f0c81cf71557e962a"
        },
        "date": 1734997979026,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "127388.53",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "102880.66",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "8a27f7a3b57704d5e71952be1d55069745150ffe",
          "message": "Clarify the naming conventions under benchmark/schbench/",
          "timestamp": "2024-12-23T07:50:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a27f7a3b57704d5e71952be1d55069745150ffe"
        },
        "date": 1735084239664,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "111111.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "114416.48",
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
          "id": "5aa73d3bcff8a549176d4366c64ee8bc56de9e6d",
          "message": "Use `REF_COUNT_MAX` to avoid overflowing",
          "timestamp": "2024-12-23T15:09:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa73d3bcff8a549176d4366c64ee8bc56de9e6d"
        },
        "date": 1735171073596,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "104931.80",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "102774.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1735564487227,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "126582.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "158730.16",
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
          "id": "7334c93ff5ac47a1a82e63b035514f91669c3c1b",
          "message": "Make bigtcp error wrappers consistent",
          "timestamp": "2024-12-30T07:47:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/7334c93ff5ac47a1a82e63b035514f91669c3c1b"
        },
        "date": 1735604865680,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "102459.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "20738.28",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "6e691d5838e48c71f7947b1c571022dbd9b1c932",
          "message": "Fix several typos in benchmarks",
          "timestamp": "2024-12-31T03:07:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e691d5838e48c71f7947b1c571022dbd9b1c932"
        },
        "date": 1735628528388,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "126742.72",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "21186.44",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "6e691d5838e48c71f7947b1c571022dbd9b1c932",
          "message": "Fix several typos in benchmarks",
          "timestamp": "2024-12-31T03:07:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e691d5838e48c71f7947b1c571022dbd9b1c932"
        },
        "date": 1735691296755,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "105152.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "126903.55",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "0c8200dc7b6bb8d9f7a8c319c67b842d83e25a75",
          "message": "Add nginx benchmark and workaround",
          "timestamp": "2024-12-31T06:40:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c8200dc7b6bb8d9f7a8c319c67b842d83e25a75"
        },
        "date": 1735778713510,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "127388.53",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "163934.42",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1735865224495,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "102774.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "135501.36",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1735955024931,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "127877.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "134589.50",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736038112792,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "103734.44",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "132100.39",
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
        "date": 1730499249939,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "123609.39",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38358.27",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50773de35fc154877abc1e143fa03dd6e7e0e525",
          "message": "Fix a TDX minor issue",
          "timestamp": "2024-11-02T02:11:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50773de35fc154877abc1e143fa03dd6e7e0e525"
        },
        "date": 1730585614272,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "104275.29",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "37133.31",
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
          "id": "efd49a96e3eb83094f6bc93f2723ef376b29fabb",
          "message": "Rename `cond()` to `try_op()`",
          "timestamp": "2024-11-01T12:02:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/efd49a96e3eb83094f6bc93f2723ef376b29fabb"
        },
        "date": 1730672434100,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "119760.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "36297.64",
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
          "id": "efd49a96e3eb83094f6bc93f2723ef376b29fabb",
          "message": "Rename `cond()` to `try_op()`",
          "timestamp": "2024-11-01T12:02:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/efd49a96e3eb83094f6bc93f2723ef376b29fabb"
        },
        "date": 1730758417597,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "104058.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "36764.71",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5b3a1d6dd39e86e07790d1febcebe1d25248094",
          "message": "Unify the qemu arguments generation",
          "timestamp": "2024-11-04T04:03:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5b3a1d6dd39e86e07790d1febcebe1d25248094"
        },
        "date": 1730845028182,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "131926.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38299.50",
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
          "id": "52338271608ce092a17367ffc86f1cea849abbee",
          "message": "Don't preempt without good reason",
          "timestamp": "2024-10-31T02:00:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/52338271608ce092a17367ffc86f1cea849abbee"
        },
        "date": 1730931281461,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "121359.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "35637.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "25a918d132277eff7ea202cacc4bfa284de2dec5",
          "message": "Print who and on which CPU the kernel panics",
          "timestamp": "2024-11-07T03:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/25a918d132277eff7ea202cacc4bfa284de2dec5"
        },
        "date": 1730976316532,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "128865.98",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "37495.31",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "25a918d132277eff7ea202cacc4bfa284de2dec5",
          "message": "Print who and on which CPU the kernel panics",
          "timestamp": "2024-11-07T03:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/25a918d132277eff7ea202cacc4bfa284de2dec5"
        },
        "date": 1730985334081,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "124688.28",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38850.04",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "25a918d132277eff7ea202cacc4bfa284de2dec5",
          "message": "Print who and on which CPU the kernel panics",
          "timestamp": "2024-11-07T03:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/25a918d132277eff7ea202cacc4bfa284de2dec5"
        },
        "date": 1731017605551,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "125313.29",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "36337.21",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491",
          "message": "Fix the title of ext2 and ramfs benchmark",
          "timestamp": "2024-11-08T03:08:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491"
        },
        "date": 1731041993156,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "127064.80",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "37313.43",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491",
          "message": "Fix the title of ext2 and ramfs benchmark",
          "timestamp": "2024-11-08T03:08:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491"
        },
        "date": 1731055770869,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "123915.74",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "37807.18",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491",
          "message": "Fix the title of ext2 and ramfs benchmark",
          "timestamp": "2024-11-08T03:08:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ad1ea4d66ea1b4f1c79f18c33dd3e83861f8491"
        },
        "date": 1731104053660,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "124843.95",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38240.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1f612e45f7fccb4caa3901ee26605f828ec64a06",
          "message": "Remove unnecessary page table items",
          "timestamp": "2024-11-09T11:22:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/1f612e45f7fccb4caa3901ee26605f828ec64a06"
        },
        "date": 1731191653694,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "126903.55",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "36697.25",
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
          "id": "11382524d1d23cc6d41adf977a72138baa39e38d",
          "message": "Use new `SpinLock` APIs in `wait.rs`",
          "timestamp": "2024-11-07T14:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/11382524d1d23cc6d41adf977a72138baa39e38d"
        },
        "date": 1731278224073,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "121506.68",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38299.50",
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
          "id": "11382524d1d23cc6d41adf977a72138baa39e38d",
          "message": "Use new `SpinLock` APIs in `wait.rs`",
          "timestamp": "2024-11-07T14:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/11382524d1d23cc6d41adf977a72138baa39e38d"
        },
        "date": 1731364398977,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "128534.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "36873.16",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "38682e3ed923c0ec7880f414267789a2ded06dbe",
          "message": "Assign callback to shared irq if there's no single irq line",
          "timestamp": "2024-11-12T03:39:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/38682e3ed923c0ec7880f414267789a2ded06dbe"
        },
        "date": 1731450859453,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "125156.45",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "57339.45",
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
          "id": "e6c613f53841983765a7b3c56ea9958775c76199",
          "message": "Rename `(Posix)ThreadExt` to `As(Posix)Thread`",
          "timestamp": "2024-11-12T01:53:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6c613f53841983765a7b3c56ea9958775c76199"
        },
        "date": 1731537505989,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "127877.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "60459.49",
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
          "id": "e6c613f53841983765a7b3c56ea9958775c76199",
          "message": "Rename `(Posix)ThreadExt` to `As(Posix)Thread`",
          "timestamp": "2024-11-12T01:53:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6c613f53841983765a7b3c56ea9958775c76199"
        },
        "date": 1731624277198,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "125470.52",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "60642.81",
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
          "id": "39d303c72f622a735927fd1d4fece11fe4b46001",
          "message": "Rename `get_current_userspace` to `current_userspace`",
          "timestamp": "2024-11-14T11:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/39d303c72f622a735927fd1d4fece11fe4b46001"
        },
        "date": 1731710275861,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "128534.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "60060.06",
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
          "id": "197d53c0ab1edbf8545d2ab827a930d66a1ab528",
          "message": "Accept sockets in the ESTABLISHED state",
          "timestamp": "2024-11-15T03:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/197d53c0ab1edbf8545d2ab827a930d66a1ab528"
        },
        "date": 1731796549775,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "124223.60",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "57703.40",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cautreoxit",
            "username": "Cautreoxit",
            "email": "huk@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "885950c2a4a65486524ac53e40f6b6515d7ebd3a",
          "message": "Add VirtioBlockFeature to cache virtio-blk's features",
          "timestamp": "2024-11-14T13:10:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/885950c2a4a65486524ac53e40f6b6515d7ebd3a"
        },
        "date": 1731882760407,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "123304.56",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "56116.72",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cautreoxit",
            "username": "Cautreoxit",
            "email": "huk@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "885950c2a4a65486524ac53e40f6b6515d7ebd3a",
          "message": "Add VirtioBlockFeature to cache virtio-blk's features",
          "timestamp": "2024-11-14T13:10:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/885950c2a4a65486524ac53e40f6b6515d7ebd3a"
        },
        "date": 1731969108759,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "126903.55",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "56465.27",
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
          "id": "b3f8d21c3db7310f7071b50dcbf8663bc4e507e1",
          "message": "Refine comments about the lock usage",
          "timestamp": "2024-11-18T13:07:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/b3f8d21c3db7310f7071b50dcbf8663bc4e507e1"
        },
        "date": 1732055668705,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "125786.16",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "58754.41",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732232716146,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "110375.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "64977.26",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732318510049,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "125313.29",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "65530.80",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732404987425,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "105042.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "62617.41",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732490851047,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "103412.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "54734.54",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e5075dab7c42182b164a433daa8ea6c7ff38bbc",
          "message": "Clear `DF` flag during trap handling to conform to x86-64 calling convention",
          "timestamp": "2024-11-24T14:46:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e5075dab7c42182b164a433daa8ea6c7ff38bbc"
        },
        "date": 1732577366445,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "126262.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "63816.21",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9da6af03943c15456cdfd781021820a7da78ea40",
          "message": "Add TDX debugging documentation",
          "timestamp": "2024-11-25T07:59:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/9da6af03943c15456cdfd781021820a7da78ea40"
        },
        "date": 1732663795005,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "103734.44",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "56753.69",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5313689d6fa91596f4bc52bf6fb866bf6a7a706f",
          "message": "Fix deadlock in FLUSH_OPS by disabling IRQ",
          "timestamp": "2024-11-26T13:04:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/5313689d6fa91596f4bc52bf6fb866bf6a7a706f"
        },
        "date": 1732750602717,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "100603.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "53792.36",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f762eb8913c992d932147f3e62ab47519fef8a91",
          "message": "Remove the `lazy_static` dependency",
          "timestamp": "2024-11-28T05:53:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/f762eb8913c992d932147f3e62ab47519fef8a91"
        },
        "date": 1732837208624,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "102459.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "54585.15",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5e35704e3896897550ac4ee383923d1e054f3dd1",
          "message": "Support eagerly FPU state save/restore\n\nCo-authored-by: Shaowei Song <songshaowei.ssw@antgroup.com>",
          "timestamp": "2024-11-28T11:36:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/5e35704e3896897550ac4ee383923d1e054f3dd1"
        },
        "date": 1732923830763,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "125944.58",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "53908.36",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6d3bb5a9d0b1d4d53e298402bc8fec57dc899f15",
          "message": "Fix compile error caused by updated `Step::steps_between` in Rust",
          "timestamp": "2024-11-30T10:58:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d3bb5a9d0b1d4d53e298402bc8fec57dc899f15"
        },
        "date": 1733096448620,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "124688.28",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "55524.71",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "anbo225",
            "username": "anbo225",
            "email": "anbo225@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9608a57cb0496ec2da69de33bd40b3945afb17d6",
          "message": "Make sys_setuid and sys_setgid behave consistently with Linux",
          "timestamp": "2024-11-29T06:28:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/9608a57cb0496ec2da69de33bd40b3945afb17d6"
        },
        "date": 1733183537108,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "125944.58",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "63011.97",
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
          "id": "a260411a2a8bb1bcc12b9920b33ad19c8a82899e",
          "message": "Implement `WriteIrqDisabled`",
          "timestamp": "2024-12-03T02:51:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/a260411a2a8bb1bcc12b9920b33ad19c8a82899e"
        },
        "date": 1733269009021,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "124533.01",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "59630.29",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd",
          "message": "Inject the logger for Asterinas",
          "timestamp": "2024-11-15T08:58:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd"
        },
        "date": 1733291466464,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "125944.58",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "53995.68",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd",
          "message": "Inject the logger for Asterinas",
          "timestamp": "2024-11-15T08:58:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd"
        },
        "date": 1733357287109,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "121802.68",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "63091.48",
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
          "id": "36fc1d37573f6809980aee652f4209c64979b209",
          "message": "Move FS things to `PosixThread`",
          "timestamp": "2024-12-01T03:41:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/36fc1d37573f6809980aee652f4209c64979b209"
        },
        "date": 1733442219282,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "125313.29",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "63613.23",
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
          "id": "36fc1d37573f6809980aee652f4209c64979b209",
          "message": "Move FS things to `PosixThread`",
          "timestamp": "2024-12-01T03:41:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/36fc1d37573f6809980aee652f4209c64979b209"
        },
        "date": 1733528641757,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "104602.52",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "54884.74",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733615211168,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "127551.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "59880.24",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733701878538,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "122850.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "60569.35",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733787862462,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "102354.15",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "53276.50",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733885477318,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "126582.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "61425.06",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "4316247d82d86e1230f23883c193c26133b12e6a",
          "message": "Add ext2 benchmarks of sqlite",
          "timestamp": "2024-12-11T09:56:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/4316247d82d86e1230f23883c193c26133b12e6a"
        },
        "date": 1733960015741,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "103519.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "62932.66",
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
          "id": "8bbbde4ccb9d31ed48ae99f209538c16d14016bb",
          "message": "Use `Ordering::Relaxed` for `is_nonblocking`",
          "timestamp": "2024-12-08T08:26:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bbbde4ccb9d31ed48ae99f209538c16d14016bb"
        },
        "date": 1734046409450,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "103519.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "60168.47",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "acc10376e60291386dd1026f238140d145230808",
          "message": "Update benchmark README",
          "timestamp": "2024-12-14T05:14:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/acc10376e60291386dd1026f238140d145230808"
        },
        "date": 1734565228419,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "123915.74",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "92250.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "9a540d0fb6d073f1feb20c30dc78230c46c595a3",
          "message": "Notify virtqueue in a batch manner",
          "timestamp": "2024-12-17T02:24:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/9a540d0fb6d073f1feb20c30dc78230c46c595a3"
        },
        "date": 1734651773823,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "125000.00",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "108813.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1734738945084,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "103412.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "99403.58",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1734825205048,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "104384.13",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "99108.03",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1e3403e756ced989ddd44c9f0c81cf71557e962a",
          "message": "Support ELF files with zero `p_filesz`.",
          "timestamp": "2024-12-19T03:33:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/1e3403e756ced989ddd44c9f0c81cf71557e962a"
        },
        "date": 1734911774074,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "126262.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "109890.11",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1e3403e756ced989ddd44c9f0c81cf71557e962a",
          "message": "Support ELF files with zero `p_filesz`.",
          "timestamp": "2024-12-19T03:33:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/1e3403e756ced989ddd44c9f0c81cf71557e962a"
        },
        "date": 1734998099809,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "124688.28",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "97943.19",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "8a27f7a3b57704d5e71952be1d55069745150ffe",
          "message": "Clarify the naming conventions under benchmark/schbench/",
          "timestamp": "2024-12-23T07:50:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a27f7a3b57704d5e71952be1d55069745150ffe"
        },
        "date": 1735084359188,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "103412.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "107991.36",
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
          "id": "5aa73d3bcff8a549176d4366c64ee8bc56de9e6d",
          "message": "Use `REF_COUNT_MAX` to avoid overflowing",
          "timestamp": "2024-12-23T15:09:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa73d3bcff8a549176d4366c64ee8bc56de9e6d"
        },
        "date": 1735171191030,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "114942.53",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "100000.00",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1735564615571,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "103092.78",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120772.95",
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
          "id": "7334c93ff5ac47a1a82e63b035514f91669c3c1b",
          "message": "Make bigtcp error wrappers consistent",
          "timestamp": "2024-12-30T07:47:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/7334c93ff5ac47a1a82e63b035514f91669c3c1b"
        },
        "date": 1735604991320,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "123304.56",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "20959.97",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "6e691d5838e48c71f7947b1c571022dbd9b1c932",
          "message": "Fix several typos in benchmarks",
          "timestamp": "2024-12-31T03:07:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e691d5838e48c71f7947b1c571022dbd9b1c932"
        },
        "date": 1735628656792,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "123609.39",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "21473.05",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "6e691d5838e48c71f7947b1c571022dbd9b1c932",
          "message": "Fix several typos in benchmarks",
          "timestamp": "2024-12-31T03:07:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e691d5838e48c71f7947b1c571022dbd9b1c932"
        },
        "date": 1735691420799,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "124069.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "149253.73",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
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
          "id": "0c8200dc7b6bb8d9f7a8c319c67b842d83e25a75",
          "message": "Add nginx benchmark and workaround",
          "timestamp": "2024-12-31T06:40:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c8200dc7b6bb8d9f7a8c319c67b842d83e25a75"
        },
        "date": 1735778842373,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "125156.45",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "148809.53",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1735865358984,
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
            "value": "151975.69",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1735955156553,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "103412.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "124069.48",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736038253086,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance with 20 concurrency and 100000 requests in total",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "125786.16",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "153374.23",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}