# Android Image Resizer

Local tool to choose one or more images, convert them to WebP, and resize them into Android drawable outputs:

- `drawable/name.webp`
- `drawable-mdpi/name.webp`
- `drawable-hdpi/name.webp`
- `drawable-xhdpi/name.webp`
- `drawable-xxhdpi/name.webp`
- `drawable-xxxhdpi/name.webp`

## Usage

Open `index.html` in a browser, drop images, adjust each resource name and `WebP quality`, then press `Download ZIP`.

To write files directly into an Android project, run the tool from localhost in Chrome, Edge, or Brave:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`, press `Choose Android project/res`, and select one of these folders:

- Android project root, when it contains `app/src/main/res`
- Android module root, when it contains `src/main/res`
- `src/main`, when it contains `res`
- The `res` folder directly

After choosing images, press `Save to Android res`. The tool creates or overwrites files under `drawable/`, `drawable-mdpi/`, `drawable-hdpi/`, `drawable-xhdpi/`, `drawable-xxhdpi/`, and `drawable-xxxhdpi/`.

Each original image is treated as the `xxxhdpi` size. The default `drawable/` output uses the generated `mdpi` size.
Use the `Preview image` selector, or click a file in the left list, to switch the preview and density table.
Name inputs allow any text while editing. Exported drawable file names are still normalized to Android-safe resource names.

## Figma links

Run the tool from localhost in Chrome or Edge when you want downloaded Figma PNG files to be written into a real `image_temp` folder. Press `Choose temp root` and select the project root; the tool creates `image_temp` inside that folder.

Paste a Figma personal access token and a Figma item link that includes `node-id`, then press `Add Figma link`. Figma items stay blank in preview until you press `Download preview`; export also downloads the PNG 4x automatically if preview was not downloaded first.

After resize/export finishes, Figma temp files are deleted automatically and the preview becomes blank again for those Figma items.

Scale rules:

- `mdpi`: `1x`
- `hdpi`: `1.5x`
- `xhdpi`: `2x`
- `xxhdpi`: `3x`
- `xxxhdpi`: `4x`

For example, a `480x480px` source image creates `120x120`, `180x180`, `240x240`, `360x360`, `480x480`.

## Android Notes

Resource names are normalized to lowercase letters, numbers, and `_`, because Android drawable names cannot use uppercase letters or special characters.
