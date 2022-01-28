class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title

  has_many :goals
  has_many :tasks, through: :goals
  has_many :logs

end
