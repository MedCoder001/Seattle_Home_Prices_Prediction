import json
import pickle
import numpy as np

__zip_codes = None
__data_columns = None
__model = None

def get_estimated_price(beds, baths, size, lot_size, zip_code):
    load_saved_artifacts()
    try:
        zip_code_index = __data_columns.index(zip_code)
    except:
        zip_code_index = -1

    x = np.zeros(len(__data_columns))
    x[0] = beds
    x[1] = baths
    x[2] = size
    x[3] = lot_size
    if zip_code_index >= 0:
        x[zip_code_index] = 1

    predicted_price = __model.predict([x])[0]
    rounded_price = predicted_price.round(2)
    return rounded_price

def get_zipcodes():
    return __zip_codes

def load_saved_artifacts():
    print("loading saved artifacts...start")
    global __data_columns
    global __zip_codes

    with open("./artifacts/columns.json", "r") as f:
        __data_columns = json.load(f)['data_columns']
        __zip_codes = __data_columns[4:]

    global __model
    with open("./artifacts/Seattle_Home_Prices_Prediction_Model.pickle", "rb") as f:
        __model = pickle.load(f)
    print("loading saved artifacts...done")

if __name__ == '__main__':
    load_saved_artifacts()
    print(get_zipcodes())
    print(get_estimated_price(3, 2, 2000, 5000, 'zip_code_98126'))
    print(get_estimated_price(2, 2, 4000, 5500, 'zip_code_98126'))
    print(get_estimated_price(3, 4, 6000, 5500, 'zip_code_98178'))