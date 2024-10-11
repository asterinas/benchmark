window.BENCHMARK_DATA = {
  "lastUpdate": 1728686568078,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
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
          "id": "0415225c198f2ea31b40f60af657575ca58cef4c",
          "message": "Fix IRQ-related socket locks",
          "timestamp": "2024-10-03T04:24:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/0415225c198f2ea31b40f60af657575ca58cef4c"
        },
        "date": 1728597324257,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10646.84",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "144.74",
            "unit": "Kbytes/sec",
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
        "date": 1728623817404,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10551.24",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "145.20",
            "unit": "Kbytes/sec",
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
        "date": 1728686563432,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9236.17",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "143.94",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}