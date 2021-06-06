class AddProjectFkToDocuments < ActiveRecord::Migration[6.0]
  def change
    add_reference :documents, :project, index: true, foreign_key: true
  end
end
