"""add_video_and_audio

Revision ID: c6d2beebd460
Revises: f14a5b3b19a8
Create Date: 2023-06-08 03:36:52.803516

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c6d2beebd460'
down_revision = 'f14a5b3b19a8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('post', schema=None) as batch_op:
        batch_op.add_column(sa.Column('video', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('audio', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('post', schema=None) as batch_op:
        batch_op.drop_column('audio')
        batch_op.drop_column('video')

    # ### end Alembic commands ###