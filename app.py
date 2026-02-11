from flask import Flask, render_template, jsonify 
import os 

app = Flask(__name__) 

@app.route("/") 
def home(): 
    return render_template("index.html") 
    
@app.route("/get-user") 
def get_user(): 
    return jsonify({ 
        "name": "Deva", 
        "role": "Python Flask Developer", 
        "message": "Your Flask app is working perfectly 🚀" 
    })

if __name__ == "__main__": 
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 10000)))