import requests
import re
from bs4 import BeautifulSoup

url = "https://shrek.fandom.com/wiki/Shrek_(film)/Transcript"
page = requests.get(url)

soup = BeautifulSoup(page.content, "html.parser")
# check the site, the format they display scripts with changes
script = soup.find_all("p")

def indicator(character):
    return character + ": "
quotes = []

character = input("What character am I reading for? ")

for line in script:
    shrek = indicator(character.upper())
    line = line.get_text()
    if line[0:len(shrek)] == shrek:
        # remove parantheticals
        line = re.sub(r"\([^()]*\)", "", line)
        # only add quotes longer than three words
        if len(line.split()) > 3:
            quotes.append(line[len(shrek):])

print(quotes)
# ./shrekparse.py > ../src/quotes.js
