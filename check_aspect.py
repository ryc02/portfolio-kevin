import os
from PIL import Image

image_dir = r"d:\portfolio kevin\public\assets"
images_to_check = ["image27.png", "image28.png", "image29.png", "image30.png", "image31.png", "image32.png", "image33.png"]

print("Aspect ratios (Width/Height):")
for img_name in images_to_check:
    path = os.path.join(image_dir, img_name)
    if os.path.exists(path):
        with Image.open(path) as img:
            w, h = img.size
            ratio = w / h
            orientation = "Landscape" if ratio > 1 else "Portrait" if ratio < 1 else "Square"
            print(f"{img_name}: {w}x{h} ({ratio:.2f}) - {orientation}")
    else:
        print(f"{img_name}: Not found")
