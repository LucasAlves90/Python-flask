from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")
    

@app.route('/contatos')
def contato():
  return render_template("contatos.html", tel="(87)94002-8922")

@app.route('/cadastro')
def cadastro():
  return render_template("cadastro.html")

@app.route('/inicio')
def inicio():
  return render_template("inicio.html")

if __name__ == '__main__':
    app.run()