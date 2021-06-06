class Project < ApplicationRecord
  belongs_to :builder, :class_name => "User"
  belongs_to :client, :class_name => "User"

  has_many :documents
  has_many :change_orders
  has_many :milestones
  has_many :budget_categories
end
