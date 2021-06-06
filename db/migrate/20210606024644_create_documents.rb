class CreateDocuments < ActiveRecord::Migration[6.0]
  def change
    create_table :documents do |t|
      t.string :title
      t.string :category_type
      t.string :path

      t.timestamps
    end
  end
end
