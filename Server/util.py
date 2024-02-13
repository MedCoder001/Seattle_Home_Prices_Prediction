import json
import pickle

__zip_code = None
__data_columns = None
__model = None


def get_zipcodes():
    return __zip_code

def load_saved_artifacts():
    print("loading saved artifacts...start")
    global __data_columns
    global __zip_code

    with open("./Server/artifacts/columns.json", "r") as f:
        __data_columns = json.load(f)['data_columns']
        __zip_code = __data_columns[4:]

    with open("./Server/artifacts/Seattle_Home_Prices_Prediction_Model.pickle", "rb") as f:
        __model = pickle.load(f)
    print("loading saved artifacts...done")

if __name__ == '__main__':
    load_saved_artifacts()
    print(get_zipcodes())
