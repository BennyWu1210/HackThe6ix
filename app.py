from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder="website/build/static", template_folder="website/build")

@app.route("/")
def index() -> str:
    return render_template('index.html')