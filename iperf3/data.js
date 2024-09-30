window.BENCHMARK_DATA = {
  "lastUpdate": 1727678133259,
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
      }
    ]
  }
}