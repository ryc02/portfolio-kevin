from PIL import Image

images = [
    r"d:\portfolio kevin\public\assets\image57.png",
    r"d:\portfolio kevin\public\assets\image58.png",
    r"d:\portfolio kevin\public\assets\image59.png"
]

for img_path in images:
    try:
        with Image.open(img_path) as img:
            print(f"{img_path}: {img.size}")
    except Exception as e:
        print(f"Error loading {img_path}: {e}")
