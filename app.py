import os
from flask import Flask, render_template, request, send_from_directory
import pet_finder
from misc import conversions
from werkzeug.utils import secure_filename

app = Flask(__name__, static_url_path="",static_folder="website/build", template_folder="website/build")

UPLOAD_FOLDER = "./website/build/static/media"

@app.route("/")
def index() -> str:
    return render_template('index.html')

@app.route("/Profile/lost-pet", methods=["POST"])
def lost_pet() -> str:
    size = request.form["size"]
    colour = conversions.hex_to_rgb(request.form["colour"])
    animal = request.form["species"]
    bruh = f"{{\"size\": \"{size}\", \"colour\": \"{colour}\", \"animal\": \"{animal}\"}}"
    images = pet_finder.matcher.get_pet_imgs(bruh)
    print(request.form)
    return f"{images}" # TODO: deal with this lolololol

@app.route("/Profile/found-pet", methods=["POST"])
def found_pet() -> str:
    file = request.files["image"]
    file.save(os.path.join(UPLOAD_FOLDER, secure_filename(file.filename)))
    size = request.form["size"]
    colour = conversions.hex_to_rgb(request.form["colour"])
    animal = request.form["species"]
    image = secure_filename(file.filename)
    contact = request.form["contact"]
    bruh = f"{{\"size\": \"{size}\", \"colour\": \"{colour}\", \"animal\": \"{animal}\", \"image\": \"{image}\", \"contact\": \"{contact}\"}}"
    print(bruh)
    pet_finder.matcher.add_missing_pet(bruh)
    return f"{bruh} {file}"

@app.route("/test")
def sizes() -> str:
    return f"{pet_finder.parser.get_sizes()}"

@app.route('/<path:path>')
def static_file(path: str) -> str:
    return app.send_static_file(path)