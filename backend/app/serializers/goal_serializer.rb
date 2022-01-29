class GoalSerializer < ActiveModel::Serializer
  attributes :id, :description

  belongs_to :project
  has_many :tasks

end
