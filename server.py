from flask import Flask, jsonify, request  # Add 'request' to the imports
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Mock Data
metrics = [{"date": "2024-01-02", "bmi": 20}, {"date": "2024-03-02", "bmi": 22}, {"date": "2024-05-02", "bmi": 21},{"date": "2024-08-01", "bmi": 23}, {"date": "2024-11-02", "bmi": 24}]

@app.route('/')
def home():
    return jsonify({"message": "Welcome to the Healthcare Dashboard API"}), 200

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    if data['email'] == "test@example.com" and data['password'] == "password":
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Invalid credentials"}), 401

@app.route('/api/metrics', methods=['GET'])
def get_metrics():
    return jsonify(metrics), 200

@app.route('/api/submit-metrics', methods=['POST'])
def submit_metrics():
    data = request.json  # This line requires 'request' to be imported
    metrics.append(data)
    return jsonify({"message": "Metrics submitted"}), 200

if __name__ == '__main__':
    app.run(debug=True)
