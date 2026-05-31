import os
from PIL import Image

image_path = r"d:\portfolio kevin\public\assets\image35.png"

if os.path.exists(image_path):
    with Image.open(image_path) as img:
        print(f"Format: {img.format}")
        print(f"Mode: {img.mode}")
        if 'A' in img.mode:
            # Check if any pixel has transparency
            alpha = img.getchannel('A')
            extrema = alpha.getextrema()
            print(f"Alpha extrema: {extrema}")
            if extrema[0] < 255:
                print("Image HAS transparency.")
            else:
                print("Image has alpha channel but NO transparent pixels.")
        else:
            print("Image does NOT have an alpha channel (no transparency).")
        
        # Get background color sample (top left pixel)
        pixels = img.load()
        print(f"Top-left pixel color: {pixels[0,0]}")
else:
    print("File not found.")
