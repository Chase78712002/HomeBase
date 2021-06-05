class User < ApplicationRecord
  has_many :project

  belongs_to :user_type
end
