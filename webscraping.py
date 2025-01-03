import pandas as pd
import requests
from bs4 import BeautifulSoup

url = "https://fbref.com/en/comps/9/Premier-League-Stats"

response = requests.get(url)

soup = BeautifulSoup(response.content, 'html.parser')

df = pd.read_html(url, attrs={"id": "results2024-202591_overall"})[0]

df = df.dropna(subset=['Rk'])

clubs = soup.find_all('td', {'data-stat': 'team'})
club_images = []

for club in clubs:
    img_tag = club.find('img')
    if img_tag:
        img_url = img_tag.get('src')
        club_images.append("https://fbref.com" + img_url)

if len(club_images) != len(df):
    club_images = club_images[:len(df)]

df['Club Logo'] = club_images

def render_with_logos(row):
    club_logo_html = f'<img src="{row["Club Logo"]}" alt="{row["Squad"]} Logo" style="width: 30px; height: 30px; margin-right: 10px;">'
    return f'{club_logo_html}{row["Squad"]}'

df['Squad'] = df.apply(render_with_logos, axis=1)

html_table = df.drop(columns=['Club Logo']).to_html(index=False, border=0, classes="leaderboard-table")

html_file_path = "index.html"

with open(html_file_path, "r", encoding="utf-8") as file:
    html_content = file.read()

updated_html = html_content.replace(
    '<div id="option2Content" class="content">\n                Premier League Matches\n            </div>',
    f'<div id="option2Content" class="content">{html_table}</div>'
)

with open(html_file_path, "w", encoding="utf-8") as file:
    file.write(updated_html)

print("Data has been successfully inserted into the HTML file!")
