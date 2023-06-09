from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class EditVideoForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    artist = StringField('Artist', validators=[DataRequired()])
    aboutVideo = StringField('aboutVideo', validators=[DataRequired()])
    genre = StringField('genre', validators=[DataRequired()])
