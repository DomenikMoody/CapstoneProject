from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed, FileRequired
from app.api.aws_helpers import ALLOWED_EXTENSIONS, ALLOWED_IMAGES

class VideoForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    artist = StringField('Artist', validators=[DataRequired()])
    aws_url = FileField("Video File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    video_image = FileField("Video Image", validators=[FileRequired(), FileAllowed(list(ALLOWED_IMAGES))])
    uploader_id = IntegerField('Uploader Id', validators=[DataRequired()])
    about_video = StringField("About Video", validators=[DataRequired()])
    genre = StringField("Genre", validators=[DataRequired()])
