from . import options
import json

def pet_info() -> str:
    return json.dumps(options.ANIMAL)