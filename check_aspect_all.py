import os
from PIL import Image

image_dir = r"d:\portfolio kevin\public\assets"
projects = {
    "Bahira": ["image36.png", "image37.png", "image38.png", "image39.png", "image40.png"],
    "Ambev": ["image57.png", "image58.png", "image59.png", "image60.png", "image61.png"],
    "Woodora": ["image124.png", "image125.png", "image126.png", "image122.png", "image123.png"],
    "LANS": ["image127.png", "image128.png", "image129.png", "image130.png", "image131.png"]
}

for proj, imgs in projects.items():
    print(f"\n--- {proj} ---")
    for img_name in imgs:
        path = os.path.join(image_dir, img_name)
        if os.path.exists(path):
            with Image.open(path) as img:
                w, h = img.size
                ratio = w / h
                orientation = "Landscape" if ratio > 1 else "Portrait" if ratio < 1 else "Square"
                print(f"{img_name}: {w}x{h} ({ratio:.2f}) - {orientation}")
        else:
            print(f"{img_name}: Not found")
