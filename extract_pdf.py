import fitz
import os

pdf_path = r"D:\Portfólio - Kevin Nery.pdf"
output_dir = r"d:\portfolio kevin\public\assets_pdf"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

try:
    doc = fitz.open(pdf_path)
    img_count = 0
    for page_index in range(len(doc)):
        page = doc.load_page(page_index)
        image_list = page.get_images(full=True)
        
        for image_index, img in enumerate(image_list, start=1):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            # Filter out very small images (icons/logos)
            # Assuming we only want actual renders/photos
            # We can skip small images by checking byte length, but let's extract all first
            
            image_name = f"page{page_index+1}_img{image_index}.{image_ext}"
            image_path = os.path.join(output_dir, image_name)
            
            with open(image_path, "wb") as f:
                f.write(image_bytes)
            
            img_count += 1
            
    print(f"Extracted {img_count} images from PDF to {output_dir}")
except Exception as e:
    print(f"Error extracting from PDF: {e}")
