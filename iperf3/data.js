window.BENCHMARK_DATA = {
  "lastUpdate": 1728677289036,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "tcp_virtio_bw": [
      {
        "commit": {
          "author": {
            "name": "Carlos López",
            "username": "00xc",
            "email": "carlos.lopezr4096@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0a36760f7a42b7fe27735e29f971423f6ec4b1ca",
          "message": "Respect user-defined exit signal in clone() and clone3()\n\nWhen calling clone() and clone3(), the user is allowed to specify a\nsignal to be sent to the parent process on exit. Respect this value by\nstoring it in the Process struct and sending the signal on exit.\n\nAdd a test as well to verify that the signal is properly delivered to\nthe parent.",
          "timestamp": "2024-09-24T19:33:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/0a36760f7a42b7fe27735e29f971423f6ec4b1ca"
        },
        "date": 1727381190438,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10149",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8.81",
            "unit": "Mbits/sec",
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
          "id": "c4cb0f1aefad470af18ee878f7959acedaa83768",
          "message": "Quiet Linux boot logs to avoid mixing with result logs",
          "timestamp": "2024-09-27T09:42:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4cb0f1aefad470af18ee878f7959acedaa83768"
        },
        "date": 1727467588809,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7106",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8.49",
            "unit": "Mbits/sec",
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
          "id": "c4cb0f1aefad470af18ee878f7959acedaa83768",
          "message": "Quiet Linux boot logs to avoid mixing with result logs",
          "timestamp": "2024-09-27T09:42:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4cb0f1aefad470af18ee878f7959acedaa83768"
        },
        "date": 1727554108011,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10119",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8.81",
            "unit": "Mbits/sec",
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
          "id": "c4cb0f1aefad470af18ee878f7959acedaa83768",
          "message": "Quiet Linux boot logs to avoid mixing with result logs",
          "timestamp": "2024-09-27T09:42:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4cb0f1aefad470af18ee878f7959acedaa83768"
        },
        "date": 1727640525007,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10041",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8.81",
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
          "id": "e0106f1f18eeb81faf17939cba3d492c1f8492ec",
          "message": "Fix the typo checker false positive `sie`",
          "timestamp": "2024-09-30T03:05:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/e0106f1f18eeb81faf17939cba3d492c1f8492ec"
        },
        "date": 1727678125814,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10119",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7.13",
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
          "id": "76d4b180d016d6bab10602e8b47100bc4bc0e6fd",
          "message": "Increase the TCP socket buffer length",
          "timestamp": "2024-09-30T08:03:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/76d4b180d016d6bab10602e8b47100bc4bc0e6fd"
        },
        "date": 1727727128727,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10178",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1859",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1632ce36d7cf29b38b6e06cc5dd3d9fb70247129",
          "message": "doc: improve grammar, spelling, and fix some links\n\ndoc: resolve rebasing osdk docs\n\ndoc: improve grammar and spelling, fix links for the contributing section\n\nfix: resolve rebasing for run.rs\n\nfix: resolve rebasing for osdk, again",
          "timestamp": "2024-09-30T22:08:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/1632ce36d7cf29b38b6e06cc5dd3d9fb70247129"
        },
        "date": 1727813034806,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10111",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1831",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1632ce36d7cf29b38b6e06cc5dd3d9fb70247129",
          "message": "doc: improve grammar, spelling, and fix some links\n\ndoc: resolve rebasing osdk docs\n\ndoc: improve grammar and spelling, fix links for the contributing section\n\nfix: resolve rebasing for run.rs\n\nfix: resolve rebasing for osdk, again",
          "timestamp": "2024-09-30T22:08:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/1632ce36d7cf29b38b6e06cc5dd3d9fb70247129"
        },
        "date": 1727899602903,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10149",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1822",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1632ce36d7cf29b38b6e06cc5dd3d9fb70247129",
          "message": "doc: improve grammar, spelling, and fix some links\n\ndoc: resolve rebasing osdk docs\n\ndoc: improve grammar and spelling, fix links for the contributing section\n\nfix: resolve rebasing for run.rs\n\nfix: resolve rebasing for osdk, again",
          "timestamp": "2024-09-30T22:08:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/1632ce36d7cf29b38b6e06cc5dd3d9fb70247129"
        },
        "date": 1727986125034,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10107",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1794",
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
          "id": "96efd620072a0cbdccc95b58901894111f17bb3a",
          "message": "Use `LocalIrqDisable` in `Subject`",
          "timestamp": "2024-10-03T15:10:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/96efd620072a0cbdccc95b58901894111f17bb3a"
        },
        "date": 1728072373665,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9988",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1866",
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
          "id": "96efd620072a0cbdccc95b58901894111f17bb3a",
          "message": "Use `LocalIrqDisable` in `Subject`",
          "timestamp": "2024-10-03T15:10:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/96efd620072a0cbdccc95b58901894111f17bb3a"
        },
        "date": 1728158625539,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10127",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1855",
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
          "id": "e1e7afe0ca0c1511e666ef53dece74aed8af9c55",
          "message": "Use `node::Entry` to optimize page table cursor operations",
          "timestamp": "2024-10-02T18:11:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/e1e7afe0ca0c1511e666ef53dece74aed8af9c55"
        },
        "date": 1728245027737,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10083",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1863",
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
          "id": "e1e7afe0ca0c1511e666ef53dece74aed8af9c55",
          "message": "Use `node::Entry` to optimize page table cursor operations",
          "timestamp": "2024-10-02T18:11:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/e1e7afe0ca0c1511e666ef53dece74aed8af9c55"
        },
        "date": 1728331439576,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7227",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1842",
            "unit": "Mbits/sec",
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
          "id": "d930829866fca07788d1dbc95256552edd283a39",
          "message": "Bump version to 0.9.1",
          "timestamp": "2024-10-08T07:36:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/d930829866fca07788d1dbc95256552edd283a39"
        },
        "date": 1728439812908,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8367",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2678",
            "unit": "Mbits/sec",
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
          "id": "6e7b12c3c43c585d4092a8b978a3b673b04491c4",
          "message": "Extract the status of guest VM from its log",
          "timestamp": "2024-10-09T07:04:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e7b12c3c43c585d4092a8b978a3b673b04491c4"
        },
        "date": 1728504179520,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8695",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2727",
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
          "id": "0415225c198f2ea31b40f60af657575ca58cef4c",
          "message": "Fix IRQ-related socket locks",
          "timestamp": "2024-10-03T04:24:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/0415225c198f2ea31b40f60af657575ca58cef4c"
        },
        "date": 1728590579308,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8446",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2515",
            "unit": "Mbits/sec",
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
          "id": "ea489252f409fa8bded732655cd75071c952d78a",
          "message": "Refactor `Dentry` to optimize the vfs layer",
          "timestamp": "2024-10-10T12:51:26Z",
          "url": "https://github.com/asterinas/asterinas/commit/ea489252f409fa8bded732655cd75071c952d78a"
        },
        "date": 1728617346686,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8542",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2669",
            "unit": "Mbits/sec",
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
          "id": "ea489252f409fa8bded732655cd75071c952d78a",
          "message": "Refactor `Dentry` to optimize the vfs layer",
          "timestamp": "2024-10-10T12:51:26Z",
          "url": "https://github.com/asterinas/asterinas/commit/ea489252f409fa8bded732655cd75071c952d78a"
        },
        "date": 1728677282219,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8615",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2666",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}