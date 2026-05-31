import fitz
import os

pdf_path = r"D:\Portfólio - Kevin Nery.pdf"
try:
    doc = fitz.open(pdf_path)
    print(f"--- ANALYZING PDF: {doc.page_count} PAGES ---")
    
    for i in range(doc.page_count):
        page = doc.load_page(i)
        text = page.get_text("text").strip()
        images = page.get_images(full=True)
        print(f"\n--- PAGE {i+1} ---")
        if text:
            # Print first 100 chars of text to identify page
            print(f"TEXT: {text[:100]}...")
        print(f"IMAGES: {len(images)} found.")
        
except Exception as e:
    print(f"Error: {e}")
