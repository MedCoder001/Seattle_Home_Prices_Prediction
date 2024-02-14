from flask import Flask, request, jsonify
import util

app = Flask(__name__)

@app.route('/get_zipcodes')
def get_zipcodes():
    response = jsonify({
        'zipcodes': util.get_zipcodes()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

@app.route('/predict_home_price', methods=['POST'])
def predict_home_price():
    beds = int(request.form['beds'])
    baths = int(request.form['baths'])
    size = int(request.form['size'])
    lot_size = int(request.form['lot_size'])
    zip_code = request.form['zip_code']

    response = jsonify({
        'estimated_price': util.get_estimated_price(beds, baths, size, lot_size, zip_code)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response 

if __name__ == '__main__':
    print("Server is running for Seattle home price prediction")
    app.run()
