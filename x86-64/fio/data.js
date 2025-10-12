window.BENCHMARK_DATA = {
  "lastUpdate": 1760231937392,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "ext2_seq_write_bw": [
      {
        "commit": {
          "author": {
            "name": "王英泰",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "345cc9d0556eee0f680eb91d3355de7bd32181e8",
          "message": "Save FPU context on signal stack for LoongArch",
          "timestamp": "2025-07-19T17:40:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/345cc9d0556eee0f680eb91d3355de7bd32181e8"
        },
        "date": 1753601902957,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2028",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2260",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "王英泰",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "345cc9d0556eee0f680eb91d3355de7bd32181e8",
          "message": "Save FPU context on signal stack for LoongArch",
          "timestamp": "2025-07-19T17:40:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/345cc9d0556eee0f680eb91d3355de7bd32181e8"
        },
        "date": 1753682737688,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1898",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2478",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wei Zhang",
            "username": "TinaZhangZW",
            "email": "ruoyuan.zw@antgroup.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "8a801676ab2f827e1d6e4d1ec6803261b5e7859c",
          "message": "Disallow masking SIGKILL and SIGSTOP in user space\n\nAccording to the Linux man pages[1], \"It is not possible to block SIGKILL\nor SIGSTOP. Attempts to do so are silently ignored.\" This patch ensures\ncompliance by explicitly removing SIGKILL and SIGSTOP from the signal\nmask in the `MaskOp::SetMask` operation of the `rt_sigprocmask` syscall.\n\n[1]: https://www.man7.org/linux/man-pages/man2/sigprocmask.2.html",
          "timestamp": "2025-07-17T08:55:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a801676ab2f827e1d6e4d1ec6803261b5e7859c"
        },
        "date": 1753772870176,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1621",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2378",
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
          "id": "659f079c2d41c2cecb3fc06ec62cbece1f67f86e",
          "message": "Revise the doc of OSTD's scheduling module",
          "timestamp": "2025-07-26T10:52:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/659f079c2d41c2cecb3fc06ec62cbece1f67f86e"
        },
        "date": 1753876200897,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2231",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1956",
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
          "id": "659f079c2d41c2cecb3fc06ec62cbece1f67f86e",
          "message": "Revise the doc of OSTD's scheduling module",
          "timestamp": "2025-07-26T10:52:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/659f079c2d41c2cecb3fc06ec62cbece1f67f86e"
        },
        "date": 1753939194217,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1536",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2369",
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
          "id": "48fa40bbf28a7b7f1d3481be280332f36858d868",
          "message": "Support the system call `memfd_create`",
          "timestamp": "2025-07-30T09:00:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/48fa40bbf28a7b7f1d3481be280332f36858d868"
        },
        "date": 1754217473397,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1539",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2564",
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
          "id": "db66946e22b687850b68515a334f7f3b0abbe392",
          "message": "Re-enable several debug runs in CI",
          "timestamp": "2025-07-30T08:28:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/db66946e22b687850b68515a334f7f3b0abbe392"
        },
        "date": 1754662291158,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "884",
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
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "b20d8461fd02594f9d2f170ddeb334e9d0ee426c",
          "message": "Fix discovery and access of PCIe (MMIO) configuration space",
          "timestamp": "2025-04-28T06:36:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/b20d8461fd02594f9d2f170ddeb334e9d0ee426c"
        },
        "date": 1754663870604,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1783",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "cfa4a6fba33d45de25de153c809ea4d02c27d231",
          "message": "Specify SCHEME in Makefile for LoongArch",
          "timestamp": "2025-08-05T17:16:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/cfa4a6fba33d45de25de153c809ea4d02c27d231"
        },
        "date": 1754670521711,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "854",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1020",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f6478d62cc8554b857abc004c242ab416b7b8bc3",
          "message": "Refactor the implementation about sigstack",
          "timestamp": "2025-08-06T07:57:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6478d62cc8554b857abc004c242ab416b7b8bc3"
        },
        "date": 1754716763674,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1779",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1125",
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
          "id": "f2ead0b3edfe621b6c37bdfb61172023b5abc3d7",
          "message": "Remove O_TMPFILE flag because it is not really supported",
          "timestamp": "2025-08-07T14:02:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/f2ead0b3edfe621b6c37bdfb61172023b5abc3d7"
        },
        "date": 1754792790788,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "953",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1157",
            "unit": "MB/s",
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
        "date": 1754877004460,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1151",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1184",
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
          "id": "53bb7ea8ae4ccca020ea1d3f5e047dca4124edba",
          "message": "Assign keyboard code owners",
          "timestamp": "2025-08-11T10:46:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/53bb7ea8ae4ccca020ea1d3f5e047dca4124edba"
        },
        "date": 1754963149743,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "676",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1248",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755049734818,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1652",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1207",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755136319175,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1178",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1161",
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
          "id": "c15106734afc9fd0473888b0e8a6fb9ad6504237",
          "message": "Align `MS_ASYNC` and `MS_SYNC` flags with Linux behavior",
          "timestamp": "2025-08-14T03:53:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/c15106734afc9fd0473888b0e8a6fb9ad6504237"
        },
        "date": 1755227419939,
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
            "value": "1202",
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
          "id": "35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f",
          "message": "Bump the Docker image version",
          "timestamp": "2025-08-14T07:39:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f"
        },
        "date": 1755307419725,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1201",
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
        "date": 1755399242464,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "810",
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
        "date": 1755486949015,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1293",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1117",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755572788850,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1888",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1139",
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
          "id": "924d87398ab75723a0cf9e1466cbb604c513a6d6",
          "message": "Introduce `first_context_switch`",
          "timestamp": "2025-08-13T02:16:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/924d87398ab75723a0cf9e1466cbb604c513a6d6"
        },
        "date": 1755755802415,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1176",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1388",
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
          "id": "9ab035c65491676d4ef46e52ede31ce6998a0b59",
          "message": "Rename the docs directory to book",
          "timestamp": "2025-08-21T10:40:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/9ab035c65491676d4ef46e52ede31ce6998a0b59"
        },
        "date": 1755826742159,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1074",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1388",
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
          "id": "7fad653992e7d9cbbe4c572f7ba339a779ef8025",
          "message": "Use 6.16.0 Linux kernel for benchmark tests & Add Linux TDX benchmark tests",
          "timestamp": "2025-07-07T14:19:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/7fad653992e7d9cbbe4c572f7ba339a779ef8025"
        },
        "date": 1755912375879,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1227",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1135",
            "unit": "MB/s",
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
        "date": 1755996010562,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1609",
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
        "date": 1756083889107,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1163",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1237",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756166631755,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1113",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1260",
            "unit": "MB/s",
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
        "date": 1756255832710,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2072",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1284",
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
          "id": "2098b11b6830b4e923474eb777c7070b08346476",
          "message": "Unify the implementation of /proc/[pid] and /proc/[pid]/task/[tid]",
          "timestamp": "2025-08-18T11:03:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/2098b11b6830b4e923474eb777c7070b08346476"
        },
        "date": 1756339482009,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2019",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1151",
            "unit": "MB/s",
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
        "date": 1756425930848,
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
            "value": "1401",
            "unit": "MB/s",
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
        "date": 1757129378470,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "996",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4d84f18b7288f7251c779aad5749de9ffbe368f",
          "message": "Remove the outdated Github issue template for RFC",
          "timestamp": "2025-09-05T09:37:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4d84f18b7288f7251c779aad5749de9ffbe368f"
        },
        "date": 1757159394596,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1032",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1248",
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
          "id": "d4d84f18b7288f7251c779aad5749de9ffbe368f",
          "message": "Remove the outdated Github issue template for RFC",
          "timestamp": "2025-09-05T09:37:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4d84f18b7288f7251c779aad5749de9ffbe368f"
        },
        "date": 1757282218061,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1730",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1350",
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
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757375127423,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1270",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1223",
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
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757463234860,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "928",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1181",
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
          "id": "8c36964bb940494cd8d1ad14cab0a93b0fd77598",
          "message": "Introduce VmPrinter to write kernel generated data",
          "timestamp": "2025-09-10T11:59:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8c36964bb940494cd8d1ad14cab0a93b0fd77598"
        },
        "date": 1757547770827,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1159",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1364",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757719100986,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1071",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1376",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757806418511,
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
            "value": "1112",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "bf6efbabc749167ea46b915d1ccac3871e8a0215",
          "message": "Remove unused `has_guard_page` boolean",
          "timestamp": "2025-09-11T15:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf6efbabc749167ea46b915d1ccac3871e8a0215"
        },
        "date": 1757896372125,
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
            "value": "1218",
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
          "id": "d73890c6b94b2ff9e1c5216fd7b9191c5c76688e",
          "message": "Keep the list of NON_OSDK_CRATES sorted in Makefile",
          "timestamp": "2025-09-13T07:10:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d73890c6b94b2ff9e1c5216fd7b9191c5c76688e"
        },
        "date": 1758148360224,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1793",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1209",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "70b26f824d8beddcfd559fe3cac26ecc5caa6c88",
          "message": "Support `RUSAGE_CHILDREN` option for `getrusage`",
          "timestamp": "2025-09-18T08:28:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/70b26f824d8beddcfd559fe3cac26ecc5caa6c88"
        },
        "date": 1758233674814,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
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
            "value": "1279",
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
          "id": "4b87dab86e8c9940f7713369edcbe74cc9d9bad9",
          "message": "Unify CPU arch-specific logic that determines if the kernel is interrupted",
          "timestamp": "2025-09-17T14:38:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/4b87dab86e8c9940f7713369edcbe74cc9d9bad9"
        },
        "date": 1758320075956,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1156",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1240",
            "unit": "MB/s",
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
        "date": 1758671002495,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1227",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758759461848,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1850",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1259",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758846502903,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1271",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1226",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "2c456709b6f6c058b1a68ee05f99b2b6119df1a9",
          "message": "Block a setuid ltp test for exfat test",
          "timestamp": "2025-09-26T08:19:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c456709b6f6c058b1a68ee05f99b2b6119df1a9"
        },
        "date": 1758930526411,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "589",
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
        "date": 1759015115485,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1037",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "962",
            "unit": "MB/s",
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
        "date": 1759107078652,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "648",
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
        "date": 1759188037596,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1181",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1383",
            "unit": "MB/s",
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
        "date": 1759280564885,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
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
            "value": "1159",
            "unit": "MB/s",
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
        "date": 1759366345446,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1268",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1209",
            "unit": "MB/s",
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
        "date": 1759450514024,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "906",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1214",
            "unit": "MB/s",
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
        "date": 1759539078722,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "949",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1171",
            "unit": "MB/s",
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
        "date": 1759626151533,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "902",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "974",
            "unit": "MB/s",
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
        "date": 1759706784397,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1996",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1042",
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
          "id": "56d78ab64965194ad03cb6cde07fd5d98b17129d",
          "message": "Fix some minor style issues",
          "timestamp": "2025-09-27T15:55:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/56d78ab64965194ad03cb6cde07fd5d98b17129d"
        },
        "date": 1759799431656,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "968",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1361",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759887264635,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1077",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759966297160,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1220",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1138",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760052840253,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1127",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1052",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760139354933,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1188",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1202",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760231869381,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "839",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1013",
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
            "name": "王英泰",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "345cc9d0556eee0f680eb91d3355de7bd32181e8",
          "message": "Save FPU context on signal stack for LoongArch",
          "timestamp": "2025-07-19T17:40:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/345cc9d0556eee0f680eb91d3355de7bd32181e8"
        },
        "date": 1753682820877,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2051",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2286",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wei Zhang",
            "username": "TinaZhangZW",
            "email": "ruoyuan.zw@antgroup.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "8a801676ab2f827e1d6e4d1ec6803261b5e7859c",
          "message": "Disallow masking SIGKILL and SIGSTOP in user space\n\nAccording to the Linux man pages[1], \"It is not possible to block SIGKILL\nor SIGSTOP. Attempts to do so are silently ignored.\" This patch ensures\ncompliance by explicitly removing SIGKILL and SIGSTOP from the signal\nmask in the `MaskOp::SetMask` operation of the `rt_sigprocmask` syscall.\n\n[1]: https://www.man7.org/linux/man-pages/man2/sigprocmask.2.html",
          "timestamp": "2025-07-17T08:55:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a801676ab2f827e1d6e4d1ec6803261b5e7859c"
        },
        "date": 1753772952544,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1924",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2375",
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
          "id": "659f079c2d41c2cecb3fc06ec62cbece1f67f86e",
          "message": "Revise the doc of OSTD's scheduling module",
          "timestamp": "2025-07-26T10:52:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/659f079c2d41c2cecb3fc06ec62cbece1f67f86e"
        },
        "date": 1753876285125,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1920",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2425",
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
          "id": "659f079c2d41c2cecb3fc06ec62cbece1f67f86e",
          "message": "Revise the doc of OSTD's scheduling module",
          "timestamp": "2025-07-26T10:52:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/659f079c2d41c2cecb3fc06ec62cbece1f67f86e"
        },
        "date": 1753939280179,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2096",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2529",
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
          "id": "48fa40bbf28a7b7f1d3481be280332f36858d868",
          "message": "Support the system call `memfd_create`",
          "timestamp": "2025-07-30T09:00:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/48fa40bbf28a7b7f1d3481be280332f36858d868"
        },
        "date": 1754217559946,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2067",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2223",
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
          "id": "db66946e22b687850b68515a334f7f3b0abbe392",
          "message": "Re-enable several debug runs in CI",
          "timestamp": "2025-07-30T08:28:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/db66946e22b687850b68515a334f7f3b0abbe392"
        },
        "date": 1754662378475,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1983",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1109",
            "unit": "MB/s",
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
          "id": "b20d8461fd02594f9d2f170ddeb334e9d0ee426c",
          "message": "Fix discovery and access of PCIe (MMIO) configuration space",
          "timestamp": "2025-04-28T06:36:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/b20d8461fd02594f9d2f170ddeb334e9d0ee426c"
        },
        "date": 1754663956942,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2109",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1271",
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
          "id": "cfa4a6fba33d45de25de153c809ea4d02c27d231",
          "message": "Specify SCHEME in Makefile for LoongArch",
          "timestamp": "2025-08-05T17:16:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/cfa4a6fba33d45de25de153c809ea4d02c27d231"
        },
        "date": 1754670610981,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2040",
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
            "name": "jiangjianfeng",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f6478d62cc8554b857abc004c242ab416b7b8bc3",
          "message": "Refactor the implementation about sigstack",
          "timestamp": "2025-08-06T07:57:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6478d62cc8554b857abc004c242ab416b7b8bc3"
        },
        "date": 1754716851424,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "977",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1174",
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
          "id": "f2ead0b3edfe621b6c37bdfb61172023b5abc3d7",
          "message": "Remove O_TMPFILE flag because it is not really supported",
          "timestamp": "2025-08-07T14:02:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/f2ead0b3edfe621b6c37bdfb61172023b5abc3d7"
        },
        "date": 1754792879527,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1289",
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
        "date": 1754877094647,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1258",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1130",
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
          "id": "53bb7ea8ae4ccca020ea1d3f5e047dca4124edba",
          "message": "Assign keyboard code owners",
          "timestamp": "2025-08-11T10:46:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/53bb7ea8ae4ccca020ea1d3f5e047dca4124edba"
        },
        "date": 1754963239661,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1581",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1132",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755049824792,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1340",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1222",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755136411023,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1523",
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
        "date": 1755227511243,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1401",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1155",
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
          "id": "35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f",
          "message": "Bump the Docker image version",
          "timestamp": "2025-08-14T07:39:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f"
        },
        "date": 1755307513028,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "963",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1279",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755399337414,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1335",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1310",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755487042398,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1171",
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
        "date": 1755573029038,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1500",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1128",
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
          "id": "924d87398ab75723a0cf9e1466cbb604c513a6d6",
          "message": "Introduce `first_context_switch`",
          "timestamp": "2025-08-13T02:16:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/924d87398ab75723a0cf9e1466cbb604c513a6d6"
        },
        "date": 1755755901561,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2255",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1357",
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
          "id": "9ab035c65491676d4ef46e52ede31ce6998a0b59",
          "message": "Rename the docs directory to book",
          "timestamp": "2025-08-21T10:40:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/9ab035c65491676d4ef46e52ede31ce6998a0b59"
        },
        "date": 1755826841479,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1543",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1346",
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
          "id": "7fad653992e7d9cbbe4c572f7ba339a779ef8025",
          "message": "Use 6.16.0 Linux kernel for benchmark tests & Add Linux TDX benchmark tests",
          "timestamp": "2025-07-07T14:19:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/7fad653992e7d9cbbe4c572f7ba339a779ef8025"
        },
        "date": 1755912476360,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1426",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1359",
            "unit": "MB/s",
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
        "date": 1755996112772,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2195",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1104",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756083992813,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1388",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1358",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756166750588,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1403",
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
        "date": 1756255937625,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1451",
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
        "date": 1756339584691,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1247",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1336",
            "unit": "MB/s",
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
        "date": 1756426036563,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1526",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1102",
            "unit": "MB/s",
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
        "date": 1757127737853,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1517",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1291",
            "unit": "MB/s",
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
        "date": 1757129431497,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1416",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1346",
            "unit": "MB/s",
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
        "date": 1757130927790,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1422",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1292",
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
          "id": "d4d84f18b7288f7251c779aad5749de9ffbe368f",
          "message": "Remove the outdated Github issue template for RFC",
          "timestamp": "2025-09-05T09:37:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4d84f18b7288f7251c779aad5749de9ffbe368f"
        },
        "date": 1757159501175,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1542",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1288",
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
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757375235964,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1513",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1200",
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
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757463342959,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1345",
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
        "date": 1757547880561,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1583",
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
        "date": 1757719155669,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2090",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1268",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757806473983,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1444",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1220",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "bf6efbabc749167ea46b915d1ccac3871e8a0215",
          "message": "Remove unused `has_guard_page` boolean",
          "timestamp": "2025-09-11T15:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf6efbabc749167ea46b915d1ccac3871e8a0215"
        },
        "date": 1757896484056,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1901",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1356",
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
          "id": "46aa437c8738e72a47510e764cb2b6eed8032706",
          "message": "Add `/proc/pid/oom_score_adj`",
          "timestamp": "2025-09-13T06:37:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/46aa437c8738e72a47510e764cb2b6eed8032706"
        },
        "date": 1758061548054,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2089",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1270",
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
          "id": "d73890c6b94b2ff9e1c5216fd7b9191c5c76688e",
          "message": "Keep the list of NON_OSDK_CRATES sorted in Makefile",
          "timestamp": "2025-09-13T07:10:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d73890c6b94b2ff9e1c5216fd7b9191c5c76688e"
        },
        "date": 1758148416834,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1033",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "70b26f824d8beddcfd559fe3cac26ecc5caa6c88",
          "message": "Support `RUSAGE_CHILDREN` option for `getrusage`",
          "timestamp": "2025-09-18T08:28:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/70b26f824d8beddcfd559fe3cac26ecc5caa6c88"
        },
        "date": 1758233731349,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2260",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1147",
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
          "id": "4b87dab86e8c9940f7713369edcbe74cc9d9bad9",
          "message": "Unify CPU arch-specific logic that determines if the kernel is interrupted",
          "timestamp": "2025-09-17T14:38:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/4b87dab86e8c9940f7713369edcbe74cc9d9bad9"
        },
        "date": 1758320132094,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1935",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1299",
            "unit": "MB/s",
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
        "date": 1758671121151,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2189",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1368",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758759577421,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2307",
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
        "date": 1758846621596,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
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
            "value": "1414",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "2c456709b6f6c058b1a68ee05f99b2b6119df1a9",
          "message": "Block a setuid ltp test for exfat test",
          "timestamp": "2025-09-26T08:19:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c456709b6f6c058b1a68ee05f99b2b6119df1a9"
        },
        "date": 1758930645143,
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
            "value": "1417",
            "unit": "MB/s",
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
        "date": 1759015234559,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2031",
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
        "date": 1759107199448,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2160",
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
        "date": 1759188158788,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1406",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1325",
            "unit": "MB/s",
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
        "date": 1759280689002,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1208",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1339",
            "unit": "MB/s",
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
        "date": 1759366469937,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1416",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1323",
            "unit": "MB/s",
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
        "date": 1759450701610,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1992",
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
        "date": 1759539205800,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1794",
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
        "date": 1759626281285,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1938",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1403",
            "unit": "MB/s",
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
        "date": 1759706912232,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1515",
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
        "date": 1759799564105,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1939",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759887396897,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1963",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1347",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759966431044,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1549",
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
        "date": 1760052974411,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1784",
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
        "date": 1760139489530,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2177",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1370",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5b5edcbe86223ba2a7006b05b8be63281a75c39f",
          "message": "Bump Docker image version to 0.15.2-20250722",
          "timestamp": "2025-07-17T11:49:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/5b5edcbe86223ba2a7006b05b8be63281a75c39f"
        },
        "date": 1753345948292,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1631",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2733",
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
          "id": "9219207b97f41ed412f2398b582eb4bb857c4ab8",
          "message": "Add CLONE_PIDFD & pidfd_open support",
          "timestamp": "2025-06-05T07:25:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/9219207b97f41ed412f2398b582eb4bb857c4ab8"
        },
        "date": 1753421590686,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1535",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3277",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "王英泰",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "345cc9d0556eee0f680eb91d3355de7bd32181e8",
          "message": "Save FPU context on signal stack for LoongArch",
          "timestamp": "2025-07-19T17:40:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/345cc9d0556eee0f680eb91d3355de7bd32181e8"
        },
        "date": 1753509722288,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1577",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2643",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "王英泰",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "345cc9d0556eee0f680eb91d3355de7bd32181e8",
          "message": "Save FPU context on signal stack for LoongArch",
          "timestamp": "2025-07-19T17:40:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/345cc9d0556eee0f680eb91d3355de7bd32181e8"
        },
        "date": 1753601862766,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2328",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3080",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "王英泰",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "345cc9d0556eee0f680eb91d3355de7bd32181e8",
          "message": "Save FPU context on signal stack for LoongArch",
          "timestamp": "2025-07-19T17:40:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/345cc9d0556eee0f680eb91d3355de7bd32181e8"
        },
        "date": 1753682695475,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2073",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2558",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wei Zhang",
            "username": "TinaZhangZW",
            "email": "ruoyuan.zw@antgroup.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "8a801676ab2f827e1d6e4d1ec6803261b5e7859c",
          "message": "Disallow masking SIGKILL and SIGSTOP in user space\n\nAccording to the Linux man pages[1], \"It is not possible to block SIGKILL\nor SIGSTOP. Attempts to do so are silently ignored.\" This patch ensures\ncompliance by explicitly removing SIGKILL and SIGSTOP from the signal\nmask in the `MaskOp::SetMask` operation of the `rt_sigprocmask` syscall.\n\n[1]: https://www.man7.org/linux/man-pages/man2/sigprocmask.2.html",
          "timestamp": "2025-07-17T08:55:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a801676ab2f827e1d6e4d1ec6803261b5e7859c"
        },
        "date": 1753772828469,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2207",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3319",
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
          "id": "659f079c2d41c2cecb3fc06ec62cbece1f67f86e",
          "message": "Revise the doc of OSTD's scheduling module",
          "timestamp": "2025-07-26T10:52:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/659f079c2d41c2cecb3fc06ec62cbece1f67f86e"
        },
        "date": 1753876157983,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1908",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2597",
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
          "id": "659f079c2d41c2cecb3fc06ec62cbece1f67f86e",
          "message": "Revise the doc of OSTD's scheduling module",
          "timestamp": "2025-07-26T10:52:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/659f079c2d41c2cecb3fc06ec62cbece1f67f86e"
        },
        "date": 1753939150515,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1557",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2389",
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
          "id": "48fa40bbf28a7b7f1d3481be280332f36858d868",
          "message": "Support the system call `memfd_create`",
          "timestamp": "2025-07-30T09:00:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/48fa40bbf28a7b7f1d3481be280332f36858d868"
        },
        "date": 1754217430044,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1655",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3286",
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
          "id": "db66946e22b687850b68515a334f7f3b0abbe392",
          "message": "Re-enable several debug runs in CI",
          "timestamp": "2025-07-30T08:28:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/db66946e22b687850b68515a334f7f3b0abbe392"
        },
        "date": 1754662247245,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1194",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1286",
            "unit": "MB/s",
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
          "id": "b20d8461fd02594f9d2f170ddeb334e9d0ee426c",
          "message": "Fix discovery and access of PCIe (MMIO) configuration space",
          "timestamp": "2025-04-28T06:36:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/b20d8461fd02594f9d2f170ddeb334e9d0ee426c"
        },
        "date": 1754663827397,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1074",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1387",
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
          "id": "cfa4a6fba33d45de25de153c809ea4d02c27d231",
          "message": "Specify SCHEME in Makefile for LoongArch",
          "timestamp": "2025-08-05T17:16:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/cfa4a6fba33d45de25de153c809ea4d02c27d231"
        },
        "date": 1754670476949,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "802",
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
            "name": "jiangjianfeng",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f6478d62cc8554b857abc004c242ab416b7b8bc3",
          "message": "Refactor the implementation about sigstack",
          "timestamp": "2025-08-06T07:57:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6478d62cc8554b857abc004c242ab416b7b8bc3"
        },
        "date": 1754716719646,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "881",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1396",
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
          "id": "f2ead0b3edfe621b6c37bdfb61172023b5abc3d7",
          "message": "Remove O_TMPFILE flag because it is not really supported",
          "timestamp": "2025-08-07T14:02:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/f2ead0b3edfe621b6c37bdfb61172023b5abc3d7"
        },
        "date": 1754792747099,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1524",
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
        "date": 1754876959388,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1631",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1297",
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
          "id": "53bb7ea8ae4ccca020ea1d3f5e047dca4124edba",
          "message": "Assign keyboard code owners",
          "timestamp": "2025-08-11T10:46:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/53bb7ea8ae4ccca020ea1d3f5e047dca4124edba"
        },
        "date": 1754963104780,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1204",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1291",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755049689788,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1145",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1380",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755136272678,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "960",
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
        "date": 1755227374472,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "864",
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
        "date": 1755307373517,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1751",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1359",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755399194358,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "815",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1547",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755486902128,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1728",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1327",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755572407585,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "943",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1062",
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
          "id": "924d87398ab75723a0cf9e1466cbb604c513a6d6",
          "message": "Introduce `first_context_switch`",
          "timestamp": "2025-08-13T02:16:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/924d87398ab75723a0cf9e1466cbb604c513a6d6"
        },
        "date": 1755755752997,
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
            "value": "1304",
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
          "id": "9ab035c65491676d4ef46e52ede31ce6998a0b59",
          "message": "Rename the docs directory to book",
          "timestamp": "2025-08-21T10:40:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/9ab035c65491676d4ef46e52ede31ce6998a0b59"
        },
        "date": 1755826692848,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1177",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1286",
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
          "id": "7fad653992e7d9cbbe4c572f7ba339a779ef8025",
          "message": "Use 6.16.0 Linux kernel for benchmark tests & Add Linux TDX benchmark tests",
          "timestamp": "2025-07-07T14:19:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/7fad653992e7d9cbbe4c572f7ba339a779ef8025"
        },
        "date": 1755912325791,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1902",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1276",
            "unit": "MB/s",
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
        "date": 1755995958881,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1519",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1350",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756083837241,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "786",
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
        "date": 1756166579191,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
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
            "value": "1553",
            "unit": "MB/s",
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
        "date": 1756255780381,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1024",
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
        "date": 1756339430254,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
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
            "value": "1269",
            "unit": "MB/s",
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
        "date": 1756425878043,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1171",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1253",
            "unit": "MB/s",
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
        "date": 1757130874764,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2033",
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
        "date": 1757463180705,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "755",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1297",
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
          "id": "8c36964bb940494cd8d1ad14cab0a93b0fd77598",
          "message": "Introduce VmPrinter to write kernel generated data",
          "timestamp": "2025-09-10T11:59:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8c36964bb940494cd8d1ad14cab0a93b0fd77598"
        },
        "date": 1757547716468,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "657",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1350",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757719046671,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
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
            "value": "1314",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757806363301,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1689",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1318",
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
          "id": "46aa437c8738e72a47510e764cb2b6eed8032706",
          "message": "Add `/proc/pid/oom_score_adj`",
          "timestamp": "2025-09-13T06:37:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/46aa437c8738e72a47510e764cb2b6eed8032706"
        },
        "date": 1758061435962,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "860",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1486",
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
          "id": "d73890c6b94b2ff9e1c5216fd7b9191c5c76688e",
          "message": "Keep the list of NON_OSDK_CRATES sorted in Makefile",
          "timestamp": "2025-09-13T07:10:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d73890c6b94b2ff9e1c5216fd7b9191c5c76688e"
        },
        "date": 1758148294974,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "916",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1283",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "70b26f824d8beddcfd559fe3cac26ecc5caa6c88",
          "message": "Support `RUSAGE_CHILDREN` option for `getrusage`",
          "timestamp": "2025-09-18T08:28:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/70b26f824d8beddcfd559fe3cac26ecc5caa6c88"
        },
        "date": 1758233618904,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1737",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4b87dab86e8c9940f7713369edcbe74cc9d9bad9",
          "message": "Unify CPU arch-specific logic that determines if the kernel is interrupted",
          "timestamp": "2025-09-17T14:38:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/4b87dab86e8c9940f7713369edcbe74cc9d9bad9"
        },
        "date": 1758320019277,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "967",
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
        "date": 1758670944322,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1052",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758759404049,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1167",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758846423791,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "936",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1496",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "2c456709b6f6c058b1a68ee05f99b2b6119df1a9",
          "message": "Block a setuid ltp test for exfat test",
          "timestamp": "2025-09-26T08:19:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c456709b6f6c058b1a68ee05f99b2b6119df1a9"
        },
        "date": 1758930467037,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "950",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1510",
            "unit": "MB/s",
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
        "date": 1759015056131,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1187",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1292",
            "unit": "MB/s",
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
        "date": 1759107018449,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "964",
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
        "date": 1759187976976,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "927",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1353",
            "unit": "MB/s",
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
        "date": 1759280502879,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1043",
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
        "date": 1759366282949,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1716",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1517",
            "unit": "MB/s",
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
        "date": 1759450451726,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1975",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1340",
            "unit": "MB/s",
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
        "date": 1759539015597,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1167",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1441",
            "unit": "MB/s",
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
        "date": 1759626086979,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1229",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1250",
            "unit": "MB/s",
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
        "date": 1759706721595,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "904",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1530",
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
          "id": "56d78ab64965194ad03cb6cde07fd5d98b17129d",
          "message": "Fix some minor style issues",
          "timestamp": "2025-09-27T15:55:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/56d78ab64965194ad03cb6cde07fd5d98b17129d"
        },
        "date": 1759799365208,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1950",
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
        "date": 1759887197878,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1040",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759966229736,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "892",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1548",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760052773198,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1233",
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
        "date": 1760139287883,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "845",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1456",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760231800443,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1173",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1307",
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
            "name": "jiangjianfeng",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "424fcda239fe14fa98ece0377ef377dad48bfc7d",
          "message": "Use iret instead of sysret if the context is not clean",
          "timestamp": "2025-07-18T07:13:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/424fcda239fe14fa98ece0377ef377dad48bfc7d"
        },
        "date": 1753103622286,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3194",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2360",
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
          "id": "03fc309b9523ff21c7c9e7a94163cd349ebd7afb",
          "message": "Enable more waitid LTP tests",
          "timestamp": "2025-07-21T10:38:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/03fc309b9523ff21c7c9e7a94163cd349ebd7afb"
        },
        "date": 1753193645528,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2067",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2559",
            "unit": "MB/s",
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
          "id": "6ecccad3ee8f7802120db1952123da7efd3c7813",
          "message": "Add sys_ioprio_set and sys_ioprio_get",
          "timestamp": "2025-06-01T08:43:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/6ecccad3ee8f7802120db1952123da7efd3c7813"
        },
        "date": 1753275385554,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1878",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2517",
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
          "id": "5b5edcbe86223ba2a7006b05b8be63281a75c39f",
          "message": "Bump Docker image version to 0.15.2-20250722",
          "timestamp": "2025-07-17T11:49:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/5b5edcbe86223ba2a7006b05b8be63281a75c39f"
        },
        "date": 1753346025838,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3057",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2091",
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
          "id": "9219207b97f41ed412f2398b582eb4bb857c4ab8",
          "message": "Add CLONE_PIDFD & pidfd_open support",
          "timestamp": "2025-06-05T07:25:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/9219207b97f41ed412f2398b582eb4bb857c4ab8"
        },
        "date": 1753421670167,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
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
            "value": "2560",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "王英泰",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "345cc9d0556eee0f680eb91d3355de7bd32181e8",
          "message": "Save FPU context on signal stack for LoongArch",
          "timestamp": "2025-07-19T17:40:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/345cc9d0556eee0f680eb91d3355de7bd32181e8"
        },
        "date": 1753509801036,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3238",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2557",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "王英泰",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "345cc9d0556eee0f680eb91d3355de7bd32181e8",
          "message": "Save FPU context on signal stack for LoongArch",
          "timestamp": "2025-07-19T17:40:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/345cc9d0556eee0f680eb91d3355de7bd32181e8"
        },
        "date": 1753601943299,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3114",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2488",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "王英泰",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "345cc9d0556eee0f680eb91d3355de7bd32181e8",
          "message": "Save FPU context on signal stack for LoongArch",
          "timestamp": "2025-07-19T17:40:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/345cc9d0556eee0f680eb91d3355de7bd32181e8"
        },
        "date": 1753682779202,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1951",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2562",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wei Zhang",
            "username": "TinaZhangZW",
            "email": "ruoyuan.zw@antgroup.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "8a801676ab2f827e1d6e4d1ec6803261b5e7859c",
          "message": "Disallow masking SIGKILL and SIGSTOP in user space\n\nAccording to the Linux man pages[1], \"It is not possible to block SIGKILL\nor SIGSTOP. Attempts to do so are silently ignored.\" This patch ensures\ncompliance by explicitly removing SIGKILL and SIGSTOP from the signal\nmask in the `MaskOp::SetMask` operation of the `rt_sigprocmask` syscall.\n\n[1]: https://www.man7.org/linux/man-pages/man2/sigprocmask.2.html",
          "timestamp": "2025-07-17T08:55:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a801676ab2f827e1d6e4d1ec6803261b5e7859c"
        },
        "date": 1753772911373,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1962",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2580",
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
          "id": "659f079c2d41c2cecb3fc06ec62cbece1f67f86e",
          "message": "Revise the doc of OSTD's scheduling module",
          "timestamp": "2025-07-26T10:52:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/659f079c2d41c2cecb3fc06ec62cbece1f67f86e"
        },
        "date": 1753876242820,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1939",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2699",
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
          "id": "659f079c2d41c2cecb3fc06ec62cbece1f67f86e",
          "message": "Revise the doc of OSTD's scheduling module",
          "timestamp": "2025-07-26T10:52:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/659f079c2d41c2cecb3fc06ec62cbece1f67f86e"
        },
        "date": 1753939237018,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1896",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2506",
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
          "id": "48fa40bbf28a7b7f1d3481be280332f36858d868",
          "message": "Support the system call `memfd_create`",
          "timestamp": "2025-07-30T09:00:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/48fa40bbf28a7b7f1d3481be280332f36858d868"
        },
        "date": 1754217516557,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3014",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2465",
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
          "id": "db66946e22b687850b68515a334f7f3b0abbe392",
          "message": "Re-enable several debug runs in CI",
          "timestamp": "2025-07-30T08:28:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/db66946e22b687850b68515a334f7f3b0abbe392"
        },
        "date": 1754662334848,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1236",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1560",
            "unit": "MB/s",
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
          "id": "b20d8461fd02594f9d2f170ddeb334e9d0ee426c",
          "message": "Fix discovery and access of PCIe (MMIO) configuration space",
          "timestamp": "2025-04-28T06:36:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/b20d8461fd02594f9d2f170ddeb334e9d0ee426c"
        },
        "date": 1754663913825,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1280",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1465",
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
          "id": "cfa4a6fba33d45de25de153c809ea4d02c27d231",
          "message": "Specify SCHEME in Makefile for LoongArch",
          "timestamp": "2025-08-05T17:16:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/cfa4a6fba33d45de25de153c809ea4d02c27d231"
        },
        "date": 1754670566392,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1526",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1295",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f6478d62cc8554b857abc004c242ab416b7b8bc3",
          "message": "Refactor the implementation about sigstack",
          "timestamp": "2025-08-06T07:57:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6478d62cc8554b857abc004c242ab416b7b8bc3"
        },
        "date": 1754716807693,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1647",
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
        "date": 1754792835144,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "913",
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
        "date": 1754877049603,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
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
            "value": "1292",
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
          "id": "53bb7ea8ae4ccca020ea1d3f5e047dca4124edba",
          "message": "Assign keyboard code owners",
          "timestamp": "2025-08-11T10:46:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/53bb7ea8ae4ccca020ea1d3f5e047dca4124edba"
        },
        "date": 1754963194678,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1520",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1271",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755049779576,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1510",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1305",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede",
          "message": "Clean up comments and visibility",
          "timestamp": "2025-08-07T12:05:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e6465942ca21ea1bf3e607c0e0410b8dd9d3ede"
        },
        "date": 1755136365117,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1452",
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
        "date": 1755227465621,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1668",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1370",
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
          "id": "35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f",
          "message": "Bump the Docker image version",
          "timestamp": "2025-08-14T07:39:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ac8a407b6bd4c2d5f74961d38e848b9ac53b3f"
        },
        "date": 1755307466781,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1453",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1392",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755399290311,
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
            "value": "1533",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755486995779,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1486",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1295",
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
          "id": "1452aab69c9d0bf5ada7ea8a93a49fd0badafcca",
          "message": "Optimize the space for `TlbFlushOp`s",
          "timestamp": "2025-08-14T14:08:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1452aab69c9d0bf5ada7ea8a93a49fd0badafcca"
        },
        "date": 1755572932761,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2007",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1505",
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
          "id": "924d87398ab75723a0cf9e1466cbb604c513a6d6",
          "message": "Introduce `first_context_switch`",
          "timestamp": "2025-08-13T02:16:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/924d87398ab75723a0cf9e1466cbb604c513a6d6"
        },
        "date": 1755755851973,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1495",
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
        "date": 1755826791877,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1308",
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
        "date": 1755912426143,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1593",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1387",
            "unit": "MB/s",
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
        "date": 1755996061851,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1451",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1277",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756083941241,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1413",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1388",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756166684229,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1431",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1572",
            "unit": "MB/s",
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
        "date": 1756255885445,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1408",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1547",
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
          "id": "2098b11b6830b4e923474eb777c7070b08346476",
          "message": "Unify the implementation of /proc/[pid] and /proc/[pid]/task/[tid]",
          "timestamp": "2025-08-18T11:03:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/2098b11b6830b4e923474eb777c7070b08346476"
        },
        "date": 1756339533155,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1480",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1453",
            "unit": "MB/s",
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
        "date": 1756425983979,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1437",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1268",
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
          "id": "45b5bd39f1aa61bfc6f00c509913b7ec10a3a68f",
          "message": "Disable I/O APIC entries in initialization",
          "timestamp": "2025-08-08T07:44:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/45b5bd39f1aa61bfc6f00c509913b7ec10a3a68f"
        },
        "date": 1757140240896,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1477",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4d84f18b7288f7251c779aad5749de9ffbe368f",
          "message": "Remove the outdated Github issue template for RFC",
          "timestamp": "2025-09-05T09:37:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4d84f18b7288f7251c779aad5749de9ffbe368f"
        },
        "date": 1757159447945,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2104",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1443",
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
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757375181599,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "984",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1327",
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
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757463288885,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1163",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1363",
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
          "id": "8c36964bb940494cd8d1ad14cab0a93b0fd77598",
          "message": "Introduce VmPrinter to write kernel generated data",
          "timestamp": "2025-09-10T11:59:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8c36964bb940494cd8d1ad14cab0a93b0fd77598"
        },
        "date": 1757547825477,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
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
            "value": "1466",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "bf6efbabc749167ea46b915d1ccac3871e8a0215",
          "message": "Remove unused `has_guard_page` boolean",
          "timestamp": "2025-09-11T15:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf6efbabc749167ea46b915d1ccac3871e8a0215"
        },
        "date": 1757896428471,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1321",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1400",
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
          "id": "46aa437c8738e72a47510e764cb2b6eed8032706",
          "message": "Add `/proc/pid/oom_score_adj`",
          "timestamp": "2025-09-13T06:37:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/46aa437c8738e72a47510e764cb2b6eed8032706"
        },
        "date": 1758061492069,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "933",
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
        "date": 1758671063361,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2325",
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
        "date": 1758759519490,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2125",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1617",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758846562515,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1997",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1522",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "2c456709b6f6c058b1a68ee05f99b2b6119df1a9",
          "message": "Block a setuid ltp test for exfat test",
          "timestamp": "2025-09-26T08:19:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c456709b6f6c058b1a68ee05f99b2b6119df1a9"
        },
        "date": 1758930586017,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2103",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1479",
            "unit": "MB/s",
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
        "date": 1759015175182,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2349",
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
        "date": 1759107139139,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2162",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1396",
            "unit": "MB/s",
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
        "date": 1759188098088,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1351",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1535",
            "unit": "MB/s",
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
        "date": 1759280627178,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2252",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1370",
            "unit": "MB/s",
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
        "date": 1759366407653,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1374",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1531",
            "unit": "MB/s",
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
        "date": 1759450639286,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2307",
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
        "date": 1759539141990,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2298",
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
        "date": 1759626216508,
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
            "value": "1437",
            "unit": "MB/s",
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
        "date": 1759706848373,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2288",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
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
          "id": "56d78ab64965194ad03cb6cde07fd5d98b17129d",
          "message": "Fix some minor style issues",
          "timestamp": "2025-09-27T15:55:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/56d78ab64965194ad03cb6cde07fd5d98b17129d"
        },
        "date": 1759799497982,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2207",
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
        "date": 1759887330894,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2175",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1368",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759966363999,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1561",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1372",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760052907305,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2339",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1391",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760139422158,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2341",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1381",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}