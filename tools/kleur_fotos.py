"""Geeft een foto dezelfde look als de rest van de site: iets warmer, iets minder verzadigd,
zachte zwarten en lichte korrel. Zo passen stock en AI-beeld bij elkaar.

    python tools/kleur_fotos.py bron.png img/groep/zorg.jpg
"""
import os, sys
import numpy as np
from PIL import Image, ImageEnhance


def look(im):
    im = ImageEnhance.Color(im.convert("RGB")).enhance(0.86)
    a = np.asarray(im).astype(np.float32) / 255
    a = a * 0.94 + 0.035                      # zachte zwarten, geen hard wit
    a[..., 0] *= 1.025                        # warmer
    a[..., 2] *= 0.965
    rng = np.random.default_rng(7)
    a += rng.normal(0, 0.012, a.shape[:2])[..., None]  # lichte korrel
    return Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8))


def bewaar(bron, doel, breed=1400):
    im = Image.open(bron)
    if im.width > breed:
        im = im.resize((breed, round(im.height * breed / im.width)), Image.LANCZOS)
    im = look(im)
    im.save(doel, quality=78, optimize=True, progressive=True)
    klein = os.path.join(os.path.dirname(doel), "klein", os.path.basename(doel))
    if os.path.isdir(os.path.dirname(klein)):
        im.resize((640, round(im.height * 640 / im.width)), Image.LANCZOS).save(klein, quality=76, optimize=True, progressive=True)


if __name__ == "__main__":
    bewaar(sys.argv[1], sys.argv[2])
