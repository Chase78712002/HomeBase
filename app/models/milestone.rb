class Milestone < ApplicationRecord
  has_one :transaction
  
  belongs_to :project
end
