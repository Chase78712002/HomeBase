class User < ApplicationRecord
  has_many :builders, :class_name => "Project"
  has_many :clients, :class_name => "Project"

  belongs_to :user_type
end
