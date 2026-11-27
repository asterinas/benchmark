window.BENCHMARK_DATA = {
  "lastUpdate": 1795822805591,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "ping_inline_100k_conc20_rps": [
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
        "date": 1789422450196,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99700.90",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "118764.84",
            "unit": "request per second",
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
        "date": 1789509094798,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100502.52",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "117785.63",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "15c0fb29bd7ff585237c13ea16ea1aba2d7f8964",
          "message": "Fix partial socket option reads and writes\n\nCo-authored-by: 123123213weqw <1939455790@qq.com>",
          "timestamp": "2026-09-14T07:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/15c0fb29bd7ff585237c13ea16ea1aba2d7f8964"
        },
        "date": 1789595580307,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "97560.98",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "122399.02",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "id": "1ccefe036e97eb5026683c30f1b9872bb47dfe19",
          "message": "Temporarily disable the `gen_quote` regression test",
          "timestamp": "2026-09-17T10:47:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/1ccefe036e97eb5026683c30f1b9872bb47dfe19"
        },
        "date": 1789685623907,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
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
            "value": "119474.31",
            "unit": "request per second",
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
        "date": 1789771709227,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
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
            "value": "122549.02",
            "unit": "request per second",
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
        "date": 1789857350504,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "97087.38",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "120336.95",
            "unit": "request per second",
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
        "date": 1789943880153,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99108.03",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "122100.12",
            "unit": "request per second",
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
        "date": 1790030730754,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98716.68",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "123152.71",
            "unit": "request per second",
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
        "date": 1790116798153,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98911.96",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "121065.38",
            "unit": "request per second",
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
        "date": 1790202219176,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100704.94",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "119047.62",
            "unit": "request per second",
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
        "date": 1790289743020,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "97751.71",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "112612.61",
            "unit": "request per second",
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
        "date": 1790376240506,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "96246.39",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "123001.23",
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
          "id": "3eb661e12ebd7989db6fce53ca91bbfe97edda23",
          "message": "Bumped Docker image version to 0.18.1-20260926",
          "timestamp": "2026-09-25T15:23:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/3eb661e12ebd7989db6fce53ca91bbfe97edda23"
        },
        "date": 1790462616265,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98911.96",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "121212.12",
            "unit": "request per second",
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
        "date": 1790552539607,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99502.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "119331.74",
            "unit": "request per second",
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
        "date": 1790636525560,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99108.03",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "121802.68",
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
          "id": "d3da4ffcf46e56f2fac39017dee98889a6cb7fc9",
          "message": "Test aarch64 on both x86 and ARM runners",
          "timestamp": "2026-10-12T03:17:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3da4ffcf46e56f2fac39017dee98889a6cb7fc9"
        },
        "date": 1791809652380,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "97751.71",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "124069.48",
            "unit": "request per second",
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
        "date": 1791848777649,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "93545.37",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "116959.06",
            "unit": "request per second",
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
        "date": 1791850426521,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "93545.37",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "116959.06",
            "unit": "request per second",
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
        "date": 1791931797897,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99502.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "118063.76",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792019968005,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98039.22",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "123001.23",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792105900714,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100200.40",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "119617.22",
            "unit": "request per second",
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
        "date": 1792192453113,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98522.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "123304.56",
            "unit": "request per second",
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
        "date": 1792277862068,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99700.90",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "123915.74",
            "unit": "request per second",
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
        "date": 1792365243822,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98522.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "121506.68",
            "unit": "request per second",
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
        "date": 1792451642902,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "97276.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "121951.22",
            "unit": "request per second",
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
        "date": 1792538054630,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "97656.24",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "121506.68",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "f40d6222dc140cc278bd110757b52f3f0fb496aa",
          "message": "Add missing `.PHONY`",
          "timestamp": "2026-10-18T15:44:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/f40d6222dc140cc278bd110757b52f3f0fb496aa"
        },
        "date": 1792620502694,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99403.58",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "124069.48",
            "unit": "request per second",
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
        "date": 1792710589481,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "94876.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "118764.84",
            "unit": "request per second",
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
        "date": 1792797316586,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99502.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "116009.28",
            "unit": "request per second",
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
        "date": 1792882027978,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99108.03",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "123304.56",
            "unit": "request per second",
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
        "date": 1792969561694,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "97087.38",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "130208.34",
            "unit": "request per second",
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
        "date": 1793057770944,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "96993.21",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "124843.95",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793143782432,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100000.00",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "125000.00",
            "unit": "request per second",
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
        "date": 1793231380690,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100200.40",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "121802.68",
            "unit": "request per second",
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
        "date": 1793317181451,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "103305.79",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "123152.71",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793406990807,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98716.68",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "123915.74",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793491676131,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "101214.58",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "120918.98",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793577416324,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "96711.80",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "123152.71",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5fa2457fa8ffb20d4ac16accfeea0e6278b596a5",
          "message": "Fix virtio-mmio to skip unrecognized devices\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-10-26T08:21:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/5fa2457fa8ffb20d4ac16accfeea0e6278b596a5"
        },
        "date": 1793664935700,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "97276.27",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "116686.12",
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
          "id": "2ea21cd392606e83760d470b5ed04ea136312f8d",
          "message": "Free disk space before running OSDK tests\n\nMount and remove unused host SDK directories in both OSDK test containers, matching the cleanup used by the other x86 CI jobs. This provides more disk space for OSDK builds and tests on GitHub-hosted runners.",
          "timestamp": "2026-11-02T07:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/2ea21cd392606e83760d470b5ed04ea136312f8d"
        },
        "date": 1793747220547,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "97087.38",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "119760.48",
            "unit": "request per second",
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
          "id": "925f829a3e64bd91bd9b48435b81173dfbc2860c",
          "message": "Fix the development cache workflow path filter\n\nWatch the workflow itself instead of the old push_cachix_pkgs.yml path.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-11-04T06:44:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/925f829a3e64bd91bd9b48435b81173dfbc2860c"
        },
        "date": 1793839527532,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98619.32",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "119760.48",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "6ea3fd644298cd4827f2c9f9c3018138bf9c03fa",
          "message": "Enforce the `noexec`, `nodev`, and `nosymfollow` mount flags\n\nThe three flags were parsed into `PerMountFlags` and reported to user\nspace through `Display` and `statfs`, but nothing consulted them:\n\n- `execve` of a file on a `noexec` mount succeeded, and so did an\n  executable `mmap` of it, a later `mprotect` that added the execute\n  permission, and an `X_OK` probe through the `access` family.\n- Opening a device special file on a `nodev` mount succeeded.\n- Path resolution followed symlinks on a `nosymfollow` mount.\n\nAdd the checks at the enforcement points: the executable open path, the\nnon-`O_PATH` device-node open funnel, the symlink following branch of the\npath resolver, the `X_OK` check of the `access` family, and the\nfile-backed `mmap` path.\n\nAn executable mapping of a file on a `noexec` mount is refused with\n`EPERM`. The other mappings do not get the execute permission, so a later\n`mprotect` cannot grant it either and fails with `EACCES`.\n\nPreserve `mmap` error precedence for `O_PATH` descriptors and update the\nexisting I/O tests to expect `EBADF`. Update the mount flag coverage in\nthe Linux Compatibility documentation.\n\nAdd a regression test that covers the three flags, including the mapping\nand access paths, and that removes its fixtures afterwards. Unblocklist\nthe gVisor tests that cover the `execve`, `mmap`, and `mprotect`\nbehavior.\n\nFixes #4062\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-29T16:11:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6ea3fd644298cd4827f2c9f9c3018138bf9c03fa"
        },
        "date": 1793923496068,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "92421.44",
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
            "name": "harry",
            "username": "Cosh-y",
            "email": "ambition0316@126.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "6da091ce419013c8cb0a982c992de274e3e26132",
          "message": "Make 'gpm_space.rs' architecture-agnostic",
          "timestamp": "2026-11-03T09:56:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/6da091ce419013c8cb0a982c992de274e3e26132"
        },
        "date": 1794354156165,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98039.22",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "122249.38",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dragon",
            "username": "eternalcomet",
            "email": "mydragonos@outlook.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "37a5972d141a6799d80b23ceeaa8d2e6bcae883f",
          "message": "Check visible mountpoints without holding the `children` lock\n\nChecking whether a mountpoint is under the resolver's root walks its\nancestor dentries. After a concurrent rename and rmdir, one of these\ntemporary references may be the last one, and dropping it may sleep while\nreclaiming the inode. Clone the child mounts first and check them after\nreleasing the spin lock.\n\nFixes #4181",
          "timestamp": "2026-11-04T05:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/37a5972d141a6799d80b23ceeaa8d2e6bcae883f"
        },
        "date": 1794441336786,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100100.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "121951.22",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "831edaa368c3a766ad581138750174cfc783525d",
          "message": "Prefer `device ID` over `device id`",
          "timestamp": "2026-11-10T09:31:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/831edaa368c3a766ad581138750174cfc783525d"
        },
        "date": 1794526459243,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "97943.19",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "120481.93",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4",
          "message": "Fix error checks in `set_priority`",
          "timestamp": "2026-11-13T06:07:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4"
        },
        "date": 1794611727238,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "95969.28",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "118203.30",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4",
          "message": "Fix error checks in `set_priority`",
          "timestamp": "2026-11-13T06:07:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4"
        },
        "date": 1794699290336,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98135.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "125156.45",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4",
          "message": "Fix error checks in `set_priority`",
          "timestamp": "2026-11-13T06:07:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4"
        },
        "date": 1794788101650,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "95238.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "120336.95",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "32ba2886a57c12401e53e11b37b6d7c4e9d87cbf",
          "message": "Fix a race between UDP socket close and packet delivery\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-11-16T09:26:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ba2886a57c12401e53e11b37b6d7c4e9d87cbf"
        },
        "date": 1794871743076,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98716.68",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "120918.98",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e87d8425f987820431bd35068ef2d4489bdcc735",
          "message": "Enable the gVisor `ProcFilesystems.OverflowID` test\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-11-16T03:29:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e87d8425f987820431bd35068ef2d4489bdcc735"
        },
        "date": 1794959048199,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "95969.28",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "116009.28",
            "unit": "request per second",
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
          "id": "019cad00b389553013a0bcb304608874bc3831a0",
          "message": "Add device model regression tests",
          "timestamp": "2026-10-15T09:00:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/019cad00b389553013a0bcb304608874bc3831a0"
        },
        "date": 1795045978618,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "93720.71",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "120192.30",
            "unit": "request per second",
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
          "id": "7fecb4ffabc72d0767277a9ffb66168bc512034c",
          "message": "Fix the futex requeue regression test timeout\n\nFUTEX_WAIT_BITSET uses an absolute CLOCK_MONOTONIC deadline unless\nFUTEX_CLOCK_REALTIME is set. Use the matching clock so the five-second\ntimeout lets pthread_join finish even when the worker is never woken.\n\nFixes: 0a6d18d8d (\"Match futex requeue semantics to Linux\")",
          "timestamp": "2026-11-19T12:48:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/7fecb4ffabc72d0767277a9ffb66168bc512034c"
        },
        "date": 1795131298810,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "97751.71",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "125156.45",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuowei shao",
            "username": "joey-shao",
            "email": "zhuoweishao0@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "12374d1337d21f2d0dbe39c5cab340b41c58e553",
          "message": "Add x86-64 ptrace floating-point regset",
          "timestamp": "2026-11-10T04:59:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/12374d1337d21f2d0dbe39c5cab340b41c58e553"
        },
        "date": 1795218255787,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "97751.71",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "120627.27",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuowei shao",
            "username": "joey-shao",
            "email": "zhuoweishao0@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "12374d1337d21f2d0dbe39c5cab340b41c58e553",
          "message": "Add x86-64 ptrace floating-point regset",
          "timestamp": "2026-11-10T04:59:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/12374d1337d21f2d0dbe39c5cab340b41c58e553"
        },
        "date": 1795304150588,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98135.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "125000.00",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuowei shao",
            "username": "joey-shao",
            "email": "zhuoweishao0@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "12374d1337d21f2d0dbe39c5cab340b41c58e553",
          "message": "Add x86-64 ptrace floating-point regset",
          "timestamp": "2026-11-10T04:59:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/12374d1337d21f2d0dbe39c5cab340b41c58e553"
        },
        "date": 1795388995625,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "98231.83",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "119331.74",
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
          "id": "5dd4a20aebef41db0ba441d4ac42ea2b0a31e625",
          "message": "Add `useful-issue-links` code guideline",
          "timestamp": "2026-11-19T16:58:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5dd4a20aebef41db0ba441d4ac42ea2b0a31e625"
        },
        "date": 1795477114555,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "96339.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "122549.02",
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
          "id": "879e2c51cc3e8776b9b385645c6b0bbe45b7dbd5",
          "message": "Bump Docker image version to 0.19.0-20261119",
          "timestamp": "2026-11-17T03:15:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/879e2c51cc3e8776b9b385645c6b0bbe45b7dbd5"
        },
        "date": 1795562207576,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "99108.03",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "121359.23",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lwz23",
            "username": "lwz23",
            "email": "160561672+lwz23@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d34efb494a73ae12f45f4d962a6f35c43a4b3d3d",
          "message": "Return an error for out-of-range offsets in VmIoOnce",
          "timestamp": "2026-11-25T09:22:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/d34efb494a73ae12f45f4d962a6f35c43a4b3d3d"
        },
        "date": 1795648519888,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100100.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "123152.71",
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
          "id": "493b2bc9c60c834f0f6127219707d7f5a89425a5",
          "message": "Add regression tests for page-cache writeback failures",
          "timestamp": "2026-11-23T12:09:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/493b2bc9c60c834f0f6127219707d7f5a89425a5"
        },
        "date": 1795735961602,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "100200.40",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "134228.19",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a97b435bf5b95f5839cc8acaa773e31463f04602",
          "message": "Fix console font behavior",
          "timestamp": "2026-11-27T04:36:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/a97b435bf5b95f5839cc8acaa773e31463f04602"
        },
        "date": 1795822805425,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "97465.88",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "123152.71",
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
        "date": 1789422449954,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "99108.03",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "115473.45",
            "unit": "request per second",
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
        "date": 1789509094558,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "98231.83",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "118623.96",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "15c0fb29bd7ff585237c13ea16ea1aba2d7f8964",
          "message": "Fix partial socket option reads and writes\n\nCo-authored-by: 123123213weqw <1939455790@qq.com>",
          "timestamp": "2026-09-14T07:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/15c0fb29bd7ff585237c13ea16ea1aba2d7f8964"
        },
        "date": 1789595580127,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "99009.90",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "117647.05",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "id": "1ccefe036e97eb5026683c30f1b9872bb47dfe19",
          "message": "Temporarily disable the `gen_quote` regression test",
          "timestamp": "2026-09-17T10:47:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/1ccefe036e97eb5026683c30f1b9872bb47dfe19"
        },
        "date": 1789685623708,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "96432.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "117370.89",
            "unit": "request per second",
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
        "date": 1789771708887,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "99601.60",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "123609.39",
            "unit": "request per second",
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
        "date": 1789857350299,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "97656.24",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "119474.31",
            "unit": "request per second",
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
        "date": 1789943879962,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "100603.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "119904.08",
            "unit": "request per second",
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
        "date": 1790030730351,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "98716.68",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "122699.39",
            "unit": "request per second",
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
        "date": 1790116797923,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "96993.21",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "124378.11",
            "unit": "request per second",
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
        "date": 1790202218872,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101010.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "120627.27",
            "unit": "request per second",
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
        "date": 1790289742803,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "97751.71",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "125000.00",
            "unit": "request per second",
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
        "date": 1790376240253,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "99403.58",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "125786.16",
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
          "id": "3eb661e12ebd7989db6fce53ca91bbfe97edda23",
          "message": "Bumped Docker image version to 0.18.1-20260926",
          "timestamp": "2026-09-25T15:23:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/3eb661e12ebd7989db6fce53ca91bbfe97edda23"
        },
        "date": 1790462616002,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101626.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "121802.68",
            "unit": "request per second",
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
        "date": 1790552539358,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "99009.90",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "118483.41",
            "unit": "request per second",
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
        "date": 1790636525210,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "91407.68",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "121065.38",
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
          "id": "d3da4ffcf46e56f2fac39017dee98889a6cb7fc9",
          "message": "Test aarch64 on both x86 and ARM runners",
          "timestamp": "2026-10-12T03:17:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3da4ffcf46e56f2fac39017dee98889a6cb7fc9"
        },
        "date": 1791809651855,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "100603.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "120772.95",
            "unit": "request per second",
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
        "date": 1791848777287,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "102249.49",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "123762.38",
            "unit": "request per second",
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
        "date": 1791850426255,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "102249.49",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "123762.38",
            "unit": "request per second",
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
        "date": 1791931797558,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "100200.40",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "124069.48",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792019967648,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "99900.09",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "119331.74",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792105900330,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101317.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "120192.30",
            "unit": "request per second",
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
        "date": 1792192452864,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "100502.52",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "123762.38",
            "unit": "request per second",
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
        "date": 1792277861868,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101936.80",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "112612.61",
            "unit": "request per second",
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
        "date": 1792365243487,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "99009.90",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "121212.12",
            "unit": "request per second",
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
        "date": 1792451642578,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101522.84",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "116959.06",
            "unit": "request per second",
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
        "date": 1792538054394,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "100300.91",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "121359.23",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "f40d6222dc140cc278bd110757b52f3f0fb496aa",
          "message": "Add missing `.PHONY`",
          "timestamp": "2026-10-18T15:44:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/f40d6222dc140cc278bd110757b52f3f0fb496aa"
        },
        "date": 1792620502481,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "98425.20",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "119474.31",
            "unit": "request per second",
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
        "date": 1792710589241,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
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
            "value": "123001.23",
            "unit": "request per second",
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
        "date": 1792797316187,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "98911.96",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "124378.11",
            "unit": "request per second",
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
        "date": 1792882027748,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "100100.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "119617.22",
            "unit": "request per second",
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
        "date": 1792969561381,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "98039.22",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "122100.12",
            "unit": "request per second",
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
        "date": 1793057770665,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "99206.34",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "122850.12",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793143782161,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "100502.52",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "124223.60",
            "unit": "request per second",
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
        "date": 1793231380345,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "96993.21",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "121506.68",
            "unit": "request per second",
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
        "date": 1793317181300,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101010.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "121951.22",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793406990568,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "98814.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "121359.23",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793491675799,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "102774.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "121065.38",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793577416120,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101626.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "124223.60",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5fa2457fa8ffb20d4ac16accfeea0e6278b596a5",
          "message": "Fix virtio-mmio to skip unrecognized devices\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-10-26T08:21:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/5fa2457fa8ffb20d4ac16accfeea0e6278b596a5"
        },
        "date": 1793664935449,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "95057.03",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "121212.12",
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
          "id": "2ea21cd392606e83760d470b5ed04ea136312f8d",
          "message": "Free disk space before running OSDK tests\n\nMount and remove unused host SDK directories in both OSDK test containers, matching the cleanup used by the other x86 CI jobs. This provides more disk space for OSDK builds and tests on GitHub-hosted runners.",
          "timestamp": "2026-11-02T07:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/2ea21cd392606e83760d470b5ed04ea136312f8d"
        },
        "date": 1793747220366,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "95147.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "118343.19",
            "unit": "request per second",
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
          "id": "925f829a3e64bd91bd9b48435b81173dfbc2860c",
          "message": "Fix the development cache workflow path filter\n\nWatch the workflow itself instead of the old push_cachix_pkgs.yml path.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-11-04T06:44:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/925f829a3e64bd91bd9b48435b81173dfbc2860c"
        },
        "date": 1793839527314,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "98911.96",
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
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "6ea3fd644298cd4827f2c9f9c3018138bf9c03fa",
          "message": "Enforce the `noexec`, `nodev`, and `nosymfollow` mount flags\n\nThe three flags were parsed into `PerMountFlags` and reported to user\nspace through `Display` and `statfs`, but nothing consulted them:\n\n- `execve` of a file on a `noexec` mount succeeded, and so did an\n  executable `mmap` of it, a later `mprotect` that added the execute\n  permission, and an `X_OK` probe through the `access` family.\n- Opening a device special file on a `nodev` mount succeeded.\n- Path resolution followed symlinks on a `nosymfollow` mount.\n\nAdd the checks at the enforcement points: the executable open path, the\nnon-`O_PATH` device-node open funnel, the symlink following branch of the\npath resolver, the `X_OK` check of the `access` family, and the\nfile-backed `mmap` path.\n\nAn executable mapping of a file on a `noexec` mount is refused with\n`EPERM`. The other mappings do not get the execute permission, so a later\n`mprotect` cannot grant it either and fails with `EACCES`.\n\nPreserve `mmap` error precedence for `O_PATH` descriptors and update the\nexisting I/O tests to expect `EBADF`. Update the mount flag coverage in\nthe Linux Compatibility documentation.\n\nAdd a regression test that covers the three flags, including the mapping\nand access paths, and that removes its fixtures afterwards. Unblocklist\nthe gVisor tests that cover the `execve`, `mmap`, and `mprotect`\nbehavior.\n\nFixes #4062\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-29T16:11:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6ea3fd644298cd4827f2c9f9c3018138bf9c03fa"
        },
        "date": 1793923495740,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "91827.37",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "125786.16",
            "unit": "request per second",
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
          "id": "6da091ce419013c8cb0a982c992de274e3e26132",
          "message": "Make 'gpm_space.rs' architecture-agnostic",
          "timestamp": "2026-11-03T09:56:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/6da091ce419013c8cb0a982c992de274e3e26132"
        },
        "date": 1794354155869,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "98522.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "116414.43",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dragon",
            "username": "eternalcomet",
            "email": "mydragonos@outlook.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "37a5972d141a6799d80b23ceeaa8d2e6bcae883f",
          "message": "Check visible mountpoints without holding the `children` lock\n\nChecking whether a mountpoint is under the resolver's root walks its\nancestor dentries. After a concurrent rename and rmdir, one of these\ntemporary references may be the last one, and dropping it may sleep while\nreclaiming the inode. Clone the child mounts first and check them after\nreleasing the spin lock.\n\nFixes #4181",
          "timestamp": "2026-11-04T05:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/37a5972d141a6799d80b23ceeaa8d2e6bcae883f"
        },
        "date": 1794441336611,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "97560.98",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "124688.28",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "831edaa368c3a766ad581138750174cfc783525d",
          "message": "Prefer `device ID` over `device id`",
          "timestamp": "2026-11-10T09:31:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/831edaa368c3a766ad581138750174cfc783525d"
        },
        "date": 1794526458946,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "97370.98",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "122100.12",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4",
          "message": "Fix error checks in `set_priority`",
          "timestamp": "2026-11-13T06:07:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4"
        },
        "date": 1794611726964,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "98135.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "122399.02",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4",
          "message": "Fix error checks in `set_priority`",
          "timestamp": "2026-11-13T06:07:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4"
        },
        "date": 1794699290093,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "100300.91",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "119760.48",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4",
          "message": "Fix error checks in `set_priority`",
          "timestamp": "2026-11-13T06:07:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4"
        },
        "date": 1794788101401,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "99800.40",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "122699.39",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "32ba2886a57c12401e53e11b37b6d7c4e9d87cbf",
          "message": "Fix a race between UDP socket close and packet delivery\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-11-16T09:26:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ba2886a57c12401e53e11b37b6d7c4e9d87cbf"
        },
        "date": 1794871742819,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "101112.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "121951.22",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e87d8425f987820431bd35068ef2d4489bdcc735",
          "message": "Enable the gVisor `ProcFilesystems.OverflowID` test\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-11-16T03:29:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e87d8425f987820431bd35068ef2d4489bdcc735"
        },
        "date": 1794959047962,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "99800.40",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "118203.30",
            "unit": "request per second",
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
          "id": "019cad00b389553013a0bcb304608874bc3831a0",
          "message": "Add device model regression tests",
          "timestamp": "2026-10-15T09:00:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/019cad00b389553013a0bcb304608874bc3831a0"
        },
        "date": 1795045978354,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "94696.97",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "122100.12",
            "unit": "request per second",
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
          "id": "7fecb4ffabc72d0767277a9ffb66168bc512034c",
          "message": "Fix the futex requeue regression test timeout\n\nFUTEX_WAIT_BITSET uses an absolute CLOCK_MONOTONIC deadline unless\nFUTEX_CLOCK_REALTIME is set. Use the matching clock so the five-second\ntimeout lets pthread_join finish even when the worker is never woken.\n\nFixes: 0a6d18d8d (\"Match futex requeue semantics to Linux\")",
          "timestamp": "2026-11-19T12:48:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/7fecb4ffabc72d0767277a9ffb66168bc512034c"
        },
        "date": 1795131298661,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "97465.88",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "122100.12",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuowei shao",
            "username": "joey-shao",
            "email": "zhuoweishao0@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "12374d1337d21f2d0dbe39c5cab340b41c58e553",
          "message": "Add x86-64 ptrace floating-point regset",
          "timestamp": "2026-11-10T04:59:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/12374d1337d21f2d0dbe39c5cab340b41c58e553"
        },
        "date": 1795218255518,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "100000.00",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "121802.68",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuowei shao",
            "username": "joey-shao",
            "email": "zhuoweishao0@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "12374d1337d21f2d0dbe39c5cab340b41c58e553",
          "message": "Add x86-64 ptrace floating-point regset",
          "timestamp": "2026-11-10T04:59:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/12374d1337d21f2d0dbe39c5cab340b41c58e553"
        },
        "date": 1795304150445,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "93370.68",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "123609.39",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuowei shao",
            "username": "joey-shao",
            "email": "zhuoweishao0@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "12374d1337d21f2d0dbe39c5cab340b41c58e553",
          "message": "Add x86-64 ptrace floating-point regset",
          "timestamp": "2026-11-10T04:59:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/12374d1337d21f2d0dbe39c5cab340b41c58e553"
        },
        "date": 1795388995397,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "99009.90",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "122100.12",
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
          "id": "5dd4a20aebef41db0ba441d4ac42ea2b0a31e625",
          "message": "Add `useful-issue-links` code guideline",
          "timestamp": "2026-11-19T16:58:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5dd4a20aebef41db0ba441d4ac42ea2b0a31e625"
        },
        "date": 1795477114314,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "97370.98",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "126262.62",
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
          "id": "879e2c51cc3e8776b9b385645c6b0bbe45b7dbd5",
          "message": "Bump Docker image version to 0.19.0-20261119",
          "timestamp": "2026-11-17T03:15:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/879e2c51cc3e8776b9b385645c6b0bbe45b7dbd5"
        },
        "date": 1795562207357,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "100000.00",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "121506.68",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lwz23",
            "username": "lwz23",
            "email": "160561672+lwz23@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d34efb494a73ae12f45f4d962a6f35c43a4b3d3d",
          "message": "Return an error for out-of-range offsets in VmIoOnce",
          "timestamp": "2026-11-25T09:22:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/d34efb494a73ae12f45f4d962a6f35c43a4b3d3d"
        },
        "date": 1795648519679,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "100100.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "123304.56",
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
          "id": "493b2bc9c60c834f0f6127219707d7f5a89425a5",
          "message": "Add regression tests for page-cache writeback failures",
          "timestamp": "2026-11-23T12:09:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/493b2bc9c60c834f0f6127219707d7f5a89425a5"
        },
        "date": 1795735961381,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "99403.58",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "121065.38",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a97b435bf5b95f5839cc8acaa773e31463f04602",
          "message": "Fix console font behavior",
          "timestamp": "2026-11-27T04:36:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/a97b435bf5b95f5839cc8acaa773e31463f04602"
        },
        "date": 1795822805243,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "93632.96",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "123762.38",
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
        "date": 1789422450410,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "84317.03",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "115207.38",
            "unit": "request per second",
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
        "date": 1789509095021,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98425.20",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "119189.52",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "15c0fb29bd7ff585237c13ea16ea1aba2d7f8964",
          "message": "Fix partial socket option reads and writes\n\nCo-authored-by: 123123213weqw <1939455790@qq.com>",
          "timestamp": "2026-09-14T07:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/15c0fb29bd7ff585237c13ea16ea1aba2d7f8964"
        },
        "date": 1789595580489,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "99108.03",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118343.19",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "id": "1ccefe036e97eb5026683c30f1b9872bb47dfe19",
          "message": "Temporarily disable the `gen_quote` regression test",
          "timestamp": "2026-09-17T10:47:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/1ccefe036e97eb5026683c30f1b9872bb47dfe19"
        },
        "date": 1789685624113,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "96805.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "123304.56",
            "unit": "request per second",
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
        "date": 1789771709480,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98425.20",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "122249.38",
            "unit": "request per second",
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
        "date": 1789857350692,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "99502.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "122850.12",
            "unit": "request per second",
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
        "date": 1789943880310,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100100.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121359.23",
            "unit": "request per second",
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
        "date": 1790030731076,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98135.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120048.02",
            "unit": "request per second",
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
        "date": 1790116798431,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "104275.29",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "115074.80",
            "unit": "request per second",
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
        "date": 1790202219496,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "104821.80",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120627.27",
            "unit": "request per second",
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
        "date": 1790289743222,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "104384.13",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "123001.23",
            "unit": "request per second",
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
        "date": 1790376240760,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "96711.80",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "123609.39",
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
          "id": "3eb661e12ebd7989db6fce53ca91bbfe97edda23",
          "message": "Bumped Docker image version to 0.18.1-20260926",
          "timestamp": "2026-09-25T15:23:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/3eb661e12ebd7989db6fce53ca91bbfe97edda23"
        },
        "date": 1790462616528,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98425.20",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "123609.39",
            "unit": "request per second",
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
        "date": 1790552539857,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "97847.36",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "124533.01",
            "unit": "request per second",
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
        "date": 1790636525968,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98231.83",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118623.96",
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
          "id": "d3da4ffcf46e56f2fac39017dee98889a6cb7fc9",
          "message": "Test aarch64 on both x86 and ARM runners",
          "timestamp": "2026-10-12T03:17:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3da4ffcf46e56f2fac39017dee98889a6cb7fc9"
        },
        "date": 1791809652743,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "99304.87",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "119617.22",
            "unit": "request per second",
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
        "date": 1791848778023,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98716.68",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "113378.68",
            "unit": "request per second",
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
        "date": 1791850426751,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98716.68",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "113378.68",
            "unit": "request per second",
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
        "date": 1791931798264,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "99601.60",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "123762.38",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792019968366,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "96339.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "122399.02",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792105900947,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98619.32",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120336.95",
            "unit": "request per second",
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
        "date": 1792192453334,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "96899.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "117370.89",
            "unit": "request per second",
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
        "date": 1792277862281,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98039.22",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120481.93",
            "unit": "request per second",
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
        "date": 1792365244097,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "99601.60",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "124533.01",
            "unit": "request per second",
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
        "date": 1792451643194,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "97943.19",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "125470.52",
            "unit": "request per second",
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
        "date": 1792538054856,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "97751.71",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121506.68",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "f40d6222dc140cc278bd110757b52f3f0fb496aa",
          "message": "Add missing `.PHONY`",
          "timestamp": "2026-10-18T15:44:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/f40d6222dc140cc278bd110757b52f3f0fb496aa"
        },
        "date": 1792620502893,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "96899.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118483.41",
            "unit": "request per second",
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
        "date": 1792710589725,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "97943.19",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "125000.00",
            "unit": "request per second",
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
        "date": 1792797316958,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "94339.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118764.84",
            "unit": "request per second",
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
        "date": 1792882028215,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "95419.85",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121065.38",
            "unit": "request per second",
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
        "date": 1792969561994,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98911.96",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "122699.39",
            "unit": "request per second",
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
        "date": 1793057771186,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98522.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121359.23",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793143782831,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "95785.44",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121802.68",
            "unit": "request per second",
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
        "date": 1793231380889,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "99502.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "124378.11",
            "unit": "request per second",
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
        "date": 1793317181607,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "97656.24",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121506.68",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793406991101,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "99009.90",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121951.22",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793491676467,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98135.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121951.22",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793577416545,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100806.45",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "119047.62",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5fa2457fa8ffb20d4ac16accfeea0e6278b596a5",
          "message": "Fix virtio-mmio to skip unrecognized devices\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-10-26T08:21:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/5fa2457fa8ffb20d4ac16accfeea0e6278b596a5"
        },
        "date": 1793664935942,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98328.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121359.23",
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
          "id": "2ea21cd392606e83760d470b5ed04ea136312f8d",
          "message": "Free disk space before running OSDK tests\n\nMount and remove unused host SDK directories in both OSDK test containers, matching the cleanup used by the other x86 CI jobs. This provides more disk space for OSDK builds and tests on GitHub-hosted runners.",
          "timestamp": "2026-11-02T07:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/2ea21cd392606e83760d470b5ed04ea136312f8d"
        },
        "date": 1793747220704,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "108577.63",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120918.98",
            "unit": "request per second",
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
          "id": "925f829a3e64bd91bd9b48435b81173dfbc2860c",
          "message": "Fix the development cache workflow path filter\n\nWatch the workflow itself instead of the old push_cachix_pkgs.yml path.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-11-04T06:44:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/925f829a3e64bd91bd9b48435b81173dfbc2860c"
        },
        "date": 1793839527748,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "93632.96",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "122249.38",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "6ea3fd644298cd4827f2c9f9c3018138bf9c03fa",
          "message": "Enforce the `noexec`, `nodev`, and `nosymfollow` mount flags\n\nThe three flags were parsed into `PerMountFlags` and reported to user\nspace through `Display` and `statfs`, but nothing consulted them:\n\n- `execve` of a file on a `noexec` mount succeeded, and so did an\n  executable `mmap` of it, a later `mprotect` that added the execute\n  permission, and an `X_OK` probe through the `access` family.\n- Opening a device special file on a `nodev` mount succeeded.\n- Path resolution followed symlinks on a `nosymfollow` mount.\n\nAdd the checks at the enforcement points: the executable open path, the\nnon-`O_PATH` device-node open funnel, the symlink following branch of the\npath resolver, the `X_OK` check of the `access` family, and the\nfile-backed `mmap` path.\n\nAn executable mapping of a file on a `noexec` mount is refused with\n`EPERM`. The other mappings do not get the execute permission, so a later\n`mprotect` cannot grant it either and fails with `EACCES`.\n\nPreserve `mmap` error precedence for `O_PATH` descriptors and update the\nexisting I/O tests to expect `EBADF`. Update the mount flag coverage in\nthe Linux Compatibility documentation.\n\nAdd a regression test that covers the three flags, including the mapping\nand access paths, and that removes its fixtures afterwards. Unblocklist\nthe gVisor tests that cover the `execve`, `mmap`, and `mprotect`\nbehavior.\n\nFixes #4062\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-29T16:11:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6ea3fd644298cd4827f2c9f9c3018138bf9c03fa"
        },
        "date": 1793923496368,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "91575.09",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "123456.79",
            "unit": "request per second",
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
          "id": "6da091ce419013c8cb0a982c992de274e3e26132",
          "message": "Make 'gpm_space.rs' architecture-agnostic",
          "timestamp": "2026-11-03T09:56:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/6da091ce419013c8cb0a982c992de274e3e26132"
        },
        "date": 1794354156467,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100000.00",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "122100.12",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dragon",
            "username": "eternalcomet",
            "email": "mydragonos@outlook.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "37a5972d141a6799d80b23ceeaa8d2e6bcae883f",
          "message": "Check visible mountpoints without holding the `children` lock\n\nChecking whether a mountpoint is under the resolver's root walks its\nancestor dentries. After a concurrent rename and rmdir, one of these\ntemporary references may be the last one, and dropping it may sleep while\nreclaiming the inode. Clone the child mounts first and check them after\nreleasing the spin lock.\n\nFixes #4181",
          "timestamp": "2026-11-04T05:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/37a5972d141a6799d80b23ceeaa8d2e6bcae883f"
        },
        "date": 1794441336969,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98716.68",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "119617.22",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "831edaa368c3a766ad581138750174cfc783525d",
          "message": "Prefer `device ID` over `device id`",
          "timestamp": "2026-11-10T09:31:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/831edaa368c3a766ad581138750174cfc783525d"
        },
        "date": 1794526459625,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "94786.73",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "123304.56",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4",
          "message": "Fix error checks in `set_priority`",
          "timestamp": "2026-11-13T06:07:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4"
        },
        "date": 1794611727522,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "96432.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121065.38",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4",
          "message": "Fix error checks in `set_priority`",
          "timestamp": "2026-11-13T06:07:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4"
        },
        "date": 1794699290604,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "92592.59",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "116822.43",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4",
          "message": "Fix error checks in `set_priority`",
          "timestamp": "2026-11-13T06:07:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4"
        },
        "date": 1794788101862,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "97087.38",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "119331.74",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "32ba2886a57c12401e53e11b37b6d7c4e9d87cbf",
          "message": "Fix a race between UDP socket close and packet delivery\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-11-16T09:26:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ba2886a57c12401e53e11b37b6d7c4e9d87cbf"
        },
        "date": 1794871743427,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "101522.84",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120918.98",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e87d8425f987820431bd35068ef2d4489bdcc735",
          "message": "Enable the gVisor `ProcFilesystems.OverflowID` test\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-11-16T03:29:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e87d8425f987820431bd35068ef2d4489bdcc735"
        },
        "date": 1794959048422,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "97370.98",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118906.06",
            "unit": "request per second",
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
          "id": "019cad00b389553013a0bcb304608874bc3831a0",
          "message": "Add device model regression tests",
          "timestamp": "2026-10-15T09:00:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/019cad00b389553013a0bcb304608874bc3831a0"
        },
        "date": 1795045978921,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "99900.09",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "116279.07",
            "unit": "request per second",
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
          "id": "7fecb4ffabc72d0767277a9ffb66168bc512034c",
          "message": "Fix the futex requeue regression test timeout\n\nFUTEX_WAIT_BITSET uses an absolute CLOCK_MONOTONIC deadline unless\nFUTEX_CLOCK_REALTIME is set. Use the matching clock so the five-second\ntimeout lets pthread_join finish even when the worker is never woken.\n\nFixes: 0a6d18d8d (\"Match futex requeue semantics to Linux\")",
          "timestamp": "2026-11-19T12:48:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/7fecb4ffabc72d0767277a9ffb66168bc512034c"
        },
        "date": 1795131298967,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "95147.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121802.68",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuowei shao",
            "username": "joey-shao",
            "email": "zhuoweishao0@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "12374d1337d21f2d0dbe39c5cab340b41c58e553",
          "message": "Add x86-64 ptrace floating-point regset",
          "timestamp": "2026-11-10T04:59:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/12374d1337d21f2d0dbe39c5cab340b41c58e553"
        },
        "date": 1795218256095,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "99502.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121802.68",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuowei shao",
            "username": "joey-shao",
            "email": "zhuoweishao0@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "12374d1337d21f2d0dbe39c5cab340b41c58e553",
          "message": "Add x86-64 ptrace floating-point regset",
          "timestamp": "2026-11-10T04:59:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/12374d1337d21f2d0dbe39c5cab340b41c58e553"
        },
        "date": 1795304150737,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100100.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "123304.56",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuowei shao",
            "username": "joey-shao",
            "email": "zhuoweishao0@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "12374d1337d21f2d0dbe39c5cab340b41c58e553",
          "message": "Add x86-64 ptrace floating-point regset",
          "timestamp": "2026-11-10T04:59:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/12374d1337d21f2d0dbe39c5cab340b41c58e553"
        },
        "date": 1795388995852,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98716.68",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118343.19",
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
          "id": "5dd4a20aebef41db0ba441d4ac42ea2b0a31e625",
          "message": "Add `useful-issue-links` code guideline",
          "timestamp": "2026-11-19T16:58:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5dd4a20aebef41db0ba441d4ac42ea2b0a31e625"
        },
        "date": 1795477114870,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98135.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120048.02",
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
          "id": "879e2c51cc3e8776b9b385645c6b0bbe45b7dbd5",
          "message": "Bump Docker image version to 0.19.0-20261119",
          "timestamp": "2026-11-17T03:15:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/879e2c51cc3e8776b9b385645c6b0bbe45b7dbd5"
        },
        "date": 1795562207801,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "100100.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "122850.12",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lwz23",
            "username": "lwz23",
            "email": "160561672+lwz23@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d34efb494a73ae12f45f4d962a6f35c43a4b3d3d",
          "message": "Return an error for out-of-range offsets in VmIoOnce",
          "timestamp": "2026-11-25T09:22:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/d34efb494a73ae12f45f4d962a6f35c43a4b3d3d"
        },
        "date": 1795648520102,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "98135.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "115074.80",
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
          "id": "493b2bc9c60c834f0f6127219707d7f5a89425a5",
          "message": "Add regression tests for page-cache writeback failures",
          "timestamp": "2026-11-23T12:09:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/493b2bc9c60c834f0f6127219707d7f5a89425a5"
        },
        "date": 1795735961811,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "101010.10",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "123304.56",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a97b435bf5b95f5839cc8acaa773e31463f04602",
          "message": "Fix console font behavior",
          "timestamp": "2026-11-27T04:36:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/a97b435bf5b95f5839cc8acaa773e31463f04602"
        },
        "date": 1795822805589,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "97370.98",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "119617.22",
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
        "date": 1789422449731,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97370.98",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "115606.94",
            "unit": "request per second",
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
        "date": 1789509094316,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96153.85",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118906.06",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "15c0fb29bd7ff585237c13ea16ea1aba2d7f8964",
          "message": "Fix partial socket option reads and writes\n\nCo-authored-by: 123123213weqw <1939455790@qq.com>",
          "timestamp": "2026-09-14T07:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/15c0fb29bd7ff585237c13ea16ea1aba2d7f8964"
        },
        "date": 1789595579947,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "98522.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "119760.48",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "id": "1ccefe036e97eb5026683c30f1b9872bb47dfe19",
          "message": "Temporarily disable the `gen_quote` regression test",
          "timestamp": "2026-09-17T10:47:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/1ccefe036e97eb5026683c30f1b9872bb47dfe19"
        },
        "date": 1789685623492,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "92506.94",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120481.93",
            "unit": "request per second",
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
        "date": 1789771708615,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "94696.97",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120918.98",
            "unit": "request per second",
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
        "date": 1789857350109,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "93632.96",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "122549.02",
            "unit": "request per second",
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
        "date": 1789943879807,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96153.85",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "119617.22",
            "unit": "request per second",
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
        "date": 1790030730011,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "98425.20",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118343.19",
            "unit": "request per second",
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
        "date": 1790116797684,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96246.39",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121065.38",
            "unit": "request per second",
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
        "date": 1790202218632,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "93632.96",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "124378.11",
            "unit": "request per second",
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
        "date": 1790289742599,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "102145.05",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "115740.73",
            "unit": "request per second",
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
        "date": 1790376240004,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "98231.83",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118203.30",
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
          "id": "3eb661e12ebd7989db6fce53ca91bbfe97edda23",
          "message": "Bumped Docker image version to 0.18.1-20260926",
          "timestamp": "2026-09-25T15:23:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/3eb661e12ebd7989db6fce53ca91bbfe97edda23"
        },
        "date": 1790462615793,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97943.19",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "119331.74",
            "unit": "request per second",
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
        "date": 1790552539121,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "99108.03",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118906.06",
            "unit": "request per second",
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
        "date": 1790636524928,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "91743.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "122399.02",
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
          "id": "d3da4ffcf46e56f2fac39017dee98889a6cb7fc9",
          "message": "Test aarch64 on both x86 and ARM runners",
          "timestamp": "2026-10-12T03:17:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3da4ffcf46e56f2fac39017dee98889a6cb7fc9"
        },
        "date": 1791809651373,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97465.88",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118343.19",
            "unit": "request per second",
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
        "date": 1791848776954,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "93896.71",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118764.84",
            "unit": "request per second",
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
        "date": 1791850426002,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "93896.71",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118764.84",
            "unit": "request per second",
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
        "date": 1791931797231,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97656.24",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118483.41",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792019967323,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "94428.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120918.98",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792105900114,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "91827.37",
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
        "date": 1792192452579,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "98619.32",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118483.41",
            "unit": "request per second",
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
        "date": 1792277861660,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "95328.88",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "119047.62",
            "unit": "request per second",
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
        "date": 1792365243201,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "101317.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120336.95",
            "unit": "request per second",
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
        "date": 1792451642261,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "99009.90",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "123456.79",
            "unit": "request per second",
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
        "date": 1792538054146,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "99108.03",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "122399.02",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "f40d6222dc140cc278bd110757b52f3f0fb496aa",
          "message": "Add missing `.PHONY`",
          "timestamp": "2026-10-18T15:44:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/f40d6222dc140cc278bd110757b52f3f0fb496aa"
        },
        "date": 1792620502281,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96899.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121654.50",
            "unit": "request per second",
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
        "date": 1792710589016,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96805.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "114942.53",
            "unit": "request per second",
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
        "date": 1792797315674,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "95147.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "117370.89",
            "unit": "request per second",
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
        "date": 1792882027505,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "95969.28",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "122549.02",
            "unit": "request per second",
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
        "date": 1792969561167,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "91324.20",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120918.98",
            "unit": "request per second",
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
        "date": 1793057770421,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96618.36",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118623.96",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793143781839,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "93984.96",
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
        "date": 1793231380145,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96525.09",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "116009.28",
            "unit": "request per second",
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
        "date": 1793317181146,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "93632.96",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121065.38",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793406990275,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96153.85",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118906.06",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793491675464,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96432.02",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "119617.22",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793577415906,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96993.21",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121065.38",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5fa2457fa8ffb20d4ac16accfeea0e6278b596a5",
          "message": "Fix virtio-mmio to skip unrecognized devices\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-10-26T08:21:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/5fa2457fa8ffb20d4ac16accfeea0e6278b596a5"
        },
        "date": 1793664935180,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "95969.28",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "119331.74",
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
          "id": "2ea21cd392606e83760d470b5ed04ea136312f8d",
          "message": "Free disk space before running OSDK tests\n\nMount and remove unused host SDK directories in both OSDK test containers, matching the cleanup used by the other x86 CI jobs. This provides more disk space for OSDK builds and tests on GitHub-hosted runners.",
          "timestamp": "2026-11-02T07:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/2ea21cd392606e83760d470b5ed04ea136312f8d"
        },
        "date": 1793747220196,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97181.73",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "119474.31",
            "unit": "request per second",
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
          "id": "925f829a3e64bd91bd9b48435b81173dfbc2860c",
          "message": "Fix the development cache workflow path filter\n\nWatch the workflow itself instead of the old push_cachix_pkgs.yml path.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-11-04T06:44:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/925f829a3e64bd91bd9b48435b81173dfbc2860c"
        },
        "date": 1793839527116,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97087.38",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "116414.43",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "6ea3fd644298cd4827f2c9f9c3018138bf9c03fa",
          "message": "Enforce the `noexec`, `nodev`, and `nosymfollow` mount flags\n\nThe three flags were parsed into `PerMountFlags` and reported to user\nspace through `Display` and `statfs`, but nothing consulted them:\n\n- `execve` of a file on a `noexec` mount succeeded, and so did an\n  executable `mmap` of it, a later `mprotect` that added the execute\n  permission, and an `X_OK` probe through the `access` family.\n- Opening a device special file on a `nodev` mount succeeded.\n- Path resolution followed symlinks on a `nosymfollow` mount.\n\nAdd the checks at the enforcement points: the executable open path, the\nnon-`O_PATH` device-node open funnel, the symlink following branch of the\npath resolver, the `X_OK` check of the `access` family, and the\nfile-backed `mmap` path.\n\nAn executable mapping of a file on a `noexec` mount is refused with\n`EPERM`. The other mappings do not get the execute permission, so a later\n`mprotect` cannot grant it either and fails with `EACCES`.\n\nPreserve `mmap` error precedence for `O_PATH` descriptors and update the\nexisting I/O tests to expect `EBADF`. Update the mount flag coverage in\nthe Linux Compatibility documentation.\n\nAdd a regression test that covers the three flags, including the mapping\nand access paths, and that removes its fixtures afterwards. Unblocklist\nthe gVisor tests that cover the `execve`, `mmap`, and `mprotect`\nbehavior.\n\nFixes #4062\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-29T16:11:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6ea3fd644298cd4827f2c9f9c3018138bf9c03fa"
        },
        "date": 1793923495436,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "92081.03",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121359.23",
            "unit": "request per second",
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
          "id": "6da091ce419013c8cb0a982c992de274e3e26132",
          "message": "Make 'gpm_space.rs' architecture-agnostic",
          "timestamp": "2026-11-03T09:56:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/6da091ce419013c8cb0a982c992de274e3e26132"
        },
        "date": 1794354155551,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
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
            "value": "113636.37",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dragon",
            "username": "eternalcomet",
            "email": "mydragonos@outlook.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "37a5972d141a6799d80b23ceeaa8d2e6bcae883f",
          "message": "Check visible mountpoints without holding the `children` lock\n\nChecking whether a mountpoint is under the resolver's root walks its\nancestor dentries. After a concurrent rename and rmdir, one of these\ntemporary references may be the last one, and dropping it may sleep while\nreclaiming the inode. Clone the child mounts first and check them after\nreleasing the spin lock.\n\nFixes #4181",
          "timestamp": "2026-11-04T05:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/37a5972d141a6799d80b23ceeaa8d2e6bcae883f"
        },
        "date": 1794441336407,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "99502.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120918.98",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "831edaa368c3a766ad581138750174cfc783525d",
          "message": "Prefer `device ID` over `device id`",
          "timestamp": "2026-11-10T09:31:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/831edaa368c3a766ad581138750174cfc783525d"
        },
        "date": 1794526458584,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97560.98",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120481.93",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4",
          "message": "Fix error checks in `set_priority`",
          "timestamp": "2026-11-13T06:07:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4"
        },
        "date": 1794611726613,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "95147.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121506.68",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4",
          "message": "Fix error checks in `set_priority`",
          "timestamp": "2026-11-13T06:07:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4"
        },
        "date": 1794699289826,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "98135.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "123456.79",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4",
          "message": "Fix error checks in `set_priority`",
          "timestamp": "2026-11-13T06:07:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4"
        },
        "date": 1794788101182,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96339.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "122249.38",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "32ba2886a57c12401e53e11b37b6d7c4e9d87cbf",
          "message": "Fix a race between UDP socket close and packet delivery\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-11-16T09:26:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ba2886a57c12401e53e11b37b6d7c4e9d87cbf"
        },
        "date": 1794871742476,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96525.09",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "121951.22",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e87d8425f987820431bd35068ef2d4489bdcc735",
          "message": "Enable the gVisor `ProcFilesystems.OverflowID` test\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-11-16T03:29:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e87d8425f987820431bd35068ef2d4489bdcc735"
        },
        "date": 1794959047809,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "91324.20",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "119617.22",
            "unit": "request per second",
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
          "id": "019cad00b389553013a0bcb304608874bc3831a0",
          "message": "Add device model regression tests",
          "timestamp": "2026-10-15T09:00:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/019cad00b389553013a0bcb304608874bc3831a0"
        },
        "date": 1795045978028,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96246.39",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120918.98",
            "unit": "request per second",
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
          "id": "7fecb4ffabc72d0767277a9ffb66168bc512034c",
          "message": "Fix the futex requeue regression test timeout\n\nFUTEX_WAIT_BITSET uses an absolute CLOCK_MONOTONIC deadline unless\nFUTEX_CLOCK_REALTIME is set. Use the matching clock so the five-second\ntimeout lets pthread_join finish even when the worker is never woken.\n\nFixes: 0a6d18d8d (\"Match futex requeue semantics to Linux\")",
          "timestamp": "2026-11-19T12:48:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/7fecb4ffabc72d0767277a9ffb66168bc512034c"
        },
        "date": 1795131298507,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "95877.28",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "115740.73",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuowei shao",
            "username": "joey-shao",
            "email": "zhuoweishao0@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "12374d1337d21f2d0dbe39c5cab340b41c58e553",
          "message": "Add x86-64 ptrace floating-point regset",
          "timestamp": "2026-11-10T04:59:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/12374d1337d21f2d0dbe39c5cab340b41c58e553"
        },
        "date": 1795218255256,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97370.98",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "116144.02",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuowei shao",
            "username": "joey-shao",
            "email": "zhuoweishao0@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "12374d1337d21f2d0dbe39c5cab340b41c58e553",
          "message": "Add x86-64 ptrace floating-point regset",
          "timestamp": "2026-11-10T04:59:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/12374d1337d21f2d0dbe39c5cab340b41c58e553"
        },
        "date": 1795304150279,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97465.88",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120336.95",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zhuowei shao",
            "username": "joey-shao",
            "email": "zhuoweishao0@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "12374d1337d21f2d0dbe39c5cab340b41c58e553",
          "message": "Add x86-64 ptrace floating-point regset",
          "timestamp": "2026-11-10T04:59:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/12374d1337d21f2d0dbe39c5cab340b41c58e553"
        },
        "date": 1795388995148,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "92678.41",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "118203.30",
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
          "id": "5dd4a20aebef41db0ba441d4ac42ea2b0a31e625",
          "message": "Add `useful-issue-links` code guideline",
          "timestamp": "2026-11-19T16:58:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5dd4a20aebef41db0ba441d4ac42ea2b0a31e625"
        },
        "date": 1795477114042,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97751.71",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "122699.39",
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
          "id": "879e2c51cc3e8776b9b385645c6b0bbe45b7dbd5",
          "message": "Bump Docker image version to 0.19.0-20261119",
          "timestamp": "2026-11-17T03:15:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/879e2c51cc3e8776b9b385645c6b0bbe45b7dbd5"
        },
        "date": 1795562207144,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "98039.22",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "119760.48",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lwz23",
            "username": "lwz23",
            "email": "160561672+lwz23@users.noreply.github.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d34efb494a73ae12f45f4d962a6f35c43a4b3d3d",
          "message": "Return an error for out-of-range offsets in VmIoOnce",
          "timestamp": "2026-11-25T09:22:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/d34efb494a73ae12f45f4d962a6f35c43a4b3d3d"
        },
        "date": 1795648519466,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "98619.32",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "124378.11",
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
          "id": "493b2bc9c60c834f0f6127219707d7f5a89425a5",
          "message": "Add regression tests for page-cache writeback failures",
          "timestamp": "2026-11-23T12:09:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/493b2bc9c60c834f0f6127219707d7f5a89425a5"
        },
        "date": 1795735961163,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "97943.19",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "119760.48",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a97b435bf5b95f5839cc8acaa773e31463f04602",
          "message": "Fix console font behavior",
          "timestamp": "2026-11-27T04:36:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/a97b435bf5b95f5839cc8acaa773e31463f04602"
        },
        "date": 1795822805042,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "96339.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "120192.30",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}