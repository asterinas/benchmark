window.BENCHMARK_DATA = {
  "lastUpdate": 1793407997033,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "http_file4KB_bw": [
      {
        "commit": {
          "author": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "51c59734ee59da113ce5272b18761cb133d0470b",
          "message": "Fix host/guest benchmark initramfs rebuild",
          "timestamp": "2026-09-02T03:03:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/51c59734ee59da113ce5272b18761cb133d0470b"
        },
        "date": 1788338152827,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16222.94",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9424.48",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "e60087be133ce30657ca648415fa48f7d8d0c310",
          "message": "Fix Redis cross-compilation on ARM64 builders",
          "timestamp": "2026-09-02T06:20:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60087be133ce30657ca648415fa48f7d8d0c310"
        },
        "date": 1788388847158,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15792.95",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8948.37",
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
          "id": "864b9138be22d5436ef30692c0b2e5d35dafaef4",
          "message": "Adjust the symlink implementation for other file systems",
          "timestamp": "2026-09-02T02:12:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/864b9138be22d5436ef30692c0b2e5d35dafaef4"
        },
        "date": 1788471172665,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16081.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9013.30",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2de6b07ee933a033081029f940f741bec678a3c2",
          "message": "Clear IOPL in RFLAGS before returning to user space",
          "timestamp": "2026-09-03T08:49:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/2de6b07ee933a033081029f940f741bec678a3c2"
        },
        "date": 1788557583762,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15915.46",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9425.61",
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
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788643432833,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15924.02",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9078.93",
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
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788730121590,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15321.42",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8562.13",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mike Solar",
            "username": "Mike-Solar",
            "email": "iam@mikesolar.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1601bf53792fd81420a4f3c1da3119e84d5b36ef",
          "message": "Improve doc comments for Either\n\nSigned-off-by: Mike Solar <iam@mikesolar.cn>",
          "timestamp": "2026-09-07T11:26:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/1601bf53792fd81420a4f3c1da3119e84d5b36ef"
        },
        "date": 1788816294791,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16089.69",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9261.78",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jia Qingtong",
            "email": "jiaqingtong@huawei.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "819d6628c882eab21b0074720b47af8ded042107",
          "message": "Add AArch64 QEMU scheme support\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-05-05T00:23:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/819d6628c882eab21b0074720b47af8ded042107"
        },
        "date": 1788903421982,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16034.66",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9037.43",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "414f27702dee7c2f25672295c7aa9b83f247877e",
          "message": "Support virtiofs symbolic links",
          "timestamp": "2026-09-08T03:20:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/414f27702dee7c2f25672295c7aa9b83f247877e"
        },
        "date": 1788989673632,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15996.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9284.48",
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
          "id": "ee1e5d12aa4104d1d0a02dc42be56ee684935c14",
          "message": "Fix various broadcast behavior",
          "timestamp": "2026-08-11T01:34:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/ee1e5d12aa4104d1d0a02dc42be56ee684935c14"
        },
        "date": 1789075814447,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15627.78",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9284.49",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789162075873,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16025.46",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9237.91",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789248852827,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16005.71",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9058.99",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789334866055,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16121.18",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9194.09",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ab90d2941875c619a430fa6fa3b65df6d25e8bc7",
          "message": "Fix TDX retry issue",
          "timestamp": "2026-08-13T06:14:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/ab90d2941875c619a430fa6fa3b65df6d25e8bc7"
        },
        "date": 1789421097518,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16089.74",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8972.53",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WX Chen",
            "username": "zhenbaii",
            "email": "wxchen0913@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4b407ca87de203f79c27c9a83ada1d8223fe280",
          "message": "Fix `getcwd` panic after unmounting a parent with child mounts\n\nTreat a dead parent mount as unreachable instead of unwrapping it.",
          "timestamp": "2026-09-12T08:28:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4b407ca87de203f79c27c9a83ada1d8223fe280"
        },
        "date": 1789507980769,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15847.91",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9027.72",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "15c0fb29bd7ff585237c13ea16ea1aba2d7f8964",
          "message": "Fix partial socket option reads and writes\n\nCo-authored-by: 123123213weqw <1939455790@qq.com>",
          "timestamp": "2026-09-14T07:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/15c0fb29bd7ff585237c13ea16ea1aba2d7f8964"
        },
        "date": 1789594465924,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15725.52",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8882.26",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "id": "1ccefe036e97eb5026683c30f1b9872bb47dfe19",
          "message": "Temporarily disable the `gen_quote` regression test",
          "timestamp": "2026-09-17T10:47:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/1ccefe036e97eb5026683c30f1b9872bb47dfe19"
        },
        "date": 1789683185019,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7960.72",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5355.34",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "415851eb38dec4fd2674149a85ccd7ec1f81b77a",
          "message": "Add aster-code-review benchmark: 508-521",
          "timestamp": "2026-08-19T05:07:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/415851eb38dec4fd2674149a85ccd7ec1f81b77a"
        },
        "date": 1789769841842,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7790.66",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6097.25",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhouqi Jiang",
            "username": "luojia65",
            "email": "luojia@rustsbi.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0fa78e6012c80acc8f03caf49f89e231a9c61cee",
          "message": "Set accessed and dirty bits eagerly for RISC-V kernel mappings\n\nKernel mappings do not track accessed or dirty state. Leaving A/D bits\nclear can cause page faults on systems that manage these bits in\nsoftware (Svade), including during early boot.\n\nSet both bits in the Sv39 and Sv48 boot leaf entries and in non-user\nleaf entries created by `PageTableEntry::new_page`. This also avoids\nhardware PTE updates on systems that manage A/D bits in hardware.\nKeep user mappings and non-leaf entries unchanged.\n\nSigned-off-by: Zhouqi Jiang <luojia@rustsbi.com>",
          "timestamp": "2026-09-16T09:21:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/0fa78e6012c80acc8f03caf49f89e231a9c61cee"
        },
        "date": 1789855810579,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8055.95",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6190.46",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9f9f784e3e04b09468012e8b50b167f3e8c872b3",
          "message": "Use shared DMA arena in BIO",
          "timestamp": "2026-08-25T10:19:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9f9f784e3e04b09468012e8b50b167f3e8c872b3"
        },
        "date": 1789942089695,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8678.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6168.50",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c3fc8a5409ce337b3e0d6666b66462f8a8021cdc",
          "message": "Introduce `PartitionManager` to serialize partition updates",
          "timestamp": "2026-09-08T08:45:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c3fc8a5409ce337b3e0d6666b66462f8a8021cdc"
        },
        "date": 1790029604100,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9321.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6069.03",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bitter127",
            "username": "Bitter127",
            "email": "1571681846@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ac790aa89b2f39e700d263882e1a1301e0a77a25",
          "message": "Initialize RISC-V BSS for flat-binary boot",
          "timestamp": "2026-09-14T05:02:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/ac790aa89b2f39e700d263882e1a1301e0a77a25"
        },
        "date": 1790114272870,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7926.83",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5376.93",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c27a1ab9b7108ea1a44e5090bc580a92405f787c",
          "message": "Configure managed virtio-fs services for QEMU",
          "timestamp": "2026-09-21T04:24:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/c27a1ab9b7108ea1a44e5090bc580a92405f787c"
        },
        "date": 1790200856702,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8906.48",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6111.98",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790288012571,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7838.69",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5392.63",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790374817787,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8167.84",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6806.28",
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
          "id": "3eb661e12ebd7989db6fce53ca91bbfe97edda23",
          "message": "Bumped Docker image version to 0.18.1-20260926",
          "timestamp": "2026-09-25T15:23:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/3eb661e12ebd7989db6fce53ca91bbfe97edda23"
        },
        "date": 1790461301811,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8172.43",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6074.90",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "98e71727529efdbe87f35c20bcaceb0fc2e6e8f3",
          "message": "Register cached fio benchmarks",
          "timestamp": "2026-09-02T02:13:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/98e71727529efdbe87f35c20bcaceb0fc2e6e8f3"
        },
        "date": 1790549404057,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8808.56",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6185.83",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be72e21f4a993e09064d6eff91147c47196e092d",
          "message": "Add Firecracker boot documentation to the book\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-09-08T08:56:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/be72e21f4a993e09064d6eff91147c47196e092d"
        },
        "date": 1790635910973,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8784.96",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6337.74",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790721968389,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7857.99",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6357.45",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790809616056,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8153.55",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5283.15",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "harry",
            "username": "Cosh-y",
            "email": "ambition0316@126.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "577826860f5ebca1210fbe27d261b2327a0ae60f",
          "message": "Add guest physical memory management with EPT",
          "timestamp": "2026-09-09T13:29:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/577826860f5ebca1210fbe27d261b2327a0ae60f"
        },
        "date": 1790895498241,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8678.04",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6247.12",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1790984131018,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8773.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6146.11",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1791074072115,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8859.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6395.25",
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
          "id": "73ef2b9b5fd7b1a8d9583525d8824ef31985e179",
          "message": "Enhance UART console in AArch64",
          "timestamp": "2026-07-03T17:41:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/73ef2b9b5fd7b1a8d9583525d8824ef31985e179"
        },
        "date": 1791159753093,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8396.95",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6034.58",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791243556194,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8056.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5837.54",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791329457271,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8572.24",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6163.28",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff",
          "message": "Move the i8042 component to `kernel/comps`\n\nRegister i8042 as a fallback restart provider and let each architecture define the system power policy injected into OSTD. Keep ACPI ahead of i8042 without making aster-core depend on the high-level component.",
          "timestamp": "2026-09-21T12:48:26Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff"
        },
        "date": 1791416382104,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8570.65",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6067.94",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d3f5595ca213feb9c7fa3005976de7bd9b518da6",
          "message": "Fix VirtioFS setup in FIO benchmarks\n\nPass separate work directories to the Asterinas and Linux benchmark paths, use an absolute virtiofsd helper path for qemu-with-daemon, and make FIO result parsing robust for slash-containing patterns. Remove obsolete VirtioFS paths from benchmark YAML files.",
          "timestamp": "2026-09-30T05:16:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3f5595ca213feb9c7fa3005976de7bd9b518da6"
        },
        "date": 1791505012886,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9504.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6147.46",
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
          "id": "7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d",
          "message": "Remove the stale `@boterinas codex` command from the Book",
          "timestamp": "2026-10-09T06:01:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d"
        },
        "date": 1791591271165,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8201.28",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6292.21",
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
          "id": "3a670449aa1ef6933c34c74b47eb4551c7aa5126",
          "message": "Add 0.19.0 release notes",
          "timestamp": "2026-10-10T10:22:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a670449aa1ef6933c34c74b47eb4551c7aa5126"
        },
        "date": 1791675716081,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9953.51",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6076.08",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mike Solar",
            "username": "Mike-Solar",
            "email": "iam@mikesolar.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "af0b77c8f11db24ba59b8d2cf29a189281b8e270",
          "message": "Fix stale frame metadata access via empty `Segment`s",
          "timestamp": "2026-10-11T06:55:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/af0b77c8f11db24ba59b8d2cf29a189281b8e270"
        },
        "date": 1791762575094,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7995.25",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6033.19",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791852427141,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8106.57",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6054.11",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "bmalum",
            "username": "bmalum",
            "email": "support@bmalum.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "745ebe54e63c35c8b8c49971b581e62e5d5ed569",
          "message": "Fix stale `IN` readiness of `TimerfdFile` after `set_time` and `read`\n\n`TimerfdFile::set_time` and `TimerfdFile::try_read` reset the expiration\ncounter but left the `Pollee`'s cached readiness untouched, so `epoll_wait`\nkept reporting a disarmed or drained timerfd as readable. ERTS arms a\ntimerfd before every `epoll_wait` and disarms it afterwards without\nreading it; on Asterinas its poll thread therefore spun at 100%.\n\nInvalidate the pollee wherever the counter is reset, so that the cached\nreadiness stays consistent with `check_io_events`. Add a regression test\nthat covers disarming, reading and rearming.",
          "timestamp": "2026-10-12T07:23:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ebe54e63c35c8b8c49971b581e62e5d5ed569"
        },
        "date": 1791935789423,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8059.85",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6053.49",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792022079829,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7897.94",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5478.25",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792107534693,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7826.25",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6120.03",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792194004311,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7916.63",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5371.95",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792281024122,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8268.45",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6185.37",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792367566696,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8339.99",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6180.34",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3",
          "message": "Fix parent of dynamically created SysTree inodes",
          "timestamp": "2026-10-14T09:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3"
        },
        "date": 1792453956842,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8039.65",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6122.84",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "chinqrw@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "00a4842d976db6723b8224be2e57ac8105f13ee2",
          "message": "Show why `cargo osdk run --coverage` failed in `basic_coverage`\n\nSigned-off-by: Ruowen Qin <chinqrw@gmail.com>",
          "timestamp": "2026-10-18T05:30:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/00a4842d976db6723b8224be2e57ac8105f13ee2"
        },
        "date": 1792540087514,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7978.06",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5352.60",
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
          "id": "f40d6222dc140cc278bd110757b52f3f0fb496aa",
          "message": "Add missing `.PHONY`",
          "timestamp": "2026-10-18T15:44:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/f40d6222dc140cc278bd110757b52f3f0fb496aa"
        },
        "date": 1792626458101,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7976.11",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6247.90",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tonyyang0606",
            "username": "Tonyyang0606",
            "email": "146299767+Tonyyang0606@users.noreply.github.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600",
          "message": "Fix `F_DUPFD` to check `RLIMIT_NOFILE`\n\n`fcntl(F_DUPFD)` and `fcntl(F_DUPFD_CLOEXEC)` accepted any minimum FD.\nThey returned descriptors above the soft `RLIMIT_NOFILE` limit, and a\nlarge minimum such as `INT_MAX` grew the FD table until the heap\nallocation failed and the kernel aborted. Linux rejects a minimum FD\nthat is not below the limit with `EINVAL`, as `do_dup3` already does.",
          "timestamp": "2026-10-17T03:49:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600"
        },
        "date": 1792713226662,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8109.72",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6147.82",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792799759705,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8007.07",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5393.96",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792883742074,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7978.60",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6202.20",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792972324704,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8177.85",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6041.33",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "qinruowen@tlaic.ac.cn"
          },
          "committer": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "3ed4fc4374065dbee49a6c93f96703d1a3e9aad2",
          "message": "Remove the ineffective /github/home symlinks from the Docker images\n\nGitHub mounts a runner directory over /github/home in container jobs,\nso these links are never visible there, and nothing else uses them.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-10-26T09:27:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ed4fc4374065dbee49a6c93f96703d1a3e9aad2"
        },
        "date": 1793059666783,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8039.50",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5998.77",
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
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793145730904,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7986.50",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5380.18",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e0d8b839f95f608c8a7e9c8942e01614a3b3b260",
          "message": "Fix vDSO realtime clock to keep sub-second offset\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-06T14:33:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/e0d8b839f95f608c8a7e9c8942e01614a3b3b260"
        },
        "date": 1793233579624,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8181.22",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6127.48",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "986c709158bfdc7bce535f0d03a5d93f7465dfe6",
          "message": "Allow `CAP_SYS_ADMIN` to remove another user's semaphore set\n\n`semctl(IPC_RMID)` only accepts a caller whose effective UID matches the\nowner or the creator of the set, so a privileged process cannot remove a\nset that another user created. The call site marks the check as\nincomplete:\n\n    // TODO: Consider capabilities in addition to UIDs.\n\nMove the decision into `IpcNamespace` and also accept a caller holding\n`CAP_SYS_ADMIN` in the IPC namespace's owning user namespace. `EPERM` is\nstill returned when neither the UID nor the capability allows removal.\n\nAdd a regression test that a privileged process removes a set owned by\nanother user, and that a user which is neither the owner nor privileged\nstill gets `EPERM`. The test also requires that a child which keeps root's\nother capabilities but drops `CAP_SYS_ADMIN` is refused, so the capability\ncannot stand in for a UID-zero bypass, and that the unprivileged owner can\nstill remove its own set.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-26T09:26:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/986c709158bfdc7bce535f0d03a5d93f7465dfe6"
        },
        "date": 1793318594900,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7890.08",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5474.40",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793407997030,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8126.43",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5378.50",
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
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c8935f97b1c857ebf2756467ae09b388a759baa1",
          "message": "Skip invalid I/O APIC entries from the MADT\n\nFirmware may report invalid I/O APIC entries. Probing them can hang the\nboot. Follow Linux's mp_register_ioapic and reject entries with zero or\nduplicate addresses, registers return all ones, or conflicting GSI\nranges.",
          "timestamp": "2026-08-28T05:04:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/c8935f97b1c857ebf2756467ae09b388a759baa1"
        },
        "date": 1788223179415,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16294.95",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8927.03",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "51c59734ee59da113ce5272b18761cb133d0470b",
          "message": "Fix host/guest benchmark initramfs rebuild",
          "timestamp": "2026-09-02T03:03:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/51c59734ee59da113ce5272b18761cb133d0470b"
        },
        "date": 1788338152310,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15975.23",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9397.06",
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
          "id": "864b9138be22d5436ef30692c0b2e5d35dafaef4",
          "message": "Adjust the symlink implementation for other file systems",
          "timestamp": "2026-09-02T02:12:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/864b9138be22d5436ef30692c0b2e5d35dafaef4"
        },
        "date": 1788471172130,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15881.11",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8874.90",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2de6b07ee933a033081029f940f741bec678a3c2",
          "message": "Clear IOPL in RFLAGS before returning to user space",
          "timestamp": "2026-09-03T08:49:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/2de6b07ee933a033081029f940f741bec678a3c2"
        },
        "date": 1788557583229,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15894.64",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9336.27",
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
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788643432282,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15789.63",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8403.50",
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
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788730121106,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15994.60",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9018.42",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mike Solar",
            "username": "Mike-Solar",
            "email": "iam@mikesolar.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1601bf53792fd81420a4f3c1da3119e84d5b36ef",
          "message": "Improve doc comments for Either\n\nSigned-off-by: Mike Solar <iam@mikesolar.cn>",
          "timestamp": "2026-09-07T11:26:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/1601bf53792fd81420a4f3c1da3119e84d5b36ef"
        },
        "date": 1788816294337,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14997.29",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9311.59",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jia Qingtong",
            "email": "jiaqingtong@huawei.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "819d6628c882eab21b0074720b47af8ded042107",
          "message": "Add AArch64 QEMU scheme support\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-05-05T00:23:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/819d6628c882eab21b0074720b47af8ded042107"
        },
        "date": 1788903421573,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15781.98",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8817.23",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "414f27702dee7c2f25672295c7aa9b83f247877e",
          "message": "Support virtiofs symbolic links",
          "timestamp": "2026-09-08T03:20:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/414f27702dee7c2f25672295c7aa9b83f247877e"
        },
        "date": 1788989673039,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15984.19",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9337.71",
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
          "id": "ee1e5d12aa4104d1d0a02dc42be56ee684935c14",
          "message": "Fix various broadcast behavior",
          "timestamp": "2026-08-11T01:34:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/ee1e5d12aa4104d1d0a02dc42be56ee684935c14"
        },
        "date": 1789075814008,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15653.18",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8955.59",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789162075281,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15921.69",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9321.29",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789248852186,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15957.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9406.71",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789334865382,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15880.17",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9092.87",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ab90d2941875c619a430fa6fa3b65df6d25e8bc7",
          "message": "Fix TDX retry issue",
          "timestamp": "2026-08-13T06:14:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/ab90d2941875c619a430fa6fa3b65df6d25e8bc7"
        },
        "date": 1789421096823,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15778.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8901.74",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WX Chen",
            "username": "zhenbaii",
            "email": "wxchen0913@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4b407ca87de203f79c27c9a83ada1d8223fe280",
          "message": "Fix `getcwd` panic after unmounting a parent with child mounts\n\nTreat a dead parent mount as unreachable instead of unwrapping it.",
          "timestamp": "2026-09-12T08:28:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4b407ca87de203f79c27c9a83ada1d8223fe280"
        },
        "date": 1789507980389,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15913.05",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8220.90",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "15c0fb29bd7ff585237c13ea16ea1aba2d7f8964",
          "message": "Fix partial socket option reads and writes\n\nCo-authored-by: 123123213weqw <1939455790@qq.com>",
          "timestamp": "2026-09-14T07:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/15c0fb29bd7ff585237c13ea16ea1aba2d7f8964"
        },
        "date": 1789594465550,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16016.12",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9201.83",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "id": "1ccefe036e97eb5026683c30f1b9872bb47dfe19",
          "message": "Temporarily disable the `gen_quote` regression test",
          "timestamp": "2026-09-17T10:47:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/1ccefe036e97eb5026683c30f1b9872bb47dfe19"
        },
        "date": 1789683183036,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8439.94",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6179.05",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "415851eb38dec4fd2674149a85ccd7ec1f81b77a",
          "message": "Add aster-code-review benchmark: 508-521",
          "timestamp": "2026-08-19T05:07:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/415851eb38dec4fd2674149a85ccd7ec1f81b77a"
        },
        "date": 1789769841216,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8242.61",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6112.16",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhouqi Jiang",
            "username": "luojia65",
            "email": "luojia@rustsbi.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0fa78e6012c80acc8f03caf49f89e231a9c61cee",
          "message": "Set accessed and dirty bits eagerly for RISC-V kernel mappings\n\nKernel mappings do not track accessed or dirty state. Leaving A/D bits\nclear can cause page faults on systems that manage these bits in\nsoftware (Svade), including during early boot.\n\nSet both bits in the Sv39 and Sv48 boot leaf entries and in non-user\nleaf entries created by `PageTableEntry::new_page`. This also avoids\nhardware PTE updates on systems that manage A/D bits in hardware.\nKeep user mappings and non-leaf entries unchanged.\n\nSigned-off-by: Zhouqi Jiang <luojia@rustsbi.com>",
          "timestamp": "2026-09-16T09:21:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/0fa78e6012c80acc8f03caf49f89e231a9c61cee"
        },
        "date": 1789855809847,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8442.52",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6120.15",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9f9f784e3e04b09468012e8b50b167f3e8c872b3",
          "message": "Use shared DMA arena in BIO",
          "timestamp": "2026-08-25T10:19:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9f9f784e3e04b09468012e8b50b167f3e8c872b3"
        },
        "date": 1789942089057,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8830.46",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6035.41",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c3fc8a5409ce337b3e0d6666b66462f8a8021cdc",
          "message": "Introduce `PartitionManager` to serialize partition updates",
          "timestamp": "2026-09-08T08:45:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c3fc8a5409ce337b3e0d6666b66462f8a8021cdc"
        },
        "date": 1790029603415,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8790.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6193.63",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bitter127",
            "username": "Bitter127",
            "email": "1571681846@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ac790aa89b2f39e700d263882e1a1301e0a77a25",
          "message": "Initialize RISC-V BSS for flat-binary boot",
          "timestamp": "2026-09-14T05:02:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/ac790aa89b2f39e700d263882e1a1301e0a77a25"
        },
        "date": 1790114272551,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8330.65",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6194.05",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c27a1ab9b7108ea1a44e5090bc580a92405f787c",
          "message": "Configure managed virtio-fs services for QEMU",
          "timestamp": "2026-09-21T04:24:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/c27a1ab9b7108ea1a44e5090bc580a92405f787c"
        },
        "date": 1790200856069,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8103.42",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6146.67",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790288011851,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7857.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6015.37",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790374816299,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9347.46",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6135.48",
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
          "id": "3eb661e12ebd7989db6fce53ca91bbfe97edda23",
          "message": "Bumped Docker image version to 0.18.1-20260926",
          "timestamp": "2026-09-25T15:23:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/3eb661e12ebd7989db6fce53ca91bbfe97edda23"
        },
        "date": 1790461301336,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8058.73",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6163.55",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "98e71727529efdbe87f35c20bcaceb0fc2e6e8f3",
          "message": "Register cached fio benchmarks",
          "timestamp": "2026-09-02T02:13:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/98e71727529efdbe87f35c20bcaceb0fc2e6e8f3"
        },
        "date": 1790549403638,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7972.91",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6119.99",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be72e21f4a993e09064d6eff91147c47196e092d",
          "message": "Add Firecracker boot documentation to the book\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-09-08T08:56:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/be72e21f4a993e09064d6eff91147c47196e092d"
        },
        "date": 1790635910379,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8902.44",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6128.16",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790721967979,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7910.13",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6028.12",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790809615363,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7857.60",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5930.47",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "harry",
            "username": "Cosh-y",
            "email": "ambition0316@126.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "577826860f5ebca1210fbe27d261b2327a0ae60f",
          "message": "Add guest physical memory management with EPT",
          "timestamp": "2026-09-09T13:29:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/577826860f5ebca1210fbe27d261b2327a0ae60f"
        },
        "date": 1790895497669,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9865.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6147.79",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1790984130429,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9522.76",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5460.63",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1791074070936,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7882.49",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6127.97",
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
          "id": "73ef2b9b5fd7b1a8d9583525d8824ef31985e179",
          "message": "Enhance UART console in AArch64",
          "timestamp": "2026-07-03T17:41:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/73ef2b9b5fd7b1a8d9583525d8824ef31985e179"
        },
        "date": 1791159752673,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8214.87",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6032.18",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791243555531,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8570.72",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5347.08",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791329456863,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8507.82",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6137.42",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff",
          "message": "Move the i8042 component to `kernel/comps`\n\nRegister i8042 as a fallback restart provider and let each architecture define the system power policy injected into OSTD. Keep ACPI ahead of i8042 without making aster-core depend on the high-level component.",
          "timestamp": "2026-09-21T12:48:26Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff"
        },
        "date": 1791416381475,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8465.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6237.67",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d3f5595ca213feb9c7fa3005976de7bd9b518da6",
          "message": "Fix VirtioFS setup in FIO benchmarks\n\nPass separate work directories to the Asterinas and Linux benchmark paths, use an absolute virtiofsd helper path for qemu-with-daemon, and make FIO result parsing robust for slash-containing patterns. Remove obsolete VirtioFS paths from benchmark YAML files.",
          "timestamp": "2026-09-30T05:16:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3f5595ca213feb9c7fa3005976de7bd9b518da6"
        },
        "date": 1791505012312,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7919.04",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6116.38",
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
          "id": "7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d",
          "message": "Remove the stale `@boterinas codex` command from the Book",
          "timestamp": "2026-10-09T06:01:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d"
        },
        "date": 1791591270547,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9766.82",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6122.12",
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
          "id": "3a670449aa1ef6933c34c74b47eb4551c7aa5126",
          "message": "Add 0.19.0 release notes",
          "timestamp": "2026-10-10T10:22:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a670449aa1ef6933c34c74b47eb4551c7aa5126"
        },
        "date": 1791675715564,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11288.64",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6053.28",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mike Solar",
            "username": "Mike-Solar",
            "email": "iam@mikesolar.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "af0b77c8f11db24ba59b8d2cf29a189281b8e270",
          "message": "Fix stale frame metadata access via empty `Segment`s",
          "timestamp": "2026-10-11T06:55:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/af0b77c8f11db24ba59b8d2cf29a189281b8e270"
        },
        "date": 1791762573937,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8037.42",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6388.77",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791852426498,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9477.64",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6210.22",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "bmalum",
            "username": "bmalum",
            "email": "support@bmalum.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "745ebe54e63c35c8b8c49971b581e62e5d5ed569",
          "message": "Fix stale `IN` readiness of `TimerfdFile` after `set_time` and `read`\n\n`TimerfdFile::set_time` and `TimerfdFile::try_read` reset the expiration\ncounter but left the `Pollee`'s cached readiness untouched, so `epoll_wait`\nkept reporting a disarmed or drained timerfd as readable. ERTS arms a\ntimerfd before every `epoll_wait` and disarms it afterwards without\nreading it; on Asterinas its poll thread therefore spun at 100%.\n\nInvalidate the pollee wherever the counter is reset, so that the cached\nreadiness stays consistent with `check_io_events`. Add a regression test\nthat covers disarming, reading and rearming.",
          "timestamp": "2026-10-12T07:23:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ebe54e63c35c8b8c49971b581e62e5d5ed569"
        },
        "date": 1791935788914,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10235.30",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6053.17",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792022079067,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9175.13",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5753.80",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792107533430,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7969.45",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5316.81",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792194003897,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8040.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5447.13",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792281023463,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7970.85",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6195.86",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792367566116,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8158.48",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6588.24",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3",
          "message": "Fix parent of dynamically created SysTree inodes",
          "timestamp": "2026-10-14T09:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3"
        },
        "date": 1792453956365,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8182.07",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6142.13",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "chinqrw@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "00a4842d976db6723b8224be2e57ac8105f13ee2",
          "message": "Show why `cargo osdk run --coverage` failed in `basic_coverage`\n\nSigned-off-by: Ruowen Qin <chinqrw@gmail.com>",
          "timestamp": "2026-10-18T05:30:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/00a4842d976db6723b8224be2e57ac8105f13ee2"
        },
        "date": 1792540087004,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8719.18",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6016.13",
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
          "id": "f40d6222dc140cc278bd110757b52f3f0fb496aa",
          "message": "Add missing `.PHONY`",
          "timestamp": "2026-10-18T15:44:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/f40d6222dc140cc278bd110757b52f3f0fb496aa"
        },
        "date": 1792626457625,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9053.89",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6122.76",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tonyyang0606",
            "username": "Tonyyang0606",
            "email": "146299767+Tonyyang0606@users.noreply.github.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600",
          "message": "Fix `F_DUPFD` to check `RLIMIT_NOFILE`\n\n`fcntl(F_DUPFD)` and `fcntl(F_DUPFD_CLOEXEC)` accepted any minimum FD.\nThey returned descriptors above the soft `RLIMIT_NOFILE` limit, and a\nlarge minimum such as `INT_MAX` grew the FD table until the heap\nallocation failed and the kernel aborted. Linux rejects a minimum FD\nthat is not below the limit with `EINVAL`, as `do_dup3` already does.",
          "timestamp": "2026-10-17T03:49:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600"
        },
        "date": 1792713226136,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8707.81",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6148.82",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792799759247,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8210.77",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6118.91",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792883741771,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8121.66",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6116.13",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792972324188,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7918.74",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5427.42",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "qinruowen@tlaic.ac.cn"
          },
          "committer": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "3ed4fc4374065dbee49a6c93f96703d1a3e9aad2",
          "message": "Remove the ineffective /github/home symlinks from the Docker images\n\nGitHub mounts a runner directory over /github/home in container jobs,\nso these links are never visible there, and nothing else uses them.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-10-26T09:27:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ed4fc4374065dbee49a6c93f96703d1a3e9aad2"
        },
        "date": 1793059666019,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7921.07",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6155.71",
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
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793145730573,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7951.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5628.53",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e0d8b839f95f608c8a7e9c8942e01614a3b3b260",
          "message": "Fix vDSO realtime clock to keep sub-second offset\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-06T14:33:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/e0d8b839f95f608c8a7e9c8942e01614a3b3b260"
        },
        "date": 1793233579220,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8728.62",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6150.23",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "986c709158bfdc7bce535f0d03a5d93f7465dfe6",
          "message": "Allow `CAP_SYS_ADMIN` to remove another user's semaphore set\n\n`semctl(IPC_RMID)` only accepts a caller whose effective UID matches the\nowner or the creator of the set, so a privileged process cannot remove a\nset that another user created. The call site marks the check as\nincomplete:\n\n    // TODO: Consider capabilities in addition to UIDs.\n\nMove the decision into `IpcNamespace` and also accept a caller holding\n`CAP_SYS_ADMIN` in the IPC namespace's owning user namespace. `EPERM` is\nstill returned when neither the UID nor the capability allows removal.\n\nAdd a regression test that a privileged process removes a set owned by\nanother user, and that a user which is neither the owner nor privileged\nstill gets `EPERM`. The test also requires that a child which keeps root's\nother capabilities but drops `CAP_SYS_ADMIN` is refused, so the capability\ncannot stand in for a UID-zero bypass, and that the unprivileged owner can\nstill remove its own set.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-26T09:26:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/986c709158bfdc7bce535f0d03a5d93f7465dfe6"
        },
        "date": 1793318594276,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8018.62",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5681.71",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793407996546,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8045.84",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5556.13",
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
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c8935f97b1c857ebf2756467ae09b388a759baa1",
          "message": "Skip invalid I/O APIC entries from the MADT\n\nFirmware may report invalid I/O APIC entries. Probing them can hang the\nboot. Follow Linux's mp_register_ioapic and reject entries with zero or\nduplicate addresses, registers return all ones, or conflicting GSI\nranges.",
          "timestamp": "2026-08-28T05:04:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/c8935f97b1c857ebf2756467ae09b388a759baa1"
        },
        "date": 1788223180184,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16192.21",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9013.99",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "51c59734ee59da113ce5272b18761cb133d0470b",
          "message": "Fix host/guest benchmark initramfs rebuild",
          "timestamp": "2026-09-02T03:03:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/51c59734ee59da113ce5272b18761cb133d0470b"
        },
        "date": 1788338153402,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16213.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9507.90",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "e60087be133ce30657ca648415fa48f7d8d0c310",
          "message": "Fix Redis cross-compilation on ARM64 builders",
          "timestamp": "2026-09-02T06:20:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60087be133ce30657ca648415fa48f7d8d0c310"
        },
        "date": 1788388847430,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15942.25",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9280.85",
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
          "id": "864b9138be22d5436ef30692c0b2e5d35dafaef4",
          "message": "Adjust the symlink implementation for other file systems",
          "timestamp": "2026-09-02T02:12:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/864b9138be22d5436ef30692c0b2e5d35dafaef4"
        },
        "date": 1788471173186,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16010.78",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9234.52",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2de6b07ee933a033081029f940f741bec678a3c2",
          "message": "Clear IOPL in RFLAGS before returning to user space",
          "timestamp": "2026-09-03T08:49:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/2de6b07ee933a033081029f940f741bec678a3c2"
        },
        "date": 1788557584375,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15907.43",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9154.73",
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
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788643433356,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13427.32",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9038.83",
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
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788730122109,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15656.26",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8960.74",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mike Solar",
            "username": "Mike-Solar",
            "email": "iam@mikesolar.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1601bf53792fd81420a4f3c1da3119e84d5b36ef",
          "message": "Improve doc comments for Either\n\nSigned-off-by: Mike Solar <iam@mikesolar.cn>",
          "timestamp": "2026-09-07T11:26:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/1601bf53792fd81420a4f3c1da3119e84d5b36ef"
        },
        "date": 1788816295240,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15630.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8986.72",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jia Qingtong",
            "email": "jiaqingtong@huawei.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "819d6628c882eab21b0074720b47af8ded042107",
          "message": "Add AArch64 QEMU scheme support\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-05-05T00:23:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/819d6628c882eab21b0074720b47af8ded042107"
        },
        "date": 1788903422406,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15412.90",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9388.16",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "414f27702dee7c2f25672295c7aa9b83f247877e",
          "message": "Support virtiofs symbolic links",
          "timestamp": "2026-09-08T03:20:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/414f27702dee7c2f25672295c7aa9b83f247877e"
        },
        "date": 1788989674162,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16035.33",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9247.25",
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
          "id": "ee1e5d12aa4104d1d0a02dc42be56ee684935c14",
          "message": "Fix various broadcast behavior",
          "timestamp": "2026-08-11T01:34:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/ee1e5d12aa4104d1d0a02dc42be56ee684935c14"
        },
        "date": 1789075814873,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15660.38",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9342.79",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789162076449,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15875.96",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8996.83",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789248853471,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15792.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9292.97",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789334866709,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15882.75",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9030.60",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ab90d2941875c619a430fa6fa3b65df6d25e8bc7",
          "message": "Fix TDX retry issue",
          "timestamp": "2026-08-13T06:14:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/ab90d2941875c619a430fa6fa3b65df6d25e8bc7"
        },
        "date": 1789421098170,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15919.08",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9431.50",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WX Chen",
            "username": "zhenbaii",
            "email": "wxchen0913@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4b407ca87de203f79c27c9a83ada1d8223fe280",
          "message": "Fix `getcwd` panic after unmounting a parent with child mounts\n\nTreat a dead parent mount as unreachable instead of unwrapping it.",
          "timestamp": "2026-09-12T08:28:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4b407ca87de203f79c27c9a83ada1d8223fe280"
        },
        "date": 1789507981210,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16003.76",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8930.28",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "15c0fb29bd7ff585237c13ea16ea1aba2d7f8964",
          "message": "Fix partial socket option reads and writes\n\nCo-authored-by: 123123213weqw <1939455790@qq.com>",
          "timestamp": "2026-09-14T07:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/15c0fb29bd7ff585237c13ea16ea1aba2d7f8964"
        },
        "date": 1789594466271,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16048.63",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9385.72",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "id": "1ccefe036e97eb5026683c30f1b9872bb47dfe19",
          "message": "Temporarily disable the `gen_quote` regression test",
          "timestamp": "2026-09-17T10:47:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/1ccefe036e97eb5026683c30f1b9872bb47dfe19"
        },
        "date": 1789683186563,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8021.78",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6461.76",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "415851eb38dec4fd2674149a85ccd7ec1f81b77a",
          "message": "Add aster-code-review benchmark: 508-521",
          "timestamp": "2026-08-19T05:07:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/415851eb38dec4fd2674149a85ccd7ec1f81b77a"
        },
        "date": 1789769842502,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7967.53",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6151.12",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhouqi Jiang",
            "username": "luojia65",
            "email": "luojia@rustsbi.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0fa78e6012c80acc8f03caf49f89e231a9c61cee",
          "message": "Set accessed and dirty bits eagerly for RISC-V kernel mappings\n\nKernel mappings do not track accessed or dirty state. Leaving A/D bits\nclear can cause page faults on systems that manage these bits in\nsoftware (Svade), including during early boot.\n\nSet both bits in the Sv39 and Sv48 boot leaf entries and in non-user\nleaf entries created by `PageTableEntry::new_page`. This also avoids\nhardware PTE updates on systems that manage A/D bits in hardware.\nKeep user mappings and non-leaf entries unchanged.\n\nSigned-off-by: Zhouqi Jiang <luojia@rustsbi.com>",
          "timestamp": "2026-09-16T09:21:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/0fa78e6012c80acc8f03caf49f89e231a9c61cee"
        },
        "date": 1789855811623,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9636.62",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6075.04",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9f9f784e3e04b09468012e8b50b167f3e8c872b3",
          "message": "Use shared DMA arena in BIO",
          "timestamp": "2026-08-25T10:19:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9f9f784e3e04b09468012e8b50b167f3e8c872b3"
        },
        "date": 1789942090209,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8916.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6162.44",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c3fc8a5409ce337b3e0d6666b66462f8a8021cdc",
          "message": "Introduce `PartitionManager` to serialize partition updates",
          "timestamp": "2026-09-08T08:45:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c3fc8a5409ce337b3e0d6666b66462f8a8021cdc"
        },
        "date": 1790029604755,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9095.99",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6195.55",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bitter127",
            "username": "Bitter127",
            "email": "1571681846@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ac790aa89b2f39e700d263882e1a1301e0a77a25",
          "message": "Initialize RISC-V BSS for flat-binary boot",
          "timestamp": "2026-09-14T05:02:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/ac790aa89b2f39e700d263882e1a1301e0a77a25"
        },
        "date": 1790114273236,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7970.73",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5573.25",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c27a1ab9b7108ea1a44e5090bc580a92405f787c",
          "message": "Configure managed virtio-fs services for QEMU",
          "timestamp": "2026-09-21T04:24:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/c27a1ab9b7108ea1a44e5090bc580a92405f787c"
        },
        "date": 1790200857318,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7850.11",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5330.52",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790288013235,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9277.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6106.80",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790374818342,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7922.25",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5399.25",
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
          "id": "3eb661e12ebd7989db6fce53ca91bbfe97edda23",
          "message": "Bumped Docker image version to 0.18.1-20260926",
          "timestamp": "2026-09-25T15:23:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/3eb661e12ebd7989db6fce53ca91bbfe97edda23"
        },
        "date": 1790461302382,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8643.92",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5366.41",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "98e71727529efdbe87f35c20bcaceb0fc2e6e8f3",
          "message": "Register cached fio benchmarks",
          "timestamp": "2026-09-02T02:13:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/98e71727529efdbe87f35c20bcaceb0fc2e6e8f3"
        },
        "date": 1790549404557,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8105.55",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6146.24",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be72e21f4a993e09064d6eff91147c47196e092d",
          "message": "Add Firecracker boot documentation to the book\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-09-08T08:56:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/be72e21f4a993e09064d6eff91147c47196e092d"
        },
        "date": 1790635911566,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9194.20",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6140.70",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790721968903,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8250.95",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6162.27",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790809616801,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "12800.62",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6139.91",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "harry",
            "username": "Cosh-y",
            "email": "ambition0316@126.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "577826860f5ebca1210fbe27d261b2327a0ae60f",
          "message": "Add guest physical memory management with EPT",
          "timestamp": "2026-09-09T13:29:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/577826860f5ebca1210fbe27d261b2327a0ae60f"
        },
        "date": 1790895498765,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8048.72",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6246.18",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1790984131623,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8241.85",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6013.06",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1791074072693,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9010.89",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6132.57",
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
          "id": "73ef2b9b5fd7b1a8d9583525d8824ef31985e179",
          "message": "Enhance UART console in AArch64",
          "timestamp": "2026-07-03T17:41:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/73ef2b9b5fd7b1a8d9583525d8824ef31985e179"
        },
        "date": 1791159753503,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8527.08",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6205.56",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791243556857,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9453.29",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6104.41",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791329457648,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10877.55",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6026.80",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff",
          "message": "Move the i8042 component to `kernel/comps`\n\nRegister i8042 as a fallback restart provider and let each architecture define the system power policy injected into OSTD. Keep ACPI ahead of i8042 without making aster-core depend on the high-level component.",
          "timestamp": "2026-09-21T12:48:26Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff"
        },
        "date": 1791416382643,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8237.62",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5941.43",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d3f5595ca213feb9c7fa3005976de7bd9b518da6",
          "message": "Fix VirtioFS setup in FIO benchmarks\n\nPass separate work directories to the Asterinas and Linux benchmark paths, use an absolute virtiofsd helper path for qemu-with-daemon, and make FIO result parsing robust for slash-containing patterns. Remove obsolete VirtioFS paths from benchmark YAML files.",
          "timestamp": "2026-09-30T05:16:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3f5595ca213feb9c7fa3005976de7bd9b518da6"
        },
        "date": 1791505013427,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9045.16",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6117.91",
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
          "id": "7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d",
          "message": "Remove the stale `@boterinas codex` command from the Book",
          "timestamp": "2026-10-09T06:01:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d"
        },
        "date": 1791591271839,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11330.92",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6699.86",
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
          "id": "3a670449aa1ef6933c34c74b47eb4551c7aa5126",
          "message": "Add 0.19.0 release notes",
          "timestamp": "2026-10-10T10:22:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a670449aa1ef6933c34c74b47eb4551c7aa5126"
        },
        "date": 1791675716554,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10063.21",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6111.03",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mike Solar",
            "username": "Mike-Solar",
            "email": "iam@mikesolar.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "af0b77c8f11db24ba59b8d2cf29a189281b8e270",
          "message": "Fix stale frame metadata access via empty `Segment`s",
          "timestamp": "2026-10-11T06:55:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/af0b77c8f11db24ba59b8d2cf29a189281b8e270"
        },
        "date": 1791762575581,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8742.51",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6168.81",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791852427834,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9537.98",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6185.08",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "bmalum",
            "username": "bmalum",
            "email": "support@bmalum.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "745ebe54e63c35c8b8c49971b581e62e5d5ed569",
          "message": "Fix stale `IN` readiness of `TimerfdFile` after `set_time` and `read`\n\n`TimerfdFile::set_time` and `TimerfdFile::try_read` reset the expiration\ncounter but left the `Pollee`'s cached readiness untouched, so `epoll_wait`\nkept reporting a disarmed or drained timerfd as readable. ERTS arms a\ntimerfd before every `epoll_wait` and disarms it afterwards without\nreading it; on Asterinas its poll thread therefore spun at 100%.\n\nInvalidate the pollee wherever the counter is reset, so that the cached\nreadiness stays consistent with `check_io_events`. Add a regression test\nthat covers disarming, reading and rearming.",
          "timestamp": "2026-10-12T07:23:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ebe54e63c35c8b8c49971b581e62e5d5ed569"
        },
        "date": 1791935790014,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8252.59",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6267.33",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792022080529,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7865.76",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5394.42",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792107535261,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7925.13",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5676.24",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792194004768,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8542.98",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5460.61",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792281024669,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8868.57",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6166.24",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792367567402,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8019.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5513.25",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3",
          "message": "Fix parent of dynamically created SysTree inodes",
          "timestamp": "2026-10-14T09:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3"
        },
        "date": 1792453957330,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7814.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5328.52",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "chinqrw@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "00a4842d976db6723b8224be2e57ac8105f13ee2",
          "message": "Show why `cargo osdk run --coverage` failed in `basic_coverage`\n\nSigned-off-by: Ruowen Qin <chinqrw@gmail.com>",
          "timestamp": "2026-10-18T05:30:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/00a4842d976db6723b8224be2e57ac8105f13ee2"
        },
        "date": 1792540088208,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7911.71",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5579.77",
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
          "id": "f40d6222dc140cc278bd110757b52f3f0fb496aa",
          "message": "Add missing `.PHONY`",
          "timestamp": "2026-10-18T15:44:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/f40d6222dc140cc278bd110757b52f3f0fb496aa"
        },
        "date": 1792626458559,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9169.85",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6382.91",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tonyyang0606",
            "username": "Tonyyang0606",
            "email": "146299767+Tonyyang0606@users.noreply.github.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600",
          "message": "Fix `F_DUPFD` to check `RLIMIT_NOFILE`\n\n`fcntl(F_DUPFD)` and `fcntl(F_DUPFD_CLOEXEC)` accepted any minimum FD.\nThey returned descriptors above the soft `RLIMIT_NOFILE` limit, and a\nlarge minimum such as `INT_MAX` grew the FD table until the heap\nallocation failed and the kernel aborted. Linux rejects a minimum FD\nthat is not below the limit with `EINVAL`, as `do_dup3` already does.",
          "timestamp": "2026-10-17T03:49:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600"
        },
        "date": 1792713227380,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10442.50",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5961.08",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792799761126,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9041.08",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6154.77",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792883742480,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8761.62",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5744.45",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792972326151,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7898.01",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5378.09",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "qinruowen@tlaic.ac.cn"
          },
          "committer": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "3ed4fc4374065dbee49a6c93f96703d1a3e9aad2",
          "message": "Remove the ineffective /github/home symlinks from the Docker images\n\nGitHub mounts a runner directory over /github/home in container jobs,\nso these links are never visible there, and nothing else uses them.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-10-26T09:27:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ed4fc4374065dbee49a6c93f96703d1a3e9aad2"
        },
        "date": 1793059667457,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8184.00",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6169.28",
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
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793145731256,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11746.28",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6144.04",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e0d8b839f95f608c8a7e9c8942e01614a3b3b260",
          "message": "Fix vDSO realtime clock to keep sub-second offset\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-06T14:33:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/e0d8b839f95f608c8a7e9c8942e01614a3b3b260"
        },
        "date": 1793233581261,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9614.38",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6190.01",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "986c709158bfdc7bce535f0d03a5d93f7465dfe6",
          "message": "Allow `CAP_SYS_ADMIN` to remove another user's semaphore set\n\n`semctl(IPC_RMID)` only accepts a caller whose effective UID matches the\nowner or the creator of the set, so a privileged process cannot remove a\nset that another user created. The call site marks the check as\nincomplete:\n\n    // TODO: Consider capabilities in addition to UIDs.\n\nMove the decision into `IpcNamespace` and also accept a caller holding\n`CAP_SYS_ADMIN` in the IPC namespace's owning user namespace. `EPERM` is\nstill returned when neither the UID nor the capability allows removal.\n\nAdd a regression test that a privileged process removes a set owned by\nanother user, and that a user which is neither the owner nor privileged\nstill gets `EPERM`. The test also requires that a child which keeps root's\nother capabilities but drops `CAP_SYS_ADMIN` is refused, so the capability\ncannot stand in for a UID-zero bypass, and that the unprivileged owner can\nstill remove its own set.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-26T09:26:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/986c709158bfdc7bce535f0d03a5d93f7465dfe6"
        },
        "date": 1793318595637,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8705.34",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6007.54",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8976e39d3d8201b3d86c4081e0bf6192dd030548",
          "message": "Check access permissions with one call\n\n`sys_faccessat` used to invoke `Inode::check_permission` once per\nrequested access mode bit, repeating the credential and metadata\nlookups up to three times. Convert the `AccessMode` to a `Permission`\nfirst, then check all the required permissions in a single call.",
          "timestamp": "2026-08-28T09:20:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8976e39d3d8201b3d86c4081e0bf6192dd030548"
        },
        "date": 1788172664577,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16012.04",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8943.04",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c8935f97b1c857ebf2756467ae09b388a759baa1",
          "message": "Skip invalid I/O APIC entries from the MADT\n\nFirmware may report invalid I/O APIC entries. Probing them can hang the\nboot. Follow Linux's mp_register_ioapic and reject entries with zero or\nduplicate addresses, registers return all ones, or conflicting GSI\nranges.",
          "timestamp": "2026-08-28T05:04:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/c8935f97b1c857ebf2756467ae09b388a759baa1"
        },
        "date": 1788223179987,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16086.17",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9401.07",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "51c59734ee59da113ce5272b18761cb133d0470b",
          "message": "Fix host/guest benchmark initramfs rebuild",
          "timestamp": "2026-09-02T03:03:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/51c59734ee59da113ce5272b18761cb133d0470b"
        },
        "date": 1788338153132,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16209.19",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9425.77",
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
          "id": "864b9138be22d5436ef30692c0b2e5d35dafaef4",
          "message": "Adjust the symlink implementation for other file systems",
          "timestamp": "2026-09-02T02:12:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/864b9138be22d5436ef30692c0b2e5d35dafaef4"
        },
        "date": 1788471172958,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16022.07",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9089.07",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2de6b07ee933a033081029f940f741bec678a3c2",
          "message": "Clear IOPL in RFLAGS before returning to user space",
          "timestamp": "2026-09-03T08:49:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/2de6b07ee933a033081029f940f741bec678a3c2"
        },
        "date": 1788557584041,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15898.20",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9311.28",
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
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788643433085,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16052.52",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8945.41",
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
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788730121835,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15589.92",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9046.94",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mike Solar",
            "username": "Mike-Solar",
            "email": "iam@mikesolar.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1601bf53792fd81420a4f3c1da3119e84d5b36ef",
          "message": "Improve doc comments for Either\n\nSigned-off-by: Mike Solar <iam@mikesolar.cn>",
          "timestamp": "2026-09-07T11:26:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/1601bf53792fd81420a4f3c1da3119e84d5b36ef"
        },
        "date": 1788816294995,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16124.51",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9009.07",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jia Qingtong",
            "email": "jiaqingtong@huawei.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "819d6628c882eab21b0074720b47af8ded042107",
          "message": "Add AArch64 QEMU scheme support\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-05-05T00:23:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/819d6628c882eab21b0074720b47af8ded042107"
        },
        "date": 1788903422194,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15955.61",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9093.73",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "414f27702dee7c2f25672295c7aa9b83f247877e",
          "message": "Support virtiofs symbolic links",
          "timestamp": "2026-09-08T03:20:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/414f27702dee7c2f25672295c7aa9b83f247877e"
        },
        "date": 1788989673886,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16047.24",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9222.66",
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
          "id": "ee1e5d12aa4104d1d0a02dc42be56ee684935c14",
          "message": "Fix various broadcast behavior",
          "timestamp": "2026-08-11T01:34:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/ee1e5d12aa4104d1d0a02dc42be56ee684935c14"
        },
        "date": 1789075814640,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15754.71",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9003.84",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789162076167,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15747.24",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8964.03",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789248853162,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15805.80",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9018.42",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789334866389,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15899.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9239.53",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ab90d2941875c619a430fa6fa3b65df6d25e8bc7",
          "message": "Fix TDX retry issue",
          "timestamp": "2026-08-13T06:14:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/ab90d2941875c619a430fa6fa3b65df6d25e8bc7"
        },
        "date": 1789421097827,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15897.75",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8980.29",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WX Chen",
            "username": "zhenbaii",
            "email": "wxchen0913@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4b407ca87de203f79c27c9a83ada1d8223fe280",
          "message": "Fix `getcwd` panic after unmounting a parent with child mounts\n\nTreat a dead parent mount as unreachable instead of unwrapping it.",
          "timestamp": "2026-09-12T08:28:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4b407ca87de203f79c27c9a83ada1d8223fe280"
        },
        "date": 1789507980951,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16259.18",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9065.62",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "15c0fb29bd7ff585237c13ea16ea1aba2d7f8964",
          "message": "Fix partial socket option reads and writes\n\nCo-authored-by: 123123213weqw <1939455790@qq.com>",
          "timestamp": "2026-09-14T07:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/15c0fb29bd7ff585237c13ea16ea1aba2d7f8964"
        },
        "date": 1789594466097,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15795.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9253.63",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "id": "1ccefe036e97eb5026683c30f1b9872bb47dfe19",
          "message": "Temporarily disable the `gen_quote` regression test",
          "timestamp": "2026-09-17T10:47:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/1ccefe036e97eb5026683c30f1b9872bb47dfe19"
        },
        "date": 1789683185625,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8849.33",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6157.31",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "415851eb38dec4fd2674149a85ccd7ec1f81b77a",
          "message": "Add aster-code-review benchmark: 508-521",
          "timestamp": "2026-08-19T05:07:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/415851eb38dec4fd2674149a85ccd7ec1f81b77a"
        },
        "date": 1789769842191,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10729.60",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6140.62",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhouqi Jiang",
            "username": "luojia65",
            "email": "luojia@rustsbi.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0fa78e6012c80acc8f03caf49f89e231a9c61cee",
          "message": "Set accessed and dirty bits eagerly for RISC-V kernel mappings\n\nKernel mappings do not track accessed or dirty state. Leaving A/D bits\nclear can cause page faults on systems that manage these bits in\nsoftware (Svade), including during early boot.\n\nSet both bits in the Sv39 and Sv48 boot leaf entries and in non-user\nleaf entries created by `PageTableEntry::new_page`. This also avoids\nhardware PTE updates on systems that manage A/D bits in hardware.\nKeep user mappings and non-leaf entries unchanged.\n\nSigned-off-by: Zhouqi Jiang <luojia@rustsbi.com>",
          "timestamp": "2026-09-16T09:21:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/0fa78e6012c80acc8f03caf49f89e231a9c61cee"
        },
        "date": 1789855810843,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7882.98",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6189.39",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9f9f784e3e04b09468012e8b50b167f3e8c872b3",
          "message": "Use shared DMA arena in BIO",
          "timestamp": "2026-08-25T10:19:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9f9f784e3e04b09468012e8b50b167f3e8c872b3"
        },
        "date": 1789942089925,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9078.27",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6567.18",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c3fc8a5409ce337b3e0d6666b66462f8a8021cdc",
          "message": "Introduce `PartitionManager` to serialize partition updates",
          "timestamp": "2026-09-08T08:45:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c3fc8a5409ce337b3e0d6666b66462f8a8021cdc"
        },
        "date": 1790029604447,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8199.97",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5316.26",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bitter127",
            "username": "Bitter127",
            "email": "1571681846@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ac790aa89b2f39e700d263882e1a1301e0a77a25",
          "message": "Initialize RISC-V BSS for flat-binary boot",
          "timestamp": "2026-09-14T05:02:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/ac790aa89b2f39e700d263882e1a1301e0a77a25"
        },
        "date": 1790114273044,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9372.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5366.24",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c27a1ab9b7108ea1a44e5090bc580a92405f787c",
          "message": "Configure managed virtio-fs services for QEMU",
          "timestamp": "2026-09-21T04:24:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/c27a1ab9b7108ea1a44e5090bc580a92405f787c"
        },
        "date": 1790200857012,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9707.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6158.34",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790288012903,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8916.23",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6167.44",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790374818080,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8127.83",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6106.88",
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
          "id": "3eb661e12ebd7989db6fce53ca91bbfe97edda23",
          "message": "Bumped Docker image version to 0.18.1-20260926",
          "timestamp": "2026-09-25T15:23:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/3eb661e12ebd7989db6fce53ca91bbfe97edda23"
        },
        "date": 1790461302150,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7856.04",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5298.23",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "98e71727529efdbe87f35c20bcaceb0fc2e6e8f3",
          "message": "Register cached fio benchmarks",
          "timestamp": "2026-09-02T02:13:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/98e71727529efdbe87f35c20bcaceb0fc2e6e8f3"
        },
        "date": 1790549404302,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7788.42",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5434.99",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be72e21f4a993e09064d6eff91147c47196e092d",
          "message": "Add Firecracker boot documentation to the book\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-09-08T08:56:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/be72e21f4a993e09064d6eff91147c47196e092d"
        },
        "date": 1790635911315,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8589.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6199.56",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790721968670,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7881.62",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6090.33",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790809616399,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8172.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6006.38",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "harry",
            "username": "Cosh-y",
            "email": "ambition0316@126.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "577826860f5ebca1210fbe27d261b2327a0ae60f",
          "message": "Add guest physical memory management with EPT",
          "timestamp": "2026-09-09T13:29:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/577826860f5ebca1210fbe27d261b2327a0ae60f"
        },
        "date": 1790895498499,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8188.91",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5373.65",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1790984131293,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10320.58",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6055.34",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1791074072364,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8389.16",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6086.86",
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
          "id": "73ef2b9b5fd7b1a8d9583525d8824ef31985e179",
          "message": "Enhance UART console in AArch64",
          "timestamp": "2026-07-03T17:41:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/73ef2b9b5fd7b1a8d9583525d8824ef31985e179"
        },
        "date": 1791159753301,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8334.08",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6185.21",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791243556512,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9176.93",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6051.74",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791329457455,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7931.91",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6321.49",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff",
          "message": "Move the i8042 component to `kernel/comps`\n\nRegister i8042 as a fallback restart provider and let each architecture define the system power policy injected into OSTD. Keep ACPI ahead of i8042 without making aster-core depend on the high-level component.",
          "timestamp": "2026-09-21T12:48:26Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff"
        },
        "date": 1791416382384,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10699.23",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6171.59",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d3f5595ca213feb9c7fa3005976de7bd9b518da6",
          "message": "Fix VirtioFS setup in FIO benchmarks\n\nPass separate work directories to the Asterinas and Linux benchmark paths, use an absolute virtiofsd helper path for qemu-with-daemon, and make FIO result parsing robust for slash-containing patterns. Remove obsolete VirtioFS paths from benchmark YAML files.",
          "timestamp": "2026-09-30T05:16:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3f5595ca213feb9c7fa3005976de7bd9b518da6"
        },
        "date": 1791505013148,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8793.64",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5991.74",
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
          "id": "7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d",
          "message": "Remove the stale `@boterinas codex` command from the Book",
          "timestamp": "2026-10-09T06:01:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d"
        },
        "date": 1791591271502,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9723.34",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6095.78",
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
          "id": "3a670449aa1ef6933c34c74b47eb4551c7aa5126",
          "message": "Add 0.19.0 release notes",
          "timestamp": "2026-10-10T10:22:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a670449aa1ef6933c34c74b47eb4551c7aa5126"
        },
        "date": 1791675716323,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9113.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6128.06",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mike Solar",
            "username": "Mike-Solar",
            "email": "iam@mikesolar.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "af0b77c8f11db24ba59b8d2cf29a189281b8e270",
          "message": "Fix stale frame metadata access via empty `Segment`s",
          "timestamp": "2026-10-11T06:55:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/af0b77c8f11db24ba59b8d2cf29a189281b8e270"
        },
        "date": 1791762575351,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8658.80",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6150.64",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791852427484,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8703.81",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6155.90",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "bmalum",
            "username": "bmalum",
            "email": "support@bmalum.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "745ebe54e63c35c8b8c49971b581e62e5d5ed569",
          "message": "Fix stale `IN` readiness of `TimerfdFile` after `set_time` and `read`\n\n`TimerfdFile::set_time` and `TimerfdFile::try_read` reset the expiration\ncounter but left the `Pollee`'s cached readiness untouched, so `epoll_wait`\nkept reporting a disarmed or drained timerfd as readable. ERTS arms a\ntimerfd before every `epoll_wait` and disarms it afterwards without\nreading it; on Asterinas its poll thread therefore spun at 100%.\n\nInvalidate the pollee wherever the counter is reset, so that the cached\nreadiness stays consistent with `check_io_events`. Add a regression test\nthat covers disarming, reading and rearming.",
          "timestamp": "2026-10-12T07:23:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ebe54e63c35c8b8c49971b581e62e5d5ed569"
        },
        "date": 1791935789727,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9619.43",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5934.99",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792022080185,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8497.82",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6256.89",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792107534975,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8474.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6164.35",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792194004537,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8049.56",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6142.92",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792281024408,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8576.89",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6233.77",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792367567102,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8145.43",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6122.69",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3",
          "message": "Fix parent of dynamically created SysTree inodes",
          "timestamp": "2026-10-14T09:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3"
        },
        "date": 1792453957067,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8908.15",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6160.64",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "chinqrw@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "00a4842d976db6723b8224be2e57ac8105f13ee2",
          "message": "Show why `cargo osdk run --coverage` failed in `basic_coverage`\n\nSigned-off-by: Ruowen Qin <chinqrw@gmail.com>",
          "timestamp": "2026-10-18T05:30:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/00a4842d976db6723b8224be2e57ac8105f13ee2"
        },
        "date": 1792540087869,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8221.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6174.36",
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
          "id": "f40d6222dc140cc278bd110757b52f3f0fb496aa",
          "message": "Add missing `.PHONY`",
          "timestamp": "2026-10-18T15:44:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/f40d6222dc140cc278bd110757b52f3f0fb496aa"
        },
        "date": 1792626458322,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8433.04",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6094.73",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tonyyang0606",
            "username": "Tonyyang0606",
            "email": "146299767+Tonyyang0606@users.noreply.github.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600",
          "message": "Fix `F_DUPFD` to check `RLIMIT_NOFILE`\n\n`fcntl(F_DUPFD)` and `fcntl(F_DUPFD_CLOEXEC)` accepted any minimum FD.\nThey returned descriptors above the soft `RLIMIT_NOFILE` limit, and a\nlarge minimum such as `INT_MAX` grew the FD table until the heap\nallocation failed and the kernel aborted. Linux rejects a minimum FD\nthat is not below the limit with `EINVAL`, as `do_dup3` already does.",
          "timestamp": "2026-10-17T03:49:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600"
        },
        "date": 1792713226886,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10289.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5330.08",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792799759923,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7975.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5479.40",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792883742291,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8436.14",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6302.38",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792972324935,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7747.52",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5295.76",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "qinruowen@tlaic.ac.cn"
          },
          "committer": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "3ed4fc4374065dbee49a6c93f96703d1a3e9aad2",
          "message": "Remove the ineffective /github/home symlinks from the Docker images\n\nGitHub mounts a runner directory over /github/home in container jobs,\nso these links are never visible there, and nothing else uses them.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-10-26T09:27:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ed4fc4374065dbee49a6c93f96703d1a3e9aad2"
        },
        "date": 1793059667118,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "12474.52",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6286.15",
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
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793145731085,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "12016.41",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6527.22",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e0d8b839f95f608c8a7e9c8942e01614a3b3b260",
          "message": "Fix vDSO realtime clock to keep sub-second offset\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-06T14:33:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/e0d8b839f95f608c8a7e9c8942e01614a3b3b260"
        },
        "date": 1793233579832,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7915.76",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5386.87",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "986c709158bfdc7bce535f0d03a5d93f7465dfe6",
          "message": "Allow `CAP_SYS_ADMIN` to remove another user's semaphore set\n\n`semctl(IPC_RMID)` only accepts a caller whose effective UID matches the\nowner or the creator of the set, so a privileged process cannot remove a\nset that another user created. The call site marks the check as\nincomplete:\n\n    // TODO: Consider capabilities in addition to UIDs.\n\nMove the decision into `IpcNamespace` and also accept a caller holding\n`CAP_SYS_ADMIN` in the IPC namespace's owning user namespace. `EPERM` is\nstill returned when neither the UID nor the capability allows removal.\n\nAdd a regression test that a privileged process removes a set owned by\nanother user, and that a user which is neither the owner nor privileged\nstill gets `EPERM`. The test also requires that a child which keeps root's\nother capabilities but drops `CAP_SYS_ADMIN` is refused, so the capability\ncannot stand in for a UID-zero bypass, and that the unprivileged owner can\nstill remove its own set.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-26T09:26:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/986c709158bfdc7bce535f0d03a5d93f7465dfe6"
        },
        "date": 1793318595288,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8904.89",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6091.06",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "51c59734ee59da113ce5272b18761cb133d0470b",
          "message": "Fix host/guest benchmark initramfs rebuild",
          "timestamp": "2026-09-02T03:03:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/51c59734ee59da113ce5272b18761cb133d0470b"
        },
        "date": 1788338152550,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16357.24",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9041.32",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "e60087be133ce30657ca648415fa48f7d8d0c310",
          "message": "Fix Redis cross-compilation on ARM64 builders",
          "timestamp": "2026-09-02T06:20:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60087be133ce30657ca648415fa48f7d8d0c310"
        },
        "date": 1788388846896,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15967.99",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8926.15",
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
          "id": "864b9138be22d5436ef30692c0b2e5d35dafaef4",
          "message": "Adjust the symlink implementation for other file systems",
          "timestamp": "2026-09-02T02:12:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/864b9138be22d5436ef30692c0b2e5d35dafaef4"
        },
        "date": 1788471172375,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15872.21",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9089.49",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2de6b07ee933a033081029f940f741bec678a3c2",
          "message": "Clear IOPL in RFLAGS before returning to user space",
          "timestamp": "2026-09-03T08:49:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/2de6b07ee933a033081029f940f741bec678a3c2"
        },
        "date": 1788557583484,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16150.89",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9304.49",
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
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788643432554,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15899.44",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9318.36",
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
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788730121349,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15850.02",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9262.97",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mike Solar",
            "username": "Mike-Solar",
            "email": "iam@mikesolar.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1601bf53792fd81420a4f3c1da3119e84d5b36ef",
          "message": "Improve doc comments for Either\n\nSigned-off-by: Mike Solar <iam@mikesolar.cn>",
          "timestamp": "2026-09-07T11:26:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/1601bf53792fd81420a4f3c1da3119e84d5b36ef"
        },
        "date": 1788816294563,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15691.71",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9264.14",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jia Qingtong",
            "email": "jiaqingtong@huawei.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "819d6628c882eab21b0074720b47af8ded042107",
          "message": "Add AArch64 QEMU scheme support\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-05-05T00:23:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/819d6628c882eab21b0074720b47af8ded042107"
        },
        "date": 1788903421763,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15157.56",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9444.21",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "414f27702dee7c2f25672295c7aa9b83f247877e",
          "message": "Support virtiofs symbolic links",
          "timestamp": "2026-09-08T03:20:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/414f27702dee7c2f25672295c7aa9b83f247877e"
        },
        "date": 1788989673301,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15270.93",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8969.04",
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
          "id": "ee1e5d12aa4104d1d0a02dc42be56ee684935c14",
          "message": "Fix various broadcast behavior",
          "timestamp": "2026-08-11T01:34:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/ee1e5d12aa4104d1d0a02dc42be56ee684935c14"
        },
        "date": 1789075814225,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15845.85",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9056.43",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789162075583,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16023.18",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8868.64",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789248852509,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15858.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9296.83",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789334865720,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15950.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9166.58",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ab90d2941875c619a430fa6fa3b65df6d25e8bc7",
          "message": "Fix TDX retry issue",
          "timestamp": "2026-08-13T06:14:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/ab90d2941875c619a430fa6fa3b65df6d25e8bc7"
        },
        "date": 1789421097150,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16212.82",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9254.79",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WX Chen",
            "username": "zhenbaii",
            "email": "wxchen0913@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4b407ca87de203f79c27c9a83ada1d8223fe280",
          "message": "Fix `getcwd` panic after unmounting a parent with child mounts\n\nTreat a dead parent mount as unreachable instead of unwrapping it.",
          "timestamp": "2026-09-12T08:28:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4b407ca87de203f79c27c9a83ada1d8223fe280"
        },
        "date": 1789507980598,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15817.98",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9325.02",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "15c0fb29bd7ff585237c13ea16ea1aba2d7f8964",
          "message": "Fix partial socket option reads and writes\n\nCo-authored-by: 123123213weqw <1939455790@qq.com>",
          "timestamp": "2026-09-14T07:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/15c0fb29bd7ff585237c13ea16ea1aba2d7f8964"
        },
        "date": 1789594465763,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15898.76",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9039.85",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "id": "1ccefe036e97eb5026683c30f1b9872bb47dfe19",
          "message": "Temporarily disable the `gen_quote` regression test",
          "timestamp": "2026-09-17T10:47:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/1ccefe036e97eb5026683c30f1b9872bb47dfe19"
        },
        "date": 1789683183837,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8849.48",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6383.00",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "415851eb38dec4fd2674149a85ccd7ec1f81b77a",
          "message": "Add aster-code-review benchmark: 508-521",
          "timestamp": "2026-08-19T05:07:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/415851eb38dec4fd2674149a85ccd7ec1f81b77a"
        },
        "date": 1789769841524,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8475.53",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6196.87",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhouqi Jiang",
            "username": "luojia65",
            "email": "luojia@rustsbi.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0fa78e6012c80acc8f03caf49f89e231a9c61cee",
          "message": "Set accessed and dirty bits eagerly for RISC-V kernel mappings\n\nKernel mappings do not track accessed or dirty state. Leaving A/D bits\nclear can cause page faults on systems that manage these bits in\nsoftware (Svade), including during early boot.\n\nSet both bits in the Sv39 and Sv48 boot leaf entries and in non-user\nleaf entries created by `PageTableEntry::new_page`. This also avoids\nhardware PTE updates on systems that manage A/D bits in hardware.\nKeep user mappings and non-leaf entries unchanged.\n\nSigned-off-by: Zhouqi Jiang <luojia@rustsbi.com>",
          "timestamp": "2026-09-16T09:21:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/0fa78e6012c80acc8f03caf49f89e231a9c61cee"
        },
        "date": 1789855810179,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7998.82",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6448.66",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9f9f784e3e04b09468012e8b50b167f3e8c872b3",
          "message": "Use shared DMA arena in BIO",
          "timestamp": "2026-08-25T10:19:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9f9f784e3e04b09468012e8b50b167f3e8c872b3"
        },
        "date": 1789942089294,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9058.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6097.69",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c3fc8a5409ce337b3e0d6666b66462f8a8021cdc",
          "message": "Introduce `PartitionManager` to serialize partition updates",
          "timestamp": "2026-09-08T08:45:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c3fc8a5409ce337b3e0d6666b66462f8a8021cdc"
        },
        "date": 1790029603727,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9184.64",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6193.61",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bitter127",
            "username": "Bitter127",
            "email": "1571681846@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ac790aa89b2f39e700d263882e1a1301e0a77a25",
          "message": "Initialize RISC-V BSS for flat-binary boot",
          "timestamp": "2026-09-14T05:02:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/ac790aa89b2f39e700d263882e1a1301e0a77a25"
        },
        "date": 1790114272719,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7940.98",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5295.83",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c27a1ab9b7108ea1a44e5090bc580a92405f787c",
          "message": "Configure managed virtio-fs services for QEMU",
          "timestamp": "2026-09-21T04:24:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/c27a1ab9b7108ea1a44e5090bc580a92405f787c"
        },
        "date": 1790200856383,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8173.13",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7287.24",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790288012227,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8090.07",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6154.73",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790374816588,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7962.82",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5351.80",
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
          "id": "3eb661e12ebd7989db6fce53ca91bbfe97edda23",
          "message": "Bumped Docker image version to 0.18.1-20260926",
          "timestamp": "2026-09-25T15:23:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/3eb661e12ebd7989db6fce53ca91bbfe97edda23"
        },
        "date": 1790461301581,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8022.23",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5998.70",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "98e71727529efdbe87f35c20bcaceb0fc2e6e8f3",
          "message": "Register cached fio benchmarks",
          "timestamp": "2026-09-02T02:13:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/98e71727529efdbe87f35c20bcaceb0fc2e6e8f3"
        },
        "date": 1790549403849,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10227.17",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6313.23",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be72e21f4a993e09064d6eff91147c47196e092d",
          "message": "Add Firecracker boot documentation to the book\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-09-08T08:56:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/be72e21f4a993e09064d6eff91147c47196e092d"
        },
        "date": 1790635910711,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8882.69",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5601.81",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790721968216,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8160.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5963.44",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790809615735,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9061.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6241.27",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "harry",
            "username": "Cosh-y",
            "email": "ambition0316@126.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "577826860f5ebca1210fbe27d261b2327a0ae60f",
          "message": "Add guest physical memory management with EPT",
          "timestamp": "2026-09-09T13:29:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/577826860f5ebca1210fbe27d261b2327a0ae60f"
        },
        "date": 1790895497946,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8086.41",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5854.67",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1790984130726,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8376.30",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6124.93",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1791074071861,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8940.19",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6569.10",
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
          "id": "73ef2b9b5fd7b1a8d9583525d8824ef31985e179",
          "message": "Enhance UART console in AArch64",
          "timestamp": "2026-07-03T17:41:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/73ef2b9b5fd7b1a8d9583525d8824ef31985e179"
        },
        "date": 1791159752895,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9063.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6058.32",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791243555845,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8489.04",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6074.78",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791329457106,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8349.13",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6300.82",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff",
          "message": "Move the i8042 component to `kernel/comps`\n\nRegister i8042 as a fallback restart provider and let each architecture define the system power policy injected into OSTD. Keep ACPI ahead of i8042 without making aster-core depend on the high-level component.",
          "timestamp": "2026-09-21T12:48:26Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff"
        },
        "date": 1791416381821,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9021.65",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6140.65",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d3f5595ca213feb9c7fa3005976de7bd9b518da6",
          "message": "Fix VirtioFS setup in FIO benchmarks\n\nPass separate work directories to the Asterinas and Linux benchmark paths, use an absolute virtiofsd helper path for qemu-with-daemon, and make FIO result parsing robust for slash-containing patterns. Remove obsolete VirtioFS paths from benchmark YAML files.",
          "timestamp": "2026-09-30T05:16:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3f5595ca213feb9c7fa3005976de7bd9b518da6"
        },
        "date": 1791505012592,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8517.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6117.20",
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
          "id": "7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d",
          "message": "Remove the stale `@boterinas codex` command from the Book",
          "timestamp": "2026-10-09T06:01:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d"
        },
        "date": 1791591270852,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8747.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6132.81",
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
          "id": "3a670449aa1ef6933c34c74b47eb4551c7aa5126",
          "message": "Add 0.19.0 release notes",
          "timestamp": "2026-10-10T10:22:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a670449aa1ef6933c34c74b47eb4551c7aa5126"
        },
        "date": 1791675715837,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8447.64",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6065.86",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mike Solar",
            "username": "Mike-Solar",
            "email": "iam@mikesolar.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "af0b77c8f11db24ba59b8d2cf29a189281b8e270",
          "message": "Fix stale frame metadata access via empty `Segment`s",
          "timestamp": "2026-10-11T06:55:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/af0b77c8f11db24ba59b8d2cf29a189281b8e270"
        },
        "date": 1791762574824,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8245.70",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6153.52",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791852426825,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8401.82",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6340.78",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "bmalum",
            "username": "bmalum",
            "email": "support@bmalum.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "745ebe54e63c35c8b8c49971b581e62e5d5ed569",
          "message": "Fix stale `IN` readiness of `TimerfdFile` after `set_time` and `read`\n\n`TimerfdFile::set_time` and `TimerfdFile::try_read` reset the expiration\ncounter but left the `Pollee`'s cached readiness untouched, so `epoll_wait`\nkept reporting a disarmed or drained timerfd as readable. ERTS arms a\ntimerfd before every `epoll_wait` and disarms it afterwards without\nreading it; on Asterinas its poll thread therefore spun at 100%.\n\nInvalidate the pollee wherever the counter is reset, so that the cached\nreadiness stays consistent with `check_io_events`. Add a regression test\nthat covers disarming, reading and rearming.",
          "timestamp": "2026-10-12T07:23:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ebe54e63c35c8b8c49971b581e62e5d5ed569"
        },
        "date": 1791935789159,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9324.44",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6146.31",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792022079472,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7932.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5344.30",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792107534431,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8448.41",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5422.49",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792194004090,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7780.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6203.68",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792281023722,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9119.81",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5935.50",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792367566408,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8196.04",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6095.41",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3",
          "message": "Fix parent of dynamically created SysTree inodes",
          "timestamp": "2026-10-14T09:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3"
        },
        "date": 1792453956591,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7839.74",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5380.15",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "chinqrw@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "00a4842d976db6723b8224be2e57ac8105f13ee2",
          "message": "Show why `cargo osdk run --coverage` failed in `basic_coverage`\n\nSigned-off-by: Ruowen Qin <chinqrw@gmail.com>",
          "timestamp": "2026-10-18T05:30:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/00a4842d976db6723b8224be2e57ac8105f13ee2"
        },
        "date": 1792540087252,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7927.71",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5472.75",
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
          "id": "f40d6222dc140cc278bd110757b52f3f0fb496aa",
          "message": "Add missing `.PHONY`",
          "timestamp": "2026-10-18T15:44:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/f40d6222dc140cc278bd110757b52f3f0fb496aa"
        },
        "date": 1792626457865,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9011.07",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6194.83",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tonyyang0606",
            "username": "Tonyyang0606",
            "email": "146299767+Tonyyang0606@users.noreply.github.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600",
          "message": "Fix `F_DUPFD` to check `RLIMIT_NOFILE`\n\n`fcntl(F_DUPFD)` and `fcntl(F_DUPFD_CLOEXEC)` accepted any minimum FD.\nThey returned descriptors above the soft `RLIMIT_NOFILE` limit, and a\nlarge minimum such as `INT_MAX` grew the FD table until the heap\nallocation failed and the kernel aborted. Linux rejects a minimum FD\nthat is not below the limit with `EINVAL`, as `do_dup3` already does.",
          "timestamp": "2026-10-17T03:49:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600"
        },
        "date": 1792713226372,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9353.75",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5983.75",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792799759478,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8023.15",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6054.63",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792883741926,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7873.63",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6193.01",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792972324452,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8631.53",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6032.85",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "qinruowen@tlaic.ac.cn"
          },
          "committer": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "3ed4fc4374065dbee49a6c93f96703d1a3e9aad2",
          "message": "Remove the ineffective /github/home symlinks from the Docker images\n\nGitHub mounts a runner directory over /github/home in container jobs,\nso these links are never visible there, and nothing else uses them.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-10-26T09:27:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ed4fc4374065dbee49a6c93f96703d1a3e9aad2"
        },
        "date": 1793059666386,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7949.16",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5789.93",
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
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793145730732,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8715.12",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6150.52",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e0d8b839f95f608c8a7e9c8942e01614a3b3b260",
          "message": "Fix vDSO realtime clock to keep sub-second offset\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-06T14:33:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/e0d8b839f95f608c8a7e9c8942e01614a3b3b260"
        },
        "date": 1793233579430,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8531.72",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5403.29",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "986c709158bfdc7bce535f0d03a5d93f7465dfe6",
          "message": "Allow `CAP_SYS_ADMIN` to remove another user's semaphore set\n\n`semctl(IPC_RMID)` only accepts a caller whose effective UID matches the\nowner or the creator of the set, so a privileged process cannot remove a\nset that another user created. The call site marks the check as\nincomplete:\n\n    // TODO: Consider capabilities in addition to UIDs.\n\nMove the decision into `IpcNamespace` and also accept a caller holding\n`CAP_SYS_ADMIN` in the IPC namespace's owning user namespace. `EPERM` is\nstill returned when neither the UID nor the capability allows removal.\n\nAdd a regression test that a privileged process removes a set owned by\nanother user, and that a user which is neither the owner nor privileged\nstill gets `EPERM`. The test also requires that a child which keeps root's\nother capabilities but drops `CAP_SYS_ADMIN` is refused, so the capability\ncannot stand in for a UID-zero bypass, and that the unprivileged owner can\nstill remove its own set.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-26T09:26:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/986c709158bfdc7bce535f0d03a5d93f7465dfe6"
        },
        "date": 1793318594568,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7953.01",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6213.33",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793407996790,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9082.45",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6797.06",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "51c59734ee59da113ce5272b18761cb133d0470b",
          "message": "Fix host/guest benchmark initramfs rebuild",
          "timestamp": "2026-09-02T03:03:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/51c59734ee59da113ce5272b18761cb133d0470b"
        },
        "date": 1788338152033,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "17058.08",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5718.10",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "e60087be133ce30657ca648415fa48f7d8d0c310",
          "message": "Fix Redis cross-compilation on ARM64 builders",
          "timestamp": "2026-09-02T06:20:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60087be133ce30657ca648415fa48f7d8d0c310"
        },
        "date": 1788388846640,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "17275.14",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6045.60",
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
          "id": "864b9138be22d5436ef30692c0b2e5d35dafaef4",
          "message": "Adjust the symlink implementation for other file systems",
          "timestamp": "2026-09-02T02:12:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/864b9138be22d5436ef30692c0b2e5d35dafaef4"
        },
        "date": 1788471171843,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "17828.78",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5846.10",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2de6b07ee933a033081029f940f741bec678a3c2",
          "message": "Clear IOPL in RFLAGS before returning to user space",
          "timestamp": "2026-09-03T08:49:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/2de6b07ee933a033081029f940f741bec678a3c2"
        },
        "date": 1788557582964,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "17199.92",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5768.71",
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
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788643432001,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16768.50",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6036.47",
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
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788730120840,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "17318.58",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5817.53",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mike Solar",
            "username": "Mike-Solar",
            "email": "iam@mikesolar.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1601bf53792fd81420a4f3c1da3119e84d5b36ef",
          "message": "Improve doc comments for Either\n\nSigned-off-by: Mike Solar <iam@mikesolar.cn>",
          "timestamp": "2026-09-07T11:26:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/1601bf53792fd81420a4f3c1da3119e84d5b36ef"
        },
        "date": 1788816294111,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "17232.18",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5891.38",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jia Qingtong",
            "email": "jiaqingtong@huawei.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "819d6628c882eab21b0074720b47af8ded042107",
          "message": "Add AArch64 QEMU scheme support\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-05-05T00:23:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/819d6628c882eab21b0074720b47af8ded042107"
        },
        "date": 1788903421379,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16642.38",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5880.36",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "414f27702dee7c2f25672295c7aa9b83f247877e",
          "message": "Support virtiofs symbolic links",
          "timestamp": "2026-09-08T03:20:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/414f27702dee7c2f25672295c7aa9b83f247877e"
        },
        "date": 1788989672734,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16823.28",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5901.22",
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
          "id": "ee1e5d12aa4104d1d0a02dc42be56ee684935c14",
          "message": "Fix various broadcast behavior",
          "timestamp": "2026-08-11T01:34:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/ee1e5d12aa4104d1d0a02dc42be56ee684935c14"
        },
        "date": 1789075813816,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16827.83",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5864.92",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789162075032,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "17134.11",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5748.47",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789248851848,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "17092.70",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5833.04",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789334865052,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "17192.73",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5779.92",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ab90d2941875c619a430fa6fa3b65df6d25e8bc7",
          "message": "Fix TDX retry issue",
          "timestamp": "2026-08-13T06:14:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/ab90d2941875c619a430fa6fa3b65df6d25e8bc7"
        },
        "date": 1789421096503,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16248.36",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5835.73",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WX Chen",
            "username": "zhenbaii",
            "email": "wxchen0913@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4b407ca87de203f79c27c9a83ada1d8223fe280",
          "message": "Fix `getcwd` panic after unmounting a parent with child mounts\n\nTreat a dead parent mount as unreachable instead of unwrapping it.",
          "timestamp": "2026-09-12T08:28:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4b407ca87de203f79c27c9a83ada1d8223fe280"
        },
        "date": 1789507980186,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "17367.69",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5946.13",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "15c0fb29bd7ff585237c13ea16ea1aba2d7f8964",
          "message": "Fix partial socket option reads and writes\n\nCo-authored-by: 123123213weqw <1939455790@qq.com>",
          "timestamp": "2026-09-14T07:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/15c0fb29bd7ff585237c13ea16ea1aba2d7f8964"
        },
        "date": 1789594465381,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "17199.92",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5814.73",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "id": "1ccefe036e97eb5026683c30f1b9872bb47dfe19",
          "message": "Temporarily disable the `gen_quote` regression test",
          "timestamp": "2026-09-17T10:47:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/1ccefe036e97eb5026683c30f1b9872bb47dfe19"
        },
        "date": 1789683181931,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9778.61",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4331.70",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "415851eb38dec4fd2674149a85ccd7ec1f81b77a",
          "message": "Add aster-code-review benchmark: 508-521",
          "timestamp": "2026-08-19T05:07:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/415851eb38dec4fd2674149a85ccd7ec1f81b77a"
        },
        "date": 1789769840761,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8908.85",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4402.39",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhouqi Jiang",
            "username": "luojia65",
            "email": "luojia@rustsbi.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0fa78e6012c80acc8f03caf49f89e231a9c61cee",
          "message": "Set accessed and dirty bits eagerly for RISC-V kernel mappings\n\nKernel mappings do not track accessed or dirty state. Leaving A/D bits\nclear can cause page faults on systems that manage these bits in\nsoftware (Svade), including during early boot.\n\nSet both bits in the Sv39 and Sv48 boot leaf entries and in non-user\nleaf entries created by `PageTableEntry::new_page`. This also avoids\nhardware PTE updates on systems that manage A/D bits in hardware.\nKeep user mappings and non-leaf entries unchanged.\n\nSigned-off-by: Zhouqi Jiang <luojia@rustsbi.com>",
          "timestamp": "2026-09-16T09:21:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/0fa78e6012c80acc8f03caf49f89e231a9c61cee"
        },
        "date": 1789855809520,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8575.82",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4345.12",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9f9f784e3e04b09468012e8b50b167f3e8c872b3",
          "message": "Use shared DMA arena in BIO",
          "timestamp": "2026-08-25T10:19:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9f9f784e3e04b09468012e8b50b167f3e8c872b3"
        },
        "date": 1789942088785,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8979.19",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4140.87",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c3fc8a5409ce337b3e0d6666b66462f8a8021cdc",
          "message": "Introduce `PartitionManager` to serialize partition updates",
          "timestamp": "2026-09-08T08:45:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c3fc8a5409ce337b3e0d6666b66462f8a8021cdc"
        },
        "date": 1790029603052,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8769.95",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4024.15",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bitter127",
            "username": "Bitter127",
            "email": "1571681846@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ac790aa89b2f39e700d263882e1a1301e0a77a25",
          "message": "Initialize RISC-V BSS for flat-binary boot",
          "timestamp": "2026-09-14T05:02:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/ac790aa89b2f39e700d263882e1a1301e0a77a25"
        },
        "date": 1790114272386,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9725.39",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4296.46",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c27a1ab9b7108ea1a44e5090bc580a92405f787c",
          "message": "Configure managed virtio-fs services for QEMU",
          "timestamp": "2026-09-21T04:24:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/c27a1ab9b7108ea1a44e5090bc580a92405f787c"
        },
        "date": 1790200855672,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9473.08",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4440.13",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790288011457,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8986.94",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4385.88",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790374816009,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9201.64",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4311.96",
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
          "id": "3eb661e12ebd7989db6fce53ca91bbfe97edda23",
          "message": "Bumped Docker image version to 0.18.1-20260926",
          "timestamp": "2026-09-25T15:23:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/3eb661e12ebd7989db6fce53ca91bbfe97edda23"
        },
        "date": 1790461301106,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9587.34",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3916.86",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "98e71727529efdbe87f35c20bcaceb0fc2e6e8f3",
          "message": "Register cached fio benchmarks",
          "timestamp": "2026-09-02T02:13:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/98e71727529efdbe87f35c20bcaceb0fc2e6e8f3"
        },
        "date": 1790549403435,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8634.27",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3904.43",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be72e21f4a993e09064d6eff91147c47196e092d",
          "message": "Add Firecracker boot documentation to the book\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-09-08T08:56:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/be72e21f4a993e09064d6eff91147c47196e092d"
        },
        "date": 1790635910036,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9113.29",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4313.41",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790721967734,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8875.30",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4297.31",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790809615006,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9634.49",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4309.35",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "harry",
            "username": "Cosh-y",
            "email": "ambition0316@126.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "577826860f5ebca1210fbe27d261b2327a0ae60f",
          "message": "Add guest physical memory management with EPT",
          "timestamp": "2026-09-09T13:29:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/577826860f5ebca1210fbe27d261b2327a0ae60f"
        },
        "date": 1790895497432,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13349.47",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4285.79",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1790984129126,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9262.42",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4318.64",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1791074070065,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8627.51",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4343.78",
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
          "id": "73ef2b9b5fd7b1a8d9583525d8824ef31985e179",
          "message": "Enhance UART console in AArch64",
          "timestamp": "2026-07-03T17:41:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/73ef2b9b5fd7b1a8d9583525d8824ef31985e179"
        },
        "date": 1791159752465,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9197.64",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4358.43",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791243555125,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10296.49",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4358.41",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791329456627,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8895.22",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4379.33",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff",
          "message": "Move the i8042 component to `kernel/comps`\n\nRegister i8042 as a fallback restart provider and let each architecture define the system power policy injected into OSTD. Keep ACPI ahead of i8042 without making aster-core depend on the high-level component.",
          "timestamp": "2026-09-21T12:48:26Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff"
        },
        "date": 1791416381174,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9103.15",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4401.80",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d3f5595ca213feb9c7fa3005976de7bd9b518da6",
          "message": "Fix VirtioFS setup in FIO benchmarks\n\nPass separate work directories to the Asterinas and Linux benchmark paths, use an absolute virtiofsd helper path for qemu-with-daemon, and make FIO result parsing robust for slash-containing patterns. Remove obsolete VirtioFS paths from benchmark YAML files.",
          "timestamp": "2026-09-30T05:16:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3f5595ca213feb9c7fa3005976de7bd9b518da6"
        },
        "date": 1791505012045,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8850.21",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4404.89",
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
          "id": "7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d",
          "message": "Remove the stale `@boterinas codex` command from the Book",
          "timestamp": "2026-10-09T06:01:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d"
        },
        "date": 1791591270239,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9081.35",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4307.65",
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
          "id": "3a670449aa1ef6933c34c74b47eb4551c7aa5126",
          "message": "Add 0.19.0 release notes",
          "timestamp": "2026-10-10T10:22:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a670449aa1ef6933c34c74b47eb4551c7aa5126"
        },
        "date": 1791675715310,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8644.61",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4344.05",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mike Solar",
            "username": "Mike-Solar",
            "email": "iam@mikesolar.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "af0b77c8f11db24ba59b8d2cf29a189281b8e270",
          "message": "Fix stale frame metadata access via empty `Segment`s",
          "timestamp": "2026-10-11T06:55:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/af0b77c8f11db24ba59b8d2cf29a189281b8e270"
        },
        "date": 1791762573654,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10586.67",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4388.45",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791852426187,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8732.05",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3978.39",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "bmalum",
            "username": "bmalum",
            "email": "support@bmalum.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "745ebe54e63c35c8b8c49971b581e62e5d5ed569",
          "message": "Fix stale `IN` readiness of `TimerfdFile` after `set_time` and `read`\n\n`TimerfdFile::set_time` and `TimerfdFile::try_read` reset the expiration\ncounter but left the `Pollee`'s cached readiness untouched, so `epoll_wait`\nkept reporting a disarmed or drained timerfd as readable. ERTS arms a\ntimerfd before every `epoll_wait` and disarms it afterwards without\nreading it; on Asterinas its poll thread therefore spun at 100%.\n\nInvalidate the pollee wherever the counter is reset, so that the cached\nreadiness stays consistent with `check_io_events`. Add a regression test\nthat covers disarming, reading and rearming.",
          "timestamp": "2026-10-12T07:23:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ebe54e63c35c8b8c49971b581e62e5d5ed569"
        },
        "date": 1791935788571,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9512.90",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4334.18",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792022078609,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9742.02",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4320.67",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792107533159,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9636.51",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4259.39",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792194003657,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8950.58",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4036.31",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792281023163,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9700.68",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4347.06",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792367565827,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9246.84",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4033.70",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3",
          "message": "Fix parent of dynamically created SysTree inodes",
          "timestamp": "2026-10-14T09:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3"
        },
        "date": 1792453956122,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10183.79",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4369.30",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "chinqrw@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "00a4842d976db6723b8224be2e57ac8105f13ee2",
          "message": "Show why `cargo osdk run --coverage` failed in `basic_coverage`\n\nSigned-off-by: Ruowen Qin <chinqrw@gmail.com>",
          "timestamp": "2026-10-18T05:30:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/00a4842d976db6723b8224be2e57ac8105f13ee2"
        },
        "date": 1792540086785,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8770.01",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4049.52",
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
          "id": "f40d6222dc140cc278bd110757b52f3f0fb496aa",
          "message": "Add missing `.PHONY`",
          "timestamp": "2026-10-18T15:44:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/f40d6222dc140cc278bd110757b52f3f0fb496aa"
        },
        "date": 1792626457381,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9150.05",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4335.81",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tonyyang0606",
            "username": "Tonyyang0606",
            "email": "146299767+Tonyyang0606@users.noreply.github.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600",
          "message": "Fix `F_DUPFD` to check `RLIMIT_NOFILE`\n\n`fcntl(F_DUPFD)` and `fcntl(F_DUPFD_CLOEXEC)` accepted any minimum FD.\nThey returned descriptors above the soft `RLIMIT_NOFILE` limit, and a\nlarge minimum such as `INT_MAX` grew the FD table until the heap\nallocation failed and the kernel aborted. Linux rejects a minimum FD\nthat is not below the limit with `EINVAL`, as `do_dup3` already does.",
          "timestamp": "2026-10-17T03:49:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600"
        },
        "date": 1792713225876,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8757.55",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3809.33",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792799759040,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8785.42",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3940.14",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792883741586,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8735.99",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4147.84",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792972323956,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9017.38",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4337.29",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "qinruowen@tlaic.ac.cn"
          },
          "committer": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "3ed4fc4374065dbee49a6c93f96703d1a3e9aad2",
          "message": "Remove the ineffective /github/home symlinks from the Docker images\n\nGitHub mounts a runner directory over /github/home in container jobs,\nso these links are never visible there, and nothing else uses them.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-10-26T09:27:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ed4fc4374065dbee49a6c93f96703d1a3e9aad2"
        },
        "date": 1793059665672,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9151.15",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4354.12",
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
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793145730410,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8916.91",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4389.09",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e0d8b839f95f608c8a7e9c8942e01614a3b3b260",
          "message": "Fix vDSO realtime clock to keep sub-second offset\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-06T14:33:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/e0d8b839f95f608c8a7e9c8942e01614a3b3b260"
        },
        "date": 1793233579016,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9656.04",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4074.25",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "986c709158bfdc7bce535f0d03a5d93f7465dfe6",
          "message": "Allow `CAP_SYS_ADMIN` to remove another user's semaphore set\n\n`semctl(IPC_RMID)` only accepts a caller whose effective UID matches the\nowner or the creator of the set, so a privileged process cannot remove a\nset that another user created. The call site marks the check as\nincomplete:\n\n    // TODO: Consider capabilities in addition to UIDs.\n\nMove the decision into `IpcNamespace` and also accept a caller holding\n`CAP_SYS_ADMIN` in the IPC namespace's owning user namespace. `EPERM` is\nstill returned when neither the UID nor the capability allows removal.\n\nAdd a regression test that a privileged process removes a set owned by\nanother user, and that a user which is neither the owner nor privileged\nstill gets `EPERM`. The test also requires that a child which keeps root's\nother capabilities but drops `CAP_SYS_ADMIN` is refused, so the capability\ncannot stand in for a UID-zero bypass, and that the unprivileged owner can\nstill remove its own set.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-26T09:26:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/986c709158bfdc7bce535f0d03a5d93f7465dfe6"
        },
        "date": 1793318593977,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8715.68",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3959.54",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793407996283,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8741.03",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3920.55",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "51c59734ee59da113ce5272b18761cb133d0470b",
          "message": "Fix host/guest benchmark initramfs rebuild",
          "timestamp": "2026-09-02T03:03:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/51c59734ee59da113ce5272b18761cb133d0470b"
        },
        "date": 1788338151765,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "29797.87",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8034.18",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "e60087be133ce30657ca648415fa48f7d8d0c310",
          "message": "Fix Redis cross-compilation on ARM64 builders",
          "timestamp": "2026-09-02T06:20:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60087be133ce30657ca648415fa48f7d8d0c310"
        },
        "date": 1788388846368,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "30374.99",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7809.66",
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
          "id": "864b9138be22d5436ef30692c0b2e5d35dafaef4",
          "message": "Adjust the symlink implementation for other file systems",
          "timestamp": "2026-09-02T02:12:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/864b9138be22d5436ef30692c0b2e5d35dafaef4"
        },
        "date": 1788471171549,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "30385.20",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7990.52",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2de6b07ee933a033081029f940f741bec678a3c2",
          "message": "Clear IOPL in RFLAGS before returning to user space",
          "timestamp": "2026-09-03T08:49:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/2de6b07ee933a033081029f940f741bec678a3c2"
        },
        "date": 1788557582718,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "29658.96",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7871.20",
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
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788643431690,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "30121.80",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7981.67",
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
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788730120585,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "30097.05",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8071.85",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mike Solar",
            "username": "Mike-Solar",
            "email": "iam@mikesolar.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1601bf53792fd81420a4f3c1da3119e84d5b36ef",
          "message": "Improve doc comments for Either\n\nSigned-off-by: Mike Solar <iam@mikesolar.cn>",
          "timestamp": "2026-09-07T11:26:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/1601bf53792fd81420a4f3c1da3119e84d5b36ef"
        },
        "date": 1788816293872,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "30101.15",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8021.83",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jia Qingtong",
            "email": "jiaqingtong@huawei.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "819d6628c882eab21b0074720b47af8ded042107",
          "message": "Add AArch64 QEMU scheme support\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-05-05T00:23:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/819d6628c882eab21b0074720b47af8ded042107"
        },
        "date": 1788903421185,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "30137.28",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7834.21",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "414f27702dee7c2f25672295c7aa9b83f247877e",
          "message": "Support virtiofs symbolic links",
          "timestamp": "2026-09-08T03:20:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/414f27702dee7c2f25672295c7aa9b83f247877e"
        },
        "date": 1788989672451,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "30158.38",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7977.22",
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
          "id": "ee1e5d12aa4104d1d0a02dc42be56ee684935c14",
          "message": "Fix various broadcast behavior",
          "timestamp": "2026-08-11T01:34:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/ee1e5d12aa4104d1d0a02dc42be56ee684935c14"
        },
        "date": 1789075813601,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "29708.50",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7916.92",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789162074757,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "30090.97",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8027.60",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789248851487,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "29932.48",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8062.28",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789334864740,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "30266.00",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8015.85",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ab90d2941875c619a430fa6fa3b65df6d25e8bc7",
          "message": "Fix TDX retry issue",
          "timestamp": "2026-08-13T06:14:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/ab90d2941875c619a430fa6fa3b65df6d25e8bc7"
        },
        "date": 1789421096166,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "29909.91",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7854.84",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WX Chen",
            "username": "zhenbaii",
            "email": "wxchen0913@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4b407ca87de203f79c27c9a83ada1d8223fe280",
          "message": "Fix `getcwd` panic after unmounting a parent with child mounts\n\nTreat a dead parent mount as unreachable instead of unwrapping it.",
          "timestamp": "2026-09-12T08:28:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4b407ca87de203f79c27c9a83ada1d8223fe280"
        },
        "date": 1789507979992,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "29825.03",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7102.81",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "15c0fb29bd7ff585237c13ea16ea1aba2d7f8964",
          "message": "Fix partial socket option reads and writes\n\nCo-authored-by: 123123213weqw <1939455790@qq.com>",
          "timestamp": "2026-09-14T07:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/15c0fb29bd7ff585237c13ea16ea1aba2d7f8964"
        },
        "date": 1789594465213,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "30248.07",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8081.59",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "id": "1ccefe036e97eb5026683c30f1b9872bb47dfe19",
          "message": "Temporarily disable the `gen_quote` regression test",
          "timestamp": "2026-09-17T10:47:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/1ccefe036e97eb5026683c30f1b9872bb47dfe19"
        },
        "date": 1789683181710,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "45397.01",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7180.02",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "415851eb38dec4fd2674149a85ccd7ec1f81b77a",
          "message": "Add aster-code-review benchmark: 508-521",
          "timestamp": "2026-08-19T05:07:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/415851eb38dec4fd2674149a85ccd7ec1f81b77a"
        },
        "date": 1789769840443,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "43684.46",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7363.64",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhouqi Jiang",
            "username": "luojia65",
            "email": "luojia@rustsbi.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0fa78e6012c80acc8f03caf49f89e231a9c61cee",
          "message": "Set accessed and dirty bits eagerly for RISC-V kernel mappings\n\nKernel mappings do not track accessed or dirty state. Leaving A/D bits\nclear can cause page faults on systems that manage these bits in\nsoftware (Svade), including during early boot.\n\nSet both bits in the Sv39 and Sv48 boot leaf entries and in non-user\nleaf entries created by `PageTableEntry::new_page`. This also avoids\nhardware PTE updates on systems that manage A/D bits in hardware.\nKeep user mappings and non-leaf entries unchanged.\n\nSigned-off-by: Zhouqi Jiang <luojia@rustsbi.com>",
          "timestamp": "2026-09-16T09:21:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/0fa78e6012c80acc8f03caf49f89e231a9c61cee"
        },
        "date": 1789855808733,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "46317.00",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2121.54",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9f9f784e3e04b09468012e8b50b167f3e8c872b3",
          "message": "Use shared DMA arena in BIO",
          "timestamp": "2026-08-25T10:19:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9f9f784e3e04b09468012e8b50b167f3e8c872b3"
        },
        "date": 1789942087871,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "25241.34",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1874.98",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c3fc8a5409ce337b3e0d6666b66462f8a8021cdc",
          "message": "Introduce `PartitionManager` to serialize partition updates",
          "timestamp": "2026-09-08T08:45:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c3fc8a5409ce337b3e0d6666b66462f8a8021cdc"
        },
        "date": 1790029602705,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "52748.02",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7359.46",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bitter127",
            "username": "Bitter127",
            "email": "1571681846@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ac790aa89b2f39e700d263882e1a1301e0a77a25",
          "message": "Initialize RISC-V BSS for flat-binary boot",
          "timestamp": "2026-09-14T05:02:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/ac790aa89b2f39e700d263882e1a1301e0a77a25"
        },
        "date": 1790114272205,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "48949.74",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5990.75",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c27a1ab9b7108ea1a44e5090bc580a92405f787c",
          "message": "Configure managed virtio-fs services for QEMU",
          "timestamp": "2026-09-21T04:24:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/c27a1ab9b7108ea1a44e5090bc580a92405f787c"
        },
        "date": 1790200854816,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "44719.04",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4165.83",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790288011085,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "45399.07",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6583.86",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790374814007,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "40041.22",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2292.16",
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
          "id": "3eb661e12ebd7989db6fce53ca91bbfe97edda23",
          "message": "Bumped Docker image version to 0.18.1-20260926",
          "timestamp": "2026-09-25T15:23:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/3eb661e12ebd7989db6fce53ca91bbfe97edda23"
        },
        "date": 1790461300671,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "46714.19",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4417.54",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "98e71727529efdbe87f35c20bcaceb0fc2e6e8f3",
          "message": "Register cached fio benchmarks",
          "timestamp": "2026-09-02T02:13:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/98e71727529efdbe87f35c20bcaceb0fc2e6e8f3"
        },
        "date": 1790549403093,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "40844.76",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5384.26",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be72e21f4a993e09064d6eff91147c47196e092d",
          "message": "Add Firecracker boot documentation to the book\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-09-08T08:56:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/be72e21f4a993e09064d6eff91147c47196e092d"
        },
        "date": 1790635909721,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "50634.88",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6895.26",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790721967517,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "51721.36",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6766.06",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790809614672,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "45221.61",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7066.87",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "harry",
            "username": "Cosh-y",
            "email": "ambition0316@126.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "577826860f5ebca1210fbe27d261b2327a0ae60f",
          "message": "Add guest physical memory management with EPT",
          "timestamp": "2026-09-09T13:29:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/577826860f5ebca1210fbe27d261b2327a0ae60f"
        },
        "date": 1790895496261,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "44331.20",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1367.04",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1790984128290,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "33146.51",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6877.18",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1791074069815,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "42039.60",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7021.76",
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
          "id": "73ef2b9b5fd7b1a8d9583525d8824ef31985e179",
          "message": "Enhance UART console in AArch64",
          "timestamp": "2026-07-03T17:41:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/73ef2b9b5fd7b1a8d9583525d8824ef31985e179"
        },
        "date": 1791159751399,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "48323.91",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4987.67",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791243554757,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "49822.14",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5818.93",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791329455646,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "49228.63",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3974.92",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff",
          "message": "Move the i8042 component to `kernel/comps`\n\nRegister i8042 as a fallback restart provider and let each architecture define the system power policy injected into OSTD. Keep ACPI ahead of i8042 without making aster-core depend on the high-level component.",
          "timestamp": "2026-09-21T12:48:26Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff"
        },
        "date": 1791416380926,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "49547.20",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7189.37",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d3f5595ca213feb9c7fa3005976de7bd9b518da6",
          "message": "Fix VirtioFS setup in FIO benchmarks\n\nPass separate work directories to the Asterinas and Linux benchmark paths, use an absolute virtiofsd helper path for qemu-with-daemon, and make FIO result parsing robust for slash-containing patterns. Remove obsolete VirtioFS paths from benchmark YAML files.",
          "timestamp": "2026-09-30T05:16:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3f5595ca213feb9c7fa3005976de7bd9b518da6"
        },
        "date": 1791505011808,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "46701.73",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6225.40",
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
          "id": "7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d",
          "message": "Remove the stale `@boterinas codex` command from the Book",
          "timestamp": "2026-10-09T06:01:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d"
        },
        "date": 1791591269944,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "40695.96",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6516.27",
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
          "id": "3a670449aa1ef6933c34c74b47eb4551c7aa5126",
          "message": "Add 0.19.0 release notes",
          "timestamp": "2026-10-10T10:22:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a670449aa1ef6933c34c74b47eb4551c7aa5126"
        },
        "date": 1791675715035,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "48130.26",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6727.80",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mike Solar",
            "username": "Mike-Solar",
            "email": "iam@mikesolar.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "af0b77c8f11db24ba59b8d2cf29a189281b8e270",
          "message": "Fix stale frame metadata access via empty `Segment`s",
          "timestamp": "2026-10-11T06:55:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/af0b77c8f11db24ba59b8d2cf29a189281b8e270"
        },
        "date": 1791762573405,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "46803.63",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7018.52",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791852425822,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "49207.53",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6469.40",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "bmalum",
            "username": "bmalum",
            "email": "support@bmalum.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "745ebe54e63c35c8b8c49971b581e62e5d5ed569",
          "message": "Fix stale `IN` readiness of `TimerfdFile` after `set_time` and `read`\n\n`TimerfdFile::set_time` and `TimerfdFile::try_read` reset the expiration\ncounter but left the `Pollee`'s cached readiness untouched, so `epoll_wait`\nkept reporting a disarmed or drained timerfd as readable. ERTS arms a\ntimerfd before every `epoll_wait` and disarms it afterwards without\nreading it; on Asterinas its poll thread therefore spun at 100%.\n\nInvalidate the pollee wherever the counter is reset, so that the cached\nreadiness stays consistent with `check_io_events`. Add a regression test\nthat covers disarming, reading and rearming.",
          "timestamp": "2026-10-12T07:23:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ebe54e63c35c8b8c49971b581e62e5d5ed569"
        },
        "date": 1791935788295,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "49821.02",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6151.97",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792022077547,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "35414.18",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6728.88",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792107532243,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "28638.49",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6909.58",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792194002734,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "44641.55",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2120.69",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792281022823,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "43511.89",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6680.74",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792367564719,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "44691.13",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3288.56",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3",
          "message": "Fix parent of dynamically created SysTree inodes",
          "timestamp": "2026-10-14T09:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3"
        },
        "date": 1792453954344,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "43885.82",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "866.49",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "chinqrw@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "00a4842d976db6723b8224be2e57ac8105f13ee2",
          "message": "Show why `cargo osdk run --coverage` failed in `basic_coverage`\n\nSigned-off-by: Ruowen Qin <chinqrw@gmail.com>",
          "timestamp": "2026-10-18T05:30:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/00a4842d976db6723b8224be2e57ac8105f13ee2"
        },
        "date": 1792540086524,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "44788.44",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4557.24",
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
          "id": "f40d6222dc140cc278bd110757b52f3f0fb496aa",
          "message": "Add missing `.PHONY`",
          "timestamp": "2026-10-18T15:44:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/f40d6222dc140cc278bd110757b52f3f0fb496aa"
        },
        "date": 1792626456223,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "46808.99",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3368.29",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tonyyang0606",
            "username": "Tonyyang0606",
            "email": "146299767+Tonyyang0606@users.noreply.github.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600",
          "message": "Fix `F_DUPFD` to check `RLIMIT_NOFILE`\n\n`fcntl(F_DUPFD)` and `fcntl(F_DUPFD_CLOEXEC)` accepted any minimum FD.\nThey returned descriptors above the soft `RLIMIT_NOFILE` limit, and a\nlarge minimum such as `INT_MAX` grew the FD table until the heap\nallocation failed and the kernel aborted. Linux rejects a minimum FD\nthat is not below the limit with `EINVAL`, as `do_dup3` already does.",
          "timestamp": "2026-10-17T03:49:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600"
        },
        "date": 1792713225632,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "42266.20",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7339.43",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792799758824,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "42511.14",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7003.73",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792883741265,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "48244.20",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7102.03",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792972322829,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "48265.31",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4952.69",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "qinruowen@tlaic.ac.cn"
          },
          "committer": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "3ed4fc4374065dbee49a6c93f96703d1a3e9aad2",
          "message": "Remove the ineffective /github/home symlinks from the Docker images\n\nGitHub mounts a runner directory over /github/home in container jobs,\nso these links are never visible there, and nothing else uses them.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-10-26T09:27:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ed4fc4374065dbee49a6c93f96703d1a3e9aad2"
        },
        "date": 1793059665354,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "43242.42",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5800.51",
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
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793145730226,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "46259.09",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6934.98",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e0d8b839f95f608c8a7e9c8942e01614a3b3b260",
          "message": "Fix vDSO realtime clock to keep sub-second offset\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-06T14:33:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/e0d8b839f95f608c8a7e9c8942e01614a3b3b260"
        },
        "date": 1793233578824,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "48309.09",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6671.99",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "986c709158bfdc7bce535f0d03a5d93f7465dfe6",
          "message": "Allow `CAP_SYS_ADMIN` to remove another user's semaphore set\n\n`semctl(IPC_RMID)` only accepts a caller whose effective UID matches the\nowner or the creator of the set, so a privileged process cannot remove a\nset that another user created. The call site marks the check as\nincomplete:\n\n    // TODO: Consider capabilities in addition to UIDs.\n\nMove the decision into `IpcNamespace` and also accept a caller holding\n`CAP_SYS_ADMIN` in the IPC namespace's owning user namespace. `EPERM` is\nstill returned when neither the UID nor the capability allows removal.\n\nAdd a regression test that a privileged process removes a set owned by\nanother user, and that a user which is neither the owner nor privileged\nstill gets `EPERM`. The test also requires that a child which keeps root's\nother capabilities but drops `CAP_SYS_ADMIN` is refused, so the capability\ncannot stand in for a UID-zero bypass, and that the unprivileged owner can\nstill remove its own set.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-26T09:26:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/986c709158bfdc7bce535f0d03a5d93f7465dfe6"
        },
        "date": 1793318592283,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "45903.93",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4583.13",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793407996011,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "40973.64",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6796.08",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}