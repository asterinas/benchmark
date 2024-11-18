window.BENCHMARK_DATA = {
  "lastUpdate": 1731968801264,
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
      }
    ]
  }
}