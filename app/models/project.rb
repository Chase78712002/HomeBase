class Project < ApplicationRecord
  belongs_to :builder
  belongs_to :client

  
  has_many :documents, dependent: :destroy
  has_many :change_orders, dependent: :destroy
  has_many :milestones, dependent: :destroy
  has_many :budget_categories, dependent: :destroy
end
