#Day 3 of Daily Tiny Programming
#Daily Astronomy Picture of the Day (APOD) Viewer
#uses the NASA Open APIs specifically the APOD API

import requests
# Replace 'YOUR_API_KEY' with your actual key or 'DEMO_KEY'
API_KEY = "YOUR_API_KEY"
URL = f"https://api.nasa.gov/planetary/apod?api_key={API_KEY}"

response = requests.get(URL)
data = response.json()

title = data.get("title", "No Title Found")
explanation = data.get("explanation", "No explanation available.")
media_url = data.get("url", "No media URL found.")
media_type = data.get("media_type", "image") # 'image' or 'video'

print("--- Astronomy Picture of the Day ---")
print(f"Title: {title}")
print(f"Explanation: {explanation}\n")
print(f"View Media Here: {media_url}")
