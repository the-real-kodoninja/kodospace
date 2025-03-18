from flask import Flask, jsonify, request
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient("mongodb://localhost:27017/")
db = client.kodospace

@app.route('/')
def index():
    return "Welcome to the Kodospace Backend Service"

@app.route('/api/data', methods=['GET'])
def get_data():
    data = db.collection_name.find()
    result = [{"key": item["key"], "value": item["value"]} for item in data]
    return jsonify(result)

@app.route('/api/data', methods=['POST'])
def create_data():
    data = request.json
    db.collection_name.insert_one(data)
    return jsonify({"message": "Data created successfully"}), 201

if __name__ == '__main__':
    app.run(port=5000, debug=True)