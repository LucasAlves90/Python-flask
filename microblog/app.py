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

@app.route('/promo')
def promo():
  return render_template("promo.html")

@app.route('/Sobre')
def Sobre():
  return render_template("Sobre.html")

@app.route('/soma/<int:n1>/<int:n2>')
def soma(n1, n2):
		resultado = n1 + n2
		return str(resultado)

if __name__ == '__main__':
    app.run()