import mysql.connector

# Connect to MySQL using your settings
db = mysql.connector.connect(
    host="127.0.0.1",
    port=3306,
    user="root",
    password="Suyash@06",          # if you set a password in Workbench, put it here
    database="managementsystem"
)

cursor = db.cursor()

print("\n---- Enter Customer Details ----")
customer_id = int(input("Customer ID: "))
name = input("Customer Name: ")
contact_no = input("Contact Number: ")
email = input("Email: ")
membership_detail = input("Membership Detail: ")

# Insert customer
cursor.execute("""
    INSERT INTO customer (customer_id, name, contact_no, email, membership_detail)
    VALUES (%s, %s, %s, %s, %s)
""", (customer_id, name, contact_no, email, membership_detail))
db.commit()
print("\nCustomer added successfully!")

print("\n---- Enter Vehicle Details ----")
year = int(input("Vehicle Year: "))
model = input("Vehicle Model: ")
brand = input("Vehicle Brand: ")
mileage = int(input("Vehicle Mileage: "))

# Insert vehicle
cursor.execute("""
    INSERT INTO vehicle_data (year, model, brand, mileage, customer_id)
    VALUES (%s, %s, %s, %s, %s)
""", (year, model, brand, mileage, customer_id))
db.commit()
print("\nVehicle added successfully!")

# Display all data
cursor.execute("""
SELECT 
    c.customer_id, c.name, c.contact_no, c.email, c.membership_detail,
    v.year, v.model, v.brand, v.mileage
FROM customer c
JOIN vehicle_data v ON c.customer_id = v.customer_id
""")

print("\n---- DATABASE RECORDS ----")
for row in cursor.fetchall():
    print(row)

cursor.close()
db.close()
