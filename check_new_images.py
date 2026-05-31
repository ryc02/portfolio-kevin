from PIL import Image

images = [
    r"d:\portfolio kevin\public\assets\Imagem3.png",
    r"d:\portfolio kevin\public\assets\Imagem4.png",
    r"d:\portfolio kevin\public\assets\Imagem5.png",
    r"d:\portfolio kevin\public\assets\Imagem6.png",
    r"d:\portfolio kevin\public\assets\Imagem7.png",
    r"d:\portfolio kevin\public\assets\Imagem8.png"
]

for img_path in images:
    try:
        with Image.open(img_path) as img:
            print(f"{img_path.split('\\')[-1]}: {img.size}")
    except Exception as e:
        print(f"Error loading {img_path}: {e}")
