window.BENCHMARK_DATA = {
  "lastUpdate": 1771976758588,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "http_file4KB_bw": [
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766614793810,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7136.92",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5865.93",
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
          "id": "08be9252402cf14e14000035f2e9ad40fc2a6a1d",
          "message": "Update outdated compatibility data",
          "timestamp": "2025-12-21T15:25:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/08be9252402cf14e14000035f2e9ad40fc2a6a1d"
        },
        "date": 1766700008599,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6086.71",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5675.50",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766786566120,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7179.28",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5867.02",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766873032976,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7783.26",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5798.37",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "545efaa15516e62775d382406acc8091755eb1e3",
          "message": "Validate futex address alignment when waking robust futexes",
          "timestamp": "2025-12-28T02:55:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/545efaa15516e62775d382406acc8091755eb1e3"
        },
        "date": 1766961485892,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6836.07",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5756.85",
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
          "id": "033c240d8f52b4fae58801d8088c68d717c4194b",
          "message": "Fix madvise behavior",
          "timestamp": "2025-12-15T12:51:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/033c240d8f52b4fae58801d8088c68d717c4194b"
        },
        "date": 1767047972033,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7848.50",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5798.17",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zjp",
            "username": "zjp-CN",
            "email": "jiping_zhou@foxmail.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "c91d383c91a5dccb057fa7f315657ed73ff8e0e6",
          "message": "Fix `offset: *mut Self` by `offset: usize` in SingleInstruction traits",
          "timestamp": "2025-12-30T03:05:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/c91d383c91a5dccb057fa7f315657ed73ff8e0e6"
        },
        "date": 1767132066504,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7479.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5744.43",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1",
          "message": "Refactor the implementation of prlimit64",
          "timestamp": "2025-12-30T09:35:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1"
        },
        "date": 1767218642887,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6927.05",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5753.53",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767308234543,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7534.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5682.29",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767395669780,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7942.85",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5682.19",
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
          "id": "eb76ded5fc4f56b6ebc469728acbc87bf56aec35",
          "message": "Simplify/Clarify `notify/mod.rs` code",
          "timestamp": "2025-12-26T03:28:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb76ded5fc4f56b6ebc469728acbc87bf56aec35"
        },
        "date": 1767478009031,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7783.43",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4434.87",
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
          "id": "4f62f2db8e355b67da71e6ac164e41fc727fc1ec",
          "message": "Use correct GPA range when accepting pages in `protect_gpa_tdvm_call()`",
          "timestamp": "2026-01-04T03:20:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/4f62f2db8e355b67da71e6ac164e41fc727fc1ec"
        },
        "date": 1767564773600,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7754.13",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5796.91",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d7cefdb761de7ec55929fbb733104315a48b6b9d",
          "message": "Fix the DMA debug assertion regression",
          "timestamp": "2026-01-05T09:06:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d7cefdb761de7ec55929fbb733104315a48b6b9d"
        },
        "date": 1767652542836,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6853.76",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5843.12",
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
          "id": "bb9b9795865c1ed7533b72c24265a6e2c736ec17",
          "message": "Support allocating inodes from `PseudoFs`",
          "timestamp": "2025-12-24T08:50:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb9b9795865c1ed7533b72c24265a6e2c736ec17"
        },
        "date": 1767738607760,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6947.60",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5320.98",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "922b204280440203d0e5f9d6a06040df64d1e7e5",
          "message": "Move `Pipe` from `InodeImpl` to `Inode`",
          "timestamp": "2026-01-06T15:51:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/922b204280440203d0e5f9d6a06040df64d1e7e5"
        },
        "date": 1767824904716,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6010.24",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4384.20",
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
          "id": "8ace76978eadd74dd2952866c269ac88b41c577b",
          "message": "Add unit tests for DMA `alloc` and `alloc_uninit()`",
          "timestamp": "2026-01-07T11:30:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/8ace76978eadd74dd2952866c269ac88b41c577b"
        },
        "date": 1767911828452,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7748.89",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5634.91",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1767996430490,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7500.31",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6065.75",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768082382589,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6530.89",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5948.11",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768168876675,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7224.55",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5903.98",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8335ba22d9973c64900013fd613bedb312bdcb80",
          "message": "Fix stack overflow handling in InitStackWriter by validating positions before writing",
          "timestamp": "2026-01-11T16:16:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/8335ba22d9973c64900013fd613bedb312bdcb80"
        },
        "date": 1768255662926,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7715.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5877.28",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "wyt8",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "4fa2b55e47884bb53b2048cb2fa55c10ba7b1716",
          "message": "Place the heap after bss segment",
          "timestamp": "2026-01-12T03:21:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/4fa2b55e47884bb53b2048cb2fa55c10ba7b1716"
        },
        "date": 1768344320120,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7328.06",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5819.27",
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
          "id": "815cbf061b6d8ef0871f47f6237dda4eb32fe0d6",
          "message": "Switch to a new Docker image 0.17.0-20260114",
          "timestamp": "2026-01-15T03:55:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/815cbf061b6d8ef0871f47f6237dda4eb32fe0d6"
        },
        "date": 1768520891207,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7156.88",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5869.94",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768603928888,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6821.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5942.44",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768689486522,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5919.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4422.80",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768775915437,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7428.33",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5648.47",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "77f0b0e746ce2df0066b007fb050fc5be0e86e47",
          "message": "Add missing safety comments in `boot_pt`",
          "timestamp": "2025-11-18T03:27:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/77f0b0e746ce2df0066b007fb050fc5be0e86e47"
        },
        "date": 1768866204155,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6387.44",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4348.98",
            "unit": "Requests per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "43f570730c852208a3160b6cfe3f98e0e29d995c",
          "message": "Fix new_fd validation to use resource limits in `do_dup3`",
          "timestamp": "2026-01-20T07:25:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/43f570730c852208a3160b6cfe3f98e0e29d995c"
        },
        "date": 1768949184477,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5990.32",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4413.49",
            "unit": "Requests per second",
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
          "id": "5792b497224e383feff3e17fbaec619c028e27d6",
          "message": "Fix error handling in OverlayFsType by propagating lookup errors",
          "timestamp": "2026-01-21T05:14:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5792b497224e383feff3e17fbaec619c028e27d6"
        },
        "date": 1769036683161,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7780.74",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5783.46",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769122059974,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6034.93",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4367.07",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769208341625,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7506.59",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5622.27",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769294439543,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7043.34",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5784.29",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769380997738,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7802.45",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5734.56",
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
          "id": "e44d7e2b12d25e5928670f976fd085bcb1888c8b",
          "message": "Update the intro section of README",
          "timestamp": "2026-01-24T01:42:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/e44d7e2b12d25e5928670f976fd085bcb1888c8b"
        },
        "date": 1769467773135,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5551.75",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5767.70",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "5499436807f423e4d0cffce4afce303008ea95c2",
          "message": "Add regression tests for recent issues",
          "timestamp": "2026-01-25T17:37:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/5499436807f423e4d0cffce4afce303008ea95c2"
        },
        "date": 1769555025856,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7224.23",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5846.05",
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
          "id": "a599a2c563b857c8c69ab512d3405c8fa6a12932",
          "message": "Disable BAR decoding when sizing PCI BARs",
          "timestamp": "2026-01-23T06:52:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/a599a2c563b857c8c69ab512d3405c8fa6a12932"
        },
        "date": 1769641934803,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7524.03",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5887.61",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769730255437,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7566.63",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5711.21",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769814376638,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6943.35",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5898.72",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769899465953,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6740.78",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5207.29",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769986082146,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7668.04",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5800.46",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1770160266992,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7711.72",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5793.57",
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
          "id": "5d0779bd832cc6ac029e6d4131586635c4cd4779",
          "message": "Fix format issue",
          "timestamp": "2026-02-03T08:22:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/5d0779bd832cc6ac029e6d4131586635c4cd4779"
        },
        "date": 1770247015322,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7314.53",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5810.67",
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
          "id": "5d0779bd832cc6ac029e6d4131586635c4cd4779",
          "message": "Fix format issue",
          "timestamp": "2026-02-03T08:22:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/5d0779bd832cc6ac029e6d4131586635c4cd4779"
        },
        "date": 1770333202457,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7644.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5772.45",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770419254175,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5921.22",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4240.53",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770505500673,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6012.77",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5806.50",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770591792322,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5856.90",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5808.73",
            "unit": "Requests per second",
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
          "id": "5f8b019369c97bc8dc072ebfe3859ea1ff23450d",
          "message": "Replace `from_first_bytes` with `from_bytes` if possible",
          "timestamp": "2026-02-05T11:15:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f8b019369c97bc8dc072ebfe3859ea1ff23450d"
        },
        "date": 1770680043407,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7750.41",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5796.16",
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
          "id": "c9032ad97cbc002afcc5eab41c837a850fb70aa0",
          "message": "Fix `redundant_test_prefix`",
          "timestamp": "2026-02-07T15:45:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/c9032ad97cbc002afcc5eab41c837a850fb70aa0"
        },
        "date": 1770765938702,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7380.12",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5808.78",
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
          "id": "f4102e7db42d12dddcc2a3d689027e7be46434e9",
          "message": "Rename `call_ostd_main` to `start_kernel`",
          "timestamp": "2026-02-11T09:28:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/f4102e7db42d12dddcc2a3d689027e7be46434e9"
        },
        "date": 1770852067780,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7562.14",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5899.76",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chaoqun Zheng",
            "username": "LordaeronESZ",
            "email": "chaoqun_zh@foxmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6882eb73f4d0d5a934c8c89cb7897dc8213e1e37",
          "message": "Fix the issue of `InodeBlockManager::read_blocks`",
          "timestamp": "2026-01-09T04:48:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/6882eb73f4d0d5a934c8c89cb7897dc8213e1e37"
        },
        "date": 1770938453280,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7623.83",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5798.88",
            "unit": "Requests per second",
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
          "id": "1dbc32be0ffc7a2a2f2086c1d8d58cd27f94e070",
          "message": "Use new docker run action in nixos-related workflow",
          "timestamp": "2026-02-13T03:45:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/1dbc32be0ffc7a2a2f2086c1d8d58cd27f94e070"
        },
        "date": 1771024602361,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6094.92",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4851.32",
            "unit": "Requests per second",
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
          "id": "374ff99b5e9066a26fa0fff4a122f793ad1ead63",
          "message": "Remove incorrect unreachable in ostd::main",
          "timestamp": "2026-02-13T03:13:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/374ff99b5e9066a26fa0fff4a122f793ad1ead63"
        },
        "date": 1771110908176,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7648.41",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5794.29",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771196535299,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7511.03",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3770.25",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771284166962,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5952.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4156.75",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771370190066,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7726.95",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5565.64",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771456937414,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7600.36",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5828.10",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771544114631,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7130.04",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5846.40",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771629524963,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7129.95",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5752.84",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771715979888,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5772.71",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5788.95",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771801610213,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6669.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5634.10",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771890100932,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6005.27",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5160.93",
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
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766614610049,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7815.05",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4422.95",
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
          "id": "08be9252402cf14e14000035f2e9ad40fc2a6a1d",
          "message": "Update outdated compatibility data",
          "timestamp": "2025-12-21T15:25:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/08be9252402cf14e14000035f2e9ad40fc2a6a1d"
        },
        "date": 1766699825065,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6895.24",
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
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766786382700,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5897.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5657.22",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766872847420,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5741.20",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4272.40",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "545efaa15516e62775d382406acc8091755eb1e3",
          "message": "Validate futex address alignment when waking robust futexes",
          "timestamp": "2025-12-28T02:55:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/545efaa15516e62775d382406acc8091755eb1e3"
        },
        "date": 1766961302254,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7782.43",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5606.19",
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
          "id": "033c240d8f52b4fae58801d8088c68d717c4194b",
          "message": "Fix madvise behavior",
          "timestamp": "2025-12-15T12:51:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/033c240d8f52b4fae58801d8088c68d717c4194b"
        },
        "date": 1767047784194,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6791.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5810.79",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zjp",
            "username": "zjp-CN",
            "email": "jiping_zhou@foxmail.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "c91d383c91a5dccb057fa7f315657ed73ff8e0e6",
          "message": "Fix `offset: *mut Self` by `offset: usize` in SingleInstruction traits",
          "timestamp": "2025-12-30T03:05:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/c91d383c91a5dccb057fa7f315657ed73ff8e0e6"
        },
        "date": 1767131881836,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7661.72",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5735.34",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1",
          "message": "Refactor the implementation of prlimit64",
          "timestamp": "2025-12-30T09:35:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1"
        },
        "date": 1767218456210,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5947.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5803.36",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767308049357,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7711.84",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5940.93",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767395486651,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6517.86",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5891.59",
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
          "id": "eb76ded5fc4f56b6ebc469728acbc87bf56aec35",
          "message": "Simplify/Clarify `notify/mod.rs` code",
          "timestamp": "2025-12-26T03:28:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb76ded5fc4f56b6ebc469728acbc87bf56aec35"
        },
        "date": 1767477820590,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7124.77",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5890.57",
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
          "id": "4f62f2db8e355b67da71e6ac164e41fc727fc1ec",
          "message": "Use correct GPA range when accepting pages in `protect_gpa_tdvm_call()`",
          "timestamp": "2026-01-04T03:20:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/4f62f2db8e355b67da71e6ac164e41fc727fc1ec"
        },
        "date": 1767564546966,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7104.71",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5812.14",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d7cefdb761de7ec55929fbb733104315a48b6b9d",
          "message": "Fix the DMA debug assertion regression",
          "timestamp": "2026-01-05T09:06:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d7cefdb761de7ec55929fbb733104315a48b6b9d"
        },
        "date": 1767652352954,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7732.15",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5660.33",
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
          "id": "bb9b9795865c1ed7533b72c24265a6e2c736ec17",
          "message": "Support allocating inodes from `PseudoFs`",
          "timestamp": "2025-12-24T08:50:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb9b9795865c1ed7533b72c24265a6e2c736ec17"
        },
        "date": 1767738419347,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8758.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4357.69",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "922b204280440203d0e5f9d6a06040df64d1e7e5",
          "message": "Move `Pipe` from `InodeImpl` to `Inode`",
          "timestamp": "2026-01-06T15:51:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/922b204280440203d0e5f9d6a06040df64d1e7e5"
        },
        "date": 1767824714148,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5946.80",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5816.38",
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
          "id": "8ace76978eadd74dd2952866c269ac88b41c577b",
          "message": "Add unit tests for DMA `alloc` and `alloc_uninit()`",
          "timestamp": "2026-01-07T11:30:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/8ace76978eadd74dd2952866c269ac88b41c577b"
        },
        "date": 1767911599331,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6164.99",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5702.92",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1767996240188,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5906.12",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5722.79",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768082194442,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7557.46",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5582.24",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768168685959,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7140.16",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5610.59",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8335ba22d9973c64900013fd613bedb312bdcb80",
          "message": "Fix stack overflow handling in InitStackWriter by validating positions before writing",
          "timestamp": "2026-01-11T16:16:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/8335ba22d9973c64900013fd613bedb312bdcb80"
        },
        "date": 1768255470416,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7777.91",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5933.77",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "wyt8",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "4fa2b55e47884bb53b2048cb2fa55c10ba7b1716",
          "message": "Place the heap after bss segment",
          "timestamp": "2026-01-12T03:21:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/4fa2b55e47884bb53b2048cb2fa55c10ba7b1716"
        },
        "date": 1768344126006,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5946.24",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5858.25",
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
          "id": "815cbf061b6d8ef0871f47f6237dda4eb32fe0d6",
          "message": "Switch to a new Docker image 0.17.0-20260114",
          "timestamp": "2026-01-15T03:55:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/815cbf061b6d8ef0871f47f6237dda4eb32fe0d6"
        },
        "date": 1768520697850,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6969.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5817.82",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768603733196,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6623.64",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5540.20",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768689292901,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7288.26",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5846.40",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768775719603,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5911.86",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4486.07",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "77f0b0e746ce2df0066b007fb050fc5be0e86e47",
          "message": "Add missing safety comments in `boot_pt`",
          "timestamp": "2025-11-18T03:27:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/77f0b0e746ce2df0066b007fb050fc5be0e86e47"
        },
        "date": 1768865961175,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7416.34",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5920.76",
            "unit": "Requests per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "43f570730c852208a3160b6cfe3f98e0e29d995c",
          "message": "Fix new_fd validation to use resource limits in `do_dup3`",
          "timestamp": "2026-01-20T07:25:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/43f570730c852208a3160b6cfe3f98e0e29d995c"
        },
        "date": 1768948987711,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7555.73",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5873.73",
            "unit": "Requests per second",
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
          "id": "5792b497224e383feff3e17fbaec619c028e27d6",
          "message": "Fix error handling in OverlayFsType by propagating lookup errors",
          "timestamp": "2026-01-21T05:14:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5792b497224e383feff3e17fbaec619c028e27d6"
        },
        "date": 1769036481390,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7135.67",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5942.37",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769121862239,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6397.97",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5796.15",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769208141926,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6131.98",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4509.06",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769294239347,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7393.69",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5585.54",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769380798448,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6943.76",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5775.07",
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
          "id": "e44d7e2b12d25e5928670f976fd085bcb1888c8b",
          "message": "Update the intro section of README",
          "timestamp": "2026-01-24T01:42:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/e44d7e2b12d25e5928670f976fd085bcb1888c8b"
        },
        "date": 1769467571790,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7925.84",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5913.71",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "5499436807f423e4d0cffce4afce303008ea95c2",
          "message": "Add regression tests for recent issues",
          "timestamp": "2026-01-25T17:37:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/5499436807f423e4d0cffce4afce303008ea95c2"
        },
        "date": 1769554805591,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5781.85",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5900.31",
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
          "id": "a599a2c563b857c8c69ab512d3405c8fa6a12932",
          "message": "Disable BAR decoding when sizing PCI BARs",
          "timestamp": "2026-01-23T06:52:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/a599a2c563b857c8c69ab512d3405c8fa6a12932"
        },
        "date": 1769641732425,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7423.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5664.37",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769730030408,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6906.22",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5845.86",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769814129435,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7721.08",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5777.12",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769899261664,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5914.94",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5422.88",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769985877756,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7153.84",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5895.80",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1770160058867,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6090.25",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4241.13",
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
          "id": "5d0779bd832cc6ac029e6d4131586635c4cd4779",
          "message": "Fix format issue",
          "timestamp": "2026-02-03T08:22:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/5d0779bd832cc6ac029e6d4131586635c4cd4779"
        },
        "date": 1770246809386,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5681.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5923.78",
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
          "id": "5d0779bd832cc6ac029e6d4131586635c4cd4779",
          "message": "Fix format issue",
          "timestamp": "2026-02-03T08:22:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/5d0779bd832cc6ac029e6d4131586635c4cd4779"
        },
        "date": 1770332995298,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7628.18",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5807.84",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770419045666,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6166.75",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4443.40",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770505293163,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5949.64",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5822.06",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770591582194,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8040.12",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5701.58",
            "unit": "Requests per second",
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
          "id": "5f8b019369c97bc8dc072ebfe3859ea1ff23450d",
          "message": "Replace `from_first_bytes` with `from_bytes` if possible",
          "timestamp": "2026-02-05T11:15:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f8b019369c97bc8dc072ebfe3859ea1ff23450d"
        },
        "date": 1770679833453,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6752.21",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5770.84",
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
          "id": "c9032ad97cbc002afcc5eab41c837a850fb70aa0",
          "message": "Fix `redundant_test_prefix`",
          "timestamp": "2026-02-07T15:45:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/c9032ad97cbc002afcc5eab41c837a850fb70aa0"
        },
        "date": 1770765728445,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7302.35",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5775.49",
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
          "id": "f4102e7db42d12dddcc2a3d689027e7be46434e9",
          "message": "Rename `call_ostd_main` to `start_kernel`",
          "timestamp": "2026-02-11T09:28:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/f4102e7db42d12dddcc2a3d689027e7be46434e9"
        },
        "date": 1770851857767,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6780.85",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5837.95",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chaoqun Zheng",
            "username": "LordaeronESZ",
            "email": "chaoqun_zh@foxmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6882eb73f4d0d5a934c8c89cb7897dc8213e1e37",
          "message": "Fix the issue of `InodeBlockManager::read_blocks`",
          "timestamp": "2026-01-09T04:48:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/6882eb73f4d0d5a934c8c89cb7897dc8213e1e37"
        },
        "date": 1770938240256,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7349.91",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5899.91",
            "unit": "Requests per second",
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
          "id": "1dbc32be0ffc7a2a2f2086c1d8d58cd27f94e070",
          "message": "Use new docker run action in nixos-related workflow",
          "timestamp": "2026-02-13T03:45:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/1dbc32be0ffc7a2a2f2086c1d8d58cd27f94e070"
        },
        "date": 1771024389334,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6911.15",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5889.35",
            "unit": "Requests per second",
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
          "id": "374ff99b5e9066a26fa0fff4a122f793ad1ead63",
          "message": "Remove incorrect unreachable in ostd::main",
          "timestamp": "2026-02-13T03:13:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/374ff99b5e9066a26fa0fff4a122f793ad1ead63"
        },
        "date": 1771110695079,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7185.00",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5871.00",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771196321918,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7464.86",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5232.65",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771283870128,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7374.57",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5878.60",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771369974350,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5883.33",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5786.71",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771456720211,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7063.29",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5489.88",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771543898270,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7020.36",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4493.84",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771629307288,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7610.22",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5922.23",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771715716715,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7756.63",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5363.16",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771801390848,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7487.14",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6451.73",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771889874088,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5734.44",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5658.73",
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
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766614976587,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5765.41",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5198.21",
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
          "id": "08be9252402cf14e14000035f2e9ad40fc2a6a1d",
          "message": "Update outdated compatibility data",
          "timestamp": "2025-12-21T15:25:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/08be9252402cf14e14000035f2e9ad40fc2a6a1d"
        },
        "date": 1766700193029,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4957.72",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5121.81",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766786749659,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5881.95",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4359.15",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766873216380,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7046.34",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5749.64",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "545efaa15516e62775d382406acc8091755eb1e3",
          "message": "Validate futex address alignment when waking robust futexes",
          "timestamp": "2025-12-28T02:55:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/545efaa15516e62775d382406acc8091755eb1e3"
        },
        "date": 1766961669770,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6366.98",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5723.09",
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
          "id": "033c240d8f52b4fae58801d8088c68d717c4194b",
          "message": "Fix madvise behavior",
          "timestamp": "2025-12-15T12:51:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/033c240d8f52b4fae58801d8088c68d717c4194b"
        },
        "date": 1767048160061,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7486.50",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5855.49",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zjp",
            "username": "zjp-CN",
            "email": "jiping_zhou@foxmail.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "c91d383c91a5dccb057fa7f315657ed73ff8e0e6",
          "message": "Fix `offset: *mut Self` by `offset: usize` in SingleInstruction traits",
          "timestamp": "2025-12-30T03:05:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/c91d383c91a5dccb057fa7f315657ed73ff8e0e6"
        },
        "date": 1767132251501,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5768.34",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4364.11",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1",
          "message": "Refactor the implementation of prlimit64",
          "timestamp": "2025-12-30T09:35:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1"
        },
        "date": 1767218829587,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6139.26",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5709.36",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767308419760,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6204.17",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5977.51",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767395914933,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5998.24",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5833.99",
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
          "id": "eb76ded5fc4f56b6ebc469728acbc87bf56aec35",
          "message": "Simplify/Clarify `notify/mod.rs` code",
          "timestamp": "2025-12-26T03:28:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb76ded5fc4f56b6ebc469728acbc87bf56aec35"
        },
        "date": 1767478197467,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5984.04",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4338.38",
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
          "id": "4f62f2db8e355b67da71e6ac164e41fc727fc1ec",
          "message": "Use correct GPA range when accepting pages in `protect_gpa_tdvm_call()`",
          "timestamp": "2026-01-04T03:20:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/4f62f2db8e355b67da71e6ac164e41fc727fc1ec"
        },
        "date": 1767564999874,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6591.50",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5906.52",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d7cefdb761de7ec55929fbb733104315a48b6b9d",
          "message": "Fix the DMA debug assertion regression",
          "timestamp": "2026-01-05T09:06:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d7cefdb761de7ec55929fbb733104315a48b6b9d"
        },
        "date": 1767652732148,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5884.38",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5572.70",
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
          "id": "bb9b9795865c1ed7533b72c24265a6e2c736ec17",
          "message": "Support allocating inodes from `PseudoFs`",
          "timestamp": "2025-12-24T08:50:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb9b9795865c1ed7533b72c24265a6e2c736ec17"
        },
        "date": 1767738795843,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6919.82",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5862.51",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "922b204280440203d0e5f9d6a06040df64d1e7e5",
          "message": "Move `Pipe` from `InodeImpl` to `Inode`",
          "timestamp": "2026-01-06T15:51:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/922b204280440203d0e5f9d6a06040df64d1e7e5"
        },
        "date": 1767825093398,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7157.71",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5943.47",
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
          "id": "8ace76978eadd74dd2952866c269ac88b41c577b",
          "message": "Add unit tests for DMA `alloc` and `alloc_uninit()`",
          "timestamp": "2026-01-07T11:30:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/8ace76978eadd74dd2952866c269ac88b41c577b"
        },
        "date": 1767912057890,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7340.58",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5893.78",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1767996620202,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6136.01",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5625.19",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768082571555,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5927.18",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5488.53",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768169067738,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7728.26",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6007.60",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8335ba22d9973c64900013fd613bedb312bdcb80",
          "message": "Fix stack overflow handling in InitStackWriter by validating positions before writing",
          "timestamp": "2026-01-11T16:16:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/8335ba22d9973c64900013fd613bedb312bdcb80"
        },
        "date": 1768255855437,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7755.99",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4354.21",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "wyt8",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "4fa2b55e47884bb53b2048cb2fa55c10ba7b1716",
          "message": "Place the heap after bss segment",
          "timestamp": "2026-01-12T03:21:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/4fa2b55e47884bb53b2048cb2fa55c10ba7b1716"
        },
        "date": 1768344514652,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5931.92",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5746.66",
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
          "id": "815cbf061b6d8ef0871f47f6237dda4eb32fe0d6",
          "message": "Switch to a new Docker image 0.17.0-20260114",
          "timestamp": "2026-01-15T03:55:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/815cbf061b6d8ef0871f47f6237dda4eb32fe0d6"
        },
        "date": 1768521084306,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6862.67",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5825.09",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768604123150,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7251.89",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5679.09",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768689680328,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5812.92",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4701.94",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768776111955,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7125.35",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4178.47",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "77f0b0e746ce2df0066b007fb050fc5be0e86e47",
          "message": "Add missing safety comments in `boot_pt`",
          "timestamp": "2025-11-18T03:27:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/77f0b0e746ce2df0066b007fb050fc5be0e86e47"
        },
        "date": 1768866410827,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7579.00",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5781.80",
            "unit": "Requests per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "43f570730c852208a3160b6cfe3f98e0e29d995c",
          "message": "Fix new_fd validation to use resource limits in `do_dup3`",
          "timestamp": "2026-01-20T07:25:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/43f570730c852208a3160b6cfe3f98e0e29d995c"
        },
        "date": 1768949380805,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6800.09",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5591.59",
            "unit": "Requests per second",
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
          "id": "5792b497224e383feff3e17fbaec619c028e27d6",
          "message": "Fix error handling in OverlayFsType by propagating lookup errors",
          "timestamp": "2026-01-21T05:14:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5792b497224e383feff3e17fbaec619c028e27d6"
        },
        "date": 1769036892758,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7418.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5632.83",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769122258383,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6061.18",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5304.41",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769208541036,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7713.29",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5585.16",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769294639837,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7485.94",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5520.15",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769381197625,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6027.64",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3838.45",
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
          "id": "e44d7e2b12d25e5928670f976fd085bcb1888c8b",
          "message": "Update the intro section of README",
          "timestamp": "2026-01-24T01:42:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/e44d7e2b12d25e5928670f976fd085bcb1888c8b"
        },
        "date": 1769467975010,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6881.89",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5850.12",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "5499436807f423e4d0cffce4afce303008ea95c2",
          "message": "Add regression tests for recent issues",
          "timestamp": "2026-01-25T17:37:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/5499436807f423e4d0cffce4afce303008ea95c2"
        },
        "date": 1769555476850,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7678.61",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5902.04",
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
          "id": "a599a2c563b857c8c69ab512d3405c8fa6a12932",
          "message": "Disable BAR decoding when sizing PCI BARs",
          "timestamp": "2026-01-23T06:52:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/a599a2c563b857c8c69ab512d3405c8fa6a12932"
        },
        "date": 1769642137041,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7849.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5674.06",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769730467982,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5914.17",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5936.07",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769814622032,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6873.95",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6200.38",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769899669935,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6238.80",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5246.27",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769986286896,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6829.85",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4306.82",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1770160473694,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7919.94",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5545.04",
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
          "id": "5d0779bd832cc6ac029e6d4131586635c4cd4779",
          "message": "Fix format issue",
          "timestamp": "2026-02-03T08:22:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/5d0779bd832cc6ac029e6d4131586635c4cd4779"
        },
        "date": 1770247221915,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7774.24",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5976.13",
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
          "id": "5d0779bd832cc6ac029e6d4131586635c4cd4779",
          "message": "Fix format issue",
          "timestamp": "2026-02-03T08:22:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/5d0779bd832cc6ac029e6d4131586635c4cd4779"
        },
        "date": 1770333409643,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7088.67",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5752.47",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770419464759,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7203.65",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5614.42",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770505708418,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7188.65",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5423.50",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770592002092,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7485.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5700.45",
            "unit": "Requests per second",
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
          "id": "5f8b019369c97bc8dc072ebfe3859ea1ff23450d",
          "message": "Replace `from_first_bytes` with `from_bytes` if possible",
          "timestamp": "2026-02-05T11:15:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f8b019369c97bc8dc072ebfe3859ea1ff23450d"
        },
        "date": 1770680253560,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7666.56",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5942.56",
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
          "id": "c9032ad97cbc002afcc5eab41c837a850fb70aa0",
          "message": "Fix `redundant_test_prefix`",
          "timestamp": "2026-02-07T15:45:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/c9032ad97cbc002afcc5eab41c837a850fb70aa0"
        },
        "date": 1770766149335,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6585.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5674.94",
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
          "id": "f4102e7db42d12dddcc2a3d689027e7be46434e9",
          "message": "Rename `call_ostd_main` to `start_kernel`",
          "timestamp": "2026-02-11T09:28:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/f4102e7db42d12dddcc2a3d689027e7be46434e9"
        },
        "date": 1770852278659,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6567.55",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5532.02",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chaoqun Zheng",
            "username": "LordaeronESZ",
            "email": "chaoqun_zh@foxmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6882eb73f4d0d5a934c8c89cb7897dc8213e1e37",
          "message": "Fix the issue of `InodeBlockManager::read_blocks`",
          "timestamp": "2026-01-09T04:48:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/6882eb73f4d0d5a934c8c89cb7897dc8213e1e37"
        },
        "date": 1770938666117,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7113.61",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5799.04",
            "unit": "Requests per second",
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
          "id": "1dbc32be0ffc7a2a2f2086c1d8d58cd27f94e070",
          "message": "Use new docker run action in nixos-related workflow",
          "timestamp": "2026-02-13T03:45:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/1dbc32be0ffc7a2a2f2086c1d8d58cd27f94e070"
        },
        "date": 1771024816065,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6914.16",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5748.00",
            "unit": "Requests per second",
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
          "id": "374ff99b5e9066a26fa0fff4a122f793ad1ead63",
          "message": "Remove incorrect unreachable in ostd::main",
          "timestamp": "2026-02-13T03:13:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/374ff99b5e9066a26fa0fff4a122f793ad1ead63"
        },
        "date": 1771111120347,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7371.77",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5927.31",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771196748687,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7330.25",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5667.34",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771284446935,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6017.26",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5797.47",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771370405772,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5897.56",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5546.52",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771457154350,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5708.05",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5774.34",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771544331129,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7696.17",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5663.29",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771629741080,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7093.62",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5864.33",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771716242546,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6804.44",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4412.25",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771801829266,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7417.01",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5723.59",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771890328203,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6811.13",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5892.60",
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
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766614884687,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7636.36",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5801.37",
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
          "id": "08be9252402cf14e14000035f2e9ad40fc2a6a1d",
          "message": "Update outdated compatibility data",
          "timestamp": "2025-12-21T15:25:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/08be9252402cf14e14000035f2e9ad40fc2a6a1d"
        },
        "date": 1766700100492,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5681.96",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5643.87",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766786658054,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7542.99",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5885.86",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766873124868,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7123.24",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5888.23",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "545efaa15516e62775d382406acc8091755eb1e3",
          "message": "Validate futex address alignment when waking robust futexes",
          "timestamp": "2025-12-28T02:55:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/545efaa15516e62775d382406acc8091755eb1e3"
        },
        "date": 1766961577667,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7067.03",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5680.92",
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
          "id": "033c240d8f52b4fae58801d8088c68d717c4194b",
          "message": "Fix madvise behavior",
          "timestamp": "2025-12-15T12:51:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/033c240d8f52b4fae58801d8088c68d717c4194b"
        },
        "date": 1767048065857,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6832.76",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5503.23",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zjp",
            "username": "zjp-CN",
            "email": "jiping_zhou@foxmail.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "c91d383c91a5dccb057fa7f315657ed73ff8e0e6",
          "message": "Fix `offset: *mut Self` by `offset: usize` in SingleInstruction traits",
          "timestamp": "2025-12-30T03:05:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/c91d383c91a5dccb057fa7f315657ed73ff8e0e6"
        },
        "date": 1767132158931,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7404.86",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5704.00",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1",
          "message": "Refactor the implementation of prlimit64",
          "timestamp": "2025-12-30T09:35:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1"
        },
        "date": 1767218736076,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6410.88",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5889.78",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767308327265,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7391.52",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6048.51",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767395823644,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6181.35",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5865.26",
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
          "id": "eb76ded5fc4f56b6ebc469728acbc87bf56aec35",
          "message": "Simplify/Clarify `notify/mod.rs` code",
          "timestamp": "2025-12-26T03:28:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb76ded5fc4f56b6ebc469728acbc87bf56aec35"
        },
        "date": 1767478103144,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7793.52",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4254.48",
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
          "id": "4f62f2db8e355b67da71e6ac164e41fc727fc1ec",
          "message": "Use correct GPA range when accepting pages in `protect_gpa_tdvm_call()`",
          "timestamp": "2026-01-04T03:20:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/4f62f2db8e355b67da71e6ac164e41fc727fc1ec"
        },
        "date": 1767564886670,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7289.07",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5984.15",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d7cefdb761de7ec55929fbb733104315a48b6b9d",
          "message": "Fix the DMA debug assertion regression",
          "timestamp": "2026-01-05T09:06:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d7cefdb761de7ec55929fbb733104315a48b6b9d"
        },
        "date": 1767652637614,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7683.38",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5701.08",
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
          "id": "bb9b9795865c1ed7533b72c24265a6e2c736ec17",
          "message": "Support allocating inodes from `PseudoFs`",
          "timestamp": "2025-12-24T08:50:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb9b9795865c1ed7533b72c24265a6e2c736ec17"
        },
        "date": 1767738702035,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8071.03",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5772.46",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "922b204280440203d0e5f9d6a06040df64d1e7e5",
          "message": "Move `Pipe` from `InodeImpl` to `Inode`",
          "timestamp": "2026-01-06T15:51:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/922b204280440203d0e5f9d6a06040df64d1e7e5"
        },
        "date": 1767824998819,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7590.93",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5828.33",
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
          "id": "8ace76978eadd74dd2952866c269ac88b41c577b",
          "message": "Add unit tests for DMA `alloc` and `alloc_uninit()`",
          "timestamp": "2026-01-07T11:30:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/8ace76978eadd74dd2952866c269ac88b41c577b"
        },
        "date": 1767911943235,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6673.14",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5742.55",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1767996525482,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6861.32",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5628.02",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768082476791,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7585.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5723.09",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768168972331,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7498.60",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5841.08",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8335ba22d9973c64900013fd613bedb312bdcb80",
          "message": "Fix stack overflow handling in InitStackWriter by validating positions before writing",
          "timestamp": "2026-01-11T16:16:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/8335ba22d9973c64900013fd613bedb312bdcb80"
        },
        "date": 1768255759497,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6945.89",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5777.90",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "wyt8",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "4fa2b55e47884bb53b2048cb2fa55c10ba7b1716",
          "message": "Place the heap after bss segment",
          "timestamp": "2026-01-12T03:21:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/4fa2b55e47884bb53b2048cb2fa55c10ba7b1716"
        },
        "date": 1768344417138,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7687.60",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5688.41",
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
          "id": "815cbf061b6d8ef0871f47f6237dda4eb32fe0d6",
          "message": "Switch to a new Docker image 0.17.0-20260114",
          "timestamp": "2026-01-15T03:55:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/815cbf061b6d8ef0871f47f6237dda4eb32fe0d6"
        },
        "date": 1768520987668,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7656.35",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5863.74",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768604026103,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6875.59",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5199.68",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768689583568,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5807.56",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5885.80",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768776013590,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7773.41",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5728.13",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "77f0b0e746ce2df0066b007fb050fc5be0e86e47",
          "message": "Add missing safety comments in `boot_pt`",
          "timestamp": "2025-11-18T03:27:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/77f0b0e746ce2df0066b007fb050fc5be0e86e47"
        },
        "date": 1768866303744,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6114.31",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5914.41",
            "unit": "Requests per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "43f570730c852208a3160b6cfe3f98e0e29d995c",
          "message": "Fix new_fd validation to use resource limits in `do_dup3`",
          "timestamp": "2026-01-20T07:25:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/43f570730c852208a3160b6cfe3f98e0e29d995c"
        },
        "date": 1768949282372,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8719.67",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4260.57",
            "unit": "Requests per second",
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
          "id": "5792b497224e383feff3e17fbaec619c028e27d6",
          "message": "Fix error handling in OverlayFsType by propagating lookup errors",
          "timestamp": "2026-01-21T05:14:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5792b497224e383feff3e17fbaec619c028e27d6"
        },
        "date": 1769036782482,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6761.88",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5801.26",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769122159556,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7673.93",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5411.19",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769208441386,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7338.14",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5943.31",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769294539365,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6182.22",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5804.12",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769381097662,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7010.90",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5866.84",
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
          "id": "e44d7e2b12d25e5928670f976fd085bcb1888c8b",
          "message": "Update the intro section of README",
          "timestamp": "2026-01-24T01:42:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/e44d7e2b12d25e5928670f976fd085bcb1888c8b"
        },
        "date": 1769467874290,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7582.44",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5797.45",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "5499436807f423e4d0cffce4afce303008ea95c2",
          "message": "Add regression tests for recent issues",
          "timestamp": "2026-01-25T17:37:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/5499436807f423e4d0cffce4afce303008ea95c2"
        },
        "date": 1769555257199,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5691.58",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5922.14",
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
          "id": "a599a2c563b857c8c69ab512d3405c8fa6a12932",
          "message": "Disable BAR decoding when sizing PCI BARs",
          "timestamp": "2026-01-23T06:52:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/a599a2c563b857c8c69ab512d3405c8fa6a12932"
        },
        "date": 1769642036152,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6511.02",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5686.13",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769730360186,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7586.72",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5938.43",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769814499550,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6219.28",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5591.85",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769899568021,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7754.49",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5927.05",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769986184809,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7679.64",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5771.21",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1770160369892,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7684.06",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4422.63",
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
          "id": "5d0779bd832cc6ac029e6d4131586635c4cd4779",
          "message": "Fix format issue",
          "timestamp": "2026-02-03T08:22:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/5d0779bd832cc6ac029e6d4131586635c4cd4779"
        },
        "date": 1770247118664,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6449.88",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5794.93",
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
          "id": "5d0779bd832cc6ac029e6d4131586635c4cd4779",
          "message": "Fix format issue",
          "timestamp": "2026-02-03T08:22:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/5d0779bd832cc6ac029e6d4131586635c4cd4779"
        },
        "date": 1770333306053,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6923.36",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4262.37",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770419359778,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7662.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5639.57",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770505604507,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5972.29",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5815.36",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770591897266,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6961.77",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5905.15",
            "unit": "Requests per second",
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
          "id": "5f8b019369c97bc8dc072ebfe3859ea1ff23450d",
          "message": "Replace `from_first_bytes` with `from_bytes` if possible",
          "timestamp": "2026-02-05T11:15:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f8b019369c97bc8dc072ebfe3859ea1ff23450d"
        },
        "date": 1770680148204,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6066.17",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4487.44",
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
          "id": "c9032ad97cbc002afcc5eab41c837a850fb70aa0",
          "message": "Fix `redundant_test_prefix`",
          "timestamp": "2026-02-07T15:45:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/c9032ad97cbc002afcc5eab41c837a850fb70aa0"
        },
        "date": 1770766043961,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7137.61",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5728.75",
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
          "id": "f4102e7db42d12dddcc2a3d689027e7be46434e9",
          "message": "Rename `call_ostd_main` to `start_kernel`",
          "timestamp": "2026-02-11T09:28:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/f4102e7db42d12dddcc2a3d689027e7be46434e9"
        },
        "date": 1770852173053,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5825.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4376.96",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chaoqun Zheng",
            "username": "LordaeronESZ",
            "email": "chaoqun_zh@foxmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6882eb73f4d0d5a934c8c89cb7897dc8213e1e37",
          "message": "Fix the issue of `InodeBlockManager::read_blocks`",
          "timestamp": "2026-01-09T04:48:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/6882eb73f4d0d5a934c8c89cb7897dc8213e1e37"
        },
        "date": 1770938559509,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6007.14",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5747.20",
            "unit": "Requests per second",
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
          "id": "1dbc32be0ffc7a2a2f2086c1d8d58cd27f94e070",
          "message": "Use new docker run action in nixos-related workflow",
          "timestamp": "2026-02-13T03:45:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/1dbc32be0ffc7a2a2f2086c1d8d58cd27f94e070"
        },
        "date": 1771024709342,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7717.11",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5855.15",
            "unit": "Requests per second",
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
          "id": "374ff99b5e9066a26fa0fff4a122f793ad1ead63",
          "message": "Remove incorrect unreachable in ostd::main",
          "timestamp": "2026-02-13T03:13:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/374ff99b5e9066a26fa0fff4a122f793ad1ead63"
        },
        "date": 1771111014406,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6866.14",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5727.89",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771196642059,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7813.01",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5657.42",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771284275299,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7114.15",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5754.05",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771370297954,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6853.83",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5682.95",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771457045968,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6088.89",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5773.62",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771544222794,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5812.30",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5821.14",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771629633174,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7877.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5822.23",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771716111520,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7483.05",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5828.11",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771801719637,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5869.01",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4800.26",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771890214917,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7456.29",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5744.10",
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
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766614701401,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7724.49",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5748.57",
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
          "id": "08be9252402cf14e14000035f2e9ad40fc2a6a1d",
          "message": "Update outdated compatibility data",
          "timestamp": "2025-12-21T15:25:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/08be9252402cf14e14000035f2e9ad40fc2a6a1d"
        },
        "date": 1766699916803,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6663.41",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5901.15",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766786474369,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6882.05",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5913.14",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766872940156,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5902.67",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4349.02",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "545efaa15516e62775d382406acc8091755eb1e3",
          "message": "Validate futex address alignment when waking robust futexes",
          "timestamp": "2025-12-28T02:55:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/545efaa15516e62775d382406acc8091755eb1e3"
        },
        "date": 1766961394169,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6952.61",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5964.01",
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
          "id": "033c240d8f52b4fae58801d8088c68d717c4194b",
          "message": "Fix madvise behavior",
          "timestamp": "2025-12-15T12:51:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/033c240d8f52b4fae58801d8088c68d717c4194b"
        },
        "date": 1767047877908,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7146.81",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5764.92",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zjp",
            "username": "zjp-CN",
            "email": "jiping_zhou@foxmail.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "c91d383c91a5dccb057fa7f315657ed73ff8e0e6",
          "message": "Fix `offset: *mut Self` by `offset: usize` in SingleInstruction traits",
          "timestamp": "2025-12-30T03:05:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/c91d383c91a5dccb057fa7f315657ed73ff8e0e6"
        },
        "date": 1767131974367,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7158.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5738.59",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1",
          "message": "Refactor the implementation of prlimit64",
          "timestamp": "2025-12-30T09:35:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1"
        },
        "date": 1767218549869,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7699.14",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5575.06",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767308141692,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5768.43",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5783.53",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767395577460,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6103.43",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5635.22",
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
          "id": "eb76ded5fc4f56b6ebc469728acbc87bf56aec35",
          "message": "Simplify/Clarify `notify/mod.rs` code",
          "timestamp": "2025-12-26T03:28:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb76ded5fc4f56b6ebc469728acbc87bf56aec35"
        },
        "date": 1767477914547,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5866.53",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4223.95",
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
          "id": "4f62f2db8e355b67da71e6ac164e41fc727fc1ec",
          "message": "Use correct GPA range when accepting pages in `protect_gpa_tdvm_call()`",
          "timestamp": "2026-01-04T03:20:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/4f62f2db8e355b67da71e6ac164e41fc727fc1ec"
        },
        "date": 1767564660407,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7783.46",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4941.02",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d7cefdb761de7ec55929fbb733104315a48b6b9d",
          "message": "Fix the DMA debug assertion regression",
          "timestamp": "2026-01-05T09:06:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d7cefdb761de7ec55929fbb733104315a48b6b9d"
        },
        "date": 1767652448119,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7436.59",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5446.42",
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
          "id": "bb9b9795865c1ed7533b72c24265a6e2c736ec17",
          "message": "Support allocating inodes from `PseudoFs`",
          "timestamp": "2025-12-24T08:50:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb9b9795865c1ed7533b72c24265a6e2c736ec17"
        },
        "date": 1767738513817,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7090.58",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5691.10",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "922b204280440203d0e5f9d6a06040df64d1e7e5",
          "message": "Move `Pipe` from `InodeImpl` to `Inode`",
          "timestamp": "2026-01-06T15:51:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/922b204280440203d0e5f9d6a06040df64d1e7e5"
        },
        "date": 1767824809451,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7425.15",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4385.68",
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
          "id": "8ace76978eadd74dd2952866c269ac88b41c577b",
          "message": "Add unit tests for DMA `alloc` and `alloc_uninit()`",
          "timestamp": "2026-01-07T11:30:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/8ace76978eadd74dd2952866c269ac88b41c577b"
        },
        "date": 1767911714056,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6863.67",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5294.16",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1767996334942,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7419.50",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4415.91",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768082288523,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6905.50",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5242.75",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768168781172,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6417.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5789.95",
            "unit": "Requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8335ba22d9973c64900013fd613bedb312bdcb80",
          "message": "Fix stack overflow handling in InitStackWriter by validating positions before writing",
          "timestamp": "2026-01-11T16:16:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/8335ba22d9973c64900013fd613bedb312bdcb80"
        },
        "date": 1768255566603,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5809.80",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5697.16",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "wyt8",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "4fa2b55e47884bb53b2048cb2fa55c10ba7b1716",
          "message": "Place the heap after bss segment",
          "timestamp": "2026-01-12T03:21:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/4fa2b55e47884bb53b2048cb2fa55c10ba7b1716"
        },
        "date": 1768344222830,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6781.23",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4361.93",
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
          "id": "815cbf061b6d8ef0871f47f6237dda4eb32fe0d6",
          "message": "Switch to a new Docker image 0.17.0-20260114",
          "timestamp": "2026-01-15T03:55:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/815cbf061b6d8ef0871f47f6237dda4eb32fe0d6"
        },
        "date": 1768520794406,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7213.80",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4438.21",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768603830946,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5849.09",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6018.61",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768689389884,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6022.99",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5646.37",
            "unit": "Requests per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768775817669,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5989.18",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5682.63",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "77f0b0e746ce2df0066b007fb050fc5be0e86e47",
          "message": "Add missing safety comments in `boot_pt`",
          "timestamp": "2025-11-18T03:27:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/77f0b0e746ce2df0066b007fb050fc5be0e86e47"
        },
        "date": 1768866060002,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7801.08",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5770.10",
            "unit": "Requests per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "43f570730c852208a3160b6cfe3f98e0e29d995c",
          "message": "Fix new_fd validation to use resource limits in `do_dup3`",
          "timestamp": "2026-01-20T07:25:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/43f570730c852208a3160b6cfe3f98e0e29d995c"
        },
        "date": 1768949085725,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6000.43",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5905.26",
            "unit": "Requests per second",
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
          "id": "5792b497224e383feff3e17fbaec619c028e27d6",
          "message": "Fix error handling in OverlayFsType by propagating lookup errors",
          "timestamp": "2026-01-21T05:14:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5792b497224e383feff3e17fbaec619c028e27d6"
        },
        "date": 1769036580975,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7312.01",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5643.85",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769121960829,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5989.65",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5901.26",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769208242278,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6014.44",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5619.23",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769294339495,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7441.68",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5751.81",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769380897945,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7660.35",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5594.86",
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
          "id": "e44d7e2b12d25e5928670f976fd085bcb1888c8b",
          "message": "Update the intro section of README",
          "timestamp": "2026-01-24T01:42:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/e44d7e2b12d25e5928670f976fd085bcb1888c8b"
        },
        "date": 1769467672232,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5940.36",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5906.71",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "5499436807f423e4d0cffce4afce303008ea95c2",
          "message": "Add regression tests for recent issues",
          "timestamp": "2026-01-25T17:37:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/5499436807f423e4d0cffce4afce303008ea95c2"
        },
        "date": 1769554921540,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7096.20",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5822.88",
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
          "id": "a599a2c563b857c8c69ab512d3405c8fa6a12932",
          "message": "Disable BAR decoding when sizing PCI BARs",
          "timestamp": "2026-01-23T06:52:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/a599a2c563b857c8c69ab512d3405c8fa6a12932"
        },
        "date": 1769641833713,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7646.46",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6023.31",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769730140204,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7256.23",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5796.16",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769814253060,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6018.93",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4347.62",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769899363918,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7754.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5586.88",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769985980008,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7430.72",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6099.09",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1770160162861,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5939.29",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5894.13",
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
          "id": "5d0779bd832cc6ac029e6d4131586635c4cd4779",
          "message": "Fix format issue",
          "timestamp": "2026-02-03T08:22:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/5d0779bd832cc6ac029e6d4131586635c4cd4779"
        },
        "date": 1770246912506,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5891.17",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5709.72",
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
          "id": "5d0779bd832cc6ac029e6d4131586635c4cd4779",
          "message": "Fix format issue",
          "timestamp": "2026-02-03T08:22:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/5d0779bd832cc6ac029e6d4131586635c4cd4779"
        },
        "date": 1770333098965,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5850.28",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5871.80",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770419149932,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7081.95",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5832.63",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770505397298,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7739.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5767.17",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770591686356,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6696.60",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4366.29",
            "unit": "Requests per second",
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
          "id": "5f8b019369c97bc8dc072ebfe3859ea1ff23450d",
          "message": "Replace `from_first_bytes` with `from_bytes` if possible",
          "timestamp": "2026-02-05T11:15:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f8b019369c97bc8dc072ebfe3859ea1ff23450d"
        },
        "date": 1770679938533,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7757.91",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5798.28",
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
          "id": "c9032ad97cbc002afcc5eab41c837a850fb70aa0",
          "message": "Fix `redundant_test_prefix`",
          "timestamp": "2026-02-07T15:45:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/c9032ad97cbc002afcc5eab41c837a850fb70aa0"
        },
        "date": 1770765833707,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6624.83",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5569.16",
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
          "id": "f4102e7db42d12dddcc2a3d689027e7be46434e9",
          "message": "Rename `call_ostd_main` to `start_kernel`",
          "timestamp": "2026-02-11T09:28:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/f4102e7db42d12dddcc2a3d689027e7be46434e9"
        },
        "date": 1770851962688,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6211.60",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6457.08",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chaoqun Zheng",
            "username": "LordaeronESZ",
            "email": "chaoqun_zh@foxmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6882eb73f4d0d5a934c8c89cb7897dc8213e1e37",
          "message": "Fix the issue of `InodeBlockManager::read_blocks`",
          "timestamp": "2026-01-09T04:48:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/6882eb73f4d0d5a934c8c89cb7897dc8213e1e37"
        },
        "date": 1770938346781,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6999.55",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5333.72",
            "unit": "Requests per second",
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
          "id": "1dbc32be0ffc7a2a2f2086c1d8d58cd27f94e070",
          "message": "Use new docker run action in nixos-related workflow",
          "timestamp": "2026-02-13T03:45:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/1dbc32be0ffc7a2a2f2086c1d8d58cd27f94e070"
        },
        "date": 1771024495772,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7372.46",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5745.86",
            "unit": "Requests per second",
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
          "id": "374ff99b5e9066a26fa0fff4a122f793ad1ead63",
          "message": "Remove incorrect unreachable in ostd::main",
          "timestamp": "2026-02-13T03:13:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/374ff99b5e9066a26fa0fff4a122f793ad1ead63"
        },
        "date": 1771110801433,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5827.73",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5741.80",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771196428567,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7679.30",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4409.12",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771283977624,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7648.13",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5615.12",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771370082367,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7143.93",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5885.31",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771456828653,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7064.35",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5892.99",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771544006246,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6124.36",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5752.09",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771629416654,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5883.84",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4425.66",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771715848369,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6665.16",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5958.10",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771801500546,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7245.76",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5783.23",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771889987757,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5992.69",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5743.80",
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
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766614518539,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5828.16",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3222.33",
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
          "id": "08be9252402cf14e14000035f2e9ad40fc2a6a1d",
          "message": "Update outdated compatibility data",
          "timestamp": "2025-12-21T15:25:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/08be9252402cf14e14000035f2e9ad40fc2a6a1d"
        },
        "date": 1766699734065,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5427.76",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3128.52",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766786291156,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5712.26",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2971.88",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766872755922,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5834.82",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2522.02",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "545efaa15516e62775d382406acc8091755eb1e3",
          "message": "Validate futex address alignment when waking robust futexes",
          "timestamp": "2025-12-28T02:55:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/545efaa15516e62775d382406acc8091755eb1e3"
        },
        "date": 1766961210482,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5879.50",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3208.58",
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
          "id": "033c240d8f52b4fae58801d8088c68d717c4194b",
          "message": "Fix madvise behavior",
          "timestamp": "2025-12-15T12:51:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/033c240d8f52b4fae58801d8088c68d717c4194b"
        },
        "date": 1767047690480,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5566.60",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2568.67",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zjp",
            "username": "zjp-CN",
            "email": "jiping_zhou@foxmail.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "c91d383c91a5dccb057fa7f315657ed73ff8e0e6",
          "message": "Fix `offset: *mut Self` by `offset: usize` in SingleInstruction traits",
          "timestamp": "2025-12-30T03:05:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/c91d383c91a5dccb057fa7f315657ed73ff8e0e6"
        },
        "date": 1767131789222,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5644.84",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3267.07",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1",
          "message": "Refactor the implementation of prlimit64",
          "timestamp": "2025-12-30T09:35:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1"
        },
        "date": 1767218362589,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5760.65",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3145.78",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767307956492,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5752.02",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3148.87",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767395393890,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5761.29",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3098.26",
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
          "id": "eb76ded5fc4f56b6ebc469728acbc87bf56aec35",
          "message": "Simplify/Clarify `notify/mod.rs` code",
          "timestamp": "2025-12-26T03:28:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb76ded5fc4f56b6ebc469728acbc87bf56aec35"
        },
        "date": 1767477726991,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5636.61",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3167.45",
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
          "id": "4f62f2db8e355b67da71e6ac164e41fc727fc1ec",
          "message": "Use correct GPA range when accepting pages in `protect_gpa_tdvm_call()`",
          "timestamp": "2026-01-04T03:20:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/4f62f2db8e355b67da71e6ac164e41fc727fc1ec"
        },
        "date": 1767564433611,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5580.35",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2586.85",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d7cefdb761de7ec55929fbb733104315a48b6b9d",
          "message": "Fix the DMA debug assertion regression",
          "timestamp": "2026-01-05T09:06:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d7cefdb761de7ec55929fbb733104315a48b6b9d"
        },
        "date": 1767652258245,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5834.80",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3184.29",
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
          "id": "bb9b9795865c1ed7533b72c24265a6e2c736ec17",
          "message": "Support allocating inodes from `PseudoFs`",
          "timestamp": "2025-12-24T08:50:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb9b9795865c1ed7533b72c24265a6e2c736ec17"
        },
        "date": 1767738325427,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5395.91",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3217.76",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "922b204280440203d0e5f9d6a06040df64d1e7e5",
          "message": "Move `Pipe` from `InodeImpl` to `Inode`",
          "timestamp": "2026-01-06T15:51:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/922b204280440203d0e5f9d6a06040df64d1e7e5"
        },
        "date": 1767824619340,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5647.02",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3127.89",
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
          "id": "8ace76978eadd74dd2952866c269ac88b41c577b",
          "message": "Add unit tests for DMA `alloc` and `alloc_uninit()`",
          "timestamp": "2026-01-07T11:30:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/8ace76978eadd74dd2952866c269ac88b41c577b"
        },
        "date": 1767911484496,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5033.49",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2965.12",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1767996145399,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5729.47",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3157.66",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768082099943,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4714.24",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3132.10",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768168590583,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5668.28",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3119.06",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8335ba22d9973c64900013fd613bedb312bdcb80",
          "message": "Fix stack overflow handling in InitStackWriter by validating positions before writing",
          "timestamp": "2026-01-11T16:16:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/8335ba22d9973c64900013fd613bedb312bdcb80"
        },
        "date": 1768255374565,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5770.33",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3203.10",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "wyt8",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "4fa2b55e47884bb53b2048cb2fa55c10ba7b1716",
          "message": "Place the heap after bss segment",
          "timestamp": "2026-01-12T03:21:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/4fa2b55e47884bb53b2048cb2fa55c10ba7b1716"
        },
        "date": 1768344029365,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5938.63",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3046.21",
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
          "id": "815cbf061b6d8ef0871f47f6237dda4eb32fe0d6",
          "message": "Switch to a new Docker image 0.17.0-20260114",
          "timestamp": "2026-01-15T03:55:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/815cbf061b6d8ef0871f47f6237dda4eb32fe0d6"
        },
        "date": 1768520601401,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4952.06",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3083.56",
            "unit": "Kbytes/sec",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768603635871,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5774.75",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2490.31",
            "unit": "Kbytes/sec",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768689196779,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6058.77",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3191.51",
            "unit": "Kbytes/sec",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768775621799,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5356.46",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3163.83",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "77f0b0e746ce2df0066b007fb050fc5be0e86e47",
          "message": "Add missing safety comments in `boot_pt`",
          "timestamp": "2025-11-18T03:27:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/77f0b0e746ce2df0066b007fb050fc5be0e86e47"
        },
        "date": 1768865862084,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5742.17",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3102.89",
            "unit": "Kbytes/sec",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "43f570730c852208a3160b6cfe3f98e0e29d995c",
          "message": "Fix new_fd validation to use resource limits in `do_dup3`",
          "timestamp": "2026-01-20T07:25:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/43f570730c852208a3160b6cfe3f98e0e29d995c"
        },
        "date": 1768948889624,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5635.81",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3241.60",
            "unit": "Kbytes/sec",
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
          "id": "5792b497224e383feff3e17fbaec619c028e27d6",
          "message": "Fix error handling in OverlayFsType by propagating lookup errors",
          "timestamp": "2026-01-21T05:14:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5792b497224e383feff3e17fbaec619c028e27d6"
        },
        "date": 1769036381832,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5298.94",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2532.09",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769121763832,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5586.64",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3315.97",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769208042277,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5734.76",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3078.58",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769294139372,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5793.06",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3146.52",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769380698333,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5581.13",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2550.07",
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
          "id": "e44d7e2b12d25e5928670f976fd085bcb1888c8b",
          "message": "Update the intro section of README",
          "timestamp": "2026-01-24T01:42:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/e44d7e2b12d25e5928670f976fd085bcb1888c8b"
        },
        "date": 1769467471046,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5572.26",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3125.42",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "5499436807f423e4d0cffce4afce303008ea95c2",
          "message": "Add regression tests for recent issues",
          "timestamp": "2026-01-25T17:37:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/5499436807f423e4d0cffce4afce303008ea95c2"
        },
        "date": 1769554698451,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5352.14",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3187.55",
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
          "id": "a599a2c563b857c8c69ab512d3405c8fa6a12932",
          "message": "Disable BAR decoding when sizing PCI BARs",
          "timestamp": "2026-01-23T06:52:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/a599a2c563b857c8c69ab512d3405c8fa6a12932"
        },
        "date": 1769641631255,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5745.63",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3109.42",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769729868021,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4802.98",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3114.84",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769814006733,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6230.83",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3136.02",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769899159850,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5787.81",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3098.94",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769985776060,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5825.54",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3119.53",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1770159954764,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5644.08",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3027.11",
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
          "id": "5d0779bd832cc6ac029e6d4131586635c4cd4779",
          "message": "Fix format issue",
          "timestamp": "2026-02-03T08:22:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/5d0779bd832cc6ac029e6d4131586635c4cd4779"
        },
        "date": 1770246706066,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6246.64",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3074.90",
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
          "id": "5d0779bd832cc6ac029e6d4131586635c4cd4779",
          "message": "Fix format issue",
          "timestamp": "2026-02-03T08:22:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/5d0779bd832cc6ac029e6d4131586635c4cd4779"
        },
        "date": 1770332891394,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6039.42",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3131.11",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770418941237,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5772.29",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3103.88",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770505189266,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5147.82",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3026.19",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770591477742,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5582.15",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3084.13",
            "unit": "Kbytes/sec",
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
          "id": "5f8b019369c97bc8dc072ebfe3859ea1ff23450d",
          "message": "Replace `from_first_bytes` with `from_bytes` if possible",
          "timestamp": "2026-02-05T11:15:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f8b019369c97bc8dc072ebfe3859ea1ff23450d"
        },
        "date": 1770679728257,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4867.30",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3178.33",
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
          "id": "c9032ad97cbc002afcc5eab41c837a850fb70aa0",
          "message": "Fix `redundant_test_prefix`",
          "timestamp": "2026-02-07T15:45:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/c9032ad97cbc002afcc5eab41c837a850fb70aa0"
        },
        "date": 1770765623242,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5434.21",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3122.30",
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
          "id": "f4102e7db42d12dddcc2a3d689027e7be46434e9",
          "message": "Rename `call_ostd_main` to `start_kernel`",
          "timestamp": "2026-02-11T09:28:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/f4102e7db42d12dddcc2a3d689027e7be46434e9"
        },
        "date": 1770851752333,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5676.89",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3105.84",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chaoqun Zheng",
            "username": "LordaeronESZ",
            "email": "chaoqun_zh@foxmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6882eb73f4d0d5a934c8c89cb7897dc8213e1e37",
          "message": "Fix the issue of `InodeBlockManager::read_blocks`",
          "timestamp": "2026-01-09T04:48:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/6882eb73f4d0d5a934c8c89cb7897dc8213e1e37"
        },
        "date": 1770938133801,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5641.21",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3052.78",
            "unit": "Kbytes/sec",
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
          "id": "1dbc32be0ffc7a2a2f2086c1d8d58cd27f94e070",
          "message": "Use new docker run action in nixos-related workflow",
          "timestamp": "2026-02-13T03:45:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/1dbc32be0ffc7a2a2f2086c1d8d58cd27f94e070"
        },
        "date": 1771024279967,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5792.32",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2545.69",
            "unit": "Kbytes/sec",
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
          "id": "374ff99b5e9066a26fa0fff4a122f793ad1ead63",
          "message": "Remove incorrect unreachable in ostd::main",
          "timestamp": "2026-02-13T03:13:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/374ff99b5e9066a26fa0fff4a122f793ad1ead63"
        },
        "date": 1771110588647,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5896.11",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3037.18",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771196216317,
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
            "value": "3062.59",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771283762513,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5619.72",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3039.42",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771369866598,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5743.67",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3093.89",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771456611616,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4848.51",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3106.21",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771543789792,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4762.54",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2897.20",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771629199114,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6058.92",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3202.42",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771715585413,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5996.09",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3138.98",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771801281261,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4970.40",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3143.95",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771889760608,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4790.73",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3131.36",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "08be9252402cf14e14000035f2e9ad40fc2a6a1d",
          "message": "Update outdated compatibility data",
          "timestamp": "2025-12-21T15:25:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/08be9252402cf14e14000035f2e9ad40fc2a6a1d"
        },
        "date": 1766699641534,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22855.99",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "699.05",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766786199558,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20523.49",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "933.77",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766872663888,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20589.16",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4144.77",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "545efaa15516e62775d382406acc8091755eb1e3",
          "message": "Validate futex address alignment when waking robust futexes",
          "timestamp": "2025-12-28T02:55:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/545efaa15516e62775d382406acc8091755eb1e3"
        },
        "date": 1766961118385,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21262.98",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2650.34",
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
          "id": "033c240d8f52b4fae58801d8088c68d717c4194b",
          "message": "Fix madvise behavior",
          "timestamp": "2025-12-15T12:51:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/033c240d8f52b4fae58801d8088c68d717c4194b"
        },
        "date": 1767047592112,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23154.81",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "438.23",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zjp",
            "username": "zjp-CN",
            "email": "jiping_zhou@foxmail.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "c91d383c91a5dccb057fa7f315657ed73ff8e0e6",
          "message": "Fix `offset: *mut Self` by `offset: usize` in SingleInstruction traits",
          "timestamp": "2025-12-30T03:05:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/c91d383c91a5dccb057fa7f315657ed73ff8e0e6"
        },
        "date": 1767131696562,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22030.17",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4133.73",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1",
          "message": "Refactor the implementation of prlimit64",
          "timestamp": "2025-12-30T09:35:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1"
        },
        "date": 1767218269079,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23289.61",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "404.98",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767307863491,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "18914.39",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3459.29",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767395300801,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21400.24",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3691.53",
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
          "id": "eb76ded5fc4f56b6ebc469728acbc87bf56aec35",
          "message": "Simplify/Clarify `notify/mod.rs` code",
          "timestamp": "2025-12-26T03:28:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb76ded5fc4f56b6ebc469728acbc87bf56aec35"
        },
        "date": 1767477632503,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19811.46",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "951.29",
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
          "id": "4f62f2db8e355b67da71e6ac164e41fc727fc1ec",
          "message": "Use correct GPA range when accepting pages in `protect_gpa_tdvm_call()`",
          "timestamp": "2026-01-04T03:20:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/4f62f2db8e355b67da71e6ac164e41fc727fc1ec"
        },
        "date": 1767564319568,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23383.32",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "219.33",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d7cefdb761de7ec55929fbb733104315a48b6b9d",
          "message": "Fix the DMA debug assertion regression",
          "timestamp": "2026-01-05T09:06:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d7cefdb761de7ec55929fbb733104315a48b6b9d"
        },
        "date": 1767652163626,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19935.27",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4231.60",
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
          "id": "bb9b9795865c1ed7533b72c24265a6e2c736ec17",
          "message": "Support allocating inodes from `PseudoFs`",
          "timestamp": "2025-12-24T08:50:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb9b9795865c1ed7533b72c24265a6e2c736ec17"
        },
        "date": 1767738230483,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22659.98",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4156.44",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "922b204280440203d0e5f9d6a06040df64d1e7e5",
          "message": "Move `Pipe` from `InodeImpl` to `Inode`",
          "timestamp": "2026-01-06T15:51:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/922b204280440203d0e5f9d6a06040df64d1e7e5"
        },
        "date": 1767824524572,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23626.22",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2450.70",
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
          "id": "8ace76978eadd74dd2952866c269ac88b41c577b",
          "message": "Add unit tests for DMA `alloc` and `alloc_uninit()`",
          "timestamp": "2026-01-07T11:30:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/8ace76978eadd74dd2952866c269ac88b41c577b"
        },
        "date": 1767911369653,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22002.83",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3472.27",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1767996050406,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22692.71",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1060.34",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768082005731,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22684.63",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4142.60",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768168494910,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "24093.92",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1454.99",
            "unit": "Kbytes/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8335ba22d9973c64900013fd613bedb312bdcb80",
          "message": "Fix stack overflow handling in InitStackWriter by validating positions before writing",
          "timestamp": "2026-01-11T16:16:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/8335ba22d9973c64900013fd613bedb312bdcb80"
        },
        "date": 1768255278752,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "24609.96",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4030.60",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "wyt8",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "4fa2b55e47884bb53b2048cb2fa55c10ba7b1716",
          "message": "Place the heap after bss segment",
          "timestamp": "2026-01-12T03:21:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/4fa2b55e47884bb53b2048cb2fa55c10ba7b1716"
        },
        "date": 1768343932466,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23897.44",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3798.96",
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
          "id": "815cbf061b6d8ef0871f47f6237dda4eb32fe0d6",
          "message": "Switch to a new Docker image 0.17.0-20260114",
          "timestamp": "2026-01-15T03:55:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/815cbf061b6d8ef0871f47f6237dda4eb32fe0d6"
        },
        "date": 1768520504093,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22059.16",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2863.46",
            "unit": "Kbytes/sec",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768603395623,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23861.49",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2571.86",
            "unit": "Kbytes/sec",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768689099708,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20323.78",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "328.64",
            "unit": "Kbytes/sec",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768775523611,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19671.83",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "877.91",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "77f0b0e746ce2df0066b007fb050fc5be0e86e47",
          "message": "Add missing safety comments in `boot_pt`",
          "timestamp": "2025-11-18T03:27:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/77f0b0e746ce2df0066b007fb050fc5be0e86e47"
        },
        "date": 1768865763456,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19308.52",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "916.46",
            "unit": "Kbytes/sec",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "43f570730c852208a3160b6cfe3f98e0e29d995c",
          "message": "Fix new_fd validation to use resource limits in `do_dup3`",
          "timestamp": "2026-01-20T07:25:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/43f570730c852208a3160b6cfe3f98e0e29d995c"
        },
        "date": 1768948791506,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23426.25",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4386.51",
            "unit": "Kbytes/sec",
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
          "id": "5792b497224e383feff3e17fbaec619c028e27d6",
          "message": "Fix error handling in OverlayFsType by propagating lookup errors",
          "timestamp": "2026-01-21T05:14:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5792b497224e383feff3e17fbaec619c028e27d6"
        },
        "date": 1769036281832,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21214.55",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3274.48",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769121664392,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23442.90",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2181.82",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769207942836,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23218.70",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3092.14",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769294038945,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23539.92",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4245.14",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769380598253,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23966.46",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1790.77",
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
          "id": "e44d7e2b12d25e5928670f976fd085bcb1888c8b",
          "message": "Update the intro section of README",
          "timestamp": "2026-01-24T01:42:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/e44d7e2b12d25e5928670f976fd085bcb1888c8b"
        },
        "date": 1769467370068,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19253.48",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "906.85",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "5499436807f423e4d0cffce4afce303008ea95c2",
          "message": "Add regression tests for recent issues",
          "timestamp": "2026-01-25T17:37:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/5499436807f423e4d0cffce4afce303008ea95c2"
        },
        "date": 1769554567366,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20880.72",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1436.22",
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
          "id": "a599a2c563b857c8c69ab512d3405c8fa6a12932",
          "message": "Disable BAR decoding when sizing PCI BARs",
          "timestamp": "2026-01-23T06:52:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/a599a2c563b857c8c69ab512d3405c8fa6a12932"
        },
        "date": 1769641530029,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21042.70",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3539.89",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769729761676,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23232.25",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3183.40",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769813883189,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20098.80",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "408.44",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769899057729,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21453.90",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4003.54",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769985673616,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22674.07",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4497.22",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1770159850568,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23325.69",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "864.36",
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
          "id": "5d0779bd832cc6ac029e6d4131586635c4cd4779",
          "message": "Fix format issue",
          "timestamp": "2026-02-03T08:22:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/5d0779bd832cc6ac029e6d4131586635c4cd4779"
        },
        "date": 1770246602537,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22062.92",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4170.12",
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
          "id": "5d0779bd832cc6ac029e6d4131586635c4cd4779",
          "message": "Fix format issue",
          "timestamp": "2026-02-03T08:22:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/5d0779bd832cc6ac029e6d4131586635c4cd4779"
        },
        "date": 1770332787322,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23431.62",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2411.65",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770418837017,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23044.18",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4055.78",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770505085289,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20748.62",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2261.26",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3d6d91ea18161646f71000fc0139af463a55dafd",
          "message": "Bump time from 0.3.41 to 0.3.47\n\nBumps [time](https://github.com/time-rs/time) from 0.3.41 to 0.3.47.\n- [Release notes](https://github.com/time-rs/time/releases)\n- [Changelog](https://github.com/time-rs/time/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/time-rs/time/compare/v0.3.41...v0.3.47)\n\n---\nupdated-dependencies:\n- dependency-name: time\n  dependency-version: 0.3.47\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2026-02-06T03:41:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d6d91ea18161646f71000fc0139af463a55dafd"
        },
        "date": 1770591373169,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21839.83",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3361.99",
            "unit": "Kbytes/sec",
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
          "id": "5f8b019369c97bc8dc072ebfe3859ea1ff23450d",
          "message": "Replace `from_first_bytes` with `from_bytes` if possible",
          "timestamp": "2026-02-05T11:15:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f8b019369c97bc8dc072ebfe3859ea1ff23450d"
        },
        "date": 1770679622861,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21480.28",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "336.86",
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
          "id": "c9032ad97cbc002afcc5eab41c837a850fb70aa0",
          "message": "Fix `redundant_test_prefix`",
          "timestamp": "2026-02-07T15:45:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/c9032ad97cbc002afcc5eab41c837a850fb70aa0"
        },
        "date": 1770765517043,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21316.67",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3427.22",
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
          "id": "f4102e7db42d12dddcc2a3d689027e7be46434e9",
          "message": "Rename `call_ostd_main` to `start_kernel`",
          "timestamp": "2026-02-11T09:28:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/f4102e7db42d12dddcc2a3d689027e7be46434e9"
        },
        "date": 1770851646610,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16512.47",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4991.69",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chaoqun Zheng",
            "username": "LordaeronESZ",
            "email": "chaoqun_zh@foxmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6882eb73f4d0d5a934c8c89cb7897dc8213e1e37",
          "message": "Fix the issue of `InodeBlockManager::read_blocks`",
          "timestamp": "2026-01-09T04:48:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/6882eb73f4d0d5a934c8c89cb7897dc8213e1e37"
        },
        "date": 1770938026498,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22766.76",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1576.88",
            "unit": "Kbytes/sec",
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
          "id": "1dbc32be0ffc7a2a2f2086c1d8d58cd27f94e070",
          "message": "Use new docker run action in nixos-related workflow",
          "timestamp": "2026-02-13T03:45:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/1dbc32be0ffc7a2a2f2086c1d8d58cd27f94e070"
        },
        "date": 1771024173739,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23375.53",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3874.73",
            "unit": "Kbytes/sec",
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
          "id": "374ff99b5e9066a26fa0fff4a122f793ad1ead63",
          "message": "Remove incorrect unreachable in ostd::main",
          "timestamp": "2026-02-13T03:13:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/374ff99b5e9066a26fa0fff4a122f793ad1ead63"
        },
        "date": 1771110482271,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20441.93",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1350.54",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771196109591,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22767.57",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4165.25",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771283622563,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22892.57",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2024.81",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771369757557,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20932.55",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2627.57",
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
          "id": "8b7b915b2b405de22fea15e728267caf36950518",
          "message": "Extend the doc of the `[ostd::main]` attribute macro",
          "timestamp": "2026-02-14T05:57:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b7b915b2b405de22fea15e728267caf36950518"
        },
        "date": 1771456502361,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21254.79",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "562.99",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771543681461,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23831.96",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4367.05",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771629091122,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22722.03",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1579.81",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771715453823,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23251.55",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "783.30",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771801171841,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "24851.38",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2883.64",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771889646468,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20539.99",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4356.97",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771976649626,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "24483.57",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "807.13",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}