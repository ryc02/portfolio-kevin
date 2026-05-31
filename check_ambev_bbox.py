from PIL import Image
import os

images = [
    r"d:\portfolio kevin\public\assets\image57.png",
    r"d:\portfolio kevin\public\assets\image58.png",
    r"d:\portfolio kevin\public\assets\image59.png"
]

for img_path in images:
    try:
        with Image.open(img_path) as img:
            bbox = img.getbbox()
            print(f"{os.path.basename(img_path)} bounding box of non-zero pixels: {bbox}")
    except Exception as e:
        print(f"Error: {e}")
