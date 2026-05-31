import zipfile
import os
import shutil

docx_path = r"D:\Portfólio - Kevin Nery.docx"
output_dir = r"d:\portfolio kevin\public\assets"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

try:
    with zipfile.ZipFile(docx_path, 'r') as docx_zip:
        media_files = [f for f in docx_zip.namelist() if f.startswith('word/media/')]
        extracted_count = 0
        for item in media_files:
            filename = os.path.basename(item)
            if filename:
                source = docx_zip.open(item)
                target_path = os.path.join(output_dir, filename)
                with open(target_path, "wb") as target:
                    shutil.copyfileobj(source, target)
                extracted_count += 1
        print(f"Extracted {extracted_count} images to {output_dir}.")
except Exception as e:
    print(f"Error: {e}")
