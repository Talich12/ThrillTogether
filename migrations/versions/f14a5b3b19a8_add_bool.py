"""add_bool

Revision ID: f14a5b3b19a8
Revises: c55436fbdd56
Create Date: 2023-06-08 02:04:37.390246

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f14a5b3b19a8'
down_revision = 'c55436fbdd56'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('post', schema=None) as batch_op:
        batch_op.add_column(sa.Column('has_video', sa.Boolean(), nullable=True))
        batch_op.add_column(sa.Column('has_audio', sa.Boolean(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('post', schema=None) as batch_op:
        batch_op.drop_column('has_audio')
        batch_op.drop_column('has_video')

    # ### end Alembic commands ###
