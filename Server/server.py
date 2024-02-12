from flask import Flask, request, jsonify
import util

app = Flask(__name__)

@app.route('/get_zipcodes')
def get_zipcodes():
    response = jsonify({
        'zipcodes': util.get_zipcodes()
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == '__main__':
    print("Server is running for Seattle home price prediction")
    app.run()
