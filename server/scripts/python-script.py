import json
import sys
import pandas

def extract_data():
    json_obj = open(sys.argv[2])
    data = json.load(json_obj)
    print("JSON data fetched")
    extracted_data = pandas.read_excel(data['file_path'])
    json_object_result = extracted_data.to_json()
    print("JSON data fetched")
    # ABOVE CODE TO BE USED AS extracted_data is of Type DataFrame
    # json_object_result = json.dumps(extracted_data, indent=4)

    print(json_object_result)

    with open(sys.argv[3], "w") as outfile:
        outfile.write(json_object_result)
    print("OK")


if sys.argv[1] == 'extract_data':
    extract_data()

sys.stdout.flush()