from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return'Olá mundo!'

@app.route('/contato')
def contato():
  return 'fuladetal@gmail.com'


if __name__ == '__main__':
    app.run()