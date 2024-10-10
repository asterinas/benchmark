window.BENCHMARK_DATA = {
  "lastUpdate": 1728597330989,
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
      }
    ]
  }
}