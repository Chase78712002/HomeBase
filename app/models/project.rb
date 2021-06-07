class Project < ApplicationRecord
  has_many :documents, dependent: :destroy
  has_many :budget_categories, dependent: :destroy
  has_many :milestones, dependent: :destroy
  has_many :change_orders, dependent: :destroy

  belongs_to :builder
  belongs_to :client
end
