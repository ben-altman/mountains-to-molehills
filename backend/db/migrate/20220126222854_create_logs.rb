class CreateLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :logs do |t|
      t.text :content
      t.references :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
