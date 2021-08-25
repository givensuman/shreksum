import requests
from bs4 import BeautifulSoup

url = "https://shrek.fandom.com/wiki/Shrek_(film)/Transcript"
page = requests.get(url)

soup = BeautifulSoup(page.content, "html.parser")
script = soup.find_all("dd")

shrekIndicator = "Shrek: "
shrekQuotes = []

for line in script:
    line = line.get_text()
    if line[0:len(shrekIndicator)] == shrekIndicator:
        shrekQuotes.append(line[len(shrekIndicator):])

print(shrekQuotes)

