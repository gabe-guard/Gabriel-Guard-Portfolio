# Architecture

- Experience organization marks are rendered through ExperienceLogo with CDN asset pointers and per-logo luminance masks, preserving the supplied artwork while normalizing its presentation.
- Downloaded media uses committed Lovable asset pointers rather than repository binaries so large CAD models remain deployable.
- Home-only cover artwork lives in a separate slug-keyed map so changing Home thumbnails never changes project galleries or page metadata.