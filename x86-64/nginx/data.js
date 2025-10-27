window.BENCHMARK_DATA = {
  "lastUpdate": 1761604388347,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "http_file4KB_bw": [
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f2ead0b3edfe621b6c37bdfb61172023b5abc3d7",
          "message": "Remove O_TMPFILE flag because it is not really supported",
          "timestamp": "2025-08-07T14:02:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/f2ead0b3edfe621b6c37bdfb61172023b5abc3d7"
        },
        "date": 1754790250762,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7146.13",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4324.60",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "597b0b5f25f91b8500894fa30b133aa415f7ccab",
          "message": "Disable kernel traps before going to userspace",
          "timestamp": "2025-08-08T12:30:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/597b0b5f25f91b8500894fa30b133aa415f7ccab"
        },
        "date": 1754874418798,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7483.70",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5744.31",
            "unit": "Requests per second",
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
          "id": "53bb7ea8ae4ccca020ea1d3f5e047dca4124edba",
          "message": "Assign keyboard code owners",
          "timestamp": "2025-08-11T10:46:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/53bb7ea8ae4ccca020ea1d3f5e047dca4124edba"
        },
        "date": 1754960582878,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7480.00",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5794.15",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755047193170,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5967.00",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4365.61",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755133675368,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7252.44",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5863.70",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c15106734afc9fd0473888b0e8a6fb9ad6504237",
          "message": "Align `MS_ASYNC` and `MS_SYNC` flags with Linux behavior",
          "timestamp": "2025-08-14T03:53:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/c15106734afc9fd0473888b0e8a6fb9ad6504237"
        },
        "date": 1755224798611,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6006.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5747.89",
            "unit": "Requests per second",
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
          "id": "35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f",
          "message": "Bump the Docker image version",
          "timestamp": "2025-08-14T07:39:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f"
        },
        "date": 1755304735689,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6293.43",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4241.74",
            "unit": "Requests per second",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755396529892,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6020.23",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5551.40",
            "unit": "Requests per second",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755484169555,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7210.77",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5169.82",
            "unit": "Requests per second",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755567739092,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6103.94",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4390.82",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a73f210c7a7dc2ca806594ccdeb644e162ff30fb",
          "message": "Make `wake_robust_futex` atomic\n\nReplace `VmWriter::atomic_update` with `VmWriter::atomic_compare_exchange`,\nwhich takes the old value for comparison and new value instead of a\nclosure to compute it. This version has one less unsafe call.\n\nThen use `atomic_compare_exchange` to reimplement the looping logic\nof `wake_robust_futex` and make it atomic.",
          "timestamp": "2025-08-18T23:34:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/a73f210c7a7dc2ca806594ccdeb644e162ff30fb"
        },
        "date": 1755646294687,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7507.01",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5567.87",
            "unit": "Requests per second",
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
          "id": "924d87398ab75723a0cf9e1466cbb604c513a6d6",
          "message": "Introduce `first_context_switch`",
          "timestamp": "2025-08-13T02:16:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/924d87398ab75723a0cf9e1466cbb604c513a6d6"
        },
        "date": 1755751411078,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7574.44",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5555.29",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9ab035c65491676d4ef46e52ede31ce6998a0b59",
          "message": "Rename the docs directory to book",
          "timestamp": "2025-08-21T10:40:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/9ab035c65491676d4ef46e52ede31ce6998a0b59"
        },
        "date": 1755820047675,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7301.08",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5859.91",
            "unit": "Requests per second",
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
          "id": "7fad653992e7d9cbbe4c572f7ba339a779ef8025",
          "message": "Use 6.16.0 Linux kernel for benchmark tests & Add Linux TDX benchmark tests",
          "timestamp": "2025-07-07T14:19:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/7fad653992e7d9cbbe4c572f7ba339a779ef8025"
        },
        "date": 1755909488340,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7339.42",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5835.91",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0a126a0c8c3d05e5d55132500d47dadec1605011",
          "message": "Set correct default value for VdsoData::mask",
          "timestamp": "2025-08-22T12:08:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/0a126a0c8c3d05e5d55132500d47dadec1605011"
        },
        "date": 1755993074234,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6011.83",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5027.57",
            "unit": "Requests per second",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756080937617,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5909.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5341.44",
            "unit": "Requests per second",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756163406042,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7474.67",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5451.61",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "888eecb3509dac97ca739dabafbb5777d269a154",
          "message": "Patch a futex vulnerability\n\nIf the futex wait operation was interrupted by a signal or timed out, the\n`FutexItem` must be dequeued and dropped. Otherwise, malicious user programs\ncould repeatedly issue futex wait operations to exhaust kernel memory.\n\nDue to asynchronicity, this removal can't be done by queue position nor by\nfutex key match up:\n* The position might have changed during the pause as some earlier futex might\n  have been dequeued\n* If two futexes with the same key are enqueued and then one of them times out\n  or is interrupted, a removal by key would likely dequeue the wrong futex\n\nTherefore, we need to perform a removal by unique global futex ID.",
          "timestamp": "2025-08-26T08:43:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/888eecb3509dac97ca739dabafbb5777d269a154"
        },
        "date": 1756252728003,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7109.04",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5340.58",
            "unit": "Requests per second",
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
          "id": "2098b11b6830b4e923474eb777c7070b08346476",
          "message": "Unify the implementation of /proc/[pid] and /proc/[pid]/task/[tid]",
          "timestamp": "2025-08-18T11:03:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/2098b11b6830b4e923474eb777c7070b08346476"
        },
        "date": 1756336522968,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7369.64",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5889.90",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d3e27ae03a41e7e3dd51293d722ea91fefd44218",
          "message": "Use vDSO for fallback of user-provided sa_restorer on RISC-V platforms",
          "timestamp": "2025-08-28T03:20:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3e27ae03a41e7e3dd51293d722ea91fefd44218"
        },
        "date": 1756422922284,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7142.60",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5602.01",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f56d2f3bad8ff769b50507356c0306488926d1cb",
          "message": "`context.rs` enhancements\n\n* Improve the phrasing of some docstrings and comments\n* Add warning comments about attempts to validate memory addresses\n  at reader/writer instantiation time\n* Create the `reader_writer` method for ergonomically instantiate\n  a reader/writer pair covering the same memory region. This method\n  is also slightly more efficient than calling `reader` and `writer`\n  separately\n* Clean up `check_vaddr` for clarity and rename it to `check_vaddr_lowerbound`\n  for explicity\n* Include the data length check before calling `check_vaddr_lowerbound`\n  in `atomic_load` and `atomic_fetch_update` for further consistency\n  with the delayed buffer validation",
          "timestamp": "2025-08-29T09:58:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/f56d2f3bad8ff769b50507356c0306488926d1cb"
        },
        "date": 1757134619822,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7091.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5830.19",
            "unit": "Requests per second",
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
          "id": "45b5bd39f1aa61bfc6f00c509913b7ec10a3a68f",
          "message": "Disable I/O APIC entries in initialization",
          "timestamp": "2025-08-08T07:44:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/45b5bd39f1aa61bfc6f00c509913b7ec10a3a68f"
        },
        "date": 1757136358210,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7134.50",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5882.27",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757372411688,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7367.68",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5840.95",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757460467276,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6793.59",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5885.69",
            "unit": "Requests per second",
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
          "id": "8c36964bb940494cd8d1ad14cab0a93b0fd77598",
          "message": "Introduce VmPrinter to write kernel generated data",
          "timestamp": "2025-09-10T11:59:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8c36964bb940494cd8d1ad14cab0a93b0fd77598"
        },
        "date": 1757545131695,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6618.86",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5240.89",
            "unit": "Requests per second",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757716416165,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7228.74",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5654.33",
            "unit": "Requests per second",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757803573913,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5963.92",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4250.52",
            "unit": "Requests per second",
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
          "id": "391f11f1aa112382e7a68d6eb6ec443bc5289eeb",
          "message": "Make per-CPU callbacks explicit",
          "timestamp": "2025-09-20T01:19:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/391f11f1aa112382e7a68d6eb6ec443bc5289eeb"
        },
        "date": 1758401957178,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7676.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5791.36",
            "unit": "Requests per second",
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
          "id": "37479383da4868302492d0d8f78562d159aa2621",
          "message": "Assign pci code owner",
          "timestamp": "2025-08-28T11:37:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/37479383da4868302492d0d8f78562d159aa2621"
        },
        "date": 1758489000829,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7596.11",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6114.03",
            "unit": "Requests per second",
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
          "id": "eb9edbd67f5da8f2dd5f58f18a397650b0e4d187",
          "message": "Bump the Docker image to 0.16.1",
          "timestamp": "2025-09-22T11:14:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb9edbd67f5da8f2dd5f58f18a397650b0e4d187"
        },
        "date": 1758665931035,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7851.56",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5777.71",
            "unit": "Requests per second",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758752270345,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5544.13",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5685.54",
            "unit": "Requests per second",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758838438512,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7652.15",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5888.82",
            "unit": "Requests per second",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "2c456709b6f6c058b1a68ee05f99b2b6119df1a9",
          "message": "Block a setuid ltp test for exfat test",
          "timestamp": "2025-09-26T08:19:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c456709b6f6c058b1a68ee05f99b2b6119df1a9"
        },
        "date": 1758925494681,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8117.56",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5744.63",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yang Zhichao",
            "username": "IfReturn",
            "email": "yzc2004.12@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "66356e133db8eee843bdffae29303e3e62fc4e7e",
          "message": "Add support for `/proc/stat` and `/proc/uptime`",
          "timestamp": "2025-09-19T13:55:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/66356e133db8eee843bdffae29303e3e62fc4e7e"
        },
        "date": 1759011726020,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7804.97",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5763.56",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "899db770f62234e89590ce1ae35067f7082107a5",
          "message": "Fix parameter passing of `preadv/pwritev`-family syscalls",
          "timestamp": "2025-09-27T17:35:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/899db770f62234e89590ce1ae35067f7082107a5"
        },
        "date": 1759098466109,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7379.71",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5715.03",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "294c55d0dfa5e5784729548f9764b26e608c18ff",
          "message": "Fix `semid_ds`'s layout on non-x86_64 platforms",
          "timestamp": "2025-09-27T18:01:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/294c55d0dfa5e5784729548f9764b26e608c18ff"
        },
        "date": 1759184573376,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7802.38",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5912.97",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759357558344,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7445.99",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5901.53",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759443778330,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7962.98",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5767.04",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759530395574,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7369.53",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5288.86",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759616917783,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7819.24",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5400.57",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759703123652,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7706.27",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5338.50",
            "unit": "Requests per second",
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
          "id": "56d78ab64965194ad03cb6cde07fd5d98b17129d",
          "message": "Fix some minor style issues",
          "timestamp": "2025-09-27T15:55:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/56d78ab64965194ad03cb6cde07fd5d98b17129d"
        },
        "date": 1759789840194,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5955.81",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5654.71",
            "unit": "Requests per second",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759880276156,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7650.60",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5814.13",
            "unit": "Requests per second",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759962472347,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7602.90",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5708.00",
            "unit": "Requests per second",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760049008486,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6925.61",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5711.12",
            "unit": "Requests per second",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760135487388,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7521.74",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5799.14",
            "unit": "Requests per second",
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
          "id": "0be36ee2c1ad03686bb1150ed15003d374c6aee2",
          "message": "Fix virtio-mmio interrupt handling",
          "timestamp": "2025-10-07T15:42:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/0be36ee2c1ad03686bb1150ed15003d374c6aee2"
        },
        "date": 1760394699022,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7508.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5790.66",
            "unit": "Requests per second",
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
          "id": "257b0c63b1f039e1ec4fd94c2c7bd549f8db2830",
          "message": "Fix ext2 block groups count",
          "timestamp": "2025-10-14T03:53:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/257b0c63b1f039e1ec4fd94c2c7bd549f8db2830"
        },
        "date": 1760481333821,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7728.70",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5680.37",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f69d39e9c16db9295f89c084376244d7265612de",
          "message": "Add a regression test for `/proc/[pid]/mem`",
          "timestamp": "2025-09-28T14:53:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/f69d39e9c16db9295f89c084376244d7265612de"
        },
        "date": 1760567745253,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7504.26",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5790.69",
            "unit": "Requests per second",
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
          "id": "384e5bc70da4fcc7d150140a0ae3706b6a33a91a",
          "message": "Fix an off-by-one bug in the trap frame",
          "timestamp": "2025-10-15T15:38:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/384e5bc70da4fcc7d150140a0ae3706b6a33a91a"
        },
        "date": 1760654034072,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7447.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5734.68",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "782301c2399f18865035fcb966777c164d915afa",
          "message": "Remove open-related APIs from FsResolver",
          "timestamp": "2025-10-16T09:50:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/782301c2399f18865035fcb966777c164d915afa"
        },
        "date": 1760743282221,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5780.75",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4336.31",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760826899035,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7454.30",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5844.73",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760913438023,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6759.84",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5862.97",
            "unit": "Requests per second",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1760999796087,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7568.76",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5864.80",
            "unit": "Requests per second",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1761086198185,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7807.00",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5763.12",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761180301665,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7980.56",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5292.60",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761259325418,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7272.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5771.31",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "8251d48bf26f169c2c0b14825b2721472e8159cf",
          "message": "Add RISC-V PLIC support",
          "timestamp": "2025-05-28T07:35:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/8251d48bf26f169c2c0b14825b2721472e8159cf"
        },
        "date": 1761353181329,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7714.16",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5740.72",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6a67807fd003692a75abbf7f86085eba16bc25d1",
          "message": "Implement `IdSet::iter_in`\n\nThis patch enables more expressive ways to slice and iterate over\nthe `Id`s in an `IdSet` with `IdSet::iter_in`, which takes an arbitrary\n`IdSetSlicer`.\n\n`IdSet::iter_in` efficiently slices out unintended inner parts and\nthen, within the remaining parts, skips inactive bits by using\n`BitSlice::iter_ones` from the `bitvec` crate.\n\nIt also delivers several implementations of `IdSetSlicer` so OSTD\nconsumers can represent `Id` ranges ergonomically.\n\nIn the Asterinas kernel, `CpuSet::iter_in` enables a cleaner way to\ndefine an interator that cycles over the CPUs.",
          "timestamp": "2025-10-22T18:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/6a67807fd003692a75abbf7f86085eba16bc25d1"
        },
        "date": 1761431860813,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7549.19",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5801.76",
            "unit": "Requests per second",
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761518383265,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7453.71",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5811.16",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "http_file8KB_bw": [
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f2ead0b3edfe621b6c37bdfb61172023b5abc3d7",
          "message": "Remove O_TMPFILE flag because it is not really supported",
          "timestamp": "2025-08-07T14:02:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/f2ead0b3edfe621b6c37bdfb61172023b5abc3d7"
        },
        "date": 1754790163249,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5874.29",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5920.19",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "597b0b5f25f91b8500894fa30b133aa415f7ccab",
          "message": "Disable kernel traps before going to userspace",
          "timestamp": "2025-08-08T12:30:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/597b0b5f25f91b8500894fa30b133aa415f7ccab"
        },
        "date": 1754874318070,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7220.25",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4350.46",
            "unit": "Requests per second",
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
          "id": "53bb7ea8ae4ccca020ea1d3f5e047dca4124edba",
          "message": "Assign keyboard code owners",
          "timestamp": "2025-08-11T10:46:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/53bb7ea8ae4ccca020ea1d3f5e047dca4124edba"
        },
        "date": 1754960493909,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7468.17",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5793.87",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755047103271,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6926.09",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5632.15",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755133583787,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6544.34",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5741.91",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c15106734afc9fd0473888b0e8a6fb9ad6504237",
          "message": "Align `MS_ASYNC` and `MS_SYNC` flags with Linux behavior",
          "timestamp": "2025-08-14T03:53:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/c15106734afc9fd0473888b0e8a6fb9ad6504237"
        },
        "date": 1755224707916,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6895.88",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5606.64",
            "unit": "Requests per second",
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
          "id": "35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f",
          "message": "Bump the Docker image version",
          "timestamp": "2025-08-14T07:39:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f"
        },
        "date": 1755304642515,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7310.56",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5713.58",
            "unit": "Requests per second",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755396435231,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7227.60",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5169.19",
            "unit": "Requests per second",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755484076849,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5932.21",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4899.18",
            "unit": "Requests per second",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755567642564,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5920.27",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4201.97",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a73f210c7a7dc2ca806594ccdeb644e162ff30fb",
          "message": "Make `wake_robust_futex` atomic\n\nReplace `VmWriter::atomic_update` with `VmWriter::atomic_compare_exchange`,\nwhich takes the old value for comparison and new value instead of a\nclosure to compute it. This version has one less unsafe call.\n\nThen use `atomic_compare_exchange` to reimplement the looping logic\nof `wake_robust_futex` and make it atomic.",
          "timestamp": "2025-08-18T23:34:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/a73f210c7a7dc2ca806594ccdeb644e162ff30fb"
        },
        "date": 1755646198471,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7279.08",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6082.12",
            "unit": "Requests per second",
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
          "id": "924d87398ab75723a0cf9e1466cbb604c513a6d6",
          "message": "Introduce `first_context_switch`",
          "timestamp": "2025-08-13T02:16:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/924d87398ab75723a0cf9e1466cbb604c513a6d6"
        },
        "date": 1755751313450,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6107.12",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5766.69",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9ab035c65491676d4ef46e52ede31ce6998a0b59",
          "message": "Rename the docs directory to book",
          "timestamp": "2025-08-21T10:40:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/9ab035c65491676d4ef46e52ede31ce6998a0b59"
        },
        "date": 1755819949550,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7406.38",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5852.04",
            "unit": "Requests per second",
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
          "id": "7fad653992e7d9cbbe4c572f7ba339a779ef8025",
          "message": "Use 6.16.0 Linux kernel for benchmark tests & Add Linux TDX benchmark tests",
          "timestamp": "2025-07-07T14:19:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/7fad653992e7d9cbbe4c572f7ba339a779ef8025"
        },
        "date": 1755909386761,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5978.81",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4314.80",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0a126a0c8c3d05e5d55132500d47dadec1605011",
          "message": "Set correct default value for VdsoData::mask",
          "timestamp": "2025-08-22T12:08:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/0a126a0c8c3d05e5d55132500d47dadec1605011"
        },
        "date": 1755992972060,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7038.77",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4364.21",
            "unit": "Requests per second",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756080834204,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7067.94",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4400.19",
            "unit": "Requests per second",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756163302300,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7404.49",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5784.08",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "888eecb3509dac97ca739dabafbb5777d269a154",
          "message": "Patch a futex vulnerability\n\nIf the futex wait operation was interrupted by a signal or timed out, the\n`FutexItem` must be dequeued and dropped. Otherwise, malicious user programs\ncould repeatedly issue futex wait operations to exhaust kernel memory.\n\nDue to asynchronicity, this removal can't be done by queue position nor by\nfutex key match up:\n* The position might have changed during the pause as some earlier futex might\n  have been dequeued\n* If two futexes with the same key are enqueued and then one of them times out\n  or is interrupted, a removal by key would likely dequeue the wrong futex\n\nTherefore, we need to perform a removal by unique global futex ID.",
          "timestamp": "2025-08-26T08:43:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/888eecb3509dac97ca739dabafbb5777d269a154"
        },
        "date": 1756252605874,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7279.01",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5599.78",
            "unit": "Requests per second",
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
          "id": "2098b11b6830b4e923474eb777c7070b08346476",
          "message": "Unify the implementation of /proc/[pid] and /proc/[pid]/task/[tid]",
          "timestamp": "2025-08-18T11:03:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/2098b11b6830b4e923474eb777c7070b08346476"
        },
        "date": 1756336420183,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5868.65",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5204.85",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d3e27ae03a41e7e3dd51293d722ea91fefd44218",
          "message": "Use vDSO for fallback of user-provided sa_restorer on RISC-V platforms",
          "timestamp": "2025-08-28T03:20:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3e27ae03a41e7e3dd51293d722ea91fefd44218"
        },
        "date": 1756422817999,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6074.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5552.82",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f56d2f3bad8ff769b50507356c0306488926d1cb",
          "message": "`context.rs` enhancements\n\n* Improve the phrasing of some docstrings and comments\n* Add warning comments about attempts to validate memory addresses\n  at reader/writer instantiation time\n* Create the `reader_writer` method for ergonomically instantiate\n  a reader/writer pair covering the same memory region. This method\n  is also slightly more efficient than calling `reader` and `writer`\n  separately\n* Clean up `check_vaddr` for clarity and rename it to `check_vaddr_lowerbound`\n  for explicity\n* Include the data length check before calling `check_vaddr_lowerbound`\n  in `atomic_load` and `atomic_fetch_update` for further consistency\n  with the delayed buffer validation",
          "timestamp": "2025-08-29T09:58:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/f56d2f3bad8ff769b50507356c0306488926d1cb"
        },
        "date": 1757134567072,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6893.73",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4329.76",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757372303821,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5978.52",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5584.14",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757460359477,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7160.94",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5749.86",
            "unit": "Requests per second",
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
          "id": "8c36964bb940494cd8d1ad14cab0a93b0fd77598",
          "message": "Introduce VmPrinter to write kernel generated data",
          "timestamp": "2025-09-10T11:59:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8c36964bb940494cd8d1ad14cab0a93b0fd77598"
        },
        "date": 1757545022731,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7430.56",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5588.72",
            "unit": "Requests per second",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757716307665,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7267.24",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5759.40",
            "unit": "Requests per second",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757803462589,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6788.38",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4297.42",
            "unit": "Requests per second",
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
          "id": "391f11f1aa112382e7a68d6eb6ec443bc5289eeb",
          "message": "Make per-CPU callbacks explicit",
          "timestamp": "2025-09-20T01:19:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/391f11f1aa112382e7a68d6eb6ec443bc5289eeb"
        },
        "date": 1758401842982,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7777.94",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4430.27",
            "unit": "Requests per second",
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
          "id": "37479383da4868302492d0d8f78562d159aa2621",
          "message": "Assign pci code owner",
          "timestamp": "2025-08-28T11:37:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/37479383da4868302492d0d8f78562d159aa2621"
        },
        "date": 1758488887166,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5614.11",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5669.34",
            "unit": "Requests per second",
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
          "id": "eb9edbd67f5da8f2dd5f58f18a397650b0e4d187",
          "message": "Bump the Docker image to 0.16.1",
          "timestamp": "2025-09-22T11:14:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb9edbd67f5da8f2dd5f58f18a397650b0e4d187"
        },
        "date": 1758665815702,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7668.25",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5830.36",
            "unit": "Requests per second",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758752155127,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7685.70",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5212.11",
            "unit": "Requests per second",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758838320288,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5000.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5839.10",
            "unit": "Requests per second",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "2c456709b6f6c058b1a68ee05f99b2b6119df1a9",
          "message": "Block a setuid ltp test for exfat test",
          "timestamp": "2025-09-26T08:19:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c456709b6f6c058b1a68ee05f99b2b6119df1a9"
        },
        "date": 1758925376738,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7538.88",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4444.96",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yang Zhichao",
            "username": "IfReturn",
            "email": "yzc2004.12@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "66356e133db8eee843bdffae29303e3e62fc4e7e",
          "message": "Add support for `/proc/stat` and `/proc/uptime`",
          "timestamp": "2025-09-19T13:55:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/66356e133db8eee843bdffae29303e3e62fc4e7e"
        },
        "date": 1759011607828,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6796.49",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5306.20",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "899db770f62234e89590ce1ae35067f7082107a5",
          "message": "Fix parameter passing of `preadv/pwritev`-family syscalls",
          "timestamp": "2025-09-27T17:35:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/899db770f62234e89590ce1ae35067f7082107a5"
        },
        "date": 1759098346486,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7316.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5730.25",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "294c55d0dfa5e5784729548f9764b26e608c18ff",
          "message": "Fix `semid_ds`'s layout on non-x86_64 platforms",
          "timestamp": "2025-09-27T18:01:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/294c55d0dfa5e5784729548f9764b26e608c18ff"
        },
        "date": 1759184452429,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7046.82",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5264.99",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759357434370,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7730.18",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5863.57",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759443653677,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5299.00",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5912.16",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759530269636,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6629.69",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5836.77",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759616788700,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7497.03",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5801.55",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759702998453,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6013.45",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5754.75",
            "unit": "Requests per second",
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
          "id": "56d78ab64965194ad03cb6cde07fd5d98b17129d",
          "message": "Fix some minor style issues",
          "timestamp": "2025-09-27T15:55:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/56d78ab64965194ad03cb6cde07fd5d98b17129d"
        },
        "date": 1759789708605,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7100.84",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5955.53",
            "unit": "Requests per second",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759880144690,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6002.53",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5731.85",
            "unit": "Requests per second",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759962339378,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6000.82",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5516.25",
            "unit": "Requests per second",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760048875031,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6988.34",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5858.37",
            "unit": "Requests per second",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760135352807,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7777.25",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5726.74",
            "unit": "Requests per second",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760221727898,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5949.72",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5819.25",
            "unit": "Requests per second",
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
          "id": "0be36ee2c1ad03686bb1150ed15003d374c6aee2",
          "message": "Fix virtio-mmio interrupt handling",
          "timestamp": "2025-10-07T15:42:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/0be36ee2c1ad03686bb1150ed15003d374c6aee2"
        },
        "date": 1760394558133,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5912.00",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4395.07",
            "unit": "Requests per second",
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
          "id": "257b0c63b1f039e1ec4fd94c2c7bd549f8db2830",
          "message": "Fix ext2 block groups count",
          "timestamp": "2025-10-14T03:53:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/257b0c63b1f039e1ec4fd94c2c7bd549f8db2830"
        },
        "date": 1760481192374,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7399.98",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4731.47",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f69d39e9c16db9295f89c084376244d7265612de",
          "message": "Add a regression test for `/proc/[pid]/mem`",
          "timestamp": "2025-09-28T14:53:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/f69d39e9c16db9295f89c084376244d7265612de"
        },
        "date": 1760567600213,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7564.99",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5346.92",
            "unit": "Requests per second",
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
          "id": "384e5bc70da4fcc7d150140a0ae3706b6a33a91a",
          "message": "Fix an off-by-one bug in the trap frame",
          "timestamp": "2025-10-15T15:38:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/384e5bc70da4fcc7d150140a0ae3706b6a33a91a"
        },
        "date": 1760653890090,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6956.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5713.68",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "782301c2399f18865035fcb966777c164d915afa",
          "message": "Remove open-related APIs from FsResolver",
          "timestamp": "2025-10-16T09:50:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/782301c2399f18865035fcb966777c164d915afa"
        },
        "date": 1760743135618,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5356.73",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5605.64",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760826752289,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5873.51",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3835.64",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760913287680,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7689.05",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5752.72",
            "unit": "Requests per second",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1760999645752,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7435.12",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5409.78",
            "unit": "Requests per second",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1761086048260,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5378.08",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3801.39",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761180119871,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7375.69",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5654.04",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761259172115,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7302.72",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5668.48",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "8251d48bf26f169c2c0b14825b2721472e8159cf",
          "message": "Add RISC-V PLIC support",
          "timestamp": "2025-05-28T07:35:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/8251d48bf26f169c2c0b14825b2721472e8159cf"
        },
        "date": 1761352995647,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7811.97",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5662.20",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6a67807fd003692a75abbf7f86085eba16bc25d1",
          "message": "Implement `IdSet::iter_in`\n\nThis patch enables more expressive ways to slice and iterate over\nthe `Id`s in an `IdSet` with `IdSet::iter_in`, which takes an arbitrary\n`IdSetSlicer`.\n\n`IdSet::iter_in` efficiently slices out unintended inner parts and\nthen, within the remaining parts, skips inactive bits by using\n`BitSlice::iter_ones` from the `bitvec` crate.\n\nIt also delivers several implementations of `IdSetSlicer` so OSTD\nconsumers can represent `Id` ranges ergonomically.\n\nIn the Asterinas kernel, `CpuSet::iter_in` enables a cleaner way to\ndefine an interator that cycles over the CPUs.",
          "timestamp": "2025-10-22T18:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/6a67807fd003692a75abbf7f86085eba16bc25d1"
        },
        "date": 1761431707043,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7772.85",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5693.97",
            "unit": "Requests per second",
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761518226685,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7017.49",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5504.48",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "http_file16KB_bw": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755047283840,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6010.29",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5592.20",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755133767218,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7297.75",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5763.85",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c15106734afc9fd0473888b0e8a6fb9ad6504237",
          "message": "Align `MS_ASYNC` and `MS_SYNC` flags with Linux behavior",
          "timestamp": "2025-08-14T03:53:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/c15106734afc9fd0473888b0e8a6fb9ad6504237"
        },
        "date": 1755224889820,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6724.82",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5843.93",
            "unit": "Requests per second",
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
          "id": "35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f",
          "message": "Bump the Docker image version",
          "timestamp": "2025-08-14T07:39:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f"
        },
        "date": 1755304829066,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7075.29",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5777.22",
            "unit": "Requests per second",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755396624492,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6023.50",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5729.73",
            "unit": "Requests per second",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755484262598,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6030.70",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4357.94",
            "unit": "Requests per second",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755567835002,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7188.05",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5676.63",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a73f210c7a7dc2ca806594ccdeb644e162ff30fb",
          "message": "Make `wake_robust_futex` atomic\n\nReplace `VmWriter::atomic_update` with `VmWriter::atomic_compare_exchange`,\nwhich takes the old value for comparison and new value instead of a\nclosure to compute it. This version has one less unsafe call.\n\nThen use `atomic_compare_exchange` to reimplement the looping logic\nof `wake_robust_futex` and make it atomic.",
          "timestamp": "2025-08-18T23:34:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/a73f210c7a7dc2ca806594ccdeb644e162ff30fb"
        },
        "date": 1755646391592,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5996.44",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4332.72",
            "unit": "Requests per second",
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
          "id": "924d87398ab75723a0cf9e1466cbb604c513a6d6",
          "message": "Introduce `first_context_switch`",
          "timestamp": "2025-08-13T02:16:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/924d87398ab75723a0cf9e1466cbb604c513a6d6"
        },
        "date": 1755751508215,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7283.69",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4714.98",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9ab035c65491676d4ef46e52ede31ce6998a0b59",
          "message": "Rename the docs directory to book",
          "timestamp": "2025-08-21T10:40:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/9ab035c65491676d4ef46e52ede31ce6998a0b59"
        },
        "date": 1755820195276,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7459.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5606.14",
            "unit": "Requests per second",
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
          "id": "7fad653992e7d9cbbe4c572f7ba339a779ef8025",
          "message": "Use 6.16.0 Linux kernel for benchmark tests & Add Linux TDX benchmark tests",
          "timestamp": "2025-07-07T14:19:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/7fad653992e7d9cbbe4c572f7ba339a779ef8025"
        },
        "date": 1755909588651,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6746.56",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5737.99",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0a126a0c8c3d05e5d55132500d47dadec1605011",
          "message": "Set correct default value for VdsoData::mask",
          "timestamp": "2025-08-22T12:08:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/0a126a0c8c3d05e5d55132500d47dadec1605011"
        },
        "date": 1755993176621,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5922.61",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4332.26",
            "unit": "Requests per second",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756081039926,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7322.72",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5535.46",
            "unit": "Requests per second",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756163509372,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6956.27",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5653.39",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "888eecb3509dac97ca739dabafbb5777d269a154",
          "message": "Patch a futex vulnerability\n\nIf the futex wait operation was interrupted by a signal or timed out, the\n`FutexItem` must be dequeued and dropped. Otherwise, malicious user programs\ncould repeatedly issue futex wait operations to exhaust kernel memory.\n\nDue to asynchronicity, this removal can't be done by queue position nor by\nfutex key match up:\n* The position might have changed during the pause as some earlier futex might\n  have been dequeued\n* If two futexes with the same key are enqueued and then one of them times out\n  or is interrupted, a removal by key would likely dequeue the wrong futex\n\nTherefore, we need to perform a removal by unique global futex ID.",
          "timestamp": "2025-08-26T08:43:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/888eecb3509dac97ca739dabafbb5777d269a154"
        },
        "date": 1756252840043,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5918.95",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4334.96",
            "unit": "Requests per second",
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
          "id": "2098b11b6830b4e923474eb777c7070b08346476",
          "message": "Unify the implementation of /proc/[pid] and /proc/[pid]/task/[tid]",
          "timestamp": "2025-08-18T11:03:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/2098b11b6830b4e923474eb777c7070b08346476"
        },
        "date": 1756336625879,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7248.04",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4368.33",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d3e27ae03a41e7e3dd51293d722ea91fefd44218",
          "message": "Use vDSO for fallback of user-provided sa_restorer on RISC-V platforms",
          "timestamp": "2025-08-28T03:20:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3e27ae03a41e7e3dd51293d722ea91fefd44218"
        },
        "date": 1756423027160,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5648.64",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4322.53",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f4b05597cdca58695458d38507172b2e3fc2aa76",
          "message": "Init vDSO singleton in the first kthread",
          "timestamp": "2025-08-30T20:00:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/f4b05597cdca58695458d38507172b2e3fc2aa76"
        },
        "date": 1757129965720,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7358.90",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5845.95",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f56d2f3bad8ff769b50507356c0306488926d1cb",
          "message": "`context.rs` enhancements\n\n* Improve the phrasing of some docstrings and comments\n* Add warning comments about attempts to validate memory addresses\n  at reader/writer instantiation time\n* Create the `reader_writer` method for ergonomically instantiate\n  a reader/writer pair covering the same memory region. This method\n  is also slightly more efficient than calling `reader` and `writer`\n  separately\n* Clean up `check_vaddr` for clarity and rename it to `check_vaddr_lowerbound`\n  for explicity\n* Include the data length check before calling `check_vaddr_lowerbound`\n  in `atomic_load` and `atomic_fetch_update` for further consistency\n  with the delayed buffer validation",
          "timestamp": "2025-08-29T09:58:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/f56d2f3bad8ff769b50507356c0306488926d1cb"
        },
        "date": 1757134672235,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5874.33",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5804.03",
            "unit": "Requests per second",
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
          "id": "45b5bd39f1aa61bfc6f00c509913b7ec10a3a68f",
          "message": "Disable I/O APIC entries in initialization",
          "timestamp": "2025-08-08T07:44:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/45b5bd39f1aa61bfc6f00c509913b7ec10a3a68f"
        },
        "date": 1757136410496,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5808.11",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5171.09",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757460520695,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8943.66",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5635.92",
            "unit": "Requests per second",
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
          "id": "8c36964bb940494cd8d1ad14cab0a93b0fd77598",
          "message": "Introduce VmPrinter to write kernel generated data",
          "timestamp": "2025-09-10T11:59:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8c36964bb940494cd8d1ad14cab0a93b0fd77598"
        },
        "date": 1757545240701,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5891.38",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4338.51",
            "unit": "Requests per second",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757716524771,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5613.56",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5747.58",
            "unit": "Requests per second",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757803684789,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7005.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5664.53",
            "unit": "Requests per second",
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
          "id": "391f11f1aa112382e7a68d6eb6ec443bc5289eeb",
          "message": "Make per-CPU callbacks explicit",
          "timestamp": "2025-09-20T01:19:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/391f11f1aa112382e7a68d6eb6ec443bc5289eeb"
        },
        "date": 1758402070764,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6686.21",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5417.85",
            "unit": "Requests per second",
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
          "id": "37479383da4868302492d0d8f78562d159aa2621",
          "message": "Assign pci code owner",
          "timestamp": "2025-08-28T11:37:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/37479383da4868302492d0d8f78562d159aa2621"
        },
        "date": 1758489113581,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7550.14",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5833.65",
            "unit": "Requests per second",
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
          "id": "eb9edbd67f5da8f2dd5f58f18a397650b0e4d187",
          "message": "Bump the Docker image to 0.16.1",
          "timestamp": "2025-09-22T11:14:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb9edbd67f5da8f2dd5f58f18a397650b0e4d187"
        },
        "date": 1758666046699,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7762.83",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5808.67",
            "unit": "Requests per second",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758752385718,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5438.36",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5880.90",
            "unit": "Requests per second",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758838556603,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7420.28",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5788.71",
            "unit": "Requests per second",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "2c456709b6f6c058b1a68ee05f99b2b6119df1a9",
          "message": "Block a setuid ltp test for exfat test",
          "timestamp": "2025-09-26T08:19:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c456709b6f6c058b1a68ee05f99b2b6119df1a9"
        },
        "date": 1758925612659,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7540.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5798.26",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yang Zhichao",
            "username": "IfReturn",
            "email": "yzc2004.12@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "66356e133db8eee843bdffae29303e3e62fc4e7e",
          "message": "Add support for `/proc/stat` and `/proc/uptime`",
          "timestamp": "2025-09-19T13:55:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/66356e133db8eee843bdffae29303e3e62fc4e7e"
        },
        "date": 1759011844033,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7729.30",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5849.42",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "899db770f62234e89590ce1ae35067f7082107a5",
          "message": "Fix parameter passing of `preadv/pwritev`-family syscalls",
          "timestamp": "2025-09-27T17:35:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/899db770f62234e89590ce1ae35067f7082107a5"
        },
        "date": 1759098585682,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7041.26",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5725.36",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "294c55d0dfa5e5784729548f9764b26e608c18ff",
          "message": "Fix `semid_ds`'s layout on non-x86_64 platforms",
          "timestamp": "2025-09-27T18:01:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/294c55d0dfa5e5784729548f9764b26e608c18ff"
        },
        "date": 1759184694080,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6917.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5492.26",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759277110074,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6917.15",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5805.78",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759357681927,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6998.00",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5761.59",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759443902905,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7337.91",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5890.51",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759530521214,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7528.66",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5782.28",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759617046788,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7347.66",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5177.16",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759703249534,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7190.26",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5871.62",
            "unit": "Requests per second",
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
          "id": "56d78ab64965194ad03cb6cde07fd5d98b17129d",
          "message": "Fix some minor style issues",
          "timestamp": "2025-09-27T15:55:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/56d78ab64965194ad03cb6cde07fd5d98b17129d"
        },
        "date": 1759789972084,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6118.44",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6013.87",
            "unit": "Requests per second",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759880407652,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7782.25",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5974.45",
            "unit": "Requests per second",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759962605403,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6995.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6002.05",
            "unit": "Requests per second",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760049142152,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7847.17",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5261.34",
            "unit": "Requests per second",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760135621781,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7951.96",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5403.39",
            "unit": "Requests per second",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760222951658,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7469.18",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5820.74",
            "unit": "Requests per second",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760311207550,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7781.73",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5136.78",
            "unit": "Requests per second",
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
          "id": "0be36ee2c1ad03686bb1150ed15003d374c6aee2",
          "message": "Fix virtio-mmio interrupt handling",
          "timestamp": "2025-10-07T15:42:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/0be36ee2c1ad03686bb1150ed15003d374c6aee2"
        },
        "date": 1760394839007,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7454.99",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6261.05",
            "unit": "Requests per second",
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
          "id": "257b0c63b1f039e1ec4fd94c2c7bd549f8db2830",
          "message": "Fix ext2 block groups count",
          "timestamp": "2025-10-14T03:53:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/257b0c63b1f039e1ec4fd94c2c7bd549f8db2830"
        },
        "date": 1760481475241,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5874.33",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6811.81",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f69d39e9c16db9295f89c084376244d7265612de",
          "message": "Add a regression test for `/proc/[pid]/mem`",
          "timestamp": "2025-09-28T14:53:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/f69d39e9c16db9295f89c084376244d7265612de"
        },
        "date": 1760567891406,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7014.34",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5881.27",
            "unit": "Requests per second",
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
          "id": "384e5bc70da4fcc7d150140a0ae3706b6a33a91a",
          "message": "Fix an off-by-one bug in the trap frame",
          "timestamp": "2025-10-15T15:38:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/384e5bc70da4fcc7d150140a0ae3706b6a33a91a"
        },
        "date": 1760654177708,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7341.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5940.28",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "782301c2399f18865035fcb966777c164d915afa",
          "message": "Remove open-related APIs from FsResolver",
          "timestamp": "2025-10-16T09:50:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/782301c2399f18865035fcb966777c164d915afa"
        },
        "date": 1760743428568,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5326.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5416.41",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760827045482,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7808.49",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5711.64",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760913588193,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7563.23",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5710.88",
            "unit": "Requests per second",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1760999946368,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7338.96",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5291.22",
            "unit": "Requests per second",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1761086347736,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6892.97",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5777.57",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761180533570,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6573.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5798.11",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761259478014,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5943.65",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5353.48",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "8251d48bf26f169c2c0b14825b2721472e8159cf",
          "message": "Add RISC-V PLIC support",
          "timestamp": "2025-05-28T07:35:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/8251d48bf26f169c2c0b14825b2721472e8159cf"
        },
        "date": 1761353366721,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7659.78",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5724.40",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6a67807fd003692a75abbf7f86085eba16bc25d1",
          "message": "Implement `IdSet::iter_in`\n\nThis patch enables more expressive ways to slice and iterate over\nthe `Id`s in an `IdSet` with `IdSet::iter_in`, which takes an arbitrary\n`IdSetSlicer`.\n\n`IdSet::iter_in` efficiently slices out unintended inner parts and\nthen, within the remaining parts, skips inactive bits by using\n`BitSlice::iter_ones` from the `bitvec` crate.\n\nIt also delivers several implementations of `IdSetSlicer` so OSTD\nconsumers can represent `Id` ranges ergonomically.\n\nIn the Asterinas kernel, `CpuSet::iter_in` enables a cleaner way to\ndefine an interator that cycles over the CPUs.",
          "timestamp": "2025-10-22T18:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/6a67807fd003692a75abbf7f86085eba16bc25d1"
        },
        "date": 1761432015478,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7130.15",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5811.58",
            "unit": "Requests per second",
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761518539861,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7309.64",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5803.47",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "http_file32KB_bw": [
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "597b0b5f25f91b8500894fa30b133aa415f7ccab",
          "message": "Disable kernel traps before going to userspace",
          "timestamp": "2025-08-08T12:30:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/597b0b5f25f91b8500894fa30b133aa415f7ccab"
        },
        "date": 1754874463739,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7313.34",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5907.94",
            "unit": "Requests per second",
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
          "id": "53bb7ea8ae4ccca020ea1d3f5e047dca4124edba",
          "message": "Assign keyboard code owners",
          "timestamp": "2025-08-11T10:46:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/53bb7ea8ae4ccca020ea1d3f5e047dca4124edba"
        },
        "date": 1754960627211,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5754.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5583.93",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755047238318,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5896.83",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5765.61",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755133721298,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7279.23",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5734.08",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c15106734afc9fd0473888b0e8a6fb9ad6504237",
          "message": "Align `MS_ASYNC` and `MS_SYNC` flags with Linux behavior",
          "timestamp": "2025-08-14T03:53:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/c15106734afc9fd0473888b0e8a6fb9ad6504237"
        },
        "date": 1755224844099,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5497.74",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5676.91",
            "unit": "Requests per second",
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
          "id": "35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f",
          "message": "Bump the Docker image version",
          "timestamp": "2025-08-14T07:39:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f"
        },
        "date": 1755304782589,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5692.70",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5511.19",
            "unit": "Requests per second",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755396577062,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7204.66",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5738.29",
            "unit": "Requests per second",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755484215821,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6137.80",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5739.79",
            "unit": "Requests per second",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755567787109,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7429.66",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5656.92",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a73f210c7a7dc2ca806594ccdeb644e162ff30fb",
          "message": "Make `wake_robust_futex` atomic\n\nReplace `VmWriter::atomic_update` with `VmWriter::atomic_compare_exchange`,\nwhich takes the old value for comparison and new value instead of a\nclosure to compute it. This version has one less unsafe call.\n\nThen use `atomic_compare_exchange` to reimplement the looping logic\nof `wake_robust_futex` and make it atomic.",
          "timestamp": "2025-08-18T23:34:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/a73f210c7a7dc2ca806594ccdeb644e162ff30fb"
        },
        "date": 1755646343074,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6984.20",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5399.84",
            "unit": "Requests per second",
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
          "id": "924d87398ab75723a0cf9e1466cbb604c513a6d6",
          "message": "Introduce `first_context_switch`",
          "timestamp": "2025-08-13T02:16:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/924d87398ab75723a0cf9e1466cbb604c513a6d6"
        },
        "date": 1755751459628,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7469.66",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5920.36",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9ab035c65491676d4ef46e52ede31ce6998a0b59",
          "message": "Rename the docs directory to book",
          "timestamp": "2025-08-21T10:40:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/9ab035c65491676d4ef46e52ede31ce6998a0b59"
        },
        "date": 1755820145974,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6226.14",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4269.60",
            "unit": "Requests per second",
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
          "id": "7fad653992e7d9cbbe4c572f7ba339a779ef8025",
          "message": "Use 6.16.0 Linux kernel for benchmark tests & Add Linux TDX benchmark tests",
          "timestamp": "2025-07-07T14:19:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/7fad653992e7d9cbbe4c572f7ba339a779ef8025"
        },
        "date": 1755909538404,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6460.73",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5511.45",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0a126a0c8c3d05e5d55132500d47dadec1605011",
          "message": "Set correct default value for VdsoData::mask",
          "timestamp": "2025-08-22T12:08:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/0a126a0c8c3d05e5d55132500d47dadec1605011"
        },
        "date": 1755993125467,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7227.97",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5742.42",
            "unit": "Requests per second",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756080988894,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7406.77",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5412.49",
            "unit": "Requests per second",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756163457913,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7292.50",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5553.17",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "888eecb3509dac97ca739dabafbb5777d269a154",
          "message": "Patch a futex vulnerability\n\nIf the futex wait operation was interrupted by a signal or timed out, the\n`FutexItem` must be dequeued and dropped. Otherwise, malicious user programs\ncould repeatedly issue futex wait operations to exhaust kernel memory.\n\nDue to asynchronicity, this removal can't be done by queue position nor by\nfutex key match up:\n* The position might have changed during the pause as some earlier futex might\n  have been dequeued\n* If two futexes with the same key are enqueued and then one of them times out\n  or is interrupted, a removal by key would likely dequeue the wrong futex\n\nTherefore, we need to perform a removal by unique global futex ID.",
          "timestamp": "2025-08-26T08:43:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/888eecb3509dac97ca739dabafbb5777d269a154"
        },
        "date": 1756252779997,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5744.35",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4325.42",
            "unit": "Requests per second",
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
          "id": "2098b11b6830b4e923474eb777c7070b08346476",
          "message": "Unify the implementation of /proc/[pid] and /proc/[pid]/task/[tid]",
          "timestamp": "2025-08-18T11:03:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/2098b11b6830b4e923474eb777c7070b08346476"
        },
        "date": 1756336574607,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7121.57",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5900.20",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d3e27ae03a41e7e3dd51293d722ea91fefd44218",
          "message": "Use vDSO for fallback of user-provided sa_restorer on RISC-V platforms",
          "timestamp": "2025-08-28T03:20:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3e27ae03a41e7e3dd51293d722ea91fefd44218"
        },
        "date": 1756422974722,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7283.21",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6019.57",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "4b26eb05aa14f66d40b7c75cd4063aba3f310c13",
          "message": "Configure kernel stack size for release build based on architecture",
          "timestamp": "2025-08-28T14:58:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/4b26eb05aa14f66d40b7c75cd4063aba3f310c13"
        },
        "date": 1757128685263,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7529.87",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5271.58",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757372465605,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7331.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5810.32",
            "unit": "Requests per second",
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
          "id": "8c36964bb940494cd8d1ad14cab0a93b0fd77598",
          "message": "Introduce VmPrinter to write kernel generated data",
          "timestamp": "2025-09-10T11:59:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8c36964bb940494cd8d1ad14cab0a93b0fd77598"
        },
        "date": 1757545186225,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7317.27",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5647.89",
            "unit": "Requests per second",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757716470375,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6041.77",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5734.28",
            "unit": "Requests per second",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757803629541,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7046.27",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5820.71",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "bf6efbabc749167ea46b915d1ccac3871e8a0215",
          "message": "Remove unused `has_guard_page` boolean",
          "timestamp": "2025-09-11T15:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf6efbabc749167ea46b915d1ccac3871e8a0215"
        },
        "date": 1757894463043,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7557.19",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5878.19",
            "unit": "Requests per second",
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
          "id": "391f11f1aa112382e7a68d6eb6ec443bc5289eeb",
          "message": "Make per-CPU callbacks explicit",
          "timestamp": "2025-09-20T01:19:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/391f11f1aa112382e7a68d6eb6ec443bc5289eeb"
        },
        "date": 1758402014057,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6078.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5589.46",
            "unit": "Requests per second",
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
          "id": "37479383da4868302492d0d8f78562d159aa2621",
          "message": "Assign pci code owner",
          "timestamp": "2025-08-28T11:37:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/37479383da4868302492d0d8f78562d159aa2621"
        },
        "date": 1758489057160,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7506.48",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5743.42",
            "unit": "Requests per second",
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
          "id": "eb9edbd67f5da8f2dd5f58f18a397650b0e4d187",
          "message": "Bump the Docker image to 0.16.1",
          "timestamp": "2025-09-22T11:14:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb9edbd67f5da8f2dd5f58f18a397650b0e4d187"
        },
        "date": 1758665988680,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6729.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5615.14",
            "unit": "Requests per second",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758752328256,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7789.70",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5507.62",
            "unit": "Requests per second",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758838497778,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7465.93",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5784.52",
            "unit": "Requests per second",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "2c456709b6f6c058b1a68ee05f99b2b6119df1a9",
          "message": "Block a setuid ltp test for exfat test",
          "timestamp": "2025-09-26T08:19:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c456709b6f6c058b1a68ee05f99b2b6119df1a9"
        },
        "date": 1758925553553,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6147.64",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5407.49",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yang Zhichao",
            "username": "IfReturn",
            "email": "yzc2004.12@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "66356e133db8eee843bdffae29303e3e62fc4e7e",
          "message": "Add support for `/proc/stat` and `/proc/uptime`",
          "timestamp": "2025-09-19T13:55:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/66356e133db8eee843bdffae29303e3e62fc4e7e"
        },
        "date": 1759011785158,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7460.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5533.27",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "899db770f62234e89590ce1ae35067f7082107a5",
          "message": "Fix parameter passing of `preadv/pwritev`-family syscalls",
          "timestamp": "2025-09-27T17:35:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/899db770f62234e89590ce1ae35067f7082107a5"
        },
        "date": 1759098525798,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7429.09",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5387.14",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "294c55d0dfa5e5784729548f9764b26e608c18ff",
          "message": "Fix `semid_ds`'s layout on non-x86_64 platforms",
          "timestamp": "2025-09-27T18:01:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/294c55d0dfa5e5784729548f9764b26e608c18ff"
        },
        "date": 1759184633868,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7753.71",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5833.20",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759276737603,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6942.61",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5863.63",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759357619985,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7777.96",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5207.35",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759443840721,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7372.74",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5895.25",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759530458563,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7474.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5685.60",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759616982414,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7751.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5965.34",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759703186180,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7743.31",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5374.10",
            "unit": "Requests per second",
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
          "id": "56d78ab64965194ad03cb6cde07fd5d98b17129d",
          "message": "Fix some minor style issues",
          "timestamp": "2025-09-27T15:55:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/56d78ab64965194ad03cb6cde07fd5d98b17129d"
        },
        "date": 1759789906579,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8172.02",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5707.85",
            "unit": "Requests per second",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759880342175,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6561.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5517.80",
            "unit": "Requests per second",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759962538942,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7678.21",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5731.04",
            "unit": "Requests per second",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760049075370,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7711.19",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5499.29",
            "unit": "Requests per second",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760135554408,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7517.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5764.49",
            "unit": "Requests per second",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760222883557,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6849.80",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6437.88",
            "unit": "Requests per second",
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
          "id": "0be36ee2c1ad03686bb1150ed15003d374c6aee2",
          "message": "Fix virtio-mmio interrupt handling",
          "timestamp": "2025-10-07T15:42:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/0be36ee2c1ad03686bb1150ed15003d374c6aee2"
        },
        "date": 1760394769143,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7530.53",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5738.61",
            "unit": "Requests per second",
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
          "id": "257b0c63b1f039e1ec4fd94c2c7bd549f8db2830",
          "message": "Fix ext2 block groups count",
          "timestamp": "2025-10-14T03:53:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/257b0c63b1f039e1ec4fd94c2c7bd549f8db2830"
        },
        "date": 1760481404581,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7520.68",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5239.69",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f69d39e9c16db9295f89c084376244d7265612de",
          "message": "Add a regression test for `/proc/[pid]/mem`",
          "timestamp": "2025-09-28T14:53:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/f69d39e9c16db9295f89c084376244d7265612de"
        },
        "date": 1760567818729,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6541.65",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5768.02",
            "unit": "Requests per second",
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
          "id": "384e5bc70da4fcc7d150140a0ae3706b6a33a91a",
          "message": "Fix an off-by-one bug in the trap frame",
          "timestamp": "2025-10-15T15:38:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/384e5bc70da4fcc7d150140a0ae3706b6a33a91a"
        },
        "date": 1760654105471,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7568.11",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5660.11",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "782301c2399f18865035fcb966777c164d915afa",
          "message": "Remove open-related APIs from FsResolver",
          "timestamp": "2025-10-16T09:50:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/782301c2399f18865035fcb966777c164d915afa"
        },
        "date": 1760743355618,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8288.49",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5727.22",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760826972234,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7815.41",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5753.38",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760913513077,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7462.25",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5739.98",
            "unit": "Requests per second",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1760999871285,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7761.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5986.55",
            "unit": "Requests per second",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1761086272904,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8195.18",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5860.38",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761180392453,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7597.76",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5678.82",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761259401629,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7740.82",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5776.61",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "8251d48bf26f169c2c0b14825b2721472e8159cf",
          "message": "Add RISC-V PLIC support",
          "timestamp": "2025-05-28T07:35:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/8251d48bf26f169c2c0b14825b2721472e8159cf"
        },
        "date": 1761353274078,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7479.27",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5201.07",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6a67807fd003692a75abbf7f86085eba16bc25d1",
          "message": "Implement `IdSet::iter_in`\n\nThis patch enables more expressive ways to slice and iterate over\nthe `Id`s in an `IdSet` with `IdSet::iter_in`, which takes an arbitrary\n`IdSetSlicer`.\n\n`IdSet::iter_in` efficiently slices out unintended inner parts and\nthen, within the remaining parts, skips inactive bits by using\n`BitSlice::iter_ones` from the `bitvec` crate.\n\nIt also delivers several implementations of `IdSetSlicer` so OSTD\nconsumers can represent `Id` ranges ergonomically.\n\nIn the Asterinas kernel, `CpuSet::iter_in` enables a cleaner way to\ndefine an interator that cycles over the CPUs.",
          "timestamp": "2025-10-22T18:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/6a67807fd003692a75abbf7f86085eba16bc25d1"
        },
        "date": 1761431937834,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5969.06",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5343.52",
            "unit": "Requests per second",
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761518461570,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7339.94",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5819.55",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "http_file64KB_bw": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755047148039,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6050.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4403.56",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755133629645,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6034.53",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5831.60",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c15106734afc9fd0473888b0e8a6fb9ad6504237",
          "message": "Align `MS_ASYNC` and `MS_SYNC` flags with Linux behavior",
          "timestamp": "2025-08-14T03:53:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/c15106734afc9fd0473888b0e8a6fb9ad6504237"
        },
        "date": 1755224753228,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6716.52",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5753.00",
            "unit": "Requests per second",
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
          "id": "35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f",
          "message": "Bump the Docker image version",
          "timestamp": "2025-08-14T07:39:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f"
        },
        "date": 1755304689094,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7361.02",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5249.63",
            "unit": "Requests per second",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755396482632,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6060.73",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5747.98",
            "unit": "Requests per second",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755484123241,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6006.44",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5574.92",
            "unit": "Requests per second",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755567691318,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6778.00",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5956.27",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a73f210c7a7dc2ca806594ccdeb644e162ff30fb",
          "message": "Make `wake_robust_futex` atomic\n\nReplace `VmWriter::atomic_update` with `VmWriter::atomic_compare_exchange`,\nwhich takes the old value for comparison and new value instead of a\nclosure to compute it. This version has one less unsafe call.\n\nThen use `atomic_compare_exchange` to reimplement the looping logic\nof `wake_robust_futex` and make it atomic.",
          "timestamp": "2025-08-18T23:34:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/a73f210c7a7dc2ca806594ccdeb644e162ff30fb"
        },
        "date": 1755646246530,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7077.27",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5692.94",
            "unit": "Requests per second",
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
          "id": "924d87398ab75723a0cf9e1466cbb604c513a6d6",
          "message": "Introduce `first_context_switch`",
          "timestamp": "2025-08-13T02:16:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/924d87398ab75723a0cf9e1466cbb604c513a6d6"
        },
        "date": 1755751362082,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7463.63",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5922.67",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9ab035c65491676d4ef46e52ede31ce6998a0b59",
          "message": "Rename the docs directory to book",
          "timestamp": "2025-08-21T10:40:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/9ab035c65491676d4ef46e52ede31ce6998a0b59"
        },
        "date": 1755819998553,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7204.06",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5107.95",
            "unit": "Requests per second",
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
          "id": "7fad653992e7d9cbbe4c572f7ba339a779ef8025",
          "message": "Use 6.16.0 Linux kernel for benchmark tests & Add Linux TDX benchmark tests",
          "timestamp": "2025-07-07T14:19:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/7fad653992e7d9cbbe4c572f7ba339a779ef8025"
        },
        "date": 1755909437791,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7550.65",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4373.68",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0a126a0c8c3d05e5d55132500d47dadec1605011",
          "message": "Set correct default value for VdsoData::mask",
          "timestamp": "2025-08-22T12:08:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/0a126a0c8c3d05e5d55132500d47dadec1605011"
        },
        "date": 1755993023215,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6908.81",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5518.32",
            "unit": "Requests per second",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756080885473,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7009.55",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4330.16",
            "unit": "Requests per second",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756163354260,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6505.45",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5648.23",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "888eecb3509dac97ca739dabafbb5777d269a154",
          "message": "Patch a futex vulnerability\n\nIf the futex wait operation was interrupted by a signal or timed out, the\n`FutexItem` must be dequeued and dropped. Otherwise, malicious user programs\ncould repeatedly issue futex wait operations to exhaust kernel memory.\n\nDue to asynchronicity, this removal can't be done by queue position nor by\nfutex key match up:\n* The position might have changed during the pause as some earlier futex might\n  have been dequeued\n* If two futexes with the same key are enqueued and then one of them times out\n  or is interrupted, a removal by key would likely dequeue the wrong futex\n\nTherefore, we need to perform a removal by unique global futex ID.",
          "timestamp": "2025-08-26T08:43:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/888eecb3509dac97ca739dabafbb5777d269a154"
        },
        "date": 1756252669390,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6500.69",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5797.18",
            "unit": "Requests per second",
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
          "id": "2098b11b6830b4e923474eb777c7070b08346476",
          "message": "Unify the implementation of /proc/[pid] and /proc/[pid]/task/[tid]",
          "timestamp": "2025-08-18T11:03:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/2098b11b6830b4e923474eb777c7070b08346476"
        },
        "date": 1756336471526,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7333.73",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4351.38",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d3e27ae03a41e7e3dd51293d722ea91fefd44218",
          "message": "Use vDSO for fallback of user-provided sa_restorer on RISC-V platforms",
          "timestamp": "2025-08-28T03:20:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3e27ae03a41e7e3dd51293d722ea91fefd44218"
        },
        "date": 1756422870269,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6081.80",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4398.88",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "4b26eb05aa14f66d40b7c75cd4063aba3f310c13",
          "message": "Configure kernel stack size for release build based on architecture",
          "timestamp": "2025-08-28T14:58:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/4b26eb05aa14f66d40b7c75cd4063aba3f310c13"
        },
        "date": 1757127111050,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7337.83",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5914.42",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "4b26eb05aa14f66d40b7c75cd4063aba3f310c13",
          "message": "Configure kernel stack size for release build based on architecture",
          "timestamp": "2025-08-28T14:58:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/4b26eb05aa14f66d40b7c75cd4063aba3f310c13"
        },
        "date": 1757128632511,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6733.22",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5952.69",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f4b05597cdca58695458d38507172b2e3fc2aa76",
          "message": "Init vDSO singleton in the first kthread",
          "timestamp": "2025-08-30T20:00:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/f4b05597cdca58695458d38507172b2e3fc2aa76"
        },
        "date": 1757129912469,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7933.13",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5436.70",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757372357759,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7061.03",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5709.91",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757460413136,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6083.66",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5685.07",
            "unit": "Requests per second",
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
          "id": "8c36964bb940494cd8d1ad14cab0a93b0fd77598",
          "message": "Introduce VmPrinter to write kernel generated data",
          "timestamp": "2025-09-10T11:59:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8c36964bb940494cd8d1ad14cab0a93b0fd77598"
        },
        "date": 1757545077102,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5773.16",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6106.47",
            "unit": "Requests per second",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757716361906,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7424.04",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5881.46",
            "unit": "Requests per second",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757803518644,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6875.14",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5565.67",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "bf6efbabc749167ea46b915d1ccac3871e8a0215",
          "message": "Remove unused `has_guard_page` boolean",
          "timestamp": "2025-09-11T15:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf6efbabc749167ea46b915d1ccac3871e8a0215"
        },
        "date": 1757894407475,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7099.00",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5797.89",
            "unit": "Requests per second",
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
          "id": "391f11f1aa112382e7a68d6eb6ec443bc5289eeb",
          "message": "Make per-CPU callbacks explicit",
          "timestamp": "2025-09-20T01:19:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/391f11f1aa112382e7a68d6eb6ec443bc5289eeb"
        },
        "date": 1758401899899,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7809.02",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5480.10",
            "unit": "Requests per second",
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
          "id": "37479383da4868302492d0d8f78562d159aa2621",
          "message": "Assign pci code owner",
          "timestamp": "2025-08-28T11:37:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/37479383da4868302492d0d8f78562d159aa2621"
        },
        "date": 1758488943814,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6688.38",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5228.54",
            "unit": "Requests per second",
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
          "id": "eb9edbd67f5da8f2dd5f58f18a397650b0e4d187",
          "message": "Bump the Docker image to 0.16.1",
          "timestamp": "2025-09-22T11:14:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb9edbd67f5da8f2dd5f58f18a397650b0e4d187"
        },
        "date": 1758665873179,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7429.77",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5850.29",
            "unit": "Requests per second",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758752212594,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6766.44",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5915.71",
            "unit": "Requests per second",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758838379189,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5582.46",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4272.74",
            "unit": "Requests per second",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "2c456709b6f6c058b1a68ee05f99b2b6119df1a9",
          "message": "Block a setuid ltp test for exfat test",
          "timestamp": "2025-09-26T08:19:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c456709b6f6c058b1a68ee05f99b2b6119df1a9"
        },
        "date": 1758925435931,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5814.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4391.16",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yang Zhichao",
            "username": "IfReturn",
            "email": "yzc2004.12@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "66356e133db8eee843bdffae29303e3e62fc4e7e",
          "message": "Add support for `/proc/stat` and `/proc/uptime`",
          "timestamp": "2025-09-19T13:55:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/66356e133db8eee843bdffae29303e3e62fc4e7e"
        },
        "date": 1759011667039,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6891.06",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5742.03",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "899db770f62234e89590ce1ae35067f7082107a5",
          "message": "Fix parameter passing of `preadv/pwritev`-family syscalls",
          "timestamp": "2025-09-27T17:35:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/899db770f62234e89590ce1ae35067f7082107a5"
        },
        "date": 1759098406654,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7792.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5596.93",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "294c55d0dfa5e5784729548f9764b26e608c18ff",
          "message": "Fix `semid_ds`'s layout on non-x86_64 platforms",
          "timestamp": "2025-09-27T18:01:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/294c55d0dfa5e5784729548f9764b26e608c18ff"
        },
        "date": 1759184513055,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7684.86",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5527.50",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759357496250,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7352.25",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5864.70",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759443716276,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7514.07",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5969.16",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759530332483,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7773.38",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5610.83",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759616853015,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5039.05",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5783.70",
            "unit": "Requests per second",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759703060412,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6065.01",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6252.43",
            "unit": "Requests per second",
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
          "id": "56d78ab64965194ad03cb6cde07fd5d98b17129d",
          "message": "Fix some minor style issues",
          "timestamp": "2025-09-27T15:55:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/56d78ab64965194ad03cb6cde07fd5d98b17129d"
        },
        "date": 1759789774792,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7151.41",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5810.85",
            "unit": "Requests per second",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759880210473,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6449.78",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5935.57",
            "unit": "Requests per second",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759962405879,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6125.72",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5336.01",
            "unit": "Requests per second",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760048941630,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7807.73",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5694.25",
            "unit": "Requests per second",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760135420156,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7535.18",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5823.25",
            "unit": "Requests per second",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760221795847,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7971.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5783.68",
            "unit": "Requests per second",
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
          "id": "0be36ee2c1ad03686bb1150ed15003d374c6aee2",
          "message": "Fix virtio-mmio interrupt handling",
          "timestamp": "2025-10-07T15:42:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/0be36ee2c1ad03686bb1150ed15003d374c6aee2"
        },
        "date": 1760394628812,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7598.30",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5493.07",
            "unit": "Requests per second",
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
          "id": "257b0c63b1f039e1ec4fd94c2c7bd549f8db2830",
          "message": "Fix ext2 block groups count",
          "timestamp": "2025-10-14T03:53:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/257b0c63b1f039e1ec4fd94c2c7bd549f8db2830"
        },
        "date": 1760481263085,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6936.92",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5094.05",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f69d39e9c16db9295f89c084376244d7265612de",
          "message": "Add a regression test for `/proc/[pid]/mem`",
          "timestamp": "2025-09-28T14:53:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/f69d39e9c16db9295f89c084376244d7265612de"
        },
        "date": 1760567672598,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7346.34",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5616.43",
            "unit": "Requests per second",
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
          "id": "384e5bc70da4fcc7d150140a0ae3706b6a33a91a",
          "message": "Fix an off-by-one bug in the trap frame",
          "timestamp": "2025-10-15T15:38:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/384e5bc70da4fcc7d150140a0ae3706b6a33a91a"
        },
        "date": 1760653962337,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7664.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4326.92",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "782301c2399f18865035fcb966777c164d915afa",
          "message": "Remove open-related APIs from FsResolver",
          "timestamp": "2025-10-16T09:50:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/782301c2399f18865035fcb966777c164d915afa"
        },
        "date": 1760743209068,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7487.36",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5872.17",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760826825736,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6024.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4361.67",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760913362777,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5974.14",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5568.95",
            "unit": "Requests per second",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1760999720939,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7913.68",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5778.84",
            "unit": "Requests per second",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1761086123379,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6059.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5681.38",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761180210859,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7721.11",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5669.97",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761259248748,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7754.36",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6306.48",
            "unit": "Requests per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "8251d48bf26f169c2c0b14825b2721472e8159cf",
          "message": "Add RISC-V PLIC support",
          "timestamp": "2025-05-28T07:35:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/8251d48bf26f169c2c0b14825b2721472e8159cf"
        },
        "date": 1761353088266,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5912.86",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5021.96",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6a67807fd003692a75abbf7f86085eba16bc25d1",
          "message": "Implement `IdSet::iter_in`\n\nThis patch enables more expressive ways to slice and iterate over\nthe `Id`s in an `IdSet` with `IdSet::iter_in`, which takes an arbitrary\n`IdSetSlicer`.\n\n`IdSet::iter_in` efficiently slices out unintended inner parts and\nthen, within the remaining parts, skips inactive bits by using\n`BitSlice::iter_ones` from the `bitvec` crate.\n\nIt also delivers several implementations of `IdSetSlicer` so OSTD\nconsumers can represent `Id` ranges ergonomically.\n\nIn the Asterinas kernel, `CpuSet::iter_in` enables a cleaner way to\ndefine an interator that cycles over the CPUs.",
          "timestamp": "2025-10-22T18:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/6a67807fd003692a75abbf7f86085eba16bc25d1"
        },
        "date": 1761431783961,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6898.61",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5608.53",
            "unit": "Requests per second",
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761518304847,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7009.49",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5710.79",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "http_req10k_conc1_bw": [
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
          "id": "53bb7ea8ae4ccca020ea1d3f5e047dca4124edba",
          "message": "Assign keyboard code owners",
          "timestamp": "2025-08-11T10:46:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/53bb7ea8ae4ccca020ea1d3f5e047dca4124edba"
        },
        "date": 1754960449416,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4897.43",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3097.15",
            "unit": "Kbytes/sec",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755047058514,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4966.35",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3128.03",
            "unit": "Kbytes/sec",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755133538138,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5618.44",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3074.93",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c15106734afc9fd0473888b0e8a6fb9ad6504237",
          "message": "Align `MS_ASYNC` and `MS_SYNC` flags with Linux behavior",
          "timestamp": "2025-08-14T03:53:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/c15106734afc9fd0473888b0e8a6fb9ad6504237"
        },
        "date": 1755224662595,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5773.79",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2906.14",
            "unit": "Kbytes/sec",
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
          "id": "35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f",
          "message": "Bump the Docker image version",
          "timestamp": "2025-08-14T07:39:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f"
        },
        "date": 1755304596101,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5745.35",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2590.32",
            "unit": "Kbytes/sec",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755396388407,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5586.81",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3204.40",
            "unit": "Kbytes/sec",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755484030361,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5519.29",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2976.97",
            "unit": "Kbytes/sec",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755567594435,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5936.53",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3165.62",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a73f210c7a7dc2ca806594ccdeb644e162ff30fb",
          "message": "Make `wake_robust_futex` atomic\n\nReplace `VmWriter::atomic_update` with `VmWriter::atomic_compare_exchange`,\nwhich takes the old value for comparison and new value instead of a\nclosure to compute it. This version has one less unsafe call.\n\nThen use `atomic_compare_exchange` to reimplement the looping logic\nof `wake_robust_futex` and make it atomic.",
          "timestamp": "2025-08-18T23:34:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/a73f210c7a7dc2ca806594ccdeb644e162ff30fb"
        },
        "date": 1755646150559,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5542.00",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3100.77",
            "unit": "Kbytes/sec",
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
          "id": "924d87398ab75723a0cf9e1466cbb604c513a6d6",
          "message": "Introduce `first_context_switch`",
          "timestamp": "2025-08-13T02:16:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/924d87398ab75723a0cf9e1466cbb604c513a6d6"
        },
        "date": 1755751264833,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5903.54",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3142.92",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9ab035c65491676d4ef46e52ede31ce6998a0b59",
          "message": "Rename the docs directory to book",
          "timestamp": "2025-08-21T10:40:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/9ab035c65491676d4ef46e52ede31ce6998a0b59"
        },
        "date": 1755819900249,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4886.23",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3235.22",
            "unit": "Kbytes/sec",
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
          "id": "7fad653992e7d9cbbe4c572f7ba339a779ef8025",
          "message": "Use 6.16.0 Linux kernel for benchmark tests & Add Linux TDX benchmark tests",
          "timestamp": "2025-07-07T14:19:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/7fad653992e7d9cbbe4c572f7ba339a779ef8025"
        },
        "date": 1755909336452,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4936.44",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2614.11",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0a126a0c8c3d05e5d55132500d47dadec1605011",
          "message": "Set correct default value for VdsoData::mask",
          "timestamp": "2025-08-22T12:08:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/0a126a0c8c3d05e5d55132500d47dadec1605011"
        },
        "date": 1755992920999,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5061.97",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2957.16",
            "unit": "Kbytes/sec",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756080783060,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4883.79",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3224.96",
            "unit": "Kbytes/sec",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756163250792,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5601.01",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3199.36",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "888eecb3509dac97ca739dabafbb5777d269a154",
          "message": "Patch a futex vulnerability\n\nIf the futex wait operation was interrupted by a signal or timed out, the\n`FutexItem` must be dequeued and dropped. Otherwise, malicious user programs\ncould repeatedly issue futex wait operations to exhaust kernel memory.\n\nDue to asynchronicity, this removal can't be done by queue position nor by\nfutex key match up:\n* The position might have changed during the pause as some earlier futex might\n  have been dequeued\n* If two futexes with the same key are enqueued and then one of them times out\n  or is interrupted, a removal by key would likely dequeue the wrong futex\n\nTherefore, we need to perform a removal by unique global futex ID.",
          "timestamp": "2025-08-26T08:43:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/888eecb3509dac97ca739dabafbb5777d269a154"
        },
        "date": 1756252553623,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5257.09",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3100.92",
            "unit": "Kbytes/sec",
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
          "id": "2098b11b6830b4e923474eb777c7070b08346476",
          "message": "Unify the implementation of /proc/[pid] and /proc/[pid]/task/[tid]",
          "timestamp": "2025-08-18T11:03:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/2098b11b6830b4e923474eb777c7070b08346476"
        },
        "date": 1756336368698,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5746.58",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3102.29",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d3e27ae03a41e7e3dd51293d722ea91fefd44218",
          "message": "Use vDSO for fallback of user-provided sa_restorer on RISC-V platforms",
          "timestamp": "2025-08-28T03:20:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3e27ae03a41e7e3dd51293d722ea91fefd44218"
        },
        "date": 1756422765642,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5768.50",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3129.80",
            "unit": "Kbytes/sec",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "4b26eb05aa14f66d40b7c75cd4063aba3f310c13",
          "message": "Configure kernel stack size for release build based on architecture",
          "timestamp": "2025-08-28T14:58:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/4b26eb05aa14f66d40b7c75cd4063aba3f310c13"
        },
        "date": 1757127059113,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5832.12",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3173.95",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f4b05597cdca58695458d38507172b2e3fc2aa76",
          "message": "Init vDSO singleton in the first kthread",
          "timestamp": "2025-08-30T20:00:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/f4b05597cdca58695458d38507172b2e3fc2aa76"
        },
        "date": 1757129859556,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5540.98",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3250.55",
            "unit": "Kbytes/sec",
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
          "id": "45b5bd39f1aa61bfc6f00c509913b7ec10a3a68f",
          "message": "Disable I/O APIC entries in initialization",
          "timestamp": "2025-08-08T07:44:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/45b5bd39f1aa61bfc6f00c509913b7ec10a3a68f"
        },
        "date": 1757139287009,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5227.49",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3128.87",
            "unit": "Kbytes/sec",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757372250337,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5334.91",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3073.65",
            "unit": "Kbytes/sec",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757460305786,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5604.16",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3120.63",
            "unit": "Kbytes/sec",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757716253348,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6008.56",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3181.74",
            "unit": "Kbytes/sec",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757803406835,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5574.39",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2971.56",
            "unit": "Kbytes/sec",
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
          "id": "37479383da4868302492d0d8f78562d159aa2621",
          "message": "Assign pci code owner",
          "timestamp": "2025-08-28T11:37:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/37479383da4868302492d0d8f78562d159aa2621"
        },
        "date": 1758488830774,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5943.12",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3171.88",
            "unit": "Kbytes/sec",
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
          "id": "eb9edbd67f5da8f2dd5f58f18a397650b0e4d187",
          "message": "Bump the Docker image to 0.16.1",
          "timestamp": "2025-09-22T11:14:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb9edbd67f5da8f2dd5f58f18a397650b0e4d187"
        },
        "date": 1758665666771,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6161.26",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2957.63",
            "unit": "Kbytes/sec",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758752097459,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6109.73",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3164.12",
            "unit": "Kbytes/sec",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758838261368,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5502.31",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3067.18",
            "unit": "Kbytes/sec",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "2c456709b6f6c058b1a68ee05f99b2b6119df1a9",
          "message": "Block a setuid ltp test for exfat test",
          "timestamp": "2025-09-26T08:19:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c456709b6f6c058b1a68ee05f99b2b6119df1a9"
        },
        "date": 1758925317807,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6046.10",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3224.66",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yang Zhichao",
            "username": "IfReturn",
            "email": "yzc2004.12@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "66356e133db8eee843bdffae29303e3e62fc4e7e",
          "message": "Add support for `/proc/stat` and `/proc/uptime`",
          "timestamp": "2025-09-19T13:55:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/66356e133db8eee843bdffae29303e3e62fc4e7e"
        },
        "date": 1759011548759,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6118.41",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3195.39",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "899db770f62234e89590ce1ae35067f7082107a5",
          "message": "Fix parameter passing of `preadv/pwritev`-family syscalls",
          "timestamp": "2025-09-27T17:35:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/899db770f62234e89590ce1ae35067f7082107a5"
        },
        "date": 1759098286792,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6058.90",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2927.15",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "294c55d0dfa5e5784729548f9764b26e608c18ff",
          "message": "Fix `semid_ds`'s layout on non-x86_64 platforms",
          "timestamp": "2025-09-27T18:01:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/294c55d0dfa5e5784729548f9764b26e608c18ff"
        },
        "date": 1759184392041,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6080.48",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3218.44",
            "unit": "Kbytes/sec",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759357372792,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6305.92",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3284.75",
            "unit": "Kbytes/sec",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759443591151,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6327.29",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3198.67",
            "unit": "Kbytes/sec",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759530207199,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6011.59",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3185.20",
            "unit": "Kbytes/sec",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759616724143,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6609.06",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3184.87",
            "unit": "Kbytes/sec",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759702936679,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6220.56",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3253.90",
            "unit": "Kbytes/sec",
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
          "id": "56d78ab64965194ad03cb6cde07fd5d98b17129d",
          "message": "Fix some minor style issues",
          "timestamp": "2025-09-27T15:55:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/56d78ab64965194ad03cb6cde07fd5d98b17129d"
        },
        "date": 1759789642371,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6175.34",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3198.75",
            "unit": "Kbytes/sec",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759880013216,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6036.37",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2556.70",
            "unit": "Kbytes/sec",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759962272921,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6068.25",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3193.56",
            "unit": "Kbytes/sec",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760048808540,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5832.08",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3185.97",
            "unit": "Kbytes/sec",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760135285735,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6161.36",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3133.57",
            "unit": "Kbytes/sec",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760221659867,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5872.61",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3216.36",
            "unit": "Kbytes/sec",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760308117600,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6219.78",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3090.87",
            "unit": "Kbytes/sec",
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
          "id": "0be36ee2c1ad03686bb1150ed15003d374c6aee2",
          "message": "Fix virtio-mmio interrupt handling",
          "timestamp": "2025-10-07T15:42:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/0be36ee2c1ad03686bb1150ed15003d374c6aee2"
        },
        "date": 1760394488371,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5951.50",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3181.76",
            "unit": "Kbytes/sec",
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
          "id": "257b0c63b1f039e1ec4fd94c2c7bd549f8db2830",
          "message": "Fix ext2 block groups count",
          "timestamp": "2025-10-14T03:53:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/257b0c63b1f039e1ec4fd94c2c7bd549f8db2830"
        },
        "date": 1760481121814,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5007.26",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2768.14",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f69d39e9c16db9295f89c084376244d7265612de",
          "message": "Add a regression test for `/proc/[pid]/mem`",
          "timestamp": "2025-09-28T14:53:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/f69d39e9c16db9295f89c084376244d7265612de"
        },
        "date": 1760567527991,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6089.14",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3363.87",
            "unit": "Kbytes/sec",
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
          "id": "384e5bc70da4fcc7d150140a0ae3706b6a33a91a",
          "message": "Fix an off-by-one bug in the trap frame",
          "timestamp": "2025-10-15T15:38:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/384e5bc70da4fcc7d150140a0ae3706b6a33a91a"
        },
        "date": 1760653817907,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5884.84",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3253.15",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "782301c2399f18865035fcb966777c164d915afa",
          "message": "Remove open-related APIs from FsResolver",
          "timestamp": "2025-10-16T09:50:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/782301c2399f18865035fcb966777c164d915afa"
        },
        "date": 1760743062276,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6008.28",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3173.13",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760826679265,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6093.79",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3233.52",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760913212512,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5056.37",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3141.43",
            "unit": "Kbytes/sec",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1760999570449,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5774.23",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3221.29",
            "unit": "Kbytes/sec",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1761085973539,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6138.87",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3228.47",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761180028545,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6310.26",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3322.09",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761259095062,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5297.60",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3015.58",
            "unit": "Kbytes/sec",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "8251d48bf26f169c2c0b14825b2721472e8159cf",
          "message": "Add RISC-V PLIC support",
          "timestamp": "2025-05-28T07:35:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/8251d48bf26f169c2c0b14825b2721472e8159cf"
        },
        "date": 1761352258901,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5906.25",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3349.36",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6a67807fd003692a75abbf7f86085eba16bc25d1",
          "message": "Implement `IdSet::iter_in`\n\nThis patch enables more expressive ways to slice and iterate over\nthe `Id`s in an `IdSet` with `IdSet::iter_in`, which takes an arbitrary\n`IdSetSlicer`.\n\n`IdSet::iter_in` efficiently slices out unintended inner parts and\nthen, within the remaining parts, skips inactive bits by using\n`BitSlice::iter_ones` from the `bitvec` crate.\n\nIt also delivers several implementations of `IdSetSlicer` so OSTD\nconsumers can represent `Id` ranges ergonomically.\n\nIn the Asterinas kernel, `CpuSet::iter_in` enables a cleaner way to\ndefine an interator that cycles over the CPUs.",
          "timestamp": "2025-10-22T18:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/6a67807fd003692a75abbf7f86085eba16bc25d1"
        },
        "date": 1761431629968,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6017.11",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3208.99",
            "unit": "Kbytes/sec",
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761518148320,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6117.05",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3205.05",
            "unit": "Kbytes/sec",
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
          "id": "2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6",
          "message": "Add KDGKBMODE and KDSKBMODE ioctl support",
          "timestamp": "2025-10-23T13:28:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6"
        },
        "date": 1761604311139,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6012.35",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3200.84",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "http_req10k_conc20_bw": [
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "597b0b5f25f91b8500894fa30b133aa415f7ccab",
          "message": "Disable kernel traps before going to userspace",
          "timestamp": "2025-08-08T12:30:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/597b0b5f25f91b8500894fa30b133aa415f7ccab"
        },
        "date": 1754874227653,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "12704.28",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1315.26",
            "unit": "Kbytes/sec",
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
          "id": "53bb7ea8ae4ccca020ea1d3f5e047dca4124edba",
          "message": "Assign keyboard code owners",
          "timestamp": "2025-08-11T10:46:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/53bb7ea8ae4ccca020ea1d3f5e047dca4124edba"
        },
        "date": 1754960404970,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "18542.22",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4088.22",
            "unit": "Kbytes/sec",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755047013548,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19783.73",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3862.95",
            "unit": "Kbytes/sec",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755133492325,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23507.25",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4231.16",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c15106734afc9fd0473888b0e8a6fb9ad6504237",
          "message": "Align `MS_ASYNC` and `MS_SYNC` flags with Linux behavior",
          "timestamp": "2025-08-14T03:53:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/c15106734afc9fd0473888b0e8a6fb9ad6504237"
        },
        "date": 1755224616880,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "18996.35",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1820.63",
            "unit": "Kbytes/sec",
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
          "id": "35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f",
          "message": "Bump the Docker image version",
          "timestamp": "2025-08-14T07:39:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f"
        },
        "date": 1755304549205,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13745.89",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1002.91",
            "unit": "Kbytes/sec",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755483983740,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23329.44",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4493.25",
            "unit": "Kbytes/sec",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755567546536,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20682.55",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3060.79",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a73f210c7a7dc2ca806594ccdeb644e162ff30fb",
          "message": "Make `wake_robust_futex` atomic\n\nReplace `VmWriter::atomic_update` with `VmWriter::atomic_compare_exchange`,\nwhich takes the old value for comparison and new value instead of a\nclosure to compute it. This version has one less unsafe call.\n\nThen use `atomic_compare_exchange` to reimplement the looping logic\nof `wake_robust_futex` and make it atomic.",
          "timestamp": "2025-08-18T23:34:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/a73f210c7a7dc2ca806594ccdeb644e162ff30fb"
        },
        "date": 1755646101889,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "18243.61",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1518.77",
            "unit": "Kbytes/sec",
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
          "id": "924d87398ab75723a0cf9e1466cbb604c513a6d6",
          "message": "Introduce `first_context_switch`",
          "timestamp": "2025-08-13T02:16:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/924d87398ab75723a0cf9e1466cbb604c513a6d6"
        },
        "date": 1755751216219,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "17900.41",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3240.21",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9ab035c65491676d4ef46e52ede31ce6998a0b59",
          "message": "Rename the docs directory to book",
          "timestamp": "2025-08-21T10:40:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/9ab035c65491676d4ef46e52ede31ce6998a0b59"
        },
        "date": 1755819850913,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19671.92",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1250.37",
            "unit": "Kbytes/sec",
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
          "id": "7fad653992e7d9cbbe4c572f7ba339a779ef8025",
          "message": "Use 6.16.0 Linux kernel for benchmark tests & Add Linux TDX benchmark tests",
          "timestamp": "2025-07-07T14:19:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/7fad653992e7d9cbbe4c572f7ba339a779ef8025"
        },
        "date": 1755909285908,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21666.19",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "853.54",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0a126a0c8c3d05e5d55132500d47dadec1605011",
          "message": "Set correct default value for VdsoData::mask",
          "timestamp": "2025-08-22T12:08:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/0a126a0c8c3d05e5d55132500d47dadec1605011"
        },
        "date": 1755992870015,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19243.33",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1318.85",
            "unit": "Kbytes/sec",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756080731822,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20781.63",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3195.83",
            "unit": "Kbytes/sec",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756163186247,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "17945.06",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2955.07",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "888eecb3509dac97ca739dabafbb5777d269a154",
          "message": "Patch a futex vulnerability\n\nIf the futex wait operation was interrupted by a signal or timed out, the\n`FutexItem` must be dequeued and dropped. Otherwise, malicious user programs\ncould repeatedly issue futex wait operations to exhaust kernel memory.\n\nDue to asynchronicity, this removal can't be done by queue position nor by\nfutex key match up:\n* The position might have changed during the pause as some earlier futex might\n  have been dequeued\n* If two futexes with the same key are enqueued and then one of them times out\n  or is interrupted, a removal by key would likely dequeue the wrong futex\n\nTherefore, we need to perform a removal by unique global futex ID.",
          "timestamp": "2025-08-26T08:43:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/888eecb3509dac97ca739dabafbb5777d269a154"
        },
        "date": 1756252501619,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "17595.16",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2821.32",
            "unit": "Kbytes/sec",
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
          "id": "2098b11b6830b4e923474eb777c7070b08346476",
          "message": "Unify the implementation of /proc/[pid] and /proc/[pid]/task/[tid]",
          "timestamp": "2025-08-18T11:03:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/2098b11b6830b4e923474eb777c7070b08346476"
        },
        "date": 1756336317210,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21283.20",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3419.77",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d3e27ae03a41e7e3dd51293d722ea91fefd44218",
          "message": "Use vDSO for fallback of user-provided sa_restorer on RISC-V platforms",
          "timestamp": "2025-08-28T03:20:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3e27ae03a41e7e3dd51293d722ea91fefd44218"
        },
        "date": 1756422713361,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19571.96",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2947.86",
            "unit": "Kbytes/sec",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "4b26eb05aa14f66d40b7c75cd4063aba3f310c13",
          "message": "Configure kernel stack size for release build based on architecture",
          "timestamp": "2025-08-28T14:58:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/4b26eb05aa14f66d40b7c75cd4063aba3f310c13"
        },
        "date": 1757127006664,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "18992.21",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1818.25",
            "unit": "Kbytes/sec",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "4b26eb05aa14f66d40b7c75cd4063aba3f310c13",
          "message": "Configure kernel stack size for release build based on architecture",
          "timestamp": "2025-08-28T14:58:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/4b26eb05aa14f66d40b7c75cd4063aba3f310c13"
        },
        "date": 1757128579515,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19882.62",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4201.27",
            "unit": "Kbytes/sec",
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
          "id": "45b5bd39f1aa61bfc6f00c509913b7ec10a3a68f",
          "message": "Disable I/O APIC entries in initialization",
          "timestamp": "2025-08-08T07:44:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/45b5bd39f1aa61bfc6f00c509913b7ec10a3a68f"
        },
        "date": 1757139234077,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13888.26",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1335.72",
            "unit": "Kbytes/sec",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757372196531,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20718.46",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4587.59",
            "unit": "Kbytes/sec",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757460251922,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20048.64",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1209.30",
            "unit": "Kbytes/sec",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757716198647,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21914.50",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "631.49",
            "unit": "Kbytes/sec",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757803351038,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20030.16",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "374.66",
            "unit": "Kbytes/sec",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "bf6efbabc749167ea46b915d1ccac3871e8a0215",
          "message": "Remove unused `has_guard_page` boolean",
          "timestamp": "2025-09-11T15:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf6efbabc749167ea46b915d1ccac3871e8a0215"
        },
        "date": 1757894351382,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19694.71",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "185.00",
            "unit": "Kbytes/sec",
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
          "id": "37479383da4868302492d0d8f78562d159aa2621",
          "message": "Assign pci code owner",
          "timestamp": "2025-08-28T11:37:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/37479383da4868302492d0d8f78562d159aa2621"
        },
        "date": 1758488774095,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19212.39",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4034.92",
            "unit": "Kbytes/sec",
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
          "id": "eb9edbd67f5da8f2dd5f58f18a397650b0e4d187",
          "message": "Bump the Docker image to 0.16.1",
          "timestamp": "2025-09-22T11:14:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb9edbd67f5da8f2dd5f58f18a397650b0e4d187"
        },
        "date": 1758665608503,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19147.18",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2094.58",
            "unit": "Kbytes/sec",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758752039719,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19433.58",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2540.61",
            "unit": "Kbytes/sec",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758838202651,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20565.24",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3820.43",
            "unit": "Kbytes/sec",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "2c456709b6f6c058b1a68ee05f99b2b6119df1a9",
          "message": "Block a setuid ltp test for exfat test",
          "timestamp": "2025-09-26T08:19:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c456709b6f6c058b1a68ee05f99b2b6119df1a9"
        },
        "date": 1758925258718,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19828.25",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4455.03",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yang Zhichao",
            "username": "IfReturn",
            "email": "yzc2004.12@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "66356e133db8eee843bdffae29303e3e62fc4e7e",
          "message": "Add support for `/proc/stat` and `/proc/uptime`",
          "timestamp": "2025-09-19T13:55:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/66356e133db8eee843bdffae29303e3e62fc4e7e"
        },
        "date": 1759011489430,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21691.67",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1853.86",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "899db770f62234e89590ce1ae35067f7082107a5",
          "message": "Fix parameter passing of `preadv/pwritev`-family syscalls",
          "timestamp": "2025-09-27T17:35:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/899db770f62234e89590ce1ae35067f7082107a5"
        },
        "date": 1759098227260,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22450.75",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4299.28",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "294c55d0dfa5e5784729548f9764b26e608c18ff",
          "message": "Fix `semid_ds`'s layout on non-x86_64 platforms",
          "timestamp": "2025-09-27T18:01:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/294c55d0dfa5e5784729548f9764b26e608c18ff"
        },
        "date": 1759184331699,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21690.25",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3514.57",
            "unit": "Kbytes/sec",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759357310960,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20596.69",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4906.94",
            "unit": "Kbytes/sec",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759443528588,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20631.69",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2219.83",
            "unit": "Kbytes/sec",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759530144420,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "24254.32",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2728.17",
            "unit": "Kbytes/sec",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759616659668,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20115.99",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3319.37",
            "unit": "Kbytes/sec",
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
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759702873776,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22804.69",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4924.28",
            "unit": "Kbytes/sec",
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
          "id": "56d78ab64965194ad03cb6cde07fd5d98b17129d",
          "message": "Fix some minor style issues",
          "timestamp": "2025-09-27T15:55:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/56d78ab64965194ad03cb6cde07fd5d98b17129d"
        },
        "date": 1759789575987,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20019.94",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1846.20",
            "unit": "Kbytes/sec",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759879881069,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20005.58",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1065.35",
            "unit": "Kbytes/sec",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759962205599,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "24079.21",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1072.19",
            "unit": "Kbytes/sec",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760048741828,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21058.27",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1407.48",
            "unit": "Kbytes/sec",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760135218020,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22271.24",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "279.73",
            "unit": "Kbytes/sec",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760221591665,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20143.93",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1275.74",
            "unit": "Kbytes/sec",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760308048368,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20314.31",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1389.35",
            "unit": "Kbytes/sec",
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
          "id": "0be36ee2c1ad03686bb1150ed15003d374c6aee2",
          "message": "Fix virtio-mmio interrupt handling",
          "timestamp": "2025-10-07T15:42:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/0be36ee2c1ad03686bb1150ed15003d374c6aee2"
        },
        "date": 1760394418057,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20755.32",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "613.01",
            "unit": "Kbytes/sec",
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
          "id": "257b0c63b1f039e1ec4fd94c2c7bd549f8db2830",
          "message": "Fix ext2 block groups count",
          "timestamp": "2025-10-14T03:53:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/257b0c63b1f039e1ec4fd94c2c7bd549f8db2830"
        },
        "date": 1760481050854,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "24444.19",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4990.72",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f69d39e9c16db9295f89c084376244d7265612de",
          "message": "Add a regression test for `/proc/[pid]/mem`",
          "timestamp": "2025-09-28T14:53:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/f69d39e9c16db9295f89c084376244d7265612de"
        },
        "date": 1760567455300,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22285.15",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4674.83",
            "unit": "Kbytes/sec",
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
          "id": "384e5bc70da4fcc7d150140a0ae3706b6a33a91a",
          "message": "Fix an off-by-one bug in the trap frame",
          "timestamp": "2025-10-15T15:38:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/384e5bc70da4fcc7d150140a0ae3706b6a33a91a"
        },
        "date": 1760653745810,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20641.05",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1743.19",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "782301c2399f18865035fcb966777c164d915afa",
          "message": "Remove open-related APIs from FsResolver",
          "timestamp": "2025-10-16T09:50:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/782301c2399f18865035fcb966777c164d915afa"
        },
        "date": 1760742988867,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20289.82",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1373.22",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760826606119,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20103.29",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2343.09",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760913137270,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21340.07",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3462.12",
            "unit": "Kbytes/sec",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1760999494949,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22541.74",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "961.99",
            "unit": "Kbytes/sec",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1761085898105,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20762.09",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2275.53",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761179937573,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21372.40",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4433.02",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761259018125,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20223.47",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "849.28",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6a67807fd003692a75abbf7f86085eba16bc25d1",
          "message": "Implement `IdSet::iter_in`\n\nThis patch enables more expressive ways to slice and iterate over\nthe `Id`s in an `IdSet` with `IdSet::iter_in`, which takes an arbitrary\n`IdSetSlicer`.\n\n`IdSet::iter_in` efficiently slices out unintended inner parts and\nthen, within the remaining parts, skips inactive bits by using\n`BitSlice::iter_ones` from the `bitvec` crate.\n\nIt also delivers several implementations of `IdSetSlicer` so OSTD\nconsumers can represent `Id` ranges ergonomically.\n\nIn the Asterinas kernel, `CpuSet::iter_in` enables a cleaner way to\ndefine an interator that cycles over the CPUs.",
          "timestamp": "2025-10-22T18:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/6a67807fd003692a75abbf7f86085eba16bc25d1"
        },
        "date": 1761431552897,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21095.07",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2865.87",
            "unit": "Kbytes/sec",
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761518070008,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20705.35",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3325.12",
            "unit": "Kbytes/sec",
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
          "id": "2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6",
          "message": "Add KDGKBMODE and KDSKBMODE ioctl support",
          "timestamp": "2025-10-23T13:28:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6"
        },
        "date": 1761604232344,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22738.57",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3727.91",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}