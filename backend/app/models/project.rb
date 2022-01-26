class Project < ApplicationRecord
    has_many :goals, dependent: :destroy
    has_many :tasks, through: :goals
    has_many :logs

end
