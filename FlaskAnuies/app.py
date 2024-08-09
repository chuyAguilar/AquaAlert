from flask import Flask
from routes.probabilidades import probabilidades_bp

app = Flask(__name__)
app.secret_key = 'default_secret_key'

# Registrar los blueprints
app.register_blueprint(probabilidades_bp)

@app.route('/')
def home():
    return "Welcome to the home page!"

if __name__ == '__main__':
    app.run(debug=True)
