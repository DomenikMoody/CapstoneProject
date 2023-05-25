from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired



class CommentForm(FlaskForm):
    user_id = IntegerField('User Id', validators=[DataRequired()])
    video_id = IntegerField('Video Id', validators=[DataRequired()])
    comment = StringField("Comment", validators=[DataRequired()])
