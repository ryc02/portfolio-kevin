from PIL import Image

image_path = r"d:\portfolio kevin\public\assets\image48.png"
try:
    with Image.open(image_path) as img:
        width, height = img.size
        print(f"Size: {width}x{height}")
        print(f"Ratio: {width/height:.2f}")
except Exception as e:
    print(f"Error: {e}")
