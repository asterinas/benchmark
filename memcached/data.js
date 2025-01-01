window.BENCHMARK_DATA = {
  "lastUpdate": 1735691146444,
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
        "date": 1735604691585,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput with 8 client threads, 32 concurrency and 10k window",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4332820",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "559103",
            "unit": "operations per second",
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
        "date": 1735628355287,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput with 8 client threads, 32 concurrency and 10k window",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3033176",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "580262",
            "unit": "operations per second",
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
        "date": 1735691116117,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput with 8 client threads, 32 concurrency and 10k window",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4216502",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4752875",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "t8_conc32_window20k": [
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
        "date": 1735564405656,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput with 8 client threads, 32 concurrency and 20k window",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3667541",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3600805",
            "unit": "operations per second",
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
        "date": 1735604731904,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput with 8 client threads, 32 concurrency and 20k window",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4485117",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "589271",
            "unit": "operations per second",
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
        "date": 1735628398845,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput with 8 client threads, 32 concurrency and 20k window",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3802746",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "596231",
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
        "date": 1735604649827,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput with 16 client threads, 64 concurrency and 10k window",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5132815",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "556252",
            "unit": "operations per second",
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
        "date": 1735628314026,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput with 16 client threads, 64 concurrency and 10k window",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4965633",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "569860",
            "unit": "operations per second",
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
        "date": 1735691071555,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput with 16 client threads, 64 concurrency and 10k window",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6103259",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4774769",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}