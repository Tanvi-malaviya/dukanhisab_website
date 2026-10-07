import os
from PIL import Image

photos_dir = r"d:\sathwara_infotech\dukanhisab_website\photos"
pub_dir = r"d:\sathwara_infotech\dukanhisab_website\public\images"

def crop_and_save(img_path, box, out_name):
    im = Image.open(img_path)
    cropped = im.crop(box)
    out_path = os.path.join(pub_dir, out_name)
    cropped.save(out_path, quality=95)
    print(f"Saved: {out_name} {cropped.size}")

# Phone from Home hero (Home.png 723x2176)
crop_and_save(os.path.join(photos_dir, "Home.png"), (500, 75, 705, 415), "phone-home-hero.png")

# Phone from Feature hero (Feature.png 1024x1536)
crop_and_save(os.path.join(photos_dir, "Feature.png"), (745, 65, 935, 360), "phone-feature-hero.png")

# Phone New Sale & receipt from Feature.png
crop_and_save(os.path.join(photos_dir, "Feature.png"), (510, 420, 715, 635), "phone-new-sale.png")

# Phone from Billing Software Page.png
crop_and_save(os.path.join(photos_dir, "Billing Software Page.png"), (635, 110, 885, 350), "phone-billing-hero.png")
crop_and_save(os.path.join(photos_dir, "Billing Software Page.png"), (840, 220, 995, 345), "pos-terminal.png")
crop_and_save(os.path.join(photos_dir, "Billing Software Page.png"), (385, 460, 630, 765), "phone-billing-preview.png")

# Phone from Inventory Management Page.png
crop_and_save(os.path.join(photos_dir, "Inventory Management Page.png"), (715, 80, 915, 335), "phone-inventory-hero.png")
crop_and_save(os.path.join(photos_dir, "Inventory Management Page.png"), (135, 445, 340, 665), "phone-product-details.png")
crop_and_save(os.path.join(photos_dir, "Inventory Management Page.png"), (15, 595, 120, 660), "barcode-scanner-gun.png")

# Phone from Khata Accounting page.png
crop_and_save(os.path.join(photos_dir, "Khata Accounting page.png"), (655, 75, 895, 335), "phone-khata-hero.png")
crop_and_save(os.path.join(photos_dir, "Khata Accounting page.png"), (130, 435, 390, 685), "phone-customer-khata.png")
crop_and_save(os.path.join(photos_dir, "Khata Accounting page.png"), (0, 525, 175, 685), "khata-ledger-page.png")

# Phone from Customer Management.png
crop_and_save(os.path.join(photos_dir, "Customer Management.png"), (695, 75, 930, 330), "phone-customer-hero.png")
crop_and_save(os.path.join(photos_dir, "Customer Management.png"), (135, 425, 400, 685), "phone-customer-crm.png")

# Calculator graphic from Tools Detail.png
crop_and_save(os.path.join(photos_dir, "Tools Detail.png"), (810, 465, 965, 540), "gst-calculator-device.png")

# Phone from CTA banner (e.g. from Business Type.png)
crop_and_save(os.path.join(photos_dir, "Business Type.png"), (45, 700, 195, 800), "cta-phone.png")

print("All mockup assets extracted!")
