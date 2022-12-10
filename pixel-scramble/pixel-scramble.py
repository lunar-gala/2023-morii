import random
from PIL import Image

BLOCKLEN = 64 # Adjust and be careful here.

def imageScramble(path, mode):
    #loads image 
    img = Image.open(path, "r")
    width, height = img.size

    #splits original image into modules 
    xblock = width // BLOCKLEN
    yblock = height // BLOCKLEN
    blockmap = [(xb*BLOCKLEN, yb*BLOCKLEN, (xb+1)*BLOCKLEN, (yb+1)*BLOCKLEN)
            for xb in range(xblock) for yb in range(yblock)]

    #shuffles order of modules
    shuffle = list(blockmap)
    random.shuffle(shuffle)

    #crops modules from original image to new image result 
    result = Image.new(mode, (width, height))
    for box, sbox in zip(blockmap, shuffle):
        c = img.crop(sbox)
        result.paste(c, box)
    img = result.save('NEW.JPG')

imageScramble("Profile.jpeg", "RGB")