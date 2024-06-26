import argparse
import os
import requests
from bs4 import BeautifulSoup

def download_image(url, folder='images'):
    if not os.path.exists(folder):
        os.makedirs(folder)
    response = requests.get(url)
    if response.status_code == 200:
        image_name = os.path.join(folder, os.path.basename(url))
        with open(image_name, 'wb') as file:
            file.write(response.content)
        print(f'Downloaded: {image_name}')
    else:
        print(f'Failed to download: {url}')

def download_images_from_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')
        images = soup.find_all('img')
        for img in images:
            src = img.get('src')
            if src:
                download_image(src)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Download images from HTML file.')
    parser.add_argument('--targetfile', type=str, required=True, help='Path
