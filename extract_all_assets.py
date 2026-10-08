import os
from PIL import Image

photos_dir = r"/var/www/html/dukanhisab-folder/dukanhisab_website/photos"
pub_dir = r"/var/www/html/dukanhisab-folder/dukanhisab_website/public/images"

def crop_and_save(img_path, box, out_name):
    im = Image.open(img_path)
    cropped = im.crop(box)
    out_path = os.path.join(pub_dir, out_name)
    cropped.save(out_path, quality=95)
    print(f"Saved: {out_name} {cropped.size}")

# 1. QR Code from Home.png (723, 2176)
# Bottom right around x: 590 to 670, y: 1950 to 2035
crop_and_save(
    os.path.join(photos_dir, "Home.png"),
    (595, 1956, 663, 2024),
    "qr-code.png"
)

# 2. Notebook from Pricing.png (1024, 1536)
# "Still using notebooks?" section on the right side
crop_and_save(
    os.path.join(photos_dir, "Pricing.png"),
    (750, 540, 930, 665),
    "notebook-khata.png"
)

# 3. Shopkeeper man (from Feature.png 1024x1536)
# Shopkeeper man stands from x~480 to 820, y~50 to 360
crop_and_save(
    os.path.join(photos_dir, "Feature.png"),
    (465, 55, 785, 360),
    "shopkeeper-man.png"
)

# 4. Shopkeeper woman (from Customer Management.png 1024x1536)
crop_and_save(
    os.path.join(photos_dir, "Customer Management.png"),
    (485, 55, 765, 335),
    "shopkeeper-woman.png"
)

# 5. Shopkeeper woman looking at phone (from Shop Management Software.png 1024x1536)
crop_and_save(
    os.path.join(photos_dir, "Shop Management Software.png"),
    (0, 440, 400, 670),
    "shopkeeper-lady-phone.png"
)

# 6. Patel Hardware Cash Bill / Receipt (from Feature.png)
crop_and_save(
    os.path.join(photos_dir, "Feature.png"),
    (710, 428, 885, 608),
    "receipt-patel.png"
)

# 7. GST Tax Invoice (from Gst Billing page.png)
crop_and_save(
    os.path.join(photos_dir, "Gst Billing page.png"),
    (450, 380, 805, 675),
    "receipt-gst.png"
)

# 8. Business Types photos from Business Type.png (1024, 1536)
# In Business Type.png:
# Row 1 cards: y_top ~ 227, y_bottom ~ 308
# Card 1: Kirana (47, 227, 216, 308)
# Card 2: Mobile (236, 227, 405, 308)
# Card 3: Hardware (425, 227, 594, 308)
# Card 4: Garment (614, 227, 783, 308)
# Card 5: Electrical (803, 227, 972, 308)
# Let's inspect precise row positions:
bt = Image.open(os.path.join(photos_dir, "Business Type.png"))

# Row 1
crop_and_save(os.path.join(photos_dir, "Business Type.png"), (47, 227, 216, 308), "business-types/kirana.png")
crop_and_save(os.path.join(photos_dir, "Business Type.png"), (236, 227, 405, 308), "business-types/mobile.png")
crop_and_save(os.path.join(photos_dir, "Business Type.png"), (425, 227, 594, 308), "business-types/hardware.png")
crop_and_save(os.path.join(photos_dir, "Business Type.png"), (614, 227, 783, 308), "business-types/garment.png")
crop_and_save(os.path.join(photos_dir, "Business Type.png"), (803, 227, 972, 308), "business-types/electrical.png")

# Row 2
crop_and_save(os.path.join(photos_dir, "Business Type.png"), (47, 327, 216, 408), "business-types/medical.png")
crop_and_save(os.path.join(photos_dir, "Business Type.png"), (236, 327, 405, 408), "business-types/computer.png")
crop_and_save(os.path.join(photos_dir, "Business Type.png"), (425, 327, 594, 408), "business-types/electronics.png")
crop_and_save(os.path.join(photos_dir, "Business Type.png"), (614, 327, 783, 408), "business-types/furniture.png")
crop_and_save(os.path.join(photos_dir, "Business Type.png"), (803, 327, 972, 408), "business-types/marble.png")

# Row 3
crop_and_save(os.path.join(photos_dir, "Business Type.png"), (47, 427, 216, 508), "business-types/automobile.png")
crop_and_save(os.path.join(photos_dir, "Business Type.png"), (236, 427, 405, 508), "business-types/wholesale.png")
crop_and_save(os.path.join(photos_dir, "Business Type.png"), (425, 427, 594, 508), "business-types/trading.png")
crop_and_save(os.path.join(photos_dir, "Business Type.png"), (614, 427, 783, 508), "business-types/packaging.png")

# 9. Shopkeepers Collage from Business Type.png
crop_and_save(
    os.path.join(photos_dir, "Business Type.png"),
    (430, 545, 980, 680),
    "shopkeepers-collage.png"
)

# 10. Blog posts from Resources.png (1024, 1536)
# Blog cards around y: 350 to 445
crop_and_save(os.path.join(photos_dir, "Resources.png"), (45, 360, 260, 430), "blog/blog-finance.png")
crop_and_save(os.path.join(photos_dir, "Resources.png"), (280, 360, 495, 430), "blog/blog-gst.png")
crop_and_save(os.path.join(photos_dir, "Resources.png"), (515, 360, 730, 430), "blog/blog-inventory.png")
crop_and_save(os.path.join(photos_dir, "Resources.png"), (750, 360, 965, 430), "blog/blog-app.png")

# 11. Testimonials from Home.png (723, 2176)
crop_and_save(os.path.join(photos_dir, "Home.png"), (35, 1530, 80, 1575), "testimonials/ramesh.png")
crop_and_save(os.path.join(photos_dir, "Home.png"), (270, 1530, 315, 1575), "testimonials/pooja.png")
crop_and_save(os.path.join(photos_dir, "Home.png"), (505, 1530, 550, 1575), "testimonials/imran.png")

print("All key assets successfully extracted!")
