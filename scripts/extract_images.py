import re

html = open('/home/z/my-project/scripts/solari_home.html', encoding='utf-8', errors='ignore').read()
pattern = r'https://solari\.themewant\.com/wp-content/uploads/[^"\'\s\)]+?\.(?:jpg|jpeg|png|webp)'
imgs = re.findall(pattern, html)
seen = []
for i in imgs:
    if i not in seen:
        seen.append(i)
print(len(seen), 'unique images')
for i in seen:
    print(i)
