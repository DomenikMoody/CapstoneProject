from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed
from app.api.aws_helpers import ALLOWED_IMAGES

class EditCommentForm(FlaskForm):
    comment = StringField("comment", validators=[DataRequired()])
