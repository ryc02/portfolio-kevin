import os
import glob
import re

def replace_extensions():
    files = glob.glob('d:/portfolio kevin/src/**/*.jsx', recursive=True)
    
    for file in files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Replace .png, .jpg, .jpeg with .webp
        new_content = re.sub(r'\.(png|jpg|jpeg)([\'"])', r'.webp\2', content, flags=re.IGNORECASE)
        
        if content != new_content:
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated extensions in {file}")

if __name__ == '__main__':
    replace_extensions()
