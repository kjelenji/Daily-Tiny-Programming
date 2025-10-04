#Day 9 of Daily Tiny Programming
#Daily Astronomy Picture of the Day (APOD) Viewer
#uses the NASA Open APIs specifically the APOD API

import requests
# Replace 'YOUR_API_KEY' with your actual key or 'DEMO_KEY'
API_KEY = "YOUR_API_KEY"
URL = f"https://api.nasa.gov/planetary/apod?api_key={API_KEY}"

#makes a request to a web page and returns the server's response to the HTTP request (request.get())
#.json() is for storing and exchanging data where it converts python to json data
data = requests.get(URL).json() 

title = data.get("title", "No Title Found")
explanation = data.get("explanation", "No explanation available.")
media_url = data.get("url", "No media URL found.")
media_type = data.get("media_type", "image") # 'image' or 'video'
date = data.get("date", "Unknown Date")

print("--- Astronomy Picture of the Day ---")
print(f"Title: {title}")
print(f"Explanation: {explanation}\n")
print(f"View Media Here: {media_url}")
print(f"View Media Here: {date}")
