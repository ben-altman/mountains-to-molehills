class Project < ApplicationRecord
    has_many :goals, dependent: :destroy
    has_many :tasks, through: :goals
    has_many :logs

    def dateline
        dateline = self.created_at.strftime('%A, %B %B, %Y')
    end

end
