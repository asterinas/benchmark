window.BENCHMARK_DATA = {
  "lastUpdate": 1737331405633,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "ext2_seq_write_bw": [
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
        "date": 1731183551615,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2402",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2448",
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
          "id": "11382524d1d23cc6d41adf977a72138baa39e38d",
          "message": "Use new `SpinLock` APIs in `wait.rs`",
          "timestamp": "2024-11-07T14:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/11382524d1d23cc6d41adf977a72138baa39e38d"
        },
        "date": 1731269941575,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2312",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2488",
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
          "id": "11382524d1d23cc6d41adf977a72138baa39e38d",
          "message": "Use new `SpinLock` APIs in `wait.rs`",
          "timestamp": "2024-11-07T14:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/11382524d1d23cc6d41adf977a72138baa39e38d"
        },
        "date": 1731356575560,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2399",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2441",
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
          "id": "38682e3ed923c0ec7880f414267789a2ded06dbe",
          "message": "Assign callback to shared irq if there's no single irq line",
          "timestamp": "2024-11-12T03:39:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/38682e3ed923c0ec7880f414267789a2ded06dbe"
        },
        "date": 1731443092635,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2730",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2365",
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
          "id": "e6c613f53841983765a7b3c56ea9958775c76199",
          "message": "Rename `(Posix)ThreadExt` to `As(Posix)Thread`",
          "timestamp": "2024-11-12T01:53:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6c613f53841983765a7b3c56ea9958775c76199"
        },
        "date": 1731529183038,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2198",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1804",
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
          "id": "e6c613f53841983765a7b3c56ea9958775c76199",
          "message": "Rename `(Posix)ThreadExt` to `As(Posix)Thread`",
          "timestamp": "2024-11-12T01:53:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6c613f53841983765a7b3c56ea9958775c76199"
        },
        "date": 1731615562717,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1759",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2393",
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
          "id": "39d303c72f622a735927fd1d4fece11fe4b46001",
          "message": "Rename `get_current_userspace` to `current_userspace`",
          "timestamp": "2024-11-14T11:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/39d303c72f622a735927fd1d4fece11fe4b46001"
        },
        "date": 1731701952376,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2358",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2301",
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
          "id": "197d53c0ab1edbf8545d2ab827a930d66a1ab528",
          "message": "Accept sockets in the ESTABLISHED state",
          "timestamp": "2024-11-15T03:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/197d53c0ab1edbf8545d2ab827a930d66a1ab528"
        },
        "date": 1731788490417,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2030",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2065",
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
          "id": "885950c2a4a65486524ac53e40f6b6515d7ebd3a",
          "message": "Add VirtioBlockFeature to cache virtio-blk's features",
          "timestamp": "2024-11-14T13:10:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/885950c2a4a65486524ac53e40f6b6515d7ebd3a"
        },
        "date": 1731874733230,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2412",
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
        "date": 1731961135735,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2327",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2443",
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
          "id": "b3f8d21c3db7310f7071b50dcbf8663bc4e507e1",
          "message": "Refine comments about the lock usage",
          "timestamp": "2024-11-18T13:07:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/b3f8d21c3db7310f7071b50dcbf8663bc4e507e1"
        },
        "date": 1732047709739,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2440",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2509",
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
          "id": "81898362b620203b0cbfb60b6dbb3415d4b4058c",
          "message": "Add virtio legacy interface",
          "timestamp": "2024-11-21T09:23:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/81898362b620203b0cbfb60b6dbb3415d4b4058c"
        },
        "date": 1732221342710,
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
            "value": "2772",
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
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732307600341,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2455",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2617",
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
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732393974479,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1568",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2086",
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
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732480690758,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2105",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2577",
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
          "id": "9e5075dab7c42182b164a433daa8ea6c7ff38bbc",
          "message": "Clear `DF` flag during trap handling to conform to x86-64 calling convention",
          "timestamp": "2024-11-24T14:46:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e5075dab7c42182b164a433daa8ea6c7ff38bbc"
        },
        "date": 1732566757090,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2651",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1927",
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
          "id": "9da6af03943c15456cdfd781021820a7da78ea40",
          "message": "Add TDX debugging documentation",
          "timestamp": "2024-11-25T07:59:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/9da6af03943c15456cdfd781021820a7da78ea40"
        },
        "date": 1732653159540,
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
            "value": "2399",
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
          "id": "5313689d6fa91596f4bc52bf6fb866bf6a7a706f",
          "message": "Fix deadlock in FLUSH_OPS by disabling IRQ",
          "timestamp": "2024-11-26T13:04:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/5313689d6fa91596f4bc52bf6fb866bf6a7a706f"
        },
        "date": 1732739550279,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1639",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2529",
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
          "id": "f762eb8913c992d932147f3e62ab47519fef8a91",
          "message": "Remove the `lazy_static` dependency",
          "timestamp": "2024-11-28T05:53:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/f762eb8913c992d932147f3e62ab47519fef8a91"
        },
        "date": 1732825969021,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2514",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2598",
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
          "id": "5e35704e3896897550ac4ee383923d1e054f3dd1",
          "message": "Support eagerly FPU state save/restore\n\nCo-authored-by: Shaowei Song <songshaowei.ssw@antgroup.com>",
          "timestamp": "2024-11-28T11:36:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/5e35704e3896897550ac4ee383923d1e054f3dd1"
        },
        "date": 1732912377218,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2256",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2268",
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
          "id": "6d3bb5a9d0b1d4d53e298402bc8fec57dc899f15",
          "message": "Fix compile error caused by updated `Step::steps_between` in Rust",
          "timestamp": "2024-11-30T10:58:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d3bb5a9d0b1d4d53e298402bc8fec57dc899f15"
        },
        "date": 1733085315940,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2367",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2535",
            "unit": "MB/s",
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
        "date": 1733171976021,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2470",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2951",
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
          "id": "a260411a2a8bb1bcc12b9920b33ad19c8a82899e",
          "message": "Implement `WriteIrqDisabled`",
          "timestamp": "2024-12-03T02:51:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/a260411a2a8bb1bcc12b9920b33ad19c8a82899e"
        },
        "date": 1733257980772,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2423",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2883",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "徐启航",
            "username": "js2xxx",
            "email": "akucxy@163.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "878f3f37600ebacecd0e31c16ae04e8ba83eeec4",
          "message": "Scheduling class support",
          "timestamp": "2024-08-17T08:06:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/878f3f37600ebacecd0e31c16ae04e8ba83eeec4"
        },
        "date": 1733279152109,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2185",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2940",
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
          "id": "0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd",
          "message": "Inject the logger for Asterinas",
          "timestamp": "2024-11-15T08:58:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd"
        },
        "date": 1733344386213,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2533",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2845",
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
          "id": "36fc1d37573f6809980aee652f4209c64979b209",
          "message": "Move FS things to `PosixThread`",
          "timestamp": "2024-12-01T03:41:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/36fc1d37573f6809980aee652f4209c64979b209"
        },
        "date": 1733430789293,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "3398",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3114",
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
          "id": "36fc1d37573f6809980aee652f4209c64979b209",
          "message": "Move FS things to `PosixThread`",
          "timestamp": "2024-12-01T03:41:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/36fc1d37573f6809980aee652f4209c64979b209"
        },
        "date": 1733517171769,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1856",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2822",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733603885075,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2496",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3197",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733690004591,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2639",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3143",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733776365101,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2647",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2662",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733863022083,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2610",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3143",
            "unit": "MB/s",
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
        "date": 1733958210996,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2641",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3164",
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
          "id": "8bbbde4ccb9d31ed48ae99f209538c16d14016bb",
          "message": "Use `Ordering::Relaxed` for `is_nonblocking`",
          "timestamp": "2024-12-08T08:26:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bbbde4ccb9d31ed48ae99f209538c16d14016bb"
        },
        "date": 1734044519494,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2295",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2822",
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
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734405335124,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1659",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2027",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lab-pc-wtj",
            "email": "wangtaojie2004@hotmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e",
          "message": "Improve /proc/{PID}/stat",
          "timestamp": "2024-12-17T12:10:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e"
        },
        "date": 1734490462093,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2545",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2964",
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
          "id": "acc10376e60291386dd1026f238140d145230808",
          "message": "Update benchmark README",
          "timestamp": "2024-12-14T05:14:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/acc10376e60291386dd1026f238140d145230808"
        },
        "date": 1734563229623,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2525",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2589",
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
          "id": "9a540d0fb6d073f1feb20c30dc78230c46c595a3",
          "message": "Notify virtqueue in a batch manner",
          "timestamp": "2024-12-17T02:24:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/9a540d0fb6d073f1feb20c30dc78230c46c595a3"
        },
        "date": 1734649741751,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1581",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2025",
            "unit": "MB/s",
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
        "date": 1734736940178,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1800",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2642",
            "unit": "MB/s",
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
        "date": 1734823231195,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2498",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2813",
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
          "id": "1e3403e756ced989ddd44c9f0c81cf71557e962a",
          "message": "Support ELF files with zero `p_filesz`.",
          "timestamp": "2024-12-19T03:33:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/1e3403e756ced989ddd44c9f0c81cf71557e962a"
        },
        "date": 1734909748296,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2457",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3035",
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
          "id": "1e3403e756ced989ddd44c9f0c81cf71557e962a",
          "message": "Support ELF files with zero `p_filesz`.",
          "timestamp": "2024-12-19T03:33:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/1e3403e756ced989ddd44c9f0c81cf71557e962a"
        },
        "date": 1734996109807,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2586",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2898",
            "unit": "MB/s",
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
        "date": 1735082308741,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2411",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2739",
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
          "id": "5aa73d3bcff8a549176d4366c64ee8bc56de9e6d",
          "message": "Use `REF_COUNT_MAX` to avoid overflowing",
          "timestamp": "2024-12-23T15:09:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa73d3bcff8a549176d4366c64ee8bc56de9e6d"
        },
        "date": 1735169064482,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2371",
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
        "date": 1735562190665,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2678",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3044",
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
          "id": "7334c93ff5ac47a1a82e63b035514f91669c3c1b",
          "message": "Make bigtcp error wrappers consistent",
          "timestamp": "2024-12-30T07:47:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/7334c93ff5ac47a1a82e63b035514f91669c3c1b"
        },
        "date": 1735602503624,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2678",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3048",
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
          "id": "6e691d5838e48c71f7947b1c571022dbd9b1c932",
          "message": "Fix several typos in benchmarks",
          "timestamp": "2024-12-31T03:07:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e691d5838e48c71f7947b1c571022dbd9b1c932"
        },
        "date": 1735626013066,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2611",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2141",
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
          "id": "6e691d5838e48c71f7947b1c571022dbd9b1c932",
          "message": "Fix several typos in benchmarks",
          "timestamp": "2024-12-31T03:07:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e691d5838e48c71f7947b1c571022dbd9b1c932"
        },
        "date": 1735688737658,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2512",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2805",
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
          "id": "0c8200dc7b6bb8d9f7a8c319c67b842d83e25a75",
          "message": "Add nginx benchmark and workaround",
          "timestamp": "2024-12-31T06:40:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c8200dc7b6bb8d9f7a8c319c67b842d83e25a75"
        },
        "date": 1735776052709,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
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
            "value": "3029",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1735862346955,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1952",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2924",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1735952336569,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2516",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2774",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736035334559,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2316",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2774",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736122033158,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1637",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1878",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736208875288,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2417",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2613",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736294344207,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2481",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2655",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736380861992,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2395",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2656",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736477364365,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1665",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2645",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736553768172,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2633",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2894",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736640273692,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2366",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2025",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736727864282,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2418",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2649",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736814135675,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2431",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2583",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736899267981,
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
            "value": "1930",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736985880092,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1627",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1957",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1737072605417,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2532",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2817",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1737158903972,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1599",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2051",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1737245079157,
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
            "value": "2812",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1737331367438,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2359",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2656",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1f612e45f7fccb4caa3901ee26605f828ec64a06",
          "message": "Remove unnecessary page table items",
          "timestamp": "2024-11-09T11:22:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/1f612e45f7fccb4caa3901ee26605f828ec64a06"
        },
        "date": 1731182983158,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3159",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3400",
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
          "id": "11382524d1d23cc6d41adf977a72138baa39e38d",
          "message": "Use new `SpinLock` APIs in `wait.rs`",
          "timestamp": "2024-11-07T14:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/11382524d1d23cc6d41adf977a72138baa39e38d"
        },
        "date": 1731269101845,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2682",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3323",
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
          "id": "11382524d1d23cc6d41adf977a72138baa39e38d",
          "message": "Use new `SpinLock` APIs in `wait.rs`",
          "timestamp": "2024-11-07T14:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/11382524d1d23cc6d41adf977a72138baa39e38d"
        },
        "date": 1731355534134,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3950",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3349",
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
          "id": "38682e3ed923c0ec7880f414267789a2ded06dbe",
          "message": "Assign callback to shared irq if there's no single irq line",
          "timestamp": "2024-11-12T03:39:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/38682e3ed923c0ec7880f414267789a2ded06dbe"
        },
        "date": 1731442205126,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2908",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2328",
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
          "id": "e6c613f53841983765a7b3c56ea9958775c76199",
          "message": "Rename `(Posix)ThreadExt` to `As(Posix)Thread`",
          "timestamp": "2024-11-12T01:53:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6c613f53841983765a7b3c56ea9958775c76199"
        },
        "date": 1731528608989,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "4704",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3207",
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
          "id": "e6c613f53841983765a7b3c56ea9958775c76199",
          "message": "Rename `(Posix)ThreadExt` to `As(Posix)Thread`",
          "timestamp": "2024-11-12T01:53:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6c613f53841983765a7b3c56ea9958775c76199"
        },
        "date": 1731615268691,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2660",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3178",
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
          "id": "39d303c72f622a735927fd1d4fece11fe4b46001",
          "message": "Rename `get_current_userspace` to `current_userspace`",
          "timestamp": "2024-11-14T11:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/39d303c72f622a735927fd1d4fece11fe4b46001"
        },
        "date": 1731701104562,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3939",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3136",
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
          "id": "197d53c0ab1edbf8545d2ab827a930d66a1ab528",
          "message": "Accept sockets in the ESTABLISHED state",
          "timestamp": "2024-11-15T03:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/197d53c0ab1edbf8545d2ab827a930d66a1ab528"
        },
        "date": 1731787502859,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3552",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3172",
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
          "id": "885950c2a4a65486524ac53e40f6b6515d7ebd3a",
          "message": "Add VirtioBlockFeature to cache virtio-blk's features",
          "timestamp": "2024-11-14T13:10:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/885950c2a4a65486524ac53e40f6b6515d7ebd3a"
        },
        "date": 1731874189908,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3520",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3501",
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
          "id": "885950c2a4a65486524ac53e40f6b6515d7ebd3a",
          "message": "Add VirtioBlockFeature to cache virtio-blk's features",
          "timestamp": "2024-11-14T13:10:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/885950c2a4a65486524ac53e40f6b6515d7ebd3a"
        },
        "date": 1731960590439,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3902",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3656",
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
          "id": "b3f8d21c3db7310f7071b50dcbf8663bc4e507e1",
          "message": "Refine comments about the lock usage",
          "timestamp": "2024-11-18T13:07:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/b3f8d21c3db7310f7071b50dcbf8663bc4e507e1"
        },
        "date": 1732046985197,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3628",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3648",
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
          "id": "81898362b620203b0cbfb60b6dbb3415d4b4058c",
          "message": "Add virtio legacy interface",
          "timestamp": "2024-11-21T09:23:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/81898362b620203b0cbfb60b6dbb3415d4b4058c"
        },
        "date": 1732220201350,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2908",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2628",
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
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732306122422,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3016",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3804",
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
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732392504451,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2636",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3705",
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
          "id": "5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb",
          "message": "Add compile flags to disable the red zone optimization",
          "timestamp": "2024-11-21T11:14:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f35189a51ebc54298ea2cb0e4d53afe4e4e75eb"
        },
        "date": 1732479874784,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2552",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3773",
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
          "id": "9e5075dab7c42182b164a433daa8ea6c7ff38bbc",
          "message": "Clear `DF` flag during trap handling to conform to x86-64 calling convention",
          "timestamp": "2024-11-24T14:46:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e5075dab7c42182b164a433daa8ea6c7ff38bbc"
        },
        "date": 1732566277185,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2743",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3690",
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
          "id": "9da6af03943c15456cdfd781021820a7da78ea40",
          "message": "Add TDX debugging documentation",
          "timestamp": "2024-11-25T07:59:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/9da6af03943c15456cdfd781021820a7da78ea40"
        },
        "date": 1732652682100,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3717",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3554",
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
          "id": "5313689d6fa91596f4bc52bf6fb866bf6a7a706f",
          "message": "Fix deadlock in FLUSH_OPS by disabling IRQ",
          "timestamp": "2024-11-26T13:04:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/5313689d6fa91596f4bc52bf6fb866bf6a7a706f"
        },
        "date": 1732738116465,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2707",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3680",
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
          "id": "f762eb8913c992d932147f3e62ab47519fef8a91",
          "message": "Remove the `lazy_static` dependency",
          "timestamp": "2024-11-28T05:53:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/f762eb8913c992d932147f3e62ab47519fef8a91"
        },
        "date": 1732825487775,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3650",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3316",
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
          "id": "5e35704e3896897550ac4ee383923d1e054f3dd1",
          "message": "Support eagerly FPU state save/restore\n\nCo-authored-by: Shaowei Song <songshaowei.ssw@antgroup.com>",
          "timestamp": "2024-11-28T11:36:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/5e35704e3896897550ac4ee383923d1e054f3dd1"
        },
        "date": 1732911901246,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3944",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2931",
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
          "id": "6d3bb5a9d0b1d4d53e298402bc8fec57dc899f15",
          "message": "Fix compile error caused by updated `Step::steps_between` in Rust",
          "timestamp": "2024-11-30T10:58:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d3bb5a9d0b1d4d53e298402bc8fec57dc899f15"
        },
        "date": 1733084336759,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2873",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3447",
            "unit": "MB/s",
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
        "date": 1733170817234,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2904",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4588",
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
          "id": "a260411a2a8bb1bcc12b9920b33ad19c8a82899e",
          "message": "Implement `WriteIrqDisabled`",
          "timestamp": "2024-12-03T02:51:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/a260411a2a8bb1bcc12b9920b33ad19c8a82899e"
        },
        "date": 1733257492664,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2831",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3644",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "徐启航",
            "username": "js2xxx",
            "email": "akucxy@163.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "878f3f37600ebacecd0e31c16ae04e8ba83eeec4",
          "message": "Scheduling class support",
          "timestamp": "2024-08-17T08:06:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/878f3f37600ebacecd0e31c16ae04e8ba83eeec4"
        },
        "date": 1733278626609,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3685",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4498",
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
          "id": "0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd",
          "message": "Inject the logger for Asterinas",
          "timestamp": "2024-11-15T08:58:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/0cb2ea562e24f8bfcd894cfe9f7ad3ee5f27c1bd"
        },
        "date": 1733342921381,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2659",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4425",
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
          "id": "36fc1d37573f6809980aee652f4209c64979b209",
          "message": "Move FS things to `PosixThread`",
          "timestamp": "2024-12-01T03:41:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/36fc1d37573f6809980aee652f4209c64979b209"
        },
        "date": 1733429319953,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2957",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4513",
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
          "id": "36fc1d37573f6809980aee652f4209c64979b209",
          "message": "Move FS things to `PosixThread`",
          "timestamp": "2024-12-01T03:41:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/36fc1d37573f6809980aee652f4209c64979b209"
        },
        "date": 1733516200403,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3002",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3508",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733602433852,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3079",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4590",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733689025861,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2876",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3719",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733774920029,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2977",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4590",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00e3688aa8945e09a48e85013ab73900490db7ad",
          "message": "Bump version to 0.10.1",
          "timestamp": "2024-12-07T05:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00e3688aa8945e09a48e85013ab73900490db7ad"
        },
        "date": 1733862534987,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "4212",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3047",
            "unit": "MB/s",
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
        "date": 1733958174039,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "4165",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2978",
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
          "id": "8bbbde4ccb9d31ed48ae99f209538c16d14016bb",
          "message": "Use `Ordering::Relaxed` for `is_nonblocking`",
          "timestamp": "2024-12-08T08:26:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bbbde4ccb9d31ed48ae99f209538c16d14016bb"
        },
        "date": 1734044484781,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2915",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2737",
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
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734405291860,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2798",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2981",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lab-pc-wtj",
            "email": "wangtaojie2004@hotmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e",
          "message": "Improve /proc/{PID}/stat",
          "timestamp": "2024-12-17T12:10:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e"
        },
        "date": 1734490411900,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2957",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4156",
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
          "id": "acc10376e60291386dd1026f238140d145230808",
          "message": "Update benchmark README",
          "timestamp": "2024-12-14T05:14:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/acc10376e60291386dd1026f238140d145230808"
        },
        "date": 1734563145213,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2783",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2530",
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
          "id": "9a540d0fb6d073f1feb20c30dc78230c46c595a3",
          "message": "Notify virtqueue in a batch manner",
          "timestamp": "2024-12-17T02:24:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/9a540d0fb6d073f1feb20c30dc78230c46c595a3"
        },
        "date": 1734649666187,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2665",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3248",
            "unit": "MB/s",
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
        "date": 1734736862984,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2619",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4048",
            "unit": "MB/s",
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
        "date": 1734823155901,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2667",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4128",
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
          "id": "1e3403e756ced989ddd44c9f0c81cf71557e962a",
          "message": "Support ELF files with zero `p_filesz`.",
          "timestamp": "2024-12-19T03:33:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/1e3403e756ced989ddd44c9f0c81cf71557e962a"
        },
        "date": 1734909668145,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "4662",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4250",
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
          "id": "1e3403e756ced989ddd44c9f0c81cf71557e962a",
          "message": "Support ELF files with zero `p_filesz`.",
          "timestamp": "2024-12-19T03:33:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/1e3403e756ced989ddd44c9f0c81cf71557e962a"
        },
        "date": 1734996035255,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2985",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4194",
            "unit": "MB/s",
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
        "date": 1735082232010,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3889",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4060",
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
          "id": "5aa73d3bcff8a549176d4366c64ee8bc56de9e6d",
          "message": "Use `REF_COUNT_MAX` to avoid overflowing",
          "timestamp": "2024-12-23T15:09:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa73d3bcff8a549176d4366c64ee8bc56de9e6d"
        },
        "date": 1735168982772,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "4117",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2556",
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
          "id": "bfc71d1b2708075fb0abf326960a20b4bb6b58e2",
          "message": "Bump version to 0.11.1",
          "timestamp": "2024-12-30T06:39:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/bfc71d1b2708075fb0abf326960a20b4bb6b58e2"
        },
        "date": 1735562102774,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2884",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4359",
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
          "id": "7334c93ff5ac47a1a82e63b035514f91669c3c1b",
          "message": "Make bigtcp error wrappers consistent",
          "timestamp": "2024-12-30T07:47:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/7334c93ff5ac47a1a82e63b035514f91669c3c1b"
        },
        "date": 1735602422074,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2925",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4337",
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
          "id": "6e691d5838e48c71f7947b1c571022dbd9b1c932",
          "message": "Fix several typos in benchmarks",
          "timestamp": "2024-12-31T03:07:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e691d5838e48c71f7947b1c571022dbd9b1c932"
        },
        "date": 1735625928395,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3749",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4003",
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
          "id": "6e691d5838e48c71f7947b1c571022dbd9b1c932",
          "message": "Fix several typos in benchmarks",
          "timestamp": "2024-12-31T03:07:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e691d5838e48c71f7947b1c571022dbd9b1c932"
        },
        "date": 1735688652185,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "5039",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3867",
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
          "id": "0c8200dc7b6bb8d9f7a8c319c67b842d83e25a75",
          "message": "Add nginx benchmark and workaround",
          "timestamp": "2024-12-31T06:40:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c8200dc7b6bb8d9f7a8c319c67b842d83e25a75"
        },
        "date": 1735775967876,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2920",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4288",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1735862256841,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "4448",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3841",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1735952248501,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3737",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3674",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736035242763,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3703",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4154",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736121942218,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3943",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4171",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736208775367,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2618",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3832",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736294255187,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2721",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4061",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736380770891,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2771",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3389",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736477264530,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3534",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4104",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736553675512,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2712",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4249",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736640179205,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2828",
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
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736727768551,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3543",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4019",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736899161411,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2478",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3478",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736985777986,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3906",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4083",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1737072496951,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3543",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4047",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1737158798550,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2752",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2708",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1737244974514,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3817",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4036",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1737331267595,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2850",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4163",
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
        "date": 1734563269487,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2350",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2689",
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
          "id": "9a540d0fb6d073f1feb20c30dc78230c46c595a3",
          "message": "Notify virtqueue in a batch manner",
          "timestamp": "2024-12-17T02:24:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/9a540d0fb6d073f1feb20c30dc78230c46c595a3"
        },
        "date": 1734649783864,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1640",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2728",
            "unit": "MB/s",
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
        "date": 1734736979578,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
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
            "value": "2821",
            "unit": "MB/s",
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
        "date": 1734823266941,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2512",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3012",
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
          "id": "1e3403e756ced989ddd44c9f0c81cf71557e962a",
          "message": "Support ELF files with zero `p_filesz`.",
          "timestamp": "2024-12-19T03:33:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/1e3403e756ced989ddd44c9f0c81cf71557e962a"
        },
        "date": 1734909788064,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2679",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3169",
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
          "id": "1e3403e756ced989ddd44c9f0c81cf71557e962a",
          "message": "Support ELF files with zero `p_filesz`.",
          "timestamp": "2024-12-19T03:33:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/1e3403e756ced989ddd44c9f0c81cf71557e962a"
        },
        "date": 1734996147093,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2613",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2216",
            "unit": "MB/s",
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
        "date": 1735082349532,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2517",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2940",
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
          "id": "5aa73d3bcff8a549176d4366c64ee8bc56de9e6d",
          "message": "Use `REF_COUNT_MAX` to avoid overflowing",
          "timestamp": "2024-12-23T15:09:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa73d3bcff8a549176d4366c64ee8bc56de9e6d"
        },
        "date": 1735169102652,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2484",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2871",
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
          "id": "bfc71d1b2708075fb0abf326960a20b4bb6b58e2",
          "message": "Bump version to 0.11.1",
          "timestamp": "2024-12-30T06:39:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/bfc71d1b2708075fb0abf326960a20b4bb6b58e2"
        },
        "date": 1735562232258,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2799",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3268",
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
          "id": "7334c93ff5ac47a1a82e63b035514f91669c3c1b",
          "message": "Make bigtcp error wrappers consistent",
          "timestamp": "2024-12-30T07:47:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/7334c93ff5ac47a1a82e63b035514f91669c3c1b"
        },
        "date": 1735602546627,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2930",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2467",
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
          "id": "6e691d5838e48c71f7947b1c571022dbd9b1c932",
          "message": "Fix several typos in benchmarks",
          "timestamp": "2024-12-31T03:07:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e691d5838e48c71f7947b1c571022dbd9b1c932"
        },
        "date": 1735626055634,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2608",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2315",
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
          "id": "6e691d5838e48c71f7947b1c571022dbd9b1c932",
          "message": "Fix several typos in benchmarks",
          "timestamp": "2024-12-31T03:07:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e691d5838e48c71f7947b1c571022dbd9b1c932"
        },
        "date": 1735688779258,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2663",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2964",
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
          "id": "0c8200dc7b6bb8d9f7a8c319c67b842d83e25a75",
          "message": "Add nginx benchmark and workaround",
          "timestamp": "2024-12-31T06:40:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c8200dc7b6bb8d9f7a8c319c67b842d83e25a75"
        },
        "date": 1735776094272,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2670",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3242",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1735862393576,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2425",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2519",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1735952378853,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2499",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3061",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736035377210,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2314",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2958",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736122079883,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2464",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2928",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736208932125,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2427",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2459",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736294388390,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1614",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2920",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736380908235,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1885",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2931",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736477410920,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2313",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2922",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736553816971,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1708",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3010",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736640318751,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2425",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2883",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736727914929,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2385",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2756",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736814181849,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2398",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2824",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736899321153,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1703",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2972",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736985931233,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1721",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2322",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1737072655193,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2430",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2908",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1737158953610,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2420",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2474",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1737245130962,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "3214",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2136",
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
        "date": 1734563190407,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2727",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2798",
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
          "id": "9a540d0fb6d073f1feb20c30dc78230c46c595a3",
          "message": "Notify virtqueue in a batch manner",
          "timestamp": "2024-12-17T02:24:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/9a540d0fb6d073f1feb20c30dc78230c46c595a3"
        },
        "date": 1734649702881,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "4221",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2749",
            "unit": "MB/s",
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
        "date": 1734736899713,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3815",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4366",
            "unit": "MB/s",
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
        "date": 1734823195426,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "4569",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3831",
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
          "id": "1e3403e756ced989ddd44c9f0c81cf71557e962a",
          "message": "Support ELF files with zero `p_filesz`.",
          "timestamp": "2024-12-19T03:33:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/1e3403e756ced989ddd44c9f0c81cf71557e962a"
        },
        "date": 1734909708885,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3410",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4650",
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
          "id": "1e3403e756ced989ddd44c9f0c81cf71557e962a",
          "message": "Support ELF files with zero `p_filesz`.",
          "timestamp": "2024-12-19T03:33:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/1e3403e756ced989ddd44c9f0c81cf71557e962a"
        },
        "date": 1734996072679,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "4111",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4502",
            "unit": "MB/s",
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
        "date": 1735082271173,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3652",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3704",
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
          "id": "5aa73d3bcff8a549176d4366c64ee8bc56de9e6d",
          "message": "Use `REF_COUNT_MAX` to avoid overflowing",
          "timestamp": "2024-12-23T15:09:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa73d3bcff8a549176d4366c64ee8bc56de9e6d"
        },
        "date": 1735169023429,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2651",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2709",
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
          "id": "bfc71d1b2708075fb0abf326960a20b4bb6b58e2",
          "message": "Bump version to 0.11.1",
          "timestamp": "2024-12-30T06:39:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/bfc71d1b2708075fb0abf326960a20b4bb6b58e2"
        },
        "date": 1735562146723,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3316",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3180",
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
          "id": "7334c93ff5ac47a1a82e63b035514f91669c3c1b",
          "message": "Make bigtcp error wrappers consistent",
          "timestamp": "2024-12-30T07:47:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/7334c93ff5ac47a1a82e63b035514f91669c3c1b"
        },
        "date": 1735602461984,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3111",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4762",
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
          "id": "6e691d5838e48c71f7947b1c571022dbd9b1c932",
          "message": "Fix several typos in benchmarks",
          "timestamp": "2024-12-31T03:07:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e691d5838e48c71f7947b1c571022dbd9b1c932"
        },
        "date": 1735625969532,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2784",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3167",
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
          "id": "6e691d5838e48c71f7947b1c571022dbd9b1c932",
          "message": "Fix several typos in benchmarks",
          "timestamp": "2024-12-31T03:07:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e691d5838e48c71f7947b1c571022dbd9b1c932"
        },
        "date": 1735688693660,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3999",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2775",
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
          "id": "0c8200dc7b6bb8d9f7a8c319c67b842d83e25a75",
          "message": "Add nginx benchmark and workaround",
          "timestamp": "2024-12-31T06:40:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c8200dc7b6bb8d9f7a8c319c67b842d83e25a75"
        },
        "date": 1735776010294,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3680",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4592",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1735862300760,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3624",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4655",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1735952294082,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "4059",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4583",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736035289821,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2553",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4402",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736121987139,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2653",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2623",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736208820135,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2645",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2965",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736294300425,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2657",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3249",
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
          "id": "16862a20245d21ba900c3110881c8f671b7fa613",
          "message": "Use mutable pointer for kernel heap\n\nCo-authored-by: Chen Chengjun <chenchengjun.ccj@antgroup.com>",
          "timestamp": "2025-01-02T02:41:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/16862a20245d21ba900c3110881c8f671b7fa613"
        },
        "date": 1736380816404,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2694",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4353",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736477316453,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2745",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4452",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736553719908,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3175",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3753",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736640226751,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3868",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4333",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736727816219,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2737",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3751",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736814085090,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2798",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4381",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736899211811,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2554",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2579",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1736985827595,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2660",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4433",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1737072545469,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2922",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2658",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1737158854427,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "4114",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "4438",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1737245028204,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2734",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2667",
            "unit": "MB/s",
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
          "id": "6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa",
          "message": "Make the generic inode permisson check faster",
          "timestamp": "2025-01-09T09:52:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/6de5be1ecc345edb5dc9d18b27cb1ca2b179b2aa"
        },
        "date": 1737331317525,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3521",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3464",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}