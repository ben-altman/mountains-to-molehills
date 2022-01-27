class LogSerializer < ActiveModel::Serializer
  attributes :id, :content, :dateline

  belongs_to :project
end
