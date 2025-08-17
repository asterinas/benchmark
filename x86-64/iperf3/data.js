window.BENCHMARK_DATA = {
  "lastUpdate": 1755399145951,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "tcp_virtio_bw": [
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
          "id": "ffb40974364c74ee3adaffdf8a7063b575233807",
          "message": "Add RISC-V timer support",
          "timestamp": "2025-04-28T03:04:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/ffb40974364c74ee3adaffdf8a7063b575233807"
        },
        "date": 1748579218067,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7264",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1784",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "6dc0189e432add7a5acea9f5615bc8c31461e6e2",
          "message": "Remove unnecssary overflow checks",
          "timestamp": "2025-05-27T03:08:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/6dc0189e432add7a5acea9f5615bc8c31461e6e2"
        },
        "date": 1748666674503,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "12562",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1991",
            "unit": "Mbits/sec",
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
          "id": "58e4f45bb17dff6ea0dbe266f9045155ee54edb8",
          "message": "Add per-CPU counters and track RSS for each `Vmar`",
          "timestamp": "2025-06-03T14:05:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/58e4f45bb17dff6ea0dbe266f9045155ee54edb8"
        },
        "date": 1749025472311,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8826",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1834",
            "unit": "Mbits/sec",
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
          "id": "01328ee4040930274dcd30725be7b223198c18cc",
          "message": "Fix panic when mount with invalid file system type",
          "timestamp": "2025-06-06T09:52:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/01328ee4040930274dcd30725be7b223198c18cc"
        },
        "date": 1749641424201,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13714",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5518",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5f28b48ca4afc7cece79d004370f3174b1ba4bda",
          "message": "Assign framebuffer code owners",
          "timestamp": "2025-06-10T05:24:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f28b48ca4afc7cece79d004370f3174b1ba4bda"
        },
        "date": 1749643925304,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13639",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5452",
            "unit": "Mbits/sec",
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
          "id": "3e32a38316a9b134bea3121fb89887c41eb93dc8",
          "message": "Add sys_close_range",
          "timestamp": "2025-06-01T10:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/3e32a38316a9b134bea3121fb89887c41eb93dc8"
        },
        "date": 1749689098033,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13737",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5625",
            "unit": "Mbits/sec",
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
          "id": "b605bed5764ec21ec847f0357ed564329f165762",
          "message": "Fix some typos",
          "timestamp": "2025-06-12T03:13:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/b605bed5764ec21ec847f0357ed564329f165762"
        },
        "date": 1749776863650,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "12528",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5054",
            "unit": "Mbits/sec",
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
          "id": "a2aedcfb3afa31d8cf27b9b458df7103e3c68bfe",
          "message": "Add a SMP LTP block list",
          "timestamp": "2025-06-13T12:56:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/a2aedcfb3afa31d8cf27b9b458df7103e3c68bfe"
        },
        "date": 1749863489804,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13783",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5532",
            "unit": "Mbits/sec",
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
          "id": "a2aedcfb3afa31d8cf27b9b458df7103e3c68bfe",
          "message": "Add a SMP LTP block list",
          "timestamp": "2025-06-13T12:56:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/a2aedcfb3afa31d8cf27b9b458df7103e3c68bfe"
        },
        "date": 1749951747507,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13706",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5461",
            "unit": "Mbits/sec",
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
          "id": "525085ab865b3850c0de2d704bab1bba6976a980",
          "message": "Implement system call `msync`",
          "timestamp": "2025-06-10T12:45:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/525085ab865b3850c0de2d704bab1bba6976a980"
        },
        "date": 1750036777041,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13811",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5508",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Philipp Schuster",
            "username": "phip1611",
            "email": "phip1611@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "7a398167cf33d94415226c4f0b14c4e2c0b05f43",
          "message": "ostd: update multiboot2 + use constant",
          "timestamp": "2025-06-14T10:09:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/7a398167cf33d94415226c4f0b14c4e2c0b05f43"
        },
        "date": 1750123191051,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13865",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5003",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "4a9977d9a7d071dbe2ad4cea8ae69d4db81f566e",
          "message": "Make zero reads/writes' behavior right",
          "timestamp": "2025-06-15T11:24:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/4a9977d9a7d071dbe2ad4cea8ae69d4db81f566e"
        },
        "date": 1750209363973,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13890",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4998",
            "unit": "Mbits/sec",
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
          "id": "2f097ab8f84ef6111eb8a3393ff72fae08225974",
          "message": "Check file_table before use",
          "timestamp": "2025-06-18T08:28:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/2f097ab8f84ef6111eb8a3393ff72fae08225974"
        },
        "date": 1750297129828,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13673",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4961",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "bcf1e69878540e81ab15d79eee2f81f1f0787bba",
          "message": "Expose `head`/`tail` of `RingBuffer`",
          "timestamp": "2025-06-15T17:00:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/bcf1e69878540e81ab15d79eee2f81f1f0787bba"
        },
        "date": 1750388093826,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11396",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4410",
            "unit": "Mbits/sec",
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
          "id": "bb3f21b41eec5588974e69d775d6f0f2fea7e2d4",
          "message": "Fix integer overflow in futex wake",
          "timestamp": "2025-06-20T07:45:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb3f21b41eec5588974e69d775d6f0f2fea7e2d4"
        },
        "date": 1750472333986,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13383",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5685",
            "unit": "Mbits/sec",
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
          "id": "11f9675f378d95ea124545c230d21abcf0bb361d",
          "message": "Support the system call `mremap`",
          "timestamp": "2025-06-16T07:39:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/11f9675f378d95ea124545c230d21abcf0bb361d"
        },
        "date": 1750555618765,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13865",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4907",
            "unit": "Mbits/sec",
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
          "id": "826f56aeed169dbaaf61fa7aa8c7a999c2bb01bd",
          "message": "Check file_table in PID directory before access",
          "timestamp": "2025-06-22T09:21:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/826f56aeed169dbaaf61fa7aa8c7a999c2bb01bd"
        },
        "date": 1750641766288,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13708",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5307",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "35e0918bced1b5cf4cf1abf59b9ae9a47c734b96",
          "message": "Don't race between enabling IRQs and halting CPU",
          "timestamp": "2025-04-09T02:23:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/35e0918bced1b5cf4cf1abf59b9ae9a47c734b96"
        },
        "date": 1750727994736,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11660",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4939",
            "unit": "Mbits/sec",
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
          "id": "e4c5c36be9fb58ee78e558e72762e8450bcb5ba2",
          "message": "Support SO_PEERCRED & SO_PEERGROUPS",
          "timestamp": "2025-06-11T08:28:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/e4c5c36be9fb58ee78e558e72762e8450bcb5ba2"
        },
        "date": 1750817882456,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "12006",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5478",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "3f1bf99b2ade568a09e3a483ec8bf0f75ca36608",
          "message": "Make `mremap` behavior consistent with Linux",
          "timestamp": "2025-06-22T08:12:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/3f1bf99b2ade568a09e3a483ec8bf0f75ca36608"
        },
        "date": 1750992702327,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13553",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5507",
            "unit": "Mbits/sec",
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
          "id": "5e3e23bf7c5130a9251b265c5377d2e21769097c",
          "message": "Add basic i8042 keyboard support",
          "timestamp": "2025-06-25T02:04:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/5e3e23bf7c5130a9251b265c5377d2e21769097c"
        },
        "date": 1751074783327,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11525",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5510",
            "unit": "Mbits/sec",
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
          "id": "5e3e23bf7c5130a9251b265c5377d2e21769097c",
          "message": "Add basic i8042 keyboard support",
          "timestamp": "2025-06-25T02:04:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/5e3e23bf7c5130a9251b265c5377d2e21769097c"
        },
        "date": 1751163767875,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13030",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4992",
            "unit": "Mbits/sec",
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
          "id": "5e3e23bf7c5130a9251b265c5377d2e21769097c",
          "message": "Add basic i8042 keyboard support",
          "timestamp": "2025-06-25T02:04:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/5e3e23bf7c5130a9251b265c5377d2e21769097c"
        },
        "date": 1751246136194,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11047",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5497",
            "unit": "Mbits/sec",
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
          "id": "dc26e183100dcabf292aa8ee41458f189b2f7b94",
          "message": "Depend on int-to-c-enum instead of num crate",
          "timestamp": "2025-06-27T08:29:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/dc26e183100dcabf292aa8ee41458f189b2f7b94"
        },
        "date": 1751337773612,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11661",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5490",
            "unit": "Mbits/sec",
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
          "id": "49ef0e9f7aa7606ab62387e231f679197572cf28",
          "message": "Change the documentation website of OSTD",
          "timestamp": "2025-06-27T08:10:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/49ef0e9f7aa7606ab62387e231f679197572cf28"
        },
        "date": 1751422261189,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13592",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5067",
            "unit": "Mbits/sec",
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
          "id": "a13297ae4c0b445ae5e9fed8ed7ffa8c7d334621",
          "message": "Add fields in `/proc/*/stat` and `/proc/*/status`",
          "timestamp": "2025-07-02T02:54:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/a13297ae4c0b445ae5e9fed8ed7ffa8c7d334621"
        },
        "date": 1751505501579,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13741",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5160",
            "unit": "Mbits/sec",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "37cc54f2aa837463386af9f3c27ec3979a039022",
          "message": "Store `offset` in `MappedVmo` instead of `range`",
          "timestamp": "2025-07-03T08:44:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/37cc54f2aa837463386af9f3c27ec3979a039022"
        },
        "date": 1751592006320,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11377",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5479",
            "unit": "Mbits/sec",
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
          "id": "20c2e967fea035e7377af4a0c6d947afbe507f43",
          "message": "Fix benchmark CI errors",
          "timestamp": "2025-07-07T03:39:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/20c2e967fea035e7377af4a0c6d947afbe507f43"
        },
        "date": 1751960422406,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13514",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5399",
            "unit": "Mbits/sec",
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
          "id": "4736004cff1fcc30540040cac300824a822ffef0",
          "message": "Fix lmbench by adding delay to ensure lmhttp starts",
          "timestamp": "2025-07-08T06:28:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/4736004cff1fcc30540040cac300824a822ffef0"
        },
        "date": 1752060360296,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10009",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4971",
            "unit": "Mbits/sec",
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
          "id": "665de6bd355a454309ee1d21448ce6d0ac566b21",
          "message": "Make RISC-V code compile under new exception APIs",
          "timestamp": "2025-07-08T05:17:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/665de6bd355a454309ee1d21448ce6d0ac566b21"
        },
        "date": 1752130539005,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13781",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5543",
            "unit": "Mbits/sec",
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
          "id": "48b160e33ac43b5ed8a010b939811a0c96f339c3",
          "message": "Use default process name in TDX QEMU configuration",
          "timestamp": "2025-05-20T00:59:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/48b160e33ac43b5ed8a010b939811a0c96f339c3"
        },
        "date": 1752237581855,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13828",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5525",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e5c5bc79921ae89e9b574d69640b9f9f96b2f86f",
          "message": "Clarify safety comments in `dyn_cpu_local.rs`",
          "timestamp": "2025-07-11T04:57:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/e5c5bc79921ae89e9b574d69640b9f9f96b2f86f"
        },
        "date": 1752321112187,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13665",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5588",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e5c5bc79921ae89e9b574d69640b9f9f96b2f86f",
          "message": "Clarify safety comments in `dyn_cpu_local.rs`",
          "timestamp": "2025-07-11T04:57:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/e5c5bc79921ae89e9b574d69640b9f9f96b2f86f"
        },
        "date": 1752410571118,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10548",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5102",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e5c5bc79921ae89e9b574d69640b9f9f96b2f86f",
          "message": "Clarify safety comments in `dyn_cpu_local.rs`",
          "timestamp": "2025-07-11T04:57:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/e5c5bc79921ae89e9b574d69640b9f9f96b2f86f"
        },
        "date": 1752502429138,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11717",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5497",
            "unit": "Mbits/sec",
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
          "id": "ab5e1999fc4578d1b0880f8920298869cea66342",
          "message": "Apply the docker version bump for related files",
          "timestamp": "2025-07-17T06:02:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/ab5e1999fc4578d1b0880f8920298869cea66342"
        },
        "date": 1752834029350,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11779",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5565",
            "unit": "Mbits/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d083aef69020460e1d88999ec96bb2f6a81bdad4",
          "message": "Add a simple test for checking FPU state in signal",
          "timestamp": "2025-06-25T06:34:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/d083aef69020460e1d88999ec96bb2f6a81bdad4"
        },
        "date": 1753013226600,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13692",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5551",
            "unit": "Mbits/sec",
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
          "id": "424fcda239fe14fa98ece0377ef377dad48bfc7d",
          "message": "Use iret instead of sysret if the context is not clean",
          "timestamp": "2025-07-18T07:13:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/424fcda239fe14fa98ece0377ef377dad48bfc7d"
        },
        "date": 1753103468042,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11624",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5517",
            "unit": "Mbits/sec",
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
        "date": 1753193492552,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13661",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5495",
            "unit": "Mbits/sec",
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
        "date": 1753275267302,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "12100",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4982",
            "unit": "Mbits/sec",
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
        "date": 1753345871225,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13726",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5517",
            "unit": "Mbits/sec",
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
        "date": 1753421512013,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10764",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5047",
            "unit": "Mbits/sec",
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
        "date": 1753509642990,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10823",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5305",
            "unit": "Mbits/sec",
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
        "date": 1753601781429,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13465",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5606",
            "unit": "Mbits/sec",
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
        "date": 1753682611679,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13852",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5162",
            "unit": "Mbits/sec",
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
        "date": 1753772746138,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13739",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5541",
            "unit": "Mbits/sec",
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
        "date": 1753876073711,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13635",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5544",
            "unit": "Mbits/sec",
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
        "date": 1753939063815,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9921",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4965",
            "unit": "Mbits/sec",
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
        "date": 1754217343458,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10231",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5057",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1754662203708,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8052",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2608",
            "unit": "Mbits/sec",
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
        "date": 1754663740563,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6658",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3084",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1754670432659,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11760",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2627",
            "unit": "Mbits/sec",
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
        "date": 1754716616913,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7887",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3044",
            "unit": "Mbits/sec",
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
        "date": 1754792659079,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11856",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3083",
            "unit": "Mbits/sec",
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
        "date": 1754876868733,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8593",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2753",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
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
        "date": 1754963015171,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6686",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3065",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1755049599715,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10932",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2604",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1755136180645,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11251",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3065",
            "unit": "Mbits/sec",
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
        "date": 1755227283328,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11751",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2618",
            "unit": "Mbits/sec",
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
        "date": 1755307280070,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9613",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2984",
            "unit": "Mbits/sec",
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
        "date": 1755399099882,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9090",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3018",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}