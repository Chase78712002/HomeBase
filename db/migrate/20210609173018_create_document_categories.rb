class CreateDocumentCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :document_categories do |t|
      t.string :description

      t.timestamps
    end
  end
end
