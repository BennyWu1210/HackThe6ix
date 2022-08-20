from . import options
import json

def pet_info() -> str:
    return json.dumps(options.ANIMAL)

def get_sizes() -> list:
    sizes = []
    for size in options.SIZE:
        sizes.append(f"{size}.jpg")
    return str(sizes)