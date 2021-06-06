class Project < ApplicationRecord
  # belongs_to :builder, :class_name => "User"
  # belongs_to :client, :class_name => "User"
  
  has_many :documents, dependent: :destroy
  has_many :change_orders, dependent: :destroy
  has_many :milestones, dependent: :destroy
  has_many :budget_categories, dependent: :destroy
end
