class Milestone < ApplicationRecord
  belongs_to :project

  has_one :transactions
end
