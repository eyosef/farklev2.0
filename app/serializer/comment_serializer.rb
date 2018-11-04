class CommentSerializer < ActiveModel::Serializer
    attributes :username, :email, :comment, :likes
end