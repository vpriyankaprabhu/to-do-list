import os
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer

class MyHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'
        elif self.path == '/static/script.js':
            self.path = '/static/script.js'
        return super().do_GET()

# Set up the server to serve the files
PORT = 8000
Handler = MyHandler
os.chdir(os.path.dirname(os.path.abspath(__file__)))

with TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()