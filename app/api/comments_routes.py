from flask import Blueprint, jsonify, redirect, request
from app.models import Comment, db, User, Video
from app.forms import CommentForm, EditCommentForm
from flask_login import login_required

comment_routes = Blueprint("comment", __name__)


@comment_routes.route("/")
def get_all_comments():
    comment = Comment.query.all()
    comment_list = [com.to_dict() for com in comment]
    return jsonify(comment_list)

@comment_routes.route('/new', methods=['POST'])
@login_required
def create_comment():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_comment = Comment(
            user_id = form.data['user_id'],
            video_id = form.data['video_id'],
            comment =form.data['comment']
        )
        db.session.add(new_comment)
        db.session.commit()
        redirect('/')
    else:
        return jsonify({"message": "Bad Data"})

@comment_routes.route('/<int:id>', methods=['PUT'])
def edit_comment_by_id(id):
    comment = Comment.query.get(id)
    form = EditCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment.comment = form.data['comment']
        db.session.commit()
        return comment.to_dict()
    else:
        return "BAD DATA IN EDIT PLAYLIST ROUTE"
@comment_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment_by_id(id):

    comment = Comment.query.get(id)

    db.session.delete(comment)
    db.session.commit()


    return jsonify({
        'message': 'Playlist successfully deleted'
    })
