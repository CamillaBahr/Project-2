import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify,
    request)

from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

# The database URI
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///Volcanos.sqlite.db"

db = SQLAlchemy(app)


# Create our database model
class Volcanos(db.Model):
    __tablename__ = 'Volcano_Erruptions'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    latitude = db.Column(db.Integer)
    longitude = db.Column(db.Integer)
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

@app.route("/volcanos_explosive")
def volcanos_explosive_data():
    """Return volcano explosive rating and volcano name"""

    # Query for the volcano name/explosive data
    results = db.session.query(Volcano_Erruptions.name, Volcano_Erruptions.explosive).\
        order_by(Volcano_Erruptions.explosive.desc())
    df = pd.DataFrame(results, columns=['name', 'explosive'])

    # Format the data for Plotly
    plot_trace = {
        "x": df["name"].values.tolist(),
        "y": df["explosive"].values.tolist(),
        "type": "bar"
    }
    return jsonify(plot_trace)

@app.route("/volcanos_explosive")
def volcanos_explosive_data():
    """Return volcano explosive rating and volcano name"""

    # Query for the volcano name/explosive data
    results = db.session.query(Volcano_Erruptions.name, Volcano_Erruptions.explosive).\
        order_by(Volcano_Erruptions.explosive.desc())
    df = pd.DataFrame(results, columns=['name', 'explosive'])

    # Format the data for Plotly
    plot_trace = {
        "x": df["name"].values.tolist(),
        "y": df["explosive"].values.tolist(),
        "type": "bar"
    }
    return jsonify(plot_trace)

 @app.route('/form')
def form():
  longitude = request.args.get('longitude', type=float)
  latitude = request.args.get('latitude', type=float)

  return render_template("Visualization-AG.html", longitude=longitude, latitude=latitude)   

@app.route("/scatter")
def volcano_scatter_data():
    """Return volcano name and volcano explosive/startyear"""

    # Query for the top 10 emoji data
    results = db.session.query(volcano_scatter_data.name, volcano_scatter_data.explosive, volcano_scatter_data.startyear).\
        order_by(volcano_scatter_data.startyear.desc()).

    # Create lists from the query results
    volcano_names = [result[0] for result in results]
    explosivity = [int(result[1]) for result in results]
    year = [int(result[2]) for result in results]
    # Generate the plot trace
    trace = {
        "x": volcano_names,
        "y": explosivity,
        "type": "scatter"
    }
    return jsonify(trace)





if __name__ == '__main__':
    app.run(debug=True)
