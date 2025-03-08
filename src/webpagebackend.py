import csv
import hashlib
import os

USER_FILE = "users.csv"

# ---------------------- Registration Functions ----------------------
def register_user(role):
    email = input("Enter your email: ").strip()
    password = input("Enter a password: ").strip()
    hashed_pw = hashlib.sha256(password.encode()).hexdigest()
    
    # Get additional details
    if role == "Model":
        portfolio = input("Upload portfolio/headshots (file path or URL): ").strip()
        height = input("Enter your height (e.g., 5'9 or 175 cm): ").strip()
        measurements = input("Enter your measurements (Bust-Waist-Hips or Chest-Waist): ").strip()
        tags = input("Enter your tags/interests (comma-separated, e.g., fashion, runway, AI): ").strip()
    elif role == "Designer":
        brand_name = input("Enter your brand name: ").strip()
        brand_photos = input("Upload brand photos/clothing images (file paths or URLs): ").strip()
        tags = input("Enter your brand hashtags (comma-separated, e.g., luxury, eco-friendly): ").strip()

    # Check if the file exists, write headers if not
    file_exists = os.path.exists(USER_FILE)
    
    with open(USER_FILE, "a", newline="") as f:
        writer = csv.writer(f)
        if not file_exists:
            writer.writerow(["email", "password", "role", "tags"])  # Header row
        writer.writerow([email, hashed_pw, role, tags])
    
    print(f"{role} registration successful!\n")

def register_model():
    register_user("Model")

def register_designer():
    register_user("Designer")

# ---------------------- Login & Matching Functions ----------------------
def login():
    email = input("Enter your email: ").strip()
    password = input("Enter your password: ").strip()
    hashed_pw = hashlib.sha256(password.encode()).hexdigest()

    try:
        with open(USER_FILE, "r", newline="") as f:
            reader = csv.DictReader(f)
            for row in reader:
                if row["email"] == email and row["password"] == hashed_pw:
                    print(f"\nLogin successful as {row['role']}!")
                    user_tags = row["tags"].split(",") if row["tags"] else []
                    find_matching_users(user_tags, row["role"])
                    return
    except FileNotFoundError:
        print("Error: No users registered yet.\n")
    
    print("Invalid email or password.\n")

def find_matching_users(user_tags, user_role):
    """
    Finds matching users based on the logged-in user's tags.
    - If a Model logs in → Matches with Designers.
    - If a Designer logs in → Matches with Models.
    """
    if not user_tags:
        print("You have no tags saved. Update your profile to improve matches.")
        return

    user_tags = set(tag.strip().lower() for tag in user_tags)
    matching_users = []

    with open(USER_FILE, "r", newline='') as file:
        reader = csv.DictReader(file)
        for row in reader:
            if row["role"] != user_role:  # Match Models with Designers and vice versa
                csv_tags = set(tag.strip().lower() for tag in row["tags"].split(",") if tag.strip())
                if user_tags.intersection(csv_tags):
                    matching_users.append(row)
    
    # Display matching results
    if matching_users:
        print("\nMatching Profiles:")
        for index, match in enumerate(matching_users, start=1):
            print(f"{index}. {match['email']} (Tags: {match['tags']})")
    else:
        print("No matching profiles found.")

# ---------------------- Main Menu ----------------------
def main():
    while True:
        print("\n1. Login")
        print("2. Register as Model")
        print("3. Register as Designer")
        print("4. Exit")
        choice = input("Select an option: ").strip()
        
        if choice == '1':
            login()
        elif choice == '2':
            register_model()
        elif choice == '3':
            register_designer()
        elif choice == '4':
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.\n")

if __name__ == "__main__":
    main()
