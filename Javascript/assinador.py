from flask import Flask, jsonify
from flask_cors import CORS
import your_device_library  # Importe sua biblioteca para comunicação com o dispositivo

app = Flask(__name__)
CORS(app)  # Permite CORS em todas as rotas

@app.route('/get_signature')
def get_signature():
    try:
        signature = your_device_library.read_signature()
        return jsonify({'signature': signature})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='localhost', port=2406)
