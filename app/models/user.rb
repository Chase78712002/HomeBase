class User < ApplicationRecord
  belongs_to :user_type

  # has_many :builders, :class_name => 'Project', :foreign_key => 'builder_id'
  # has_many :clients, :class_name => 'Project', :foreign_key => 'client_id'
end
