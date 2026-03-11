window.BENCHMARK_DATA = {
  "lastUpdate": 1773191620774,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "ext2_seq_write_bw": [
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
        "date": 1767830329727,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "983",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1273",
            "unit": "MB/s",
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
        "date": 1767918310994,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1813",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1390",
            "unit": "MB/s",
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
        "date": 1768001865474,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1323",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1334",
            "unit": "MB/s",
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
        "date": 1768087810383,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1332",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1368",
            "unit": "MB/s",
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
        "date": 1768174343260,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1206",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1296",
            "unit": "MB/s",
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
        "date": 1768261170115,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1129",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1312",
            "unit": "MB/s",
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
        "date": 1768349869331,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1329",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1345",
            "unit": "MB/s",
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
        "date": 1768526324902,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "981",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1476",
            "unit": "MB/s",
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
        "date": 1768609841752,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1814",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1285",
            "unit": "MB/s",
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
        "date": 1768695023443,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1005",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1344",
            "unit": "MB/s",
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
        "date": 1768781520029,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1135",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1222",
            "unit": "MB/s",
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
        "date": 1768872119233,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1304",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1348",
            "unit": "MB/s",
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
        "date": 1768954803957,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1299",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1326",
            "unit": "MB/s",
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
        "date": 1769042665063,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1185",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1467",
            "unit": "MB/s",
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
        "date": 1769127729192,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1840",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1346",
            "unit": "MB/s",
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
        "date": 1769214036319,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1267",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1311",
            "unit": "MB/s",
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
        "date": 1769300172986,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1001",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1299",
            "unit": "MB/s",
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
        "date": 1769386723152,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "985",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1332",
            "unit": "MB/s",
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
        "date": 1769473522207,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1000",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1328",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
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
        "date": 1769561471410,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1794",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1287",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769647733142,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1007",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1404",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769741399771,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1797",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1255",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769821533010,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1174",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1346",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769905336846,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1302",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1321",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769991924244,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "989",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1254",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1770166196904,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1019",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1290",
            "unit": "MB/s",
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
        "date": 1770252929419,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1778",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1317",
            "unit": "MB/s",
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
        "date": 1770339142363,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1790",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1342",
            "unit": "MB/s",
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
        "date": 1770425196845,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1323",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1300",
            "unit": "MB/s",
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
        "date": 1770511431220,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1267",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1201",
            "unit": "MB/s",
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
        "date": 1770597775625,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1786",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1375",
            "unit": "MB/s",
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
        "date": 1770685984015,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "975",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1331",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1770771976902,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1023",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1328",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1770858085916,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1003",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1305",
            "unit": "MB/s",
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
        "date": 1770944601641,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1067",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1211",
            "unit": "MB/s",
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
        "date": 1771030915256,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1316",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1313",
            "unit": "MB/s",
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
        "date": 1771116987967,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "986",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1345",
            "unit": "MB/s",
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
        "date": 1771202693768,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1307",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1288",
            "unit": "MB/s",
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
        "date": 1771291615917,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1807",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1314",
            "unit": "MB/s",
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
        "date": 1771376391521,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1799",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1200",
            "unit": "MB/s",
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
        "date": 1771463149994,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "993",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1330",
            "unit": "MB/s",
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
        "date": 1771550297843,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1018",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1310",
            "unit": "MB/s",
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
        "date": 1771635708823,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1838",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1210",
            "unit": "MB/s",
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
        "date": 1771723655552,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1015",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1295",
            "unit": "MB/s",
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
        "date": 1771807873832,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1833",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1372",
            "unit": "MB/s",
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
        "date": 1771896591740,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1007",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1261",
            "unit": "MB/s",
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
        "date": 1771983389520,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1034",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1333",
            "unit": "MB/s",
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
        "date": 1772072289796,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1806",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1351",
            "unit": "MB/s",
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
        "date": 1772155060083,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1741",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1358",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
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
          "id": "e94a000b1193238b8e8e0ee237451c0fcf13150b",
          "message": "Enable regression tests",
          "timestamp": "2026-02-12T14:40:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/e94a000b1193238b8e8e0ee237451c0fcf13150b"
        },
        "date": 1772240681802,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1031",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1362",
            "unit": "MB/s",
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
          "id": "ad90114bbc9b581673b46589c52248f108480676",
          "message": "Bump docker version references to 0.17.0-20260227",
          "timestamp": "2026-02-28T06:11:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad90114bbc9b581673b46589c52248f108480676"
        },
        "date": 1772329718859,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1303",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1305",
            "unit": "MB/s",
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
          "id": "ad90114bbc9b581673b46589c52248f108480676",
          "message": "Bump docker version references to 0.17.0-20260227",
          "timestamp": "2026-02-28T06:11:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad90114bbc9b581673b46589c52248f108480676"
        },
        "date": 1772414573069,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1819",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1339",
            "unit": "MB/s",
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
          "id": "232b269a4d91bb06dc53c0cb386705b3c17ef102",
          "message": "Fetch Codex output schema from upstream default branch via API\n\nThe previous approach used `git checkout \"$BASE_SHA\"` to restore the\nschema file, which fails when the PR's base SHA predates the addition\nof the schema file. Instead, fetch it from the upstream default branch\nvia the GitHub Contents API. This always works regardless of git\nhistory and ensures the schema matches the workflow version on main.",
          "timestamp": "2026-03-02T09:47:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/232b269a4d91bb06dc53c0cb386705b3c17ef102"
        },
        "date": 1772502522856,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1328",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1397",
            "unit": "MB/s",
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
          "id": "6f684acdc934c8a2342ea7e00421b770f04d3cf1",
          "message": "Accept should panic expected string as a substring",
          "timestamp": "2026-03-03T07:05:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f684acdc934c8a2342ea7e00421b770f04d3cf1"
        },
        "date": 1772595923978,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1089",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1261",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b205cacbf5e5406172e5c7216179c2559c091885",
          "message": "Adjust some comments in OSTD",
          "timestamp": "2026-01-29T11:15:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/b205cacbf5e5406172e5c7216179c2559c091885"
        },
        "date": 1772673311928,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1241",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1213",
            "unit": "MB/s",
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
          "id": "670ce782c2732b10da6d7d2e060f93a4fd6b29b0",
          "message": "Bump docker image version to 0.17.1",
          "timestamp": "2026-03-05T04:20:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/670ce782c2732b10da6d7d2e060f93a4fd6b29b0"
        },
        "date": 1772765528906,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "971",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1338",
            "unit": "MB/s",
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
          "id": "670ce782c2732b10da6d7d2e060f93a4fd6b29b0",
          "message": "Bump docker image version to 0.17.1",
          "timestamp": "2026-03-05T04:20:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/670ce782c2732b10da6d7d2e060f93a4fd6b29b0"
        },
        "date": 1772845439230,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1086",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1251",
            "unit": "MB/s",
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
          "id": "d4c092f9ad08489b06b0cf236e711b1137fa92ef",
          "message": "Rename `Vmar::access_remote` to `Vmar::access_alien`",
          "timestamp": "2026-03-05T09:17:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4c092f9ad08489b06b0cf236e711b1137fa92ef"
        },
        "date": 1772935058861,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1803",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1338",
            "unit": "MB/s",
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
          "id": "d4c092f9ad08489b06b0cf236e711b1137fa92ef",
          "message": "Rename `Vmar::access_remote` to `Vmar::access_alien`",
          "timestamp": "2026-03-05T09:17:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4c092f9ad08489b06b0cf236e711b1137fa92ef"
        },
        "date": 1773017857705,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1020",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1341",
            "unit": "MB/s",
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
          "id": "c2edfe05cb3f7edc161a305f097139c6791a30a9",
          "message": "Modify the related import paths",
          "timestamp": "2026-03-09T04:51:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2edfe05cb3f7edc161a305f097139c6791a30a9"
        },
        "date": 1773105261449,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1018",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1352",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_seq_read_bw": [
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
        "date": 1767658198612,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "956",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1307",
            "unit": "MB/s",
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
        "date": 1767744185497,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1344",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1329",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
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
        "date": 1767830521529,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2153",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1184",
            "unit": "MB/s",
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
        "date": 1767918543131,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1770",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1353",
            "unit": "MB/s",
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
        "date": 1768002056128,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2251",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1274",
            "unit": "MB/s",
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
        "date": 1768088000944,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1491",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1283",
            "unit": "MB/s",
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
        "date": 1768174534753,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1752",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1322",
            "unit": "MB/s",
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
        "date": 1768261362862,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2066",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1249",
            "unit": "MB/s",
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
        "date": 1768350062954,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1897",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1375",
            "unit": "MB/s",
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
        "date": 1768526519540,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2247",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1321",
            "unit": "MB/s",
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
        "date": 1768610038376,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2225",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1266",
            "unit": "MB/s",
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
        "date": 1768695218775,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1435",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1202",
            "unit": "MB/s",
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
        "date": 1768781716264,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "993",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1267",
            "unit": "MB/s",
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
        "date": 1768955000725,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1696",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1209",
            "unit": "MB/s",
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
        "date": 1769042867065,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1851",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1309",
            "unit": "MB/s",
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
        "date": 1769127927066,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2123",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1333",
            "unit": "MB/s",
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
        "date": 1769214235853,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1845",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1311",
            "unit": "MB/s",
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
        "date": 1769300374928,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1750",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1281",
            "unit": "MB/s",
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
        "date": 1769386923203,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2244",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1313",
            "unit": "MB/s",
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
        "date": 1769473723327,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2250",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1354",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
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
        "date": 1769561674123,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2240",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1333",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769647936848,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1804",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1308",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769741720100,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1714",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1298",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769821778552,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1972",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1330",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769905542535,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2205",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1314",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769992129029,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1678",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1216",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1770166404031,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2234",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1311",
            "unit": "MB/s",
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
        "date": 1770253135699,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1890",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1294",
            "unit": "MB/s",
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
        "date": 1770339350576,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1825",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1331",
            "unit": "MB/s",
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
        "date": 1770425406624,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2000",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1181",
            "unit": "MB/s",
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
        "date": 1770511639221,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2239",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1203",
            "unit": "MB/s",
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
        "date": 1770597985124,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2068",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1243",
            "unit": "MB/s",
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
        "date": 1770686194524,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2235",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1276",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1770772188078,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1994",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1226",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1770858297477,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1975",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1342",
            "unit": "MB/s",
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
        "date": 1770944817356,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2235",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1179",
            "unit": "MB/s",
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
        "date": 1771031128395,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "972",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1231",
            "unit": "MB/s",
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
        "date": 1771117201316,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1736",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1267",
            "unit": "MB/s",
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
        "date": 1771202907077,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2092",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1297",
            "unit": "MB/s",
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
        "date": 1771291989932,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2222",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1355",
            "unit": "MB/s",
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
        "date": 1771376609454,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2206",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1317",
            "unit": "MB/s",
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
        "date": 1771463367787,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1396",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1236",
            "unit": "MB/s",
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
        "date": 1771550516019,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1968",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1324",
            "unit": "MB/s",
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
        "date": 1771635925134,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1952",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1343",
            "unit": "MB/s",
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
        "date": 1771723919471,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1973",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1280",
            "unit": "MB/s",
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
        "date": 1771808093305,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1801",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1328",
            "unit": "MB/s",
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
        "date": 1771896817679,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1813",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1258",
            "unit": "MB/s",
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
        "date": 1771983610153,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1884",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1297",
            "unit": "MB/s",
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
        "date": 1772072402248,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2122",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1244",
            "unit": "MB/s",
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
        "date": 1772155285561,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "998",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1343",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
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
          "id": "e94a000b1193238b8e8e0ee237451c0fcf13150b",
          "message": "Enable regression tests",
          "timestamp": "2026-02-12T14:40:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/e94a000b1193238b8e8e0ee237451c0fcf13150b"
        },
        "date": 1772240908955,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1774",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1341",
            "unit": "MB/s",
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
          "id": "ad90114bbc9b581673b46589c52248f108480676",
          "message": "Bump docker version references to 0.17.0-20260227",
          "timestamp": "2026-02-28T06:11:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad90114bbc9b581673b46589c52248f108480676"
        },
        "date": 1772329943799,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2183",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1246",
            "unit": "MB/s",
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
          "id": "ad90114bbc9b581673b46589c52248f108480676",
          "message": "Bump docker version references to 0.17.0-20260227",
          "timestamp": "2026-02-28T06:11:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad90114bbc9b581673b46589c52248f108480676"
        },
        "date": 1772414858884,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1696",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1293",
            "unit": "MB/s",
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
          "id": "232b269a4d91bb06dc53c0cb386705b3c17ef102",
          "message": "Fetch Codex output schema from upstream default branch via API\n\nThe previous approach used `git checkout \"$BASE_SHA\"` to restore the\nschema file, which fails when the PR's base SHA predates the addition\nof the schema file. Instead, fetch it from the upstream default branch\nvia the GitHub Contents API. This always works regardless of git\nhistory and ensures the schema matches the workflow version on main.",
          "timestamp": "2026-03-02T09:47:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/232b269a4d91bb06dc53c0cb386705b3c17ef102"
        },
        "date": 1772502751382,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1835",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1315",
            "unit": "MB/s",
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
          "id": "6f684acdc934c8a2342ea7e00421b770f04d3cf1",
          "message": "Accept should panic expected string as a substring",
          "timestamp": "2026-03-03T07:05:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f684acdc934c8a2342ea7e00421b770f04d3cf1"
        },
        "date": 1772596197394,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2080",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1228",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b205cacbf5e5406172e5c7216179c2559c091885",
          "message": "Adjust some comments in OSTD",
          "timestamp": "2026-01-29T11:15:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/b205cacbf5e5406172e5c7216179c2559c091885"
        },
        "date": 1772673548510,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "879",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1281",
            "unit": "MB/s",
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
          "id": "670ce782c2732b10da6d7d2e060f93a4fd6b29b0",
          "message": "Bump docker image version to 0.17.1",
          "timestamp": "2026-03-05T04:20:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/670ce782c2732b10da6d7d2e060f93a4fd6b29b0"
        },
        "date": 1772765838865,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1835",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1289",
            "unit": "MB/s",
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
          "id": "670ce782c2732b10da6d7d2e060f93a4fd6b29b0",
          "message": "Bump docker image version to 0.17.1",
          "timestamp": "2026-03-05T04:20:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/670ce782c2732b10da6d7d2e060f93a4fd6b29b0"
        },
        "date": 1772845667293,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1944",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1206",
            "unit": "MB/s",
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
          "id": "d4c092f9ad08489b06b0cf236e711b1137fa92ef",
          "message": "Rename `Vmar::access_remote` to `Vmar::access_alien`",
          "timestamp": "2026-03-05T09:17:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4c092f9ad08489b06b0cf236e711b1137fa92ef"
        },
        "date": 1773018090787,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2112",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1199",
            "unit": "MB/s",
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
          "id": "c2edfe05cb3f7edc161a305f097139c6791a30a9",
          "message": "Modify the related import paths",
          "timestamp": "2026-03-09T04:51:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2edfe05cb3f7edc161a305f097139c6791a30a9"
        },
        "date": 1773105494853,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2208",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1341",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_seq_write_bw_no_iommu": [
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
        "date": 1767918194373,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1797",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1455",
            "unit": "MB/s",
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
        "date": 1768001770139,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "983",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1499",
            "unit": "MB/s",
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
        "date": 1768087715335,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1017",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1511",
            "unit": "MB/s",
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
        "date": 1768174247367,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "999",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1543",
            "unit": "MB/s",
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
        "date": 1768261071921,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1308",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1437",
            "unit": "MB/s",
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
        "date": 1768349772330,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1057",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1546",
            "unit": "MB/s",
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
        "date": 1768526228390,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1038",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1392",
            "unit": "MB/s",
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
        "date": 1768609744213,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1803",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1422",
            "unit": "MB/s",
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
        "date": 1768694926312,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "978",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1427",
            "unit": "MB/s",
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
        "date": 1768781421765,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1140",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1375",
            "unit": "MB/s",
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
        "date": 1768872019457,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1089",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1545",
            "unit": "MB/s",
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
        "date": 1768954705676,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1799",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1336",
            "unit": "MB/s",
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
        "date": 1769042565848,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1795",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1450",
            "unit": "MB/s",
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
        "date": 1769127629717,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1300",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1319",
            "unit": "MB/s",
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
        "date": 1769213936142,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "999",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1508",
            "unit": "MB/s",
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
        "date": 1769300071438,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1026",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1484",
            "unit": "MB/s",
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
        "date": 1769386622906,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "945",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1371",
            "unit": "MB/s",
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
        "date": 1769473421549,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1004",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1352",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
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
        "date": 1769561369277,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1003",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1232",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769647631962,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1796",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1451",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769741297405,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1796",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1491",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769821409678,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1290",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1377",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769905233447,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "994",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1416",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769991821394,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "973",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1405",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1770166093496,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1796",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1446",
            "unit": "MB/s",
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
        "date": 1770252825521,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "970",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1488",
            "unit": "MB/s",
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
        "date": 1770339037627,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "969",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1398",
            "unit": "MB/s",
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
        "date": 1770425092709,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1025",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1403",
            "unit": "MB/s",
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
        "date": 1770511327001,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1063",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1599",
            "unit": "MB/s",
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
        "date": 1770597670806,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1298",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1514",
            "unit": "MB/s",
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
        "date": 1770685869871,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "986",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1398",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1770771871377,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "973",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1507",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1770857980695,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1801",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1344",
            "unit": "MB/s",
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
        "date": 1770944494630,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1235",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1435",
            "unit": "MB/s",
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
        "date": 1771030808412,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "999",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1410",
            "unit": "MB/s",
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
        "date": 1771116881299,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1004",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1345",
            "unit": "MB/s",
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
        "date": 1771202587109,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1807",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1466",
            "unit": "MB/s",
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
        "date": 1771291372809,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1798",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1458",
            "unit": "MB/s",
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
        "date": 1771376283283,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1292",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1554",
            "unit": "MB/s",
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
        "date": 1771463041182,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1797",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1484",
            "unit": "MB/s",
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
        "date": 1771550188948,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1291",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1436",
            "unit": "MB/s",
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
        "date": 1771635600282,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "973",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1535",
            "unit": "MB/s",
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
        "date": 1771723522760,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1305",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1485",
            "unit": "MB/s",
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
        "date": 1771807764245,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1095",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1455",
            "unit": "MB/s",
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
        "date": 1771896478269,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1027",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1413",
            "unit": "MB/s",
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
        "date": 1771983279026,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1786",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1305",
            "unit": "MB/s",
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
        "date": 1772072177884,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1799",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1371",
            "unit": "MB/s",
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
        "date": 1772154947236,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "970",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1372",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
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
          "id": "e94a000b1193238b8e8e0ee237451c0fcf13150b",
          "message": "Enable regression tests",
          "timestamp": "2026-02-12T14:40:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/e94a000b1193238b8e8e0ee237451c0fcf13150b"
        },
        "date": 1772240569522,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "978",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1389",
            "unit": "MB/s",
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
          "id": "ad90114bbc9b581673b46589c52248f108480676",
          "message": "Bump docker version references to 0.17.0-20260227",
          "timestamp": "2026-02-28T06:11:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad90114bbc9b581673b46589c52248f108480676"
        },
        "date": 1772329606292,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1054",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1473",
            "unit": "MB/s",
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
          "id": "ad90114bbc9b581673b46589c52248f108480676",
          "message": "Bump docker version references to 0.17.0-20260227",
          "timestamp": "2026-02-28T06:11:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad90114bbc9b581673b46589c52248f108480676"
        },
        "date": 1772414439741,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1016",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1504",
            "unit": "MB/s",
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
          "id": "232b269a4d91bb06dc53c0cb386705b3c17ef102",
          "message": "Fetch Codex output schema from upstream default branch via API\n\nThe previous approach used `git checkout \"$BASE_SHA\"` to restore the\nschema file, which fails when the PR's base SHA predates the addition\nof the schema file. Instead, fetch it from the upstream default branch\nvia the GitHub Contents API. This always works regardless of git\nhistory and ensures the schema matches the workflow version on main.",
          "timestamp": "2026-03-02T09:47:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/232b269a4d91bb06dc53c0cb386705b3c17ef102"
        },
        "date": 1772502409164,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "995",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1381",
            "unit": "MB/s",
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
          "id": "6f684acdc934c8a2342ea7e00421b770f04d3cf1",
          "message": "Accept should panic expected string as a substring",
          "timestamp": "2026-03-03T07:05:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f684acdc934c8a2342ea7e00421b770f04d3cf1"
        },
        "date": 1772595787380,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "992",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1543",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b205cacbf5e5406172e5c7216179c2559c091885",
          "message": "Adjust some comments in OSTD",
          "timestamp": "2026-01-29T11:15:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/b205cacbf5e5406172e5c7216179c2559c091885"
        },
        "date": 1772673193627,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1326",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1391",
            "unit": "MB/s",
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
          "id": "670ce782c2732b10da6d7d2e060f93a4fd6b29b0",
          "message": "Bump docker image version to 0.17.1",
          "timestamp": "2026-03-05T04:20:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/670ce782c2732b10da6d7d2e060f93a4fd6b29b0"
        },
        "date": 1772765413519,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1017",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1525",
            "unit": "MB/s",
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
          "id": "670ce782c2732b10da6d7d2e060f93a4fd6b29b0",
          "message": "Bump docker image version to 0.17.1",
          "timestamp": "2026-03-05T04:20:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/670ce782c2732b10da6d7d2e060f93a4fd6b29b0"
        },
        "date": 1772845324378,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1007",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1590",
            "unit": "MB/s",
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
          "id": "d4c092f9ad08489b06b0cf236e711b1137fa92ef",
          "message": "Rename `Vmar::access_remote` to `Vmar::access_alien`",
          "timestamp": "2026-03-05T09:17:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4c092f9ad08489b06b0cf236e711b1137fa92ef"
        },
        "date": 1772934943707,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1170",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1457",
            "unit": "MB/s",
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
          "id": "d4c092f9ad08489b06b0cf236e711b1137fa92ef",
          "message": "Rename `Vmar::access_remote` to `Vmar::access_alien`",
          "timestamp": "2026-03-05T09:17:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4c092f9ad08489b06b0cf236e711b1137fa92ef"
        },
        "date": 1773017741402,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1263",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1462",
            "unit": "MB/s",
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
          "id": "c2edfe05cb3f7edc161a305f097139c6791a30a9",
          "message": "Modify the related import paths",
          "timestamp": "2026-03-09T04:51:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2edfe05cb3f7edc161a305f097139c6791a30a9"
        },
        "date": 1773105145266,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1798",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1529",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
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
          "id": "417d58dbac51a71cbe02b5615a7198184371ebd6",
          "message": "Remove duplicate re-exports",
          "timestamp": "2026-03-09T12:25:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/417d58dbac51a71cbe02b5615a7198184371ebd6"
        },
        "date": 1773191505593,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1791",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1366",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_seq_read_bw_no_iommu": [
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
        "date": 1767744091548,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1897",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1438",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
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
        "date": 1767830425377,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1909",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1438",
            "unit": "MB/s",
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
        "date": 1767918427257,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2169",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1527",
            "unit": "MB/s",
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
        "date": 1768001960998,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1771",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1409",
            "unit": "MB/s",
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
        "date": 1768087905608,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1043",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1480",
            "unit": "MB/s",
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
        "date": 1768174438885,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1880",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1382",
            "unit": "MB/s",
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
        "date": 1768261266400,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1737",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1454",
            "unit": "MB/s",
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
        "date": 1768349966243,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1952",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1431",
            "unit": "MB/s",
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
        "date": 1768526422794,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1682",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1456",
            "unit": "MB/s",
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
        "date": 1768609940454,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1430",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1405",
            "unit": "MB/s",
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
        "date": 1768695121108,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2231",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1354",
            "unit": "MB/s",
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
        "date": 1768781618271,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1948",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1383",
            "unit": "MB/s",
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
        "date": 1768872219414,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2120",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1438",
            "unit": "MB/s",
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
        "date": 1768954902213,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2077",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1355",
            "unit": "MB/s",
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
        "date": 1769042764779,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2208",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1409",
            "unit": "MB/s",
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
        "date": 1769127827928,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1823",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1415",
            "unit": "MB/s",
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
        "date": 1769214135992,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2132",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1455",
            "unit": "MB/s",
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
        "date": 1769300273669,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1433",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1478",
            "unit": "MB/s",
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
        "date": 1769386823311,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2138",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1422",
            "unit": "MB/s",
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
        "date": 1769473622947,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2035",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1451",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
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
        "date": 1769561572685,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1692",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1317",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769647835505,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1847",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1436",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769741615149,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2214",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1345",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769821655764,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2155",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1414",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769905439847,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2219",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1338",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1769992026708,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1013",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1464",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1770166300145,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1399",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1440",
            "unit": "MB/s",
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
        "date": 1770253032514,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2014",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1472",
            "unit": "MB/s",
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
        "date": 1770339246265,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2166",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1440",
            "unit": "MB/s",
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
        "date": 1770425301286,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1304",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1360",
            "unit": "MB/s",
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
        "date": 1770511535315,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1841",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1423",
            "unit": "MB/s",
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
        "date": 1770597880138,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1973",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1414",
            "unit": "MB/s",
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
        "date": 1770686089362,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1773",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1371",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1770772082474,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1689",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1318",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1770858191681,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2060",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1429",
            "unit": "MB/s",
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
        "date": 1770944710677,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1950",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1365",
            "unit": "MB/s",
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
        "date": 1771031021736,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2115",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1421",
            "unit": "MB/s",
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
        "date": 1771117094741,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2245",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1342",
            "unit": "MB/s",
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
        "date": 1771202800688,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2245",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1367",
            "unit": "MB/s",
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
        "date": 1771291803540,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2139",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1352",
            "unit": "MB/s",
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
        "date": 1771376500768,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1762",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1473",
            "unit": "MB/s",
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
        "date": 1771463258697,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2071",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1366",
            "unit": "MB/s",
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
        "date": 1771550407001,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2098",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1459",
            "unit": "MB/s",
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
        "date": 1771635816814,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2139",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1488",
            "unit": "MB/s",
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
        "date": 1771723787319,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1716",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1426",
            "unit": "MB/s",
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
        "date": 1771807983314,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1998",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1404",
            "unit": "MB/s",
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
        "date": 1771896704451,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2186",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1432",
            "unit": "MB/s",
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
        "date": 1771983499767,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1827",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1384",
            "unit": "MB/s",
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
        "date": 1772155172915,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1813",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1436",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
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
          "id": "e94a000b1193238b8e8e0ee237451c0fcf13150b",
          "message": "Enable regression tests",
          "timestamp": "2026-02-12T14:40:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/e94a000b1193238b8e8e0ee237451c0fcf13150b"
        },
        "date": 1772240795245,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1008",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1441",
            "unit": "MB/s",
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
          "id": "ad90114bbc9b581673b46589c52248f108480676",
          "message": "Bump docker version references to 0.17.0-20260227",
          "timestamp": "2026-02-28T06:11:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad90114bbc9b581673b46589c52248f108480676"
        },
        "date": 1772329831112,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2108",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1426",
            "unit": "MB/s",
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
          "id": "ad90114bbc9b581673b46589c52248f108480676",
          "message": "Bump docker version references to 0.17.0-20260227",
          "timestamp": "2026-02-28T06:11:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad90114bbc9b581673b46589c52248f108480676"
        },
        "date": 1772414710980,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1696",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1401",
            "unit": "MB/s",
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
          "id": "232b269a4d91bb06dc53c0cb386705b3c17ef102",
          "message": "Fetch Codex output schema from upstream default branch via API\n\nThe previous approach used `git checkout \"$BASE_SHA\"` to restore the\nschema file, which fails when the PR's base SHA predates the addition\nof the schema file. Instead, fetch it from the upstream default branch\nvia the GitHub Contents API. This always works regardless of git\nhistory and ensures the schema matches the workflow version on main.",
          "timestamp": "2026-03-02T09:47:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/232b269a4d91bb06dc53c0cb386705b3c17ef102"
        },
        "date": 1772502637057,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "855",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1542",
            "unit": "MB/s",
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
          "id": "6f684acdc934c8a2342ea7e00421b770f04d3cf1",
          "message": "Accept should panic expected string as a substring",
          "timestamp": "2026-03-03T07:05:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f684acdc934c8a2342ea7e00421b770f04d3cf1"
        },
        "date": 1772596060708,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1675",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1378",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b205cacbf5e5406172e5c7216179c2559c091885",
          "message": "Adjust some comments in OSTD",
          "timestamp": "2026-01-29T11:15:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/b205cacbf5e5406172e5c7216179c2559c091885"
        },
        "date": 1772673430462,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2010",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1477",
            "unit": "MB/s",
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
          "id": "670ce782c2732b10da6d7d2e060f93a4fd6b29b0",
          "message": "Bump docker image version to 0.17.1",
          "timestamp": "2026-03-05T04:20:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/670ce782c2732b10da6d7d2e060f93a4fd6b29b0"
        },
        "date": 1772765644573,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2264",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1412",
            "unit": "MB/s",
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
          "id": "670ce782c2732b10da6d7d2e060f93a4fd6b29b0",
          "message": "Bump docker image version to 0.17.1",
          "timestamp": "2026-03-05T04:20:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/670ce782c2732b10da6d7d2e060f93a4fd6b29b0"
        },
        "date": 1772845552788,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1725",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1487",
            "unit": "MB/s",
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
          "id": "d4c092f9ad08489b06b0cf236e711b1137fa92ef",
          "message": "Rename `Vmar::access_remote` to `Vmar::access_alien`",
          "timestamp": "2026-03-05T09:17:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4c092f9ad08489b06b0cf236e711b1137fa92ef"
        },
        "date": 1772935174097,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1177",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1373",
            "unit": "MB/s",
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
          "id": "d4c092f9ad08489b06b0cf236e711b1137fa92ef",
          "message": "Rename `Vmar::access_remote` to `Vmar::access_alien`",
          "timestamp": "2026-03-05T09:17:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4c092f9ad08489b06b0cf236e711b1137fa92ef"
        },
        "date": 1773017974033,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1912",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1418",
            "unit": "MB/s",
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
          "id": "c2edfe05cb3f7edc161a305f097139c6791a30a9",
          "message": "Modify the related import paths",
          "timestamp": "2026-03-09T04:51:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2edfe05cb3f7edc161a305f097139c6791a30a9"
        },
        "date": 1773105378172,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1359",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1376",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}