class User < ApplicationRecord
  

  belongs_to :builder, :class_name => 'User', :foreign_key => 'builder_id'
  belongs_to :client, :class_name => 'User', :foreign_key => 'client_id'

  has_many :projects
end
