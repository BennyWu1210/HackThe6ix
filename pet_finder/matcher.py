import json

missing_pets = []

COLOUR_TOLERANCE = 50

class Pet:
    def __init__(self, size, colour, animal, image, contact):
        self.size = size
        self.colour = colour
        self.animal = animal
        self.image = image
        self.contact = contact

def add_missing_pet(pet: str):
    pet_parsed = json.loads(pet)
    if (("size" in pet_parsed.keys()) and ("colour" in pet_parsed.keys()) and ("animal" in pet_parsed.keys()) and ("image" in pet_parsed.keys()) and ("contact" in pet_parsed.keys())):
        missing_pets.append(Pet(pet_parsed["size"], pet_parsed["colour"], pet_parsed["animal"], pet_parsed["image"], pet_parsed["contact"]))
        print(missing_pets)

def return_matches(pet_des: str) -> list:
    possible_pets = []
    pet_parsed = json.loads(pet_des)
    if (("size" in pet_parsed.keys()) and ("colour" in pet_parsed.keys()) and ("animal" in pet_parsed.keys())):
        for pet in missing_pets:
            print(pet_parsed["colour"].split(" ")[0], pet.colour.split(" ")[0])
            if (pet_parsed["size"] == pet.size) and ( \
            abs(int(pet_parsed["colour"].split(" ")[0]) - int(pet.colour.split(" ")[0])) < 50 \
            and abs(int(pet_parsed["colour"].split(" ")[1]) - int(pet.colour.split(" ")[1])) < 50 \
            and abs(int(pet_parsed["colour"].split(" ")[2]) - int(pet.colour.split(" ")[2])) < 50 \
            ) \
            and (pet_parsed["animal"] == pet.animal):
                possible_pets.append(pet)
    return possible_pets # returns the class of pets

def get_pet_imgs(pet_des: str) -> list:
    pets = return_matches(pet_des)
    pet_imgs = []
    print(pets)
    for pet in pets:
        pet_imgs.append(pet.image)
    return pet_imgs

def get_contact(img: str) -> str:
    for pet in missing_pets:
        if pet.image == img:
            return pet.contact