import os
import glob

# Search path (using backward slashes for Windows if needed, but python handles forward)
search_path = 'c:/Users/Makkah/Downloads/probox-studio-main/probox-studio-main/src/pages/categories/*.tsx'
files = glob.glob(search_path)

print(f"Found {len(files)} files.")

for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Replace explicitly
        new_content = content.replace('grid grid-cols-2', 'grid grid-cols-1 sm:grid-cols-2')
        
        if content != new_content:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(new_content)
            print(f"Updated {os.path.basename(f)}")
        else:
            # Check if likely already fixed or different pattern
            if 'grid-cols-2' in content and 'grid-cols-1' not in content:
                 print(f"Skipped (no match but has cols-2): {os.path.basename(f)}")

    except Exception as e:
        print(f"Error processing {f}: {e}")
