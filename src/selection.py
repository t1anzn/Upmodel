import csv

def find_matching_companies(user_tags, file_path="example.csv"):
    """
    Reads the CSV file and returns a list of companies whose tags overlap
    with the user's provided tags.
    """
    matching_companies = []
    # Normalize user tags to a set of lowercase strings for consistent matching
    user_tags = set(tag.strip().lower() for tag in user_tags)
    
    with open(file_path, "r", newline='') as file:
        reader = csv.DictReader(file)
        for row in reader:
            # Convert the CSV's tags string to a set of lowercase tags
            csv_tags = set(tag.strip().lower() for tag in row["tags"].split(",") if tag.strip())
            # Check if there is any common tag between the user tags and the CSV tags
            if user_tags.intersection(csv_tags):
                matching_companies.append(row)
    return matching_companies

def main():
    # Prompt the user for their list of tags (comma separated)
    tags_input = input("Enter a list of tags (comma separated): ")
    user_tags = [tag.strip() for tag in tags_input.split(",") if tag.strip()]
    
    # Find matching companies based on the tags
    matching_companies = find_matching_companies(user_tags)
    
    # Display the matching companies
    if matching_companies:
        print("\nMatching Companies:")
        for index, company in enumerate(matching_companies, start=1):
            print(f"{index}. {company['company']} (Tags: {company['tags']})")
    else:
        print("No matching companies found.")

if __name__ == "__main__":
    main()