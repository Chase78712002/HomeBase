class Project < ApplicationRecord
  belongs_to :user, :class_name => "user_type", :foreign_key => "builder"
  belongs_to :user, :class_name => "user_type", :foreign_key => "client"
  has_many :document
  has_many :change_order
  has_many :milestone
  has_many :budget_category
end
