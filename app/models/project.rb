class Project < ApplicationRecord
  has_many :documents, dependent: :destroy
  has_many :budget_categories, dependent: :destroy
  has_many :milestones, dependent: :destroy
  has_many :change_orders, dependent: :destroy

  belongs_to :builder, :class_name => "User", foreign_key => "builder_id"
  belongs_to :client, :class_name => "User", foreign_key => "client_id"
end
