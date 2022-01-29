class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :goals, :logs

  has_many :goals
  # has_many :tasks, through: :goals
  has_many :logs

  # def goals
  #   object.goals.collect do |goal|
  #     { :task => goal.task }
  #   end
  # end
end
