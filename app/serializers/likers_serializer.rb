class LikersSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :admin
end
