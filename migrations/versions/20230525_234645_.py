"""empty message

Revision ID: 4a8deaec3f96
Revises:
Create Date: 2023-05-25 23:46:45.806759

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4a8deaec3f96'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=50), nullable=True),
    sa.Column('last_name', sa.String(length=50), nullable=True),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('bio', sa.String(length=1500), nullable=True),
    sa.Column('profile_image', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('playlists',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('playlist_image', sa.String(length=255), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('videos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=True),
    sa.Column('artist', sa.String(length=255), nullable=True),
    sa.Column('aws_url', sa.String(length=255), nullable=True),
    sa.Column('uploader_id', sa.Integer(), nullable=True),
    sa.Column('video_image', sa.String(length=255), nullable=False),
    sa.Column('about_video', sa.String(length=255), nullable=False),
    sa.Column('genre', sa.String(length=255), nullable=False),
    sa.ForeignKeyConstraint(['uploader_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('comment', sa.String(length=255), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('video_id', sa.Integer(), nullable=True),
    sa.Column('createdAt', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['video_id'], ['videos.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('likes',
    sa.Column('videos', sa.Integer(), nullable=False),
    sa.Column('users', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['users'], ['users.id'], ),
    sa.ForeignKeyConstraint(['videos'], ['videos.id'], ),
    sa.PrimaryKeyConstraint('videos', 'users')
    )
    op.create_table('playlist_video',
    sa.Column('videos', sa.Integer(), nullable=False),
    sa.Column('playlists', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['playlists'], ['playlists.id'], ),
    sa.ForeignKeyConstraint(['videos'], ['videos.id'], ),
    sa.PrimaryKeyConstraint('videos', 'playlists')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('playlist_video')
    op.drop_table('likes')
    op.drop_table('comments')
    op.drop_table('videos')
    op.drop_table('playlists')
    op.drop_table('users')
    # ### end Alembic commands ###
