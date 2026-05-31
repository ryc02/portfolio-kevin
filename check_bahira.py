import os
from PIL import Image

image_dir = r"d:\portfolio kevin\public\assets"
images_to_check = [f"image{i}.png" for i in range(34, 57)]

print("Aspect ratios for Bahira candidates:")
for img_name in images_to_check:
    path = os.path.join(image_dir, img_name)
    if os.path.exists(path):
        with Image.open(path) as img:
            w, h = img.size
            ratio = w / h
            orientation = "Landscape" if ratio > 1.2 else "Portrait" if ratio < 0.8 else "Square"
            print(f"{img_name}: {w}x{h} ({ratio:.2f}) - {orientation}")
