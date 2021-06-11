class Document < ApplicationRecord
  belongs_to :document_category
  belongs_to :project
end
