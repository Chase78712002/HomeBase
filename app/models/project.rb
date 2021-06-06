class Project < ApplicationRecord
  # belongs_to :builder, :class_name => "User"
  # belongs_to :client, :class_name => "User"
  
  has_many :documents, dependent: :destroy
  has_many :change_orders, dependent: :destroy
end
