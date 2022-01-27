class Log < ApplicationRecord
  belongs_to :project

  def dateline
    dateline = self.created_at.strftime('%B %d, %Y')
  end

end
