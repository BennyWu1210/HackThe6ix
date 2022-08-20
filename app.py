import os
from flask import Flask, render_template, send_from_directory
import pet_finder

app = Flask(__name__, static_url_path="",static_folder="website/build", template_folder="website/build")

@app.route("/")
def index() -> str:
    return render_template('index.html')

@app.route("/size")
def sizes() -> str:
    return f"{pet_finder.options.SIZE}"

@app.route('/<path:path>')
def static_file(path):
    return app.send_static_file(path)