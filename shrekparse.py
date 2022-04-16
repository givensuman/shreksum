import requests
import re
import sys
import pprint
from bs4 import BeautifulSoup

# shrek script
url = "https://shrek.fandom.com/wiki/Shrek_(film)/Transcript"
page = requests.get(url)

soup = BeautifulSoup(page.content, "html.parser")
# check the site, the format they display scripts with changes
script = soup.find_all("p")

def indicator(character):
    return character + ": "
quotes = []

if len(sys.argv) == 2:
    character = sys.argv[1]
else:
    character = input("What character do you want the lines for? ")

for line in script:
    shrek = indicator(character.upper())
    line = line.get_text()
    if line[0:len(shrek)] == shrek:
        # remove parantheticals
        line = re.sub(r"\([^()]*\)", "", line)
        # only add quotes longer than three words
        if len(line.split()) > 3:
            quotes.append(line[len(shrek):])

pp = pprint.PrettyPrinter(indent=4)
for quote in quotes: 
    print(quote)

# example script:
# python3 shrekparse.py shrek > ./quotes/shrek.txt
