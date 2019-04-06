import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify)

from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# The database URI
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/Volcanos.sqlite.db"

db = SQLAlchemy(app)


# Create our database model
class Volcanos(db.Model):
    __tablename__ = 'Volcano_Erruptions'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    latitude = db.Column(db.Decimal)
    longitude = db.Column(db.Decimal)
    active = db.Column(db.String)
    explosive = db.Column(db.Integer)
    startyear = db.Column(db.Integer)
    startmonth = db.Column(db.Integer)



    def __repr__(self):
        return '<Volcanos %r>' % (self.name)


# Create database tables
@app.before_first_request
def setup():
    # Recreate database each time for demo
    # db.drop_all()
    db.create_all()


@app.route("/")
def home():
    """Render Home Page."""
    return render_template("index.html")



if __name__ == '__main__':
    app.run(debug=True)
