from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

def get_db():
    return mysql.connector.connect(
        host="127.0.0.1",
        port=3306,
        user="root",
        password="Suyash@06",
        database="managementsystem"
    )

@app.post("/register")
def register():
    data = request.json

    customer = data["customer"]
    vehicle = data["vehicle"]

    db = get_db()
    cursor = db.cursor()

    # Insert customer
    cursor.execute("""
        INSERT INTO customer (customer_id, name, contact_no, email, membership_detail)
        VALUES (%s, %s, %s, %s, %s)
    """, (
        customer["customer_id"],
        customer["name"],
        customer["contact_no"],
        customer["email"],
        customer["membership_detail"]
    ))

    # Insert vehicle
    cursor.execute("""
        INSERT INTO vehicle_data (year, model, brand, mileage, customer_id)
        VALUES (%s, %s, %s, %s, %s)
    """, (
        vehicle["year"],
        vehicle["model"],
        vehicle["brand"],
        vehicle["mileage"],
        customer["customer_id"]
    ))

    db.commit()
    cursor.close()
    db.close()

    return jsonify({"message": "User and vehicle saved successfully"})

@app.get("/customers")
def get_customers():
    db = get_db()
    cursor = db.cursor(dictionary=True)

    cursor.execute("""
        SELECT c.*, v.year, v.model, v.brand, v.mileage
        FROM customer c
        JOIN vehicle_data v ON c.customer_id = v.customer_id
    """)

    data = cursor.fetchall()
    cursor.close()
    db.close()
    return jsonify(data)

if __name__ == "__main__":
    app.run(port=5000, debug=True)

