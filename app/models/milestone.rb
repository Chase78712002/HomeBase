class Milestone < ApplicationRecord
  belongs_to :project

  has_many :transactions
end
