# first run `source ~/.virtualenvs/pythonenv_new/bin/activate` then run this file(not index.html)
# to run `python form_sub_json/index.py` from root directory
from flask import Flask, render_template, request, jsonify, url_for


app = Flask(__name__)

@app.route('/')
def hello_world():    
    return render_template('form.html')

@app.route('/response', methods=["POST"])
def process(): 
    print(request.form)
    name = request.form.get("name")
    roll = request.form.get("roll")
    faculty = request.form.get("faculty")
    print({
        'name': name,
        'roll': roll,
        'faculty': faculty
    })
    return jsonify({
        'name': name,
        'roll': roll,
        'faculty': faculty
    })   


if __name__ == "__main__":
    from argparse import ArgumentParser

    parser = ArgumentParser()
    parser.add_argument('-p',
                        '--port',
                        default=8007,
                        help = 'port to listen to')
    args = parser.parse_args()
    port = args.port

    #To run flask app
    app.run(host='127.0.0.1', port=port, debug=True)