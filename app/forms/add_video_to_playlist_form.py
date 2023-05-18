from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class AddVideoToPlaylistForm(FlaskForm):
     playlist_ids = StringField("Playlist ids", validators=[DataRequired()])
     video_id = IntegerField("Video Id", validators=[DataRequired()])
