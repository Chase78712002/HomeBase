class Document < ApplicationRecord
  belongs_to :document_category
  belongs_to :project

  validates :title, :category_type, :path, presence: true
end
