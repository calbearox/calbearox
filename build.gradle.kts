import requests
import json

# Replace with your actual Etherscan API key
api_key = "d5620c39f96457007085b39999c9164840b43be7936ef7c88a0958014cfcb194"  

address = "0xd19Da91E075774Efde9F0e2CBcc83ae30c1058A2"
api_url = f"https://api.etherscan.io/api?module=account&action=txlist&address={address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey={api_key}"

try:
    response = requests.get(api_url)
    response.raise_for_status()  # Raise an exception for bad status codes (4xx or 5xx)
    data = response.json()

    if data["status"] == "1":  # Check if the API request was successful
        transactions = data["result"]
        if transactions:
            print("Transactions found:")
            for tx in transactions:
                print(json.dumps(tx, indent=4))  # Print each transaction nicely formatted
                # You can access individual elements like this:
                # print(f"Transaction Hash: {tx['hash']}")
                # print(f"From: {tx['from']}")
                # print(f"To: {tx['to']}")
                # print(f"Value: {tx['value']}") # Value is in Wei, not Ether
                # ... other fields
        else:
            print("No transactions found for this address.")
    else:
        print(f"Error: {data['message']}")

except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")
except json.JSONDecodeError as e:
    print(f"Error decoding JSON response: {e}")
