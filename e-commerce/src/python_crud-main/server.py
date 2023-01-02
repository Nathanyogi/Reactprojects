from http.server import HTTPServer, BaseHTTPRequestHandler
import mysql.connector
from userList import userList
from insert import post
from read import getProducts
import logging
import json
logging.basicConfig(format = '%(asctime)s | %(filename)s: %(message)s', level = logging.NOTSET)

def db_connect():
    return mysql.connector.connect(host = "localhost", user = "root", password = "Nathan@04", database = "flipkart")

class GetHandler(BaseHTTPRequestHandler):

    def do_GET(self):

            try:
                if db_connect().is_connected():
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*') 
                    self.end_headers()                
                    # call read function from read file
                    self.wfile.write(bytes(getProducts(db_connect(),self.path), "utf-8"))

            except mysql.connector.Error as error:

                self.send_response(200)
                self.send_header('Access-Control-Allow-Origin', '*') 
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))
            
    def do_POST(self):
            try:
                if db_connect().is_connected():
                    content_length = int(self.headers.get("Content-Length"))
                    body = self.rfile.read(content_length)
                    req_data = json.loads(body)
                    self.send_response(200)
                    self.send_header('Access-Control-Allow-Origin', '*') 
                    self.end_headers()
                    # call create function from create file
                    self.wfile.write(bytes(post(db_connect(), req_data,self.path), "utf-8"))

            except mysql.connector.Error as error:
                self.send_response(200)
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))

       

def main():
    httpd = HTTPServer(('localhost', 4000), GetHandler)
    print("Web server has been started")
    httpd.serve_forever()


if __name__ == "__main__":
    main()