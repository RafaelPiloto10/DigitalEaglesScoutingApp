import os
import json

team_number = input("Enter a team number: ")
directory = "./../teams/" + team_number + "/"

team_data = []

for filename in os.listdir(directory):
    if filename.endswith(".json"):
        file_directory = os.path.join(directory, filename)
        with open(file_directory, "r") as f:
            json_file = json.loads(f.read())
            team_data.append(json_file)
    else:
        continue

for match in team_data:
    print(match)
