class Log < ApplicationRecord
  belongs_to :project

  def dateline
    dateline = self.created_at.strftime('%A, %B %B, %Y')
  end

end
